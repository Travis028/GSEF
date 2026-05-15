# .windsurfrules — GSEF Digital Platform
# Stack: Next.js 14 App Router · TypeScript strict · Tailwind CSS · shadcn/ui · Supabase · Framer Motion
# One frontend-focused developer. One Vercel deployment. Startup velocity.
# Read this entire file before writing a single line of code.

---

## 1. Project Identity

```
PROJECT:    gsef-platform
CLIENT:     Global Somali Entrepreneurship Forum (gsef.co.ke)
STACK:      Next.js 14 App Router, TypeScript strict, Tailwind CSS v3,
            shadcn/ui, Supabase (DB + Auth + Storage), Framer Motion,
            Resend (email), Stripe + M-Pesa Daraja (payments)
DEPLOYMENT: Vercel (frontend + API routes) + Supabase cloud
DEVELOPER:  Frontend-focused — avoid complex backend abstractions
BRIEF:      A premium-quality annual summit platform for East Africa's
            most prominent Somali entrepreneurship forum. Cabinet secretaries,
            ambassadors, diaspora investors, and corporate sponsors judge it
            on first impression. Design quality is a business requirement.
AUDIENCE:   East Africa (mobile-first, 3G-tolerant) + global Somali diaspora
```

---

## 2. Brand & Design System

### Colors — Use these tokens, never raw hex in components

```typescript
// tailwind.config.ts
colors: {
  green:  { DEFAULT: '#006B3F', light: '#007A47', pale: '#e8f4ee' },
  gold:   { DEFAULT: '#C9A84C', pale: '#fdf6e3', dark: '#8a6c1a' },
  navy:   { DEFAULT: '#1A1A2E', mid: '#252540', light: '#eeeef6' },
  teal:   { DEFAULT: '#17A589' },
  red:    { DEFAULT: '#C0392B' },  // error states ONLY
  offwhite: '#F8F7F4',
}
```

**Color usage rules:**
- `green` → primary CTA buttons, active nav links, key statistics, borders on Regular ticket tier
- `gold` → VIP badge, Premium ticket tier accents, decorative dividers, award labels
- `navy` → hero background, footer, dark sections, section headings
- `teal` → success states, check-in confirmation, valid QR scan result
- `red` → error states, "sold out" badge, payment failure — NEVER for decoration
- Off-white (`#F8F7F4`) → page background (not pure white)
- Light/dark sections must alternate: white → navy → white. Never two dark sections in a row.

### Typography — Plus Jakarta Sans + Outfit + DM Mono

```typescript
// next.config approach — ALWAYS use next/font, NEVER a <link> tag
import { Plus_Jakarta_Sans, Outfit, DM_Mono } from 'next/font/google'

export const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const fontBody = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const fontMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})
```

**Type scale (Tailwind classes):**
```
Display / H1:    text-[72px] font-display font-extrabold leading-[1.05] tracking-[-0.02em]   (hero only)
Section / H2:    text-4xl md:text-5xl font-display font-bold leading-[1.15]
Sub-heading / H3: text-2xl font-display font-semibold leading-[1.25]
Body:            text-[15px] font-body font-normal leading-[1.7] max-w-[65ch]
Eyebrow/Label:   font-mono text-[11px] uppercase tracking-[0.12em]                           (above every heading)
UI / Badge:      text-[13px] font-body font-medium
```

**Typography rules:**
- Every major section heading is preceded by an eyebrow label in DM Mono
- Never use font-size below 12px in any component
- Body text max-width is 65ch — never stretch to full container width
- Display type (H1) only appears once per page — in the hero section
- Never use pure black for text — use `text-navy` or `text-navy/80`

### Spacing System — 8pt grid

```
Section vertical padding: py-[120px] desktop / py-20 mobile
Card internal padding:    p-8 (32px) standard / p-5 (20px) compact (admin)
Grid gaps:                gap-5 (cards) / gap-4 (form fields) / gap-3 (tight)
Max page width:           max-w-[1280px] mx-auto px-6 md:px-10
```

---

## 3. File & Folder Architecture

