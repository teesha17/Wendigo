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
  iconPosition = "right", // right | top | center
}) => {
  const isRight = iconPosition === "right";
  const isTop = iconPosition === "top";
  const isCenter = iconPosition === "center";
  const isTopRight = iconPosition === "topRight";

  return (
    <div
      className={`
    relative flex flex-col overflow-hidden rounded-3xl bg-white p-10
    shadow-[0_20px_50px_rgba(59,130,246,0.15)]
    ${className}
  `}
    >
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5efff_1px,transparent_1px),linear-gradient(to_bottom,#e5efff_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

      {/* ICON */}
      {/* ICON + CONNECTORS */}
      <div
        className={`absolute z-10
    ${isRight && "right-10 top-1/2 -translate-y-1/2"}
    ${isTop && "left-1/2 top-8 -translate-x-1/2"}
    ${isCenter && "left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"}
    ${isTopRight && "right-10 top-8"}
  `}
      >

        {/* dashed lines */}
        <span className="absolute left-1/2 -top-8 h-8 border-l border-dashed border-blue-300 -translate-x-1/2" />
        <span className="absolute left-1/2 -bottom-8 h-8 border-l border-dashed border-blue-300 -translate-x-1/2" />
        <span className="absolute -left-8 top-1/2 w-8 border-t border-dashed border-blue-300 -translate-y-1/2" />
        <span className="absolute -right-8 top-1/2 w-8 border-t border-dashed border-blue-300 -translate-y-1/2" />

        {/* icon bubble */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 shadow-md">
          <Icon className="h-7 w-7 text-blue-700" />
        </div>
      </div>


      {/* CONTENT */}
      <div
        className={`
    relative z-10 max-w-lg
    ${isRight && "pr-24"}
    ${isTop && "pt-24"}
    ${isCenter && "mt-auto"}
    ${isTopRight && "mt-auto pr-24"}
  `}
      >

        <h3 className="mb-3 text-3xl font-bold text-black">{title}</h3>
        <p className="text-base text-gray-500">{desc}</p>
      </div>
    </div>
  );
};


export default function AuditAreas() {
  return (
    <section className="w-full bg-[#f5f9ff] px-6 py-6">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8">

        {/* Row 1 */}
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

        {/* Row 2 (wide center card) */}
        <Card
          title="Infrastructure"
          desc="We examine system health, identify legacy risks, and analyze scalability for growth."
          Icon={Network}
          className="col-span-2"
          iconPosition="top"
        />



        {/* Row 3 */}
        <Card
          title="Operations"
          desc="We evaluate IT team capabilities, incident management, and disaster recovery readiness."
          Icon={Settings}

          iconPosition="center"
        />

        <div className="grid gap-8">
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
