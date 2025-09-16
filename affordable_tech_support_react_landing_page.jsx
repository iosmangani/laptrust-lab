// Laptrust Lab — Recovery & Final TSX App
// Purpose: replace any corrupted Markdown-in-TSX files, fix the `Unexpected token (1:0)` error,
// and provide a complete, working TypeScript React starter with additional tests.
//
// Files included below (copy each into your project):
// - src/index.tsx
// - src/App.tsx (full Laptrust Lab landing UI, TypeScript-ready)
// - public/index.html
// - tsconfig.json
// - package.json (snippet for Vite)
// - src/App.test.tsx (tests + extra test cases)
// - README notes & run commands

/* =========================================
   src/index.tsx
   ========================================= */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // optional: create an empty src/index.css or style as desired

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found. Make sure public/index.html has <div id=\"root\"></div>");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* =========================================
   src/App.tsx
   Full Laptrust Lab landing UI (TypeScript-ready)
   ========================================= */

import React, { useState } from "react";

type Props = {};

export default function App(_props: Props): JSX.Element {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // In a real app: send to API / create ticket
  }

  // Replace these before publishing
  const PAYPAL_ID = "paypal.me/yourname";
  const SUPPORT_EMAIL = "support@laptrustlab.com";

  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, Roboto, "Helvetica Neue", Arial', color: '#111827' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid #e6e6e6' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 40, height: 40, background: '#4f46e5', color: '#fff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>LL</div>
          <div style={{ fontWeight: 700 }}>Laptrust Lab</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header style={{ padding: 40, display: 'grid', gridTemplateColumns: '1fr', gap: 24, textAlign: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem' }}>Reliable IT Support — <span style={{ color: '#4f46e5' }}>Just $5</span></h1>
          <p style={{ marginTop: 10, color: '#6b7280' }}>Fast, friendly, and affordable remote tech support for Windows & macOS. Software installs, printer setup, virus cleanup, and more — pay only if you're satisfied.</p>
          <div style={{ marginTop: 12, color: '#4f46e5', fontWeight: 700 }}>A House of Trust</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          <a href="#contact" style={{ background: '#4f46e5', color: '#fff', padding: '10px 18px', borderRadius: 8, textDecoration: 'none' }}>Get a $5 Fix</a>
          <a href="#pricing" style={{ border: '1px solid #e6e6e6', padding: '10px 18px', borderRadius: 8, textDecoration: 'none' }}>See Plans</a>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px 60px' }}>
        <section id="services" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          {[
            { title: 'Software install & troubleshooting', desc: 'Apps, updates, and common errors.' },
            { title: 'Windows / macOS setup', desc: 'User accounts, updates, personalization.' },
            { title: 'Printer & peripheral setup', desc: 'Drivers, network printers, scanners.' },
            { title: 'Virus & malware removal', desc: 'Cleanup, quarantine, recovery steps.' },
            { title: 'PC performance optimization', desc: 'Tuneups, startup cleanup, SSD tips.' },
            { title: 'General IT consulting', desc: 'Advice for home/small business setups.' }
          ].map((s) => (
            <article key={s.title} style={{ background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#4f46e5', fontWeight: 700 }}>{s.title}</div>
              <div style={{ marginTop: 8, color: '#6b7280' }}>{s.desc}</div>
            </article>
          ))}
        </section>

        <section id="pricing" style={{ marginTop: 32 }}>
          <h2>Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginTop: 12 }}>
            <div style={{ background: '#fff', padding: 16, borderRadius: 8 }} data-testid="plan-1">
              <div style={{ color: '#6b7280' }}>One-Time Support</div>
              <div style={{ fontSize: 22, fontWeight: 800, marginTop: 8 }}>$5</div>
              <div style={{ marginTop: 8 }}>/ One quick remote fix (up to 30 mins)</div>
            </div>

            <div style={{ background: '#fff', padding: 16, borderRadius: 8 }} data-testid="plan-2">
              <div style={{ color: '#6b7280' }}>Monthly Plan</div>
              <div style={{ fontSize: 22, fontWeight: 800, marginTop: 8 }}>$20<span style={{ fontSize: 14, fontWeight: 600 }}> /mo</span></div>
              <div style={{ marginTop: 8 }}>10 remote fixes per month</div>
            </div>

            <div style={{ background: '#fff', padding: 16, borderRadius: 8 }} data-testid="plan-3">
              <div style={{ color: '#6b7280' }}>Unlimited Plan</div>
              <div style={{ fontSize: 22, fontWeight: 800, marginTop: 8 }}>$100</div>
              <div style={{ marginTop: 8 }}>Unlimited remote fixes</div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
          <div>
            <h3>Get support</h3>
            {submitted ? (
              <div role="status" style={{ padding: 12, background: '#ecfeff', borderRadius: 8, border: '1px solid #c7f9f7' }}>Thanks — we received your request. We'll email you at {SUPPORT_EMAIL}.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', marginTop: 8 }}>Name</label>
                <input name="name" required style={{ width: '100%', padding: 8, marginTop: 6, borderRadius: 6, border: '1px solid #e6e6e6' }} />

                <label style={{ display: 'block', marginTop: 12 }}>Email</label>
                <input type="email" name="email" required style={{ width: '100%', padding: 8, marginTop: 6, borderRadius: 6, border: '1px solid #e6e6e6' }} />

                <label style={{ display: 'block', marginTop: 12 }}>Issue summary</label>
                <textarea name="issue" rows={4} required style={{ width: '100%', padding: 8, marginTop: 6, borderRadius: 6, border: '1px solid #e6e6e6' }} />

                <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                  <button type="submit" style={{ background: '#4f46e5', color: '#fff', padding: '10px 14px', borderRadius: 8, border: 'none' }}>Send Request</button>
                  <a href={`mailto:${SUPPORT_EMAIL}`} style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #e6e6e6', textDecoration: 'none' }}>Or email us</a>
                </div>
              </form>
            )}
          </div>

          <aside style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
            <div style={{ fontWeight: 700 }}>Manual PayPal payments</div>
            <div style={{ marginTop: 8 }}>Send payment to: <div style={{ fontWeight: 700, marginTop: 6 }}>{PAYPAL_ID}</div></div>
            <div style={{ marginTop: 12 }}>After payment, click "I've Paid" inside the payment flow (or email a payment confirmation to {SUPPORT_EMAIL}).</div>
          </aside>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: 24, color: '#6b7280', borderTop: '1px solid #e6e6e6' }}>
        © {new Date().getFullYear()} Laptrust Lab — A House of Trust
      </footer>
    </div>
  );
}

