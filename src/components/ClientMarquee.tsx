import Image from "next/image";
import { CLIENTS } from "@/data/clients";

/**
 * The logos arrive at wildly different aspect ratios — from 2048x396 to
 * 108x120 — so each one sits in an identical fixed box and is scaled to fit
 * with object-contain. That is what makes them read as "the same size"
 * without stretching anything: a wide logo fills the box's width, a square
 * one fills its height.
 */
/**
 * The box is deliberately closer to 2:1 than to a wide letterbox. With
 * object-contain a square logo is limited by the box's height, so a short box
 * left the five 1:1 logos rendering at 64x64 next to wide ones filling 170px
 * — same box, visibly different weight. More height evens them up.
 */
const BOX = "relative h-14 w-[130px] shrink-0 sm:h-16 sm:w-[150px] lg:h-20 lg:w-[172px]";

function Logo({ name, logo, hidden }: { name: string; logo: string; hidden?: boolean }) {
  return (
    <li className={BOX}>
      <Image
        src={logo}
        /* The duplicate track is decorative, so it is not announced twice. */
        alt={hidden ? "" : name}
        fill
        sizes="170px"
        /* Most of the strip sits outside the viewport horizontally, so lazy
           loading would fetch each logo only as it scrolled in — visible as a
           gap that pops. Both copies share the same URLs, so loading eagerly
           costs one small request per logo, not two. */
        loading="eager"
        /* Next's optimiser rejects SVG unless dangerouslyAllowSVG is set.
           Vectors need no resizing anyway, so they are served as-is instead
           of opening that door. */
        unoptimized={logo.endsWith(".svg")}
        className="object-contain"
      />
    </li>
  );
}

export function ClientMarquee() {
  return (
    /* `marquee-wrap` pairs with a rule in globals.css that pauses the scroll
       while the pointer is anywhere over the strip. */
    <div className="marquee-wrap relative overflow-hidden">
      {/* Feathered edges so logos enter and leave rather than being chopped. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24"
      />

      <div className="marquee-track flex w-max">
        <ul className="flex items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-20 lg:pr-20">
          {CLIENTS.map((c) => (
            <Logo key={c.name} {...c} />
          ))}
        </ul>
        {/* Second copy makes the -50% loop seamless. */}
        <ul
          aria-hidden
          className="flex items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-20 lg:pr-20"
        >
          {CLIENTS.map((c) => (
            <Logo key={`${c.name}-dup`} {...c} hidden />
          ))}
        </ul>
      </div>
    </div>
  );
}
