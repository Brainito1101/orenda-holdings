"use client";

import { useState } from "react";

const FIELD =
  "w-full border-b border-black/15 bg-transparent py-3.5 text-[1rem] text-navy placeholder-faint outline-none transition-colors focus:border-navy";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-black/10 bg-ivory px-8 py-10">
        <h3 className="text-[1.3rem] leading-tight text-navy">Enquiry received.</h3>
        <p className="mt-3 text-[0.98rem] font-normal leading-relaxed text-muted">
          Thank you for reaching out. Someone from the Orenda team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input type="text" name="name" placeholder="Full name" required className={FIELD} />
      <input type="email" name="email" placeholder="Email address" required className={FIELD} />
      <textarea
        name="message"
        placeholder="Tell us what you're looking to build"
        rows={4}
        required
        className={`${FIELD} resize-none`}
      />

      <button
        type="submit"
        className="group mt-2 inline-flex w-fit items-center gap-3.5 rounded-full bg-navy px-8 py-4 text-sm font-light text-ivory transition-colors duration-500 hover:bg-navy/90"
      >
        Send an enquiry
        <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
          &rarr;
        </span>
      </button>
    </form>
  );
}
