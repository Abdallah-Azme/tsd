import { StatItem } from "./StatItem";
import { motion } from "framer-motion";
import {
  containerVariants,
  cardVariants,
  viewportConfig,
} from "#/lib/animations/variants";

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8"
    >
      {stats.map((stat, index) => (
        <motion.div key={index} variants={cardVariants}>
          <StatItem {...stat} />
        </motion.div>
      ))}
    </motion.div>
  );
};
