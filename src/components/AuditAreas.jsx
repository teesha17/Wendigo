import {
  ShieldCheck,
  ClipboardList,
  Network,
  Coins,
  Settings,
  GitFork,
} from "lucide-react";

const Card = ({
  title,
  desc,
  Icon,
  className,
  iconPosition = "right",
}) => {
  const isRight = iconPosition === "right";
  const isTop = iconPosition === "top";
  const isCenter = iconPosition === "center";
  const isTopRight = iconPosition === "topRight";

  return (
    <div
      className={`
        relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 sm:p-10
        shadow-[0_20px_50px_rgba(59,130,246,0.15)]
        ${className}
      `}
    >
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5efff_1px,transparent_1px),linear-gradient(to_bottom,#e5efff_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

      {/* ICON */}
      <div
        className={`absolute z-10
          ${isRight && "right-6 sm:right-10 top-1/2 -translate-y-1/2"}
          ${isTop && "left-1/2 top-6 -translate-x-1/2"}
          ${isCenter && "left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"}
          ${isTopRight && "right-6 sm:right-10 top-6"}
        `}
      >
        {/* dashed connectors (hide on mobile) */}
        <span className="hidden sm:block absolute left-1/2 -top-8 h-8 border-l border-dashed border-blue-300 -translate-x-1/2" />
        <span className="hidden sm:block absolute left-1/2 -bottom-8 h-8 border-l border-dashed border-blue-300 -translate-x-1/2" />
        <span className="hidden sm:block absolute -left-8 top-1/2 w-8 border-t border-dashed border-blue-300 -translate-y-1/2" />
        <span className="hidden sm:block absolute -right-8 top-1/2 w-8 border-t border-dashed border-blue-300 -translate-y-1/2" />

        <div className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-blue-100 shadow-md">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-700" />
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative z-10
          ${isRight && "pr-0 sm:pr-24"}
          ${isTop && "pt-20 sm:pt-24"}
          ${isCenter && "mt-auto pt-24"}
          ${isTopRight && "mt-auto pr-0 sm:pr-24"}
        `}
      >
        <h3 className="mb-3 text-xl sm:text-2xl lg:text-3xl font-bold text-black">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default function AuditAreas() {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

        <Card
          title="Security"
          desc="We audit your Microsoft security score, expose gaps, and hand you a prioritized fix roadmap."
          Icon={ShieldCheck}
          iconPosition="topRight"
        />

        <Card
          title="Compliance"
          desc="We assess your HIPAA compliance status and evaluate your audit readiness."
          Icon={ClipboardList}
          iconPosition="topRight"
        />

        <Card
          title="Infrastructure"
          desc="We examine system health, identify legacy risks, and analyze scalability for growth."
          Icon={Network}
          className="sm:col-span-2"
          iconPosition="top"
        />

        <Card
          title="Operations"
          desc="We evaluate IT team capabilities, incident management, and disaster recovery readiness."
          Icon={Settings}
          iconPosition="center"
        />

        <div className="grid gap-6 sm:gap-8">
          <Card
            title="Cost"
            desc="We review your technology spending to identify cost optimization opportunities."
            Icon={Coins}
            iconPosition="topRight"
          />

          <Card
            title="Strategy"
            desc="We assess how your IT roadmap aligns with business goals and identify capability gaps."
            Icon={GitFork}
            iconPosition="topRight"
          />
        </div>
      </div>
    </section>
  );
}
