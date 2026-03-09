export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    x?: string;
    behance?: string;
    linkedin?: string;
  };
}

export const teamService = {
  getMembers: (): TeamMember[] => [
    {
      id: "1",
      name: "John Doe",
      role: "CEO",
      bio: "A visionary leader with a passion for innovation and growth",
      email: "john@example.com",
      phone: "+1 (415) 555-1020",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
      socials: {
        facebook: "#",
        instagram: "#",
        x: "#",
        behance: "#",
        linkedin: "#",
      },
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "Lead Developer",
      bio: "Crafting elegant solutions to complex problems with modern tech.",
      email: "jane@example.com",
      phone: "+1 (415) 555-1021",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
      socials: {
        facebook: "#",
        instagram: "#",
        x: "#",
        linkedin: "#",
      },
    },
    {
      id: "3",
      name: "Michael Chen",
      role: "Product Designer",
      bio: "Bridging the gap between user needs and aesthetic perfection.",
      email: "michael@example.com",
      phone: "+1 (415) 555-1022",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070",
      socials: {
        instagram: "#",
        behance: "#",
        linkedin: "#",
      },
    },
    {
      id: "4",
      name: "Sarah Williams",
      role: "Project Manager",
      bio: "Ensuring timely delivery and excellence across all platforms.",
      email: "sarah@example.com",
      phone: "+1 (415) 555-1023",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976",
      socials: {
        facebook: "#",
        x: "#",
        linkedin: "#",
      },
    },
    {
      id: "5",
      name: "David Ross",
      role: "UX Researcher",
      bio: "Deep diving into data to build user-centric experiences.",
      email: "david@example.com",
      phone: "+1 (415) 555-1024",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1974",
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
  ],
};
