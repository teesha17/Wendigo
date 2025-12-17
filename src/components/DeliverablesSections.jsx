export default function DeliverablesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f9ff]">
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5efff_1px,transparent_1px),linear-gradient(to_bottom,#e5efff_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* pill */}
            <span className="inline-flex mb-6 rounded-full border border-blue-400 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
              Your deliverables
            </span>

            {/* heading */}
            <h1 className="max-w-xl text-[56px] font-bold leading-[1.1] tracking-tight">
              <span className="text-gray-400">Clear</span>{" "}
              
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
                Documentation
                
              </span>{" "}
              <span className="text-gray-400">You</span>{" "}
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
                Can Act On.
              </span>
            </h1>

            {/* subtitle */}
            <p className="mt-6 text-lg text-gray-600">
              Fast, <span className="font-semibold text-black">structured</span>, and{" "}
              <span className="font-semibold text-black">low-friction.</span>
            </p>

            {/* CTA */}
            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-white shadow-lg hover:bg-blue-700 transition">
  Book an Assessment
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 shadow-md">
    →
  </span>
</button>

          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[22px] top-0 h-full w-px bg-blue-300" />

            <TimelineItem
              title="Executive Summary"
              desc="Top risks, priorities, recommendations."
            />
            <TimelineItem
              title="Scorecard"
              desc="Security, compliance, infrastructure, operations."
            />
            <TimelineItem
              title="Full Findings Report"
              desc="Detailed analysis and evidence."
            />
            <TimelineItem
              title="90-Day Roadmap"
              desc="Milestones, KPIs, responsibilities."
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, desc }) {
  return (
    <div className="relative mb-10 flex items-start gap-8">
      {/* check icon */}
     <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-100/60">
  <div className="flex aspect-square h-11 items-center justify-center rounded-full border-2 border-blue-400 bg-white text-lg leading-none">
    ✓
  </div>
</div>



      {/* card */}
      <div className="w-full rounded-3xl border-2 border-blue-400 bg-white p-6 shadow-md">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