```
gsef-platform/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── page.tsx              ← Homepage — Server Component + ISR
│   │   │   ├── events/[slug]/page.tsx
│   │   │   ├── speakers/page.tsx
│   │   │   ├── programme/page.tsx
│   │   │   ├── gallery/page.tsx
│   │   │   ├── partners/page.tsx
│   │   │   ├── privacy/page.tsx
│   │   │   ├── terms/page.tsx
│   │   │   └── refund-policy/page.tsx
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── (checkout)/
│   │   │   └── tickets/
│   │   │       ├── [eventId]/page.tsx   ← Tier selection
│   │   │       ├── details/page.tsx     ← Attendee form
│   │   │       ├── payment/page.tsx     ← M-Pesa | Stripe
│   │   │       └── confirm/page.tsx     ← QR + download
│   │   ├── (admin)/
│   │   │   └── admin/
│   │   │       ├── layout.tsx           ← Auth guard — checks Supabase session
│   │   │       ├── page.tsx             ← Dashboard stats
│   │   │       ├── tickets/page.tsx     ← Ticket table + CSV export
│   │   │       ├── scanner/page.tsx     ← QR scanner (camera)
│   │   │       └── events/page.tsx      ← Create / edit events
│   │   ├── api/
│   │   │   ├── tickets/
│   │   │   │   ├── purchase/route.ts    ← POST: reserve slot + trigger payment
│   │   │   │   ├── verify/route.ts      ← POST: HMAC verify + mark used (admin)
│   │   │   │   └── mpesa-callback/route.ts  ← POST: Daraja callback
│   │   │   ├── stripe/
│   │   │   │   ├── create-intent/route.ts
│   │   │   │   └── webhook/route.ts
│   │   │   ├── admin/
│   │   │   │   └── tickets/export/route.ts  ← GET: CSV (admin only)
│   │   │   └── qr/generate/route.ts
│   │   ├── layout.tsx                   ← Fonts + Providers + metadata
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                          ← shadcn/ui primitives + custom atoms
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── ScrollReveal.tsx         ← Framer Motion scroll wrapper
│   │   │   ├── AnimatedCounter.tsx      ← Intersection Observer + countup
│   │   │   ├── SectionHeader.tsx        ← Eyebrow + H2 + optional subtitle
│   │   │   └── CountdownTimer.tsx       ← Client component, real-time
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               ← Transparent → glass on scroll
│   │   │   ├── MobileMenu.tsx           ← Full-screen slide-over
│   │   │   ├── Footer.tsx
│   │   │   └── Providers.tsx            ← QueryClient + Toaster + Lenis
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroBackground.tsx       ← Orb + grain (CSS only)
│   │   │   ├── StatsStrip.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PartnerMarquee.tsx       ← CSS infinite scroll
│   │   │   └── CtaSection.tsx
│   │   ├── events/
│   │   │   ├── TicketTierCard.tsx
│   │   │   ├── TicketTierGrid.tsx
│   │   │   ├── SpeakerCard.tsx          ← Hover reveal
│   │   │   ├── SpeakerGrid.tsx
│   │   │   ├── ProgrammeDay.tsx
│   │   │   └── SessionCard.tsx
│   │   ├── checkout/
│   │   │   ├── CheckoutStepper.tsx
│   │   │   ├── TierSelector.tsx
│   │   │   ├── AttendeeForm.tsx
│   │   │   ├── PaymentMethod.tsx
│   │   │   ├── MpesaForm.tsx
│   │   │   ├── StripeForm.tsx
│   │   │   └── ConfirmationView.tsx
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.tsx
│   │   │   └── GalleryLightbox.tsx
│   │   └── admin/
│   │       ├── TicketTable.tsx
│   │       ├── QRScanner.tsx
│   │       ├── ScanResult.tsx           ← Full-screen green ✓ / red ✗
│   │       ├── StatsCards.tsx
│   │       └── ExportButton.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts                ← Browser Supabase client
│   │   │   ├── server.ts                ← Server Component client (@supabase/ssr)
│   │   │   └── types.ts                 ← Generated DB types (npx supabase gen types)
│   │   ├── animations.ts                ← Shared Framer Motion variants + easing
│   │   ├── qr.ts                        ← HMAC sign + verify (crypto module)
│   │   ├── mpesa.ts                     ← Daraja STK Push wrapper
│   │   ├── mailer.ts                    ← Resend wrapper
│   │   └── utils.ts                     ← cn(), formatKES(), formatDate()
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useReducedMotion.ts
│   │   └── useTicketAvailability.ts     ← TanStack Query polling
│   ├── types/
│   │   └── index.ts                     ← Domain interfaces
│   ├── stores/
│   │   └── checkoutStore.ts             ← Zustand: selected tier + attendee data
│   └── middleware.ts                    ← Supabase auth + admin route guard
├── supabase/
│   ├── schema.sql
│   └── seed.sql
├── emails/                              ← React Email templates
│   ├── TicketEmail.tsx
│   └── FeedbackResponseEmail.tsx
├── .env.example
├── .windsurfrules                       ← this file
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 4. Hard Rules — Never Violate

### Code Quality

- **Never** write inline styles. Tailwind utility classes only. Exception: CSS custom properties updated dynamically by JS (e.g. `style={{ '--mouse-x': x }}`) are acceptable.
- **Never** use `any` in TypeScript. Use `unknown` and narrow. Run `tsc --noEmit` must pass clean.
- **Never** import a library not in `package.json` without stating it in NEXT STEP and asking.
- **Never** duplicate a component that exists in `src/components/ui/` — use and extend the existing one.
- **Always** use `next/font` for all typefaces. Never a `<link>` Google Fonts tag.
- **Always** use Next.js `<Image>` for every `<img>` — with explicit `width`, `height`, and `alt`.
- **Always** use `cn()` (from `src/lib/utils.ts`) for conditional class merging — never string concatenation.

### Server vs Client Component

- Default to **Server Components**. Add `'use client'` only when the component uses:
  - `useState`, `useEffect`, `useRef`, `useCallback`
  - Event handlers (`onClick`, `onChange`, `onSubmit`)
  - Browser APIs (`window`, `navigator`, `document`)
  - Third-party libraries that require a browser context (Framer Motion, Zustand, Stripe Elements)
- **Never** fetch data in a Client Component that could be fetched in a Server Component parent and passed as props.
- **Never** put Supabase calls that use the service role key in a Client Component. Service role key lives only in API routes and Server Components.

### File Operations

- **Never** delete a file without stating the full path and reason in your response.
- **Always** create files in the correct layer (see architecture above).
- **Never** create a file at the root of `src/app/` that should be in a route group (`(public)`, `(admin)`, etc.).

### Supabase Rules

- **Always** use `src/lib/supabase/server.ts` in Server Components and API routes.
- **Always** use `src/lib/supabase/client.ts` in Client Components.
- **Never** expose `SUPABASE_SERVICE_ROLE_KEY` to the browser. It lives only in API routes.
- **Never** skip Row Level Security. Every table that holds user data has RLS enabled.

### Payment Security

- QR payloads must be signed with HMAC-SHA256 before storage and verified with `crypto.timingSafeEqual` before any ticket state change.
- Ticket status updates must use atomic Supabase updates (`UPDATE ... WHERE is_used = false RETURNING *`) to prevent double-scan.
- **Never** trust a payment callback without verifying its signature (Stripe: `stripe-signature` header; M-Pesa: `CheckoutRequestID` match).
- **Never** store raw card numbers. Stripe Elements handles card data — it never touches your server.

### Environment Variables

- **Never** hardcode secrets. Always `process.env.VARIABLE_NAME`.
- Prefix browser-safe vars with `NEXT_PUBLIC_`.
- Every variable used in the codebase must exist in `.env.example` with a description comment.

---

## 5. Environment Variables Reference

```bash
# .env.example — all required variables

