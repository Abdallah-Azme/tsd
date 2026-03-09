import { StatItem } from "./StatItem";

export const AboutStats = () => {
  const stats = [
    {
      label: "Our Team",
      value: 75,
      suffix: "+",
      description: "Tech experts at TSD",
    },
    {
      label: "Our Projects",
      value: 120,
      suffix: "+",
      description: "Successful software projects",
    },
    {
      label: "Our Clients",
      value: 50,
      suffix: "+",
      description: "Trusted TSD services",
    },
    {
      label: "Lines of Code",
      value: 2,
      prefix: "+",
      suffix: "M",
      description: "Professionally developed code",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 py-12 border-t border-border mt-16">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};
