"use server";

import { db } from "@/lib/db";
import { ENQUIRY_VERTICAL_VALUES } from "@/data/verticals";

export type FormState = { ok: true } | { ok: false; error: string } | null;

/**
 * Deliberately loose: the goal is to reject obvious typos and junk, not to
 * decide which addresses are deliverable. Anything stricter starts rejecting
 * valid addresses.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Trims, and caps length so a hostile payload can't be used to bloat a row. */
function field(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Contact form in the home page's #contact section. */
export async function submitEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = field(formData.get("name"), 120);
  const email = field(formData.get("email"), 254);
  const message = field(formData.get("message"), 4000);
  const vertical = field(formData.get("vertical"), 60);

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!EMAIL.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (!vertical) return { ok: false, error: "Please choose which vertical this is about." };
  // A <select> is trivially edited in devtools, so only known values are stored.
  if (!ENQUIRY_VERTICAL_VALUES.includes(vertical)) {
    return { ok: false, error: "Please choose a vertical from the list." };
  }
  if (!message) return { ok: false, error: "Please tell us what you're looking to build." };

  try {
    const sql = db();
    await sql`
      insert into enquiries (name, email, message, vertical)
      values (${name}, ${email}, ${message}, ${vertical})
    `;
    return { ok: true };
  } catch (error) {
    // Logged server-side; the visitor gets a fallback route to reach us.
    console.error("submitEnquiry failed:", error);
    return {
      ok: false,
      error: "Something went wrong saving your enquiry. Please try again, or email us directly.",
    };
  }
}

/** Newsletter field in the footer. */
export async function subscribeNewsletter(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = field(formData.get("email"), 254);

  if (!EMAIL.test(email)) return { ok: false, error: "Please enter a valid email address." };

  try {
    const sql = db();
    // Re-subscribing is not an error worth showing anyone.
    await sql`
      insert into newsletter_subscribers (email)
      values (${email})
      on conflict (email) do nothing
    `;
    return { ok: true };
  } catch (error) {
    console.error("subscribeNewsletter failed:", error);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