# Supabase
NEXT_PUBLIC_SUPABASE_URL=           # Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=      # Public anon key (safe for browser)
SUPABASE_SERVICE_ROLE_KEY=          # NEVER expose to browser — server/API routes only

# QR & Security
QR_SECRET=                          # Min 32 chars, random — used for HMAC-SHA256 signing

# M-Pesa Daraja
MPESA_CONSUMER_KEY=
MPESA_CONSUMER_SECRET=
MPESA_SHORTCODE=
MPESA_PASSKEY=
MPESA_CALLBACK_URL=                 # Must be public HTTPS URL (use ngrok in dev)
MPESA_ENV=sandbox                   # 'sandbox' | 'production'

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Email
RESEND_API_KEY=
RESEND_FROM_EMAIL=tickets@gsef.co.ke

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_EVENT_DATE=2026-07-18   # YYYY-MM-DD — used by countdown timer
SENTRY_DSN=                         # Optional — add before production launch
```

---

## 6. Animation System

### Shared Animation Config

```typescript
// src/lib/animations.ts — import from here, never define inline

export const ease = {
  standard: [0.4, 0.0, 0.2, 1.0],   // most UI transitions
  enter:    [0.0, 0.0, 0.2, 1.0],   // elements entering viewport
  exit:     [0.4, 0.0, 1.0, 1.0],   // elements leaving
  expo:     [0.19, 1, 0.22, 1],     // counter animations
} as const