/* =========================================
   public/index.html
   ========================================= */

/*
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Laptrust Lab</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
*/

/* =========================================
   tsconfig.json (project root)
   ========================================= */

/*
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
*/

/* =========================================
   package.json snippet (for Vite projects)
   ========================================= */

/*
{
  "name": "laptrust-lab",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0"
  }
}
*/

/* =========================================
   src/App.test.tsx (tests + extra test cases)
   ========================================= */

/*
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Laptrust Lab title', () => {
  render(<App />);
  expect(screen.getByText(/Laptrust Lab/i)).toBeInTheDocument();
});

test('shows pricing plans', () => {
  render(<App />);
  expect(screen.getByTestId('plan-1')).toHaveTextContent('$5');
  expect(screen.getByTestId('plan-2')).toHaveTextContent('$20');
  expect(screen.getByTestId('plan-3')).toHaveTextContent('$100');
});

test('contact form exists with name,email,issue fields', () => {
  render(<App />);
  const name = screen.getByLabelText(/Name/i);
  const email = screen.getByLabelText(/Email/i);
  const issue = screen.getByLabelText(/Issue summary/i);
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(issue).toBeInTheDocument();
});
*/

/* =========================================
   README notes & quick run commands
   =========================================

1) If you don't already have a Vite + React + TypeScript project, create one:
   npm create vite@latest laptrust-lab -- --template react-ts
   cd laptrust-lab
   npm install

2) Copy the code for src/index.tsx and src/App.tsx into your project.
   Create public/index.html (paste above) and tsconfig.json (paste above) if missing.

3) Optional: create src/index.css (empty or include styles).

4) Run dev server:
   npm run dev

5) Run tests (Vitest):
   npm i -D vitest @testing-library/react @testing-library/jest-dom
   npm run test

Notes on the original error:
- The error "Unexpected token (1:0)" means the parser saw invalid characters at the very start of a TSX file.
- This often happens if you accidentally replace a .tsx file with Markdown or other non-code content.
- Fix: ensure src/index.tsx begins with imports (no leading '#', no BOM characters), and file extension is .tsx.

If you want me to apply the full multi-section landing UI (with Tailwind classes) or tailor the test cases differently, reply with:
- "Full landing with Tailwind" or
- "Keep plain CSS" or
- "Add deploy workflow to Hostinger (GitHub Actions)".

Also: what's the **expected behavior** when you run the app locally? (A) quick preview page with title & pricing; (B) full multi-section landing page with contact + manual payment instructions; (C) custom — describe.)
*/
