"use client";

import { useActionState } from "react";
import { submitEnquiry, type FormState } from "@/app/actions";

const FIELD =
  "w-full border-b border-black/15 bg-transparent py-3.5 text-[1rem] text-navy placeholder-faint outline-none transition-colors focus:border-navy";

const INITIAL: FormState = null;

export function InquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, INITIAL);

  if (state?.ok) {
    return (
      <div className="border border-black/10 bg-ivory px-8 py-10" role="status">
        <h3 className="text-[1.3rem] leading-tight text-navy">Enquiry received.</h3>
        <p className="mt-3 text-[0.98rem] font-normal leading-relaxed text-muted">
          Thank you for reaching out.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-7">
      <div>
        <label htmlFor="enquiry-name" className="sr-only">
          Full name
        </label>
        <input
          id="enquiry-name"
          type="text"
          name="name"
          placeholder="Full name"
          autoComplete="name"
          maxLength={120}
          required
          className={FIELD}
        />
      </div>

      <div>
        <label htmlFor="enquiry-email" className="sr-only">
          Email address
        </label>
        <input
          id="enquiry-email"
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          maxLength={254}
          required
          className={FIELD}
        />
      </div>

      <div>
        <label htmlFor="enquiry-message" className="sr-only">
          Tell us what you&rsquo;re looking to build
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          placeholder="Tell us what you're looking to build"
          rows={4}
          maxLength={4000}
          required
          className={`${FIELD} resize-none`}
        />
      </div>

      {state && !state.ok && (
        <p role="alert" className="text-[0.95rem] font-normal leading-relaxed text-[#c0392b]">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group mt-2 inline-flex w-fit cursor-pointer items-center gap-3.5 rounded-full bg-navy px-8 py-4 text-sm font-light text-ivory transition-colors duration-500 hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send an enquiry"}
        <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
          &rarr;
        </span>
      </button>
    </form>
  );
}
