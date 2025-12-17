export default function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* CTA GRADIENT SECTION */}
      <div className="relative bg-[linear-gradient(to_bottom,#EEF6FF_0%,#3A78A6_70%)] pt-32 pb-40">
  
  {/* smooth fade into footer */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#020A14]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(90deg,#7DB9F3_0%,#5AA2E8_100%)] px-12 py-20 text-center shadow-2xl">

            {/* dotted overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:18px_18px] opacity-30" />

            {/* content */}
            <div className="relative z-10">
              <span className="mb-6 inline-flex rounded-full border border-white/40 bg-white/20 px-4 py-1 text-sm text-white">
                From a CEO
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-white">
                Ready to bring clarity to your IT?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90">
                Let’s talk about your challenges, identify your risks, and give you
                a clear path forward — no jargon, no pressure.
              </p>

              <button className="mt-10 rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-lg hover:bg-blue-50 transition">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER (SOLID DARK) */}
      <footer className="bg-[#020A14] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl grid grid-cols-5 gap-12 text-sm">

          {/* LOGO / DESCRIPTION */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 font-semibold">
              <span className="text-lg">🦌</span>
              WENDIGO ADVISORS
            </div>
            <p className="mt-4 max-w-sm text-white/70">
              Fractional CIO Services & Strategic IT Advisory for Healthcare Organizations
            </p>

            <div className="mt-6 flex gap-4 text-white/80">
              <span>in</span>
              <span>f</span>
              <span>◎</span>
              <span>🐦</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">SERVICES</h4>
            <ul className="space-y-2 text-white/70">
              <li>Fractional CIO</li>
              <li>CIO360™ Assessment</li>
              <li>IT Health Check</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">RESOURCES</h4>
            <ul className="space-y-2 text-white/70">
              <li>Case Studies</li>
              <li>Blog/Insights</li>
              <li>Healthcare IT Guides</li>
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="mb-4 font-semibold">ABOUT</h4>
              <ul className="space-y-2 text-white/70">
                <li>Our Story</li>
                <li>Team</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">CONTACT</h4>
              <ul className="space-y-2 text-white/70">
                <li>Email</li>
                <li>Phone</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center text-xs text-white/40">
          © Copyright 2025, All Rights Reserved by Wendigo Advisors.
        </div>
      </footer>
    </section>
  );
}
