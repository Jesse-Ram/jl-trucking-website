# JL Trucking Website

**Owner:** Jorge A. Lopez Perez  
**DBA:** Jorge Lopez Trucking  
**MC#:** 980145 | **DOT#:** 2807485  
**Phone:** 951-833-8122  
**Email:** Lopezjp_123@yahoo.com  
**Address:** 26777 6th Street, Highland, CA

---

## Project Structure

```
jl-trucking/
├── index.html              ← Home page
├── css/
│   └── style.css           ← All styles (one file)
├── js/
│   └── main.js             ← All JavaScript
├── images/
│   └── truck-hero.jpg      ← ⚠️ ADD YOUR TRUCK PHOTO HERE
├── pages/
│   ├── about.html          ← About Us page
│   ├── services.html       ← Services page
│   ├── rates.html          ← Rates & Quote page
│   └── contact.html        ← Contact page
└── components.html         ← Reference: reusable nav/footer snippets
```

---

## 🚀 Getting Started in VS Code

1. Open the `jl-trucking/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. The site will open in your browser with live reload

---

## 📸 Adding the Truck Photo (REQUIRED)

The hero background on the home page is set up to use:

```
images/truck-hero.jpg
```

**Steps:**
1. Add your dad's truck photo to the `images/` folder
2. Name it `truck-hero.jpg` (or update the CSS reference)
3. The CSS already applies a dark navy overlay for text readability

In `css/style.css`, find this line:
```css
.hero {
  background:
    linear-gradient(to right, rgba(10,30,61,0.88) 55%, rgba(10,30,61,0.45)),
    url('../images/truck-hero.jpg') center/cover no-repeat;
```
Change `truck-hero.jpg` to whatever your photo filename is.

**Recommended photo:** Landscape orientation, high resolution (1920×1080 or better), truck facing right or straight ahead.

---

## 🗺️ Adding Google Maps (Contact Page)

In `pages/contact.html`, find this comment:

```html
<!-- Embed Google Maps iframe here -->
```

Replace the placeholder block with a Google Maps embed:
1. Go to [maps.google.com](https://maps.google.com)
2. Search for `26777 6th Street, Highland, CA`
3. Click **Share** → **Embed a map**
4. Copy the iframe code and paste it in place of the placeholder div

---

## 📧 Making Forms Actually Send Emails

The forms currently show a toast notification (demo only). To make them send real emails, choose one of:

**Option A — Formspree (Free, easiest):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your form endpoint URL
3. In each `<form>` tag, change to:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `e.preventDefault()` in `main.js` for that form

**Option B — EmailJS (JavaScript, no server needed):**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their setup guide to connect your Yahoo email
3. Use their SDK to send form data via JavaScript

**Option C — Backend server (PHP/Node):**
Create a backend endpoint that receives POST data and sends via SMTP.

---

## 🎨 Design Tokens (CSS Variables)

Located in `css/style.css`:

| Variable         | Value     | Usage                        |
|------------------|-----------|------------------------------|
| `--navy`         | `#0a1e3d` | Headers, navbar, footer      |
| `--blue`         | `#1a4f9c` | Primary blue                 |
| `--blue-light`   | `#3b82f6` | Accents, icons               |
| `--accent`       | `#f59e0b` | Gold/amber CTAs, highlights  |
| `--white`        | `#ffffff` | Backgrounds                  |
| `--gray-light`   | `#f4f6fb` | Section alternates           |
| `--gray-dark`    | `#4a5568` | Body text                    |

---

## 🔤 Fonts Used

- **Headings:** Oswald (Google Fonts) — bold, strong, industrial
- **Body:** Nunito Sans (Google Fonts) — clean, readable

Both are loaded via Google Fonts CDN in each HTML `<head>`.

---

## 🌐 Going Live (Hosting Options)

**Free options:**
- [GitHub Pages](https://pages.github.com) — Free static hosting
- [Netlify](https://netlify.com) — Free, drag-and-drop deploy
- [Vercel](https://vercel.com) — Free, great for static sites

**Paid (for custom domain + email):**
- [GoDaddy](https://godaddy.com)
- [Bluehost](https://bluehost.com)
- [Namecheap](https://namecheap.com) — affordable domains + hosting

**Custom domain suggestion:** `jltruckingca.com` or `jltrucking.com`

---

## ✅ Checklist Before Launch

- [ ] Add truck photo to `images/truck-hero.jpg`
- [ ] Add company photo to About page (replace placeholder)
- [ ] Set up form email delivery (Formspree recommended)
- [ ] Embed Google Maps on Contact page
- [ ] Update business hours if different
- [ ] Add real customer reviews (replace placeholder testimonials)
- [ ] Register a domain name
- [ ] Upload to hosting provider
- [ ] Test on mobile devices
- [ ] Test click-to-call on a phone

---

## 📞 Quick Reference

| Item         | Value                      |
|--------------|----------------------------|
| Phone        | 951-833-8122               |
| Email        | Lopezjp_123@yahoo.com      |
| Address      | 26777 6th Street, Highland, CA |
| MC#          | 980145                     |
| DOT#         | 2807485                    |
