# JL Trucking — Hosting, Forms & Security Setup

This guide covers everything for going live: where to host, how form
submissions reach you, spam protection, your domain, and traffic analytics.

---

## The Stack (what to sign up for)

| Service          | What it does                          | Cost                |
|------------------|---------------------------------------|---------------------|
| **Netlify**      | Hosts the website + handles forms     | Free                |
| **Cloudflare**   | Domain registration + spam (Turnstile)| ~$10–12/yr (domain) |
| **Google Analytics** | Traffic & visitor stats           | Free                |

Realistic total cost: about **$10–12 per year** (just the domain).
Everything else runs on free tiers at a small business's traffic level.

---

## 1. Deploy + Forms — Netlify (one account does both)

1. Go to **netlify.com** and sign up (free, no credit card).
2. Drag-and-drop the whole `jl-trucking` folder onto the Netlify dashboard,
   OR connect a GitHub repo for auto-deploys.
3. Your site goes live instantly at something like `jltrucking.netlify.app`.

**Forms are already wired for Netlify.** Each form has:
- `data-netlify="true"` so Netlify detects it
- a hidden `form-name` field
- a `bot-field` honeypot for spam

When someone submits a quote or contact form, it shows up under
**Netlify dashboard → Forms**, and you can set email notifications to
forward each submission to **Lopezjp_123@yahoo.com**.

> Free tier includes **100 form submissions/month** — plenty to start.
> If the site exceeds free limits in a month it pauses until the next
> month; very unlikely at your traffic.

### Notify your email on every submission
Netlify dashboard → Forms → Settings & notifications → add an email
notification pointed at Lopezjp_123@yahoo.com.

---

## 2. Spam Protection (already partly built in)

Three layers, two already in the code:

- **Honeypot field** — built into every form. Bots fill a hidden field and
  get silently rejected. (Done.)
- **Client-side rate limit** — the JS blocks repeat submits within 30
  seconds. (Done.)
- **CAPTCHA (recommended add-on)** — turn on Netlify's built-in reCAPTCHA in
  the form settings, OR use **Cloudflare Turnstile** (free, less annoying).
  This stops the more advanced bots.

For broader protection, putting the site behind **Cloudflare's free CDN**
adds basic DDoS filtering in front of everything.

---

## 3. Domain Name — Cloudflare (or Namecheap)

You do NOT need a domain to be live (Netlify gives you a free address), but
for a real business you want one like **jltruckingca.com**.

1. Register at **cloudflare.com** (sells domains at cost, ~$10/yr) or
   **namecheap.com**.
2. In Netlify → Domain settings → add your custom domain and follow the
   DNS steps. Netlify provides free SSL (the padlock) automatically.

---

## 4. Traffic Analytics — Google Analytics (free)

Seeing visitor numbers is SEPARATE from owning a domain — you get stats even
on the free Netlify address.

1. Sign up at **analytics.google.com**, create a property for the site.
2. It gives you a small snippet of code.
3. Paste that snippet right before the closing `</head>` tag on every page
   (index.html and the 4 files in /pages).

You'll then see visitors, traffic sources, popular pages, and devices.
(Netlify has its own analytics but it costs $9/mo — Google Analytics is free.)

---

## About API Keys (your earlier question)

This site currently has **no secret API key in it**, so there's nothing to
leak. Forms are handled by Netlify; a Google Maps embed (if you add one) uses
a public key you restrict to your domain in the Google Cloud console.

The rule "never put a secret key in front-end code" only matters if you later
build a custom backend. If that day comes:
- keep keys in environment variables (Netlify → Site settings → Environment),
  never hardcoded in files
- add `.env` to `.gitignore` so keys never get pushed to GitHub
- restrict each key to your domain at the provider

---

## Launch Checklist

- [ ] Add truck photo → images/truck-hero.jpg
- [ ] Deploy folder to Netlify
- [ ] Turn on Netlify form email notifications → Lopezjp_123@yahoo.com
- [ ] Enable CAPTCHA (Netlify reCAPTCHA or Cloudflare Turnstile)
- [ ] Register domain (Cloudflare/Namecheap) + connect in Netlify
- [ ] Add Google Analytics snippet to all 5 pages
- [ ] Test a real quote submission after going live
- [ ] Test click-to-call on a phone
