export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const partnersService = {
  getPartners: async (): Promise<Partner[]> => {
    return [
      { id: "1", name: "Arize", logo: "/logos/arize.svg" },
      { id: "2", name: "Articul8", logo: "/logos/articul8.svg" },
      { id: "3", name: "BCG", logo: "/logos/bcg.svg" },
      { id: "4", name: "C3 AI", logo: "/logos/c3ai.svg" },
      { id: "5", name: "Confluent", logo: "/logos/confluent.svg" },
      { id: "6", name: "Collibra", logo: "/logos/collibra.svg" },
      { id: "7", name: "Cohere", logo: "/logos/cohere.svg" },
    ];
  },
};
