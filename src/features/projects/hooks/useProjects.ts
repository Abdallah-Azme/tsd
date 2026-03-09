import { Route } from "../../../routes/__root";

export type ProjectCategory = "All" | "Mobile Apps" | "Websites" | "Systems";

export const useProjects = () => {
  const { lang } = Route.useSearch();
  const isRtl = lang === "ar";

  const projects = [
    {
      id: "diwander",
      title: "DIWander",
      description:
        "Discover and book your next journey with ease. DIWander helps you find the best flights, destinations, and travel experiences — all in one seamless platform.",
      image: "/project_diwander.png",
      link: "https://diwander.com",
      category: "Websites",
    },
    {
      id: "gabrun",
      title: "Gabrun",
      description:
        "Fast, secure, and modern payment solutions designed to simplify business transactions and help companies manage payments with confidence.",
      image: "/project_gabrun.png",
      link: "https://gabrun.com",
      featured: true,
      category: "Mobile Apps",
    },
    {
      id: "diwander-2",
      title: "DIWander",
      description:
        "Discover and book your next journey with ease. DIWander helps you find the best flights, destinations, and travel experiences — all in one seamless platform.",
      image: "/project_diwander.png",
      link: "https://diwander.com",
      category: "Systems",
    },
    {
      id: "gabrun-2",
      title: "Gabrun",
      description:
        "Fast, secure, and modern payment solutions designed to simplify business transactions and help companies manage payments with confidence.",
      image: "/project_gabrun.png",
      link: "https://gabrun.com",
      featured: true,
      category: "Mobile Apps",
    },
  ];

  return { lang, isRtl, projects };
};
