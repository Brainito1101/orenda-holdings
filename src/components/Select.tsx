"use client";

import { useEffect, useId, useRef, useState } from "react";

export type SelectOption = { value: string; label: string };

/**
 * An accessible listbox, used instead of a native <select>.
 *
 * A native select's popup is drawn by the operating system, so CSS cannot
 * touch its padding, colours or corners — it always looks like a system
 * widget dropped into the page. This renders the list itself so it matches
 * the form, at the cost of having to implement the keyboard behaviour a
 * native select gives for free:
 *
 *   Enter / Space / Arrow  open
 *   Arrow up / down        move the active option
 *   Home / End             jump to first / last
 *   Enter                  choose the active option
 *   Escape / click away    close and return focus to the trigger
 *
 * The chosen value rides to the server in a hidden input, so the surrounding
 * <form action={...}> submits it exactly as a native select would.
 */
export function Select({
  name,
  options,
  placeholder,
  invalid = false,
  className = "",
}: {
  name: string;
  options: SelectOption[];
  placeholder: string;
  invalid?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const baseId = useId();
  const listId = `${baseId}-list`;

  const selected = options.find((o) => o.value === value);

  // Close on outside pointer-down or Escape, and hand focus back to the trigger.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Keep the active option scrolled into view while arrowing through the list.
  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  function openAt(index: number) {
    setActive(index);
    setOpen(true);
  }

  function choose(index: number) {
    const option = options[index];
    if (!option) return;
    setValue(option.value);
    setActive(index);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function onTriggerKeyDown(e: React.KeyboardEvent) {
    const currentIndex = selected ? options.findIndex((o) => o.value === selected.value) : 0;
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openAt(Math.max(0, currentIndex));
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => Math.min(options.length - 1, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        choose(active);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      {/* carries the value into FormData exactly as a native select would */}
      <input type="hidden" name={name} value={value} />

      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? setOpen(false) : openAt(selected ? options.findIndex((o) => o.value === selected.value) : 0))}
        onKeyDown={onTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        className={`flex w-full cursor-pointer items-center justify-between gap-3 border-b bg-transparent py-3.5 text-left text-[1rem] transition-colors ${
          invalid ? "border-[#c0392b]" : open ? "border-navy" : "border-black/15 hover:border-black/30"
        } ${selected ? "text-navy" : "text-faint"}`}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
          className={`shrink-0 text-navy/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-label={placeholder}
          aria-activedescendant={`${baseId}-opt-${active}`}
          tabIndex={-1}
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-72 overflow-y-auto overscroll-contain rounded-lg border border-black/10 bg-white py-2 shadow-[0_18px_40px_-12px_rgba(5,11,91,0.28)]"
        >
          {options.map((option, i) => {
            const isSelected = option.value === value;
            const isActive = i === active;
            return (
              <li
                key={option.value}
                id={`${baseId}-opt-${i}`}
                role="option"
                aria-selected={isSelected}
                data-active={isActive}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center justify-between gap-3 px-5 py-3 text-[0.98rem] leading-snug transition-colors ${
                  isActive ? "bg-black/[0.045] text-navy" : "text-navy/80"
                } ${isSelected ? "font-medium text-navy" : ""}`}
              >
                <span>{option.label}</span>
                {isSelected && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden className="shrink-0 text-gold">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
