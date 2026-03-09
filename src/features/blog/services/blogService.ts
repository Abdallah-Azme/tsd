export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description?: string;
  image: string;
  isFeatured?: boolean;
}

export const blogService = {
  getPosts: (): BlogPost[] => [
    {
      id: "1",
      title: "Tech Insights From Our Developers",
      date: "02 May",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
      isFeatured: true,
    },
    {
      id: "2",
      title: "Tech Insights From Our Developers",
      date: "02 May",
      description:
        "A constant ability to learn will be on the most crucial skill",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
      isFeatured: true,
    },
    {
      id: "3",
      title: "Tech Insights From Our Developers",
      date: "02 May",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: "4",
      title: "Tech Insights From Our Developers",
      date: "02 May",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: "5",
      title: "Tech Insights From Our Developers",
      date: "02 May",
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: "6",
      title: "Tech Insights From Our Developers",
      date: "02 May",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2069",
    },
  ],
};