export const duration = {
  fast:   0.15,  // hover state changes only
  normal: 0.30,  // standard transitions
  slow:   0.50,  // section reveals
  crawl:  0.80,  // parallax / background elements
} as const

export const stagger = {
  children: 0.08,  // stagger between child elements
  cards:    0.06,  // grid card cascade
} as const

// Reusable variants — use with motion.div + variants prop
export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.enter } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.normal } },
}

export const slideLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.slow, ease: ease.enter } },
}

export const slideRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.slow, ease: ease.enter } },
}

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: stagger.children } },
}

export const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.normal, ease: ease.enter } },
}
```

### ScrollReveal Component Pattern

```tsx
// src/components/ui/ScrollReveal.tsx
'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, containerVariants } from '@/lib/animations'

type Props = {
  children: React.ReactNode
  className?: string
  variants?: typeof fadeUp
  delay?: number
}

export function ScrollReveal({ children, className, variants = fadeUp, delay = 0 }: Props) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={shouldReduce ? {} : variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

// Staggered grid wrapper
export function ScrollRevealGrid({ children, className }: { children: React.ReactNode, className?: string }) {
  const shouldReduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={shouldReduce ? {} : containerVariants}
    >
      {children}
    </motion.div>
  )
}
```

### Animation Rules

- **Always** use `viewport={{ once: true }}` on scroll reveals — elements never re-animate on scroll-up.
- **Always** wrap animations in `useReducedMotion()` check — if true, skip all transitions.
- **Never** animate `width`, `height`, or `top/left` — only `transform` and `opacity`. GPU-only properties prevent layout thrash.
- **Never** use `will-change: transform` on more than 3 elements simultaneously — GPU memory cost.
- `AnimatePresence` is required when unmounting animated elements (mobile menu, modal, page transitions).
- Framer Motion's `LazyMotion + domAnimation` feature set should be used to reduce bundle size.

### Hero Load Sequence (milliseconds)

| Element            | Start  | End    | Animation          |
|--------------------|--------|--------|--------------------|
| Background + grain | 0ms    | 300ms  | fade-in            |
| Eyebrow label      | 240ms  | 640ms  | slide-up + fade    |
| H1 headline        | 440ms  | 840ms  | slide-up + fade    |
| Subtitle           | 660ms  | 960ms  | fade-in            |
| CTA buttons        | 840ms  | 1080ms | pop-in (spring)    |
| Social proof strip | 1100ms | 1400ms | fade-in            |
| Countdown timer    | 1280ms | 1600ms | slide-up           |
| Background orb     | 0ms    | ∞      | continuous pulse   |

---

## 7. Section-by-Section Implementation Guide

### Navbar

```
State 1 (top of page):  transparent bg · white text · no border
State 2 (after 60px):   bg-white/80 backdrop-blur-xl · navy text · border-b · shadow-sm
Mobile:                  hamburger → full-screen AnimatePresence slide-over
CTA pill:               bg-green text-white rounded-full px-5 py-2 text-[13px] font-medium
Active link:            text-green · relative underline via pseudo-element
```

### Hero Section

```
Background:   bg-navy with a CSS radial gradient glow (green low-left, gold top-right at 5% opacity)
Grain:        SVG feTurbulence filter or CSS grain at 3% opacity — adds tactility
Orb:          Soft pulsing CSS @keyframes radial glow — 6s ease-in-out infinite alternate
Content:      Centered, max-w-5xl mx-auto, text-center
Eyebrow:      font-mono text-[11px] uppercase tracking-[0.15em] text-gold/80
H1:           font-display text-[72px] font-extrabold text-white leading-[1.0] tracking-[-0.02em]
Subtitle:     text-lg font-body text-white/60 max-w-2xl mx-auto
CTAs:         gap-4 flex justify-center — primary: bg-green, secondary: border border-white/30 text-white
Social proof: mt-12 · "500+ attendees · 40+ speakers · 20+ nations" in font-mono text-[11px] text-white/40
```

### Ticket Tier Cards

```
Layout:           3-column grid — VIP center card is 8px taller (margin-top-[-8px])
Regular tier:     white bg · border-t-4 border-green · standard shadow
VIP tier:         white bg · border-t-4 border-gold · "Most Popular" badge · gold gradient header
Premium VIP tier: bg-navy text-white · border-t-4 border-gold · gold accent typography
Hover state:      translateY(-6px) + shadow-xl — 250ms ease-out — on all three cards
Progress bar:     thin 4px bar below price showing sold/capacity percentage
Sold count:       "147 / 200 tickets sold" in font-mono text-[11px] text-muted
Mobile:           single column — VIP first
```

### Speaker Cards

```
Default:      rounded-2xl overflow-hidden · square aspect ratio · photo fills card
Name:         font-display font-bold text-lg overlay at bottom, white text
Hover:        scale(1.03) + navy overlay 70% opacity + bio text slides up from bottom (translateY)
Grid:         4-column desktop · 2-column mobile · staggered cascade entrance
Mobile:       tap → modal with full bio (no hover state on touch)
```

### Partner Marquee

```tsx
// CSS-only infinite scroll — no JS required
// Two identical sets side by side for seamless loop
// Edge fade via mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent)
// Pause on hover: animation-play-state: paused

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### Admin QR Scanner

