import AuditAreas from "./AuditAreas";

export default function CriticalAreas() {
  return (
    <section
      className="
        relative min-h-screen w-full
        bg-[#f5f9ff]
        bg-dot-grid
        px-6 py-24
        flex justify-center
        overflow-hidden
      "
    >
      {/* smooth fade from previous section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl w-full">

        {/* Header */}
        <div className="relative text-center mb-20">
          <span className="inline-flex items-center justify-center mb-6 rounded-full border border-blue-300 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600">
            What you get
          </span>

          <h2 className="text-center mx-auto text-[55px] font-bold leading-[1.15] tracking-[-0.02em] text-black">
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[6px] after:w-full after:rounded-full after:bg-blue-400/70 after:blur-[1px]">
              #6 Critical Areas
            </span>{" "}
            <span className="font-semibold text-gray-400">We</span>{" "}
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[6px] after:w-full after:rounded-full after:bg-blue-400/70 after:blur-[1px]">
              Examine.
            </span>
          </h2>

          <p className="mt-6 text-base text-slate-700">
            <strong>Every critical part</strong> of your{" "}
            <strong>IT environment reviewed</strong> and{" "}
            <strong>explained clearly.</strong>
          </p>
        </div>

        {/* Cards Grid */}
        <AuditAreas />
      </div>
      {/* fade dots into next section */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#f5f9ff] z-20" />

    </section>
  );
}
