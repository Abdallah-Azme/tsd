export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "UI/UX Design",
    description:
      "User-centered designs that combine aesthetics with usability.",
    icon: "🎨",
  },
  {
    id: "2",
    title: "Web Design & Development",
    description:
      "Professional technical assistance to support your products and users.",
    icon: "💻",
  },
  {
    id: "3",
    title: "Technical SEO Optimization",
    description:
      "Optimizing your website's technical structure for better search visibility.",
    icon: "🔍",
  },
  {
    id: "4",
    title: "Mobile App Development",
    description:
      "High-performance mobile applications built for iOS and Android.",
    icon: "📱",
  },
  {
    id: "5",
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure for your growing business.",
    icon: "☁️",
  },
];