```
This page must be extremely simple and reliable.
Full viewport camera feed using browser MediaDevices API.
Overlay: a square scan target with green corner brackets (CSS, no image)
On scan success:   full-screen bg-teal flash + large checkmark + attendee name + tier in white
On scan failure:   full-screen bg-red flash + X icon + reason ('already used' | 'invalid')
Both states auto-dismiss after 3 seconds and return to camera view
No animations on this page — it must work reliably on low-end Android Chrome
```

---

## 8. Data Schema Quick Reference

```sql
-- Key tables — full schema in supabase/schema.sql
profiles        (id, name, role: 'admin'|'attendee')
events          (id, title, slug, date_start, date_end, venue, is_published)
ticket_tiers    (id, event_id, name, price_kes, capacity, sold, is_active)
tickets         (id, event_id, tier_id, user_id, attendee_name, attendee_email,
                 attendee_phone, price_paid, payment_method, payment_ref,
                 status: 'pending'|'paid'|'cancelled'|'expired',
                 qr_payload, qr_signature, is_used, checked_in_at, expires_at)
founders        (id, name, title, bio, image_url, linkedin_url, position, is_active)
partners        (id, name, tier: 'platinum'|'gold'|'silver'|'supporting', logo_url)
gallery_items   (id, event_id, image_url, media_type, year, tags[])
sessions        (id, event_id, title, day, start_time, end_time, is_keynote)
feedback        (id, type, name, email, message, sentiment, is_published)
```

**Price storage:** All prices in KES as integers (pence/lowest denomination). `price_kes: 5000` = KSh 50.00. Never floats.

---

## 9. QR Code Implementation

