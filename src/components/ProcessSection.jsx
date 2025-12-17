export default function ProcessSection() {
  return (
    <section className="relative min-h-screen bg-[#f5f9ff] overflow-hidden">
      {/* grid background */}
      {/* smooth fade-in for grid */}
<div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f5f9ff] to-transparent z-10" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5efff_1px,transparent_1px),linear-gradient(to_bottom,#e5efff_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">

        {/* pill */}
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full border border-blue-300 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
            How it works?
          </span>
        </div>

        {/* heading */}
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-black">
          <span className="text-gray-400">A</span>{" "}
          <span
            className="
      relative inline-block
      after:content-['']
      after:absolute after:left-0 after:bottom-[-6px]
      after:h-[6px] after:w-full
      after:rounded-full
      after:bg-blue-400/70
      after:blur-[1px]
    "
          >Simple</span>

          ,{" "}
          <span
            className="
      relative inline-block
      after:content-['']
      after:absolute after:left-0 after:bottom-[-6px]
      after:h-[6px] after:w-full
      after:rounded-full
      after:bg-blue-400/70
      after:blur-[1px]
    "
          >
            Non-Disruptive 3-Week

          </span>{" "}
          <span
            className="
      relative inline-block
      after:content-['']
      after:absolute after:left-0 after:bottom-[-6px]
      after:h-[6px] after:w-full
      after:rounded-full
      after:bg-blue-400/70
      after:blur-[1px]
    "
          >
            Process
          </span>
        </h1>

        {/* subtitle */}
        <p className="mt-4 text-base text-gray-600">
          <span className="font-semibold text-black">Fast, structured,</span>and{" "}
          <span className="font-semibold text-black">low-friction.</span>
        </p>

        {/* cards area */}
        <div className="relative mt-24 h-[520px] max-w-[900px] mx-auto">


          {/* dashed lines */}
          <svg className="absolute inset-0 w-full h-full" fill="none">
            <path
              d="M200 110 C 350 160, 450 250, 600 280"
              stroke="#000"
              strokeWidth="1"
              strokeDasharray="6 6"
              opacity="0.5"
            />
            <path
              d="M600 330 C 450 360, 350 420, 200 450"
              stroke="#000"
              strokeWidth="1"
              strokeDasharray="6 6"
              opacity="0.5"
            />
          </svg>

          {/* WEEK 1 */}
          <div className="absolute left-0 top-0 w-[280px] rounded-3xl bg-white p-6 shadow-xl">
            <span className="absolute top-3 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-gray-400" />
            <h3 className="mb-4 text-left font-bold">WEEK 1</h3>
            <div className="rounded-xl border border-blue-400 bg-blue-50 text-left">
              <p className="px-4 pt-4 font-semibold">Discovery</p>
              {/* divider line */}
              <div className="mt-3 border-t border-blue-400/60" />
              <p className="px-4 pb-4 pt-3 text-sm text-gray-600">
                Interviews, document review, initial scans, early insights.
              </p>
            </div>

          </div>

          {/* WEEK 2 */}
          <div className="absolute right-0 top-[160px] w-[280px] rounded-3xl bg-white p-6 shadow-xl">
            <span className="absolute top-3 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-gray-400" />
            <h3 className="mb-4 text-left font-bold">WEEK 2</h3>

            <div className="rounded-xl border border-blue-400 bg-blue-50 text-left">
              <p className="px-4 pt-4 font-semibold">Deep Analysis</p>

              {/* divider */}
              <div className="mt-3 border-t border-blue-400/60" />

              <p className="px-4 pb-4 pt-3 text-sm text-gray-600">
                Security testing, compliance review, infrastructure analysis,
                vendor/cost evaluation.
              </p>
            </div>
          </div>


          {/* WEEK 3 */}
          <div className="absolute left-0 bottom-0 w-[280px] rounded-3xl bg-white p-6 shadow-xl">
            <span className="absolute top-3 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-gray-400" />
            <h3 className="mb-4 text-left font-bold">WEEK 3</h3>

            <div className="rounded-xl border border-blue-400 bg-blue-50 text-left">
              <p className="px-4 pt-4 font-semibold">Reporting</p>

              {/* divider */}
              <div className="mt-3 border-t border-blue-400/60" />

              <p className="px-4 pb-4 pt-3 text-sm text-gray-600">
                Executive summary, full findings, risk matrix, remediation roadmap.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