```typescript
// src/lib/qr.ts — complete implementation
import { createHmac, timingSafeEqual } from 'crypto'

type QRPayload = {
  ticketId: string
  eventId: string
  tier: string
  nonce: string    // crypto.randomUUID()
  iat: number      // Date.now()
}

export function signQRPayload(payload: QRPayload): string {
  const data = JSON.stringify(payload)
  const sig = createHmac('sha256', process.env.QR_SECRET!)
    .update(data)
    .digest('hex')
  return JSON.stringify({ ...payload, sig })
}

export function verifyQRPayload(raw: string): QRPayload | null {
  try {
    const parsed = JSON.parse(raw)
    const { sig, ...payload } = parsed
    const expected = createHmac('sha256', process.env.QR_SECRET!)
      .update(JSON.stringify(payload))
      .digest('hex')
    const valid = timingSafeEqual(
      Buffer.from(sig, 'hex'),
      Buffer.from(expected, 'hex')
    )
    return valid ? payload : null
  } catch {
    return null
  }
}
```

**QR verify API route must:**
1. Parse and verify HMAC signature
2. Look up ticket by `ticketId`
3. Check `status === 'paid'` and `is_used === false`
4. Atomic update: `UPDATE tickets SET is_used = true, checked_in_at = now() WHERE id = $1 AND is_used = false RETURNING *`
5. If 0 rows updated → return `{ valid: false, reason: 'already_used' }`
6. If signature mismatch → return `{ valid: false, reason: 'tampered' }`

---

## 10. M-Pesa Integration Flow

```
1. User submits phone number
2. POST /api/tickets/purchase →
   a. Create ticket row with status='pending', expires_at = now() + 10 minutes
   b. Trigger Daraja STK Push with CheckoutRequestID
   c. Return { ticketId, checkoutRequestId } to frontend
3. Frontend polls GET /api/tickets/[ticketId]/status every 5 seconds
4. Daraja callback hits POST /api/tickets/mpesa-callback →
   a. Verify CheckoutRequestID matches pending ticket
   b. If ResultCode === '0': update status='paid', generate QR, send email
   c. If ResultCode !== '0': update status='cancelled'
5. Frontend polling detects status change → show confirmation or retry prompt

Edge cases to handle:
- User closes tab before callback: cron job or TTL check expires stale 'pending' tickets
- Duplicate callbacks: idempotency check on payment_ref before updating
- STK push timeout (30s): show "didn't receive prompt?" retry button
```

---

## 11. Performance Targets & Rules

```
Lighthouse Mobile:    ≥ 85
LCP (3G mobile):      ≤ 2.5 seconds
CLS:                  < 0.1 (all images have explicit dimensions)
Bundle (initial JS):  < 180kb gzipped
```

**Enforced performance rules:**

1. `next/font` for all typefaces — never a Google Fonts `<link>` tag
2. Every `<img>` → `<Image>` with explicit width + height
3. Framer Motion: use `LazyMotion + domAnimation` feature bundle (saves ~50% bundle)
4. GSAP: dynamic import only in components that use it — `const { gsap } = await import('gsap')`
5. Gallery: load 12 images initially, paginate via "Load more" — no infinite scroll
6. Admin routes: `dynamic(() => import(...), { ssr: false })` — not in initial bundle
7. All animations respect `useReducedMotion()` — if true, duration → 0
8. CSS `will-change: transform` only on actively animating elements — remove after animation
9. Lenis smooth scroll initialized once in `Providers.tsx` — one shared RAF loop
10. Supabase queries in Server Components use `revalidate` for ISR (public pages: 3600s)

---

## 12. Cascade Task Response Format

Every task response must include this structure:

```
TASK:           [descriptive name of what was built]
FILES CHANGED:  [full path list of every created/modified file]
VERIFICATION:   [exact runnable command or URL to confirm success]
NOTES:          [any decisions made, trade-offs, or things to watch]
NEXT STEP:      [specific next component/feature to build]
```

Example:
```
TASK:           Navbar component with scroll-aware glass effect
FILES CHANGED:
  - src/components/layout/Navbar.tsx (created)
  - src/components/layout/MobileMenu.tsx (created)
  - src/app/layout.tsx (modified — added Navbar to root layout)
VERIFICATION:   npm run dev → localhost:3000 → scroll past 60px → navbar
                should transition from transparent to frosted glass
NOTES:          Used useScrollPosition hook rather than IntersectionObserver
                because scroll position gives more precise threshold control.
                MobileMenu uses AnimatePresence for mount/unmount animation.
NEXT STEP:      Build HeroSection.tsx with background orb and staggered
                content entrance (Framer Motion timeline)
```

---

## 13. Prompt Templates (Copy-Paste for Each Feature)

### Standard component prompt:
```
You are building the GSEF platform — Next.js 14 + Supabase + Tailwind + Framer Motion
for the Global Somali Entrepreneurship Forum.

BRAND COLORS: green #006B3F · gold #C9A84C · navy #1A1A2E · teal #17A589
FONTS: Plus Jakarta Sans (display/headings) · Outfit (body) · DM Mono (labels, eyebrows)
RULES: See .windsurfrules — TypeScript strict, no `any`, next/font only, Tailwind classes only,
       always useReducedMotion(), always viewport={{ once: true }} on scroll reveals.

TASK: [describe exactly what to build]

FILES TO CREATE/MODIFY:
- [list specific files]

DO NOT:
- Modify any file not listed above
- Import any library not already in package.json
- Use inline styles (except CSS custom properties)
- Use `any` type

VERIFICATION: [exactly how to confirm it works]
```

---

## 14. MVP Scope — What Ships, What Doesn't

### Ships for Forum Day (MVP)
- [ ] Homepage (hero, stats, about, ticket CTA, partners, footer)
- [ ] Event detail page with ticket tier cards
- [ ] Checkout flow — tier selection → attendee form → M-Pesa + Stripe → confirmation
- [ ] Ticket email with QR code (Resend + React Email + @react-pdf/renderer)
- [ ] Admin login (Supabase Auth)
- [ ] Admin ticket list with check-in status + CSV export
- [ ] QR scanner page (browser camera + HMAC verify)
- [ ] Speakers / Founders page
- [ ] Programme / Agenda page
- [ ] Partners page
- [ ] Gallery page (2024 photos)
- [ ] Privacy policy, Terms, Refund policy (static pages)

### Phase 2 (Post-Forum)
- [ ] Full gallery admin management
- [ ] Reports library (PDF downloads)
- [ ] Analytics dashboard with charts
- [ ] Membership portal (Stripe Billing)
- [ ] Multi-language (Somali i18n)
- [ ] Blog / news CMS

### Phase 3 (Next Edition)
- [ ] NFT ticketing (regulatory clarity needed)
- [ ] NFC wristband integration
- [ ] Speaker abstract submission portal
- [ ] Mobile app

### Explicitly deferred — do not build for MVP
- Hedera blockchain integration
- Redis (use MongoDB TTL or Supabase for token management)
- Offline PWA scanner (Radisson Blu has WiFi)
- Sentiment analysis on feedback (use radio: positive/neutral/negative)
- Drag-and-drop founder reordering (use position number field)
- Stripe Billing / memberships

---

## 15. Week-by-Week Build Targets

```
WEEK 1 — Public site, zero backend
  Goal: Full public website live on staging.gsef.co.ke with mock data
  Target: Homepage, Events, Speakers, Partners, Programme all render on mobile
  End gate: GSEF stakeholder has seen and approved the design

WEEK 2 — Auth + Stripe checkout
  Goal: End-to-end ticket purchase working with Stripe
  Target: Select tier → fill form → pay with Stripe test card → receive email with QR
  End gate: Admin can log in and see ticket in list

WEEK 3 — M-Pesa + Admin + Scanner
  Goal: M-Pesa STK Push integrated; QR scanner operational
  Target: Phone number → STK Push → callback → ticket email → QR scans green ✓
  End gate: Full event day simulation working on mobile

WEEK 4 — Polish + Production
  Goal: M-Pesa production credentials, mobile QA, SEO, real data
  Target: Lighthouse mobile ≥ 85 · Production domain · Load test 100 concurrent
  RULE: No new features in Week 4. Polish only.
```

---

*Document version: 1.0 — May 2026*
*For: SafariStack Solutions × Global Somali Entrepreneurship Forum*
*Complement to: GSEF_Creative_Direction.html*