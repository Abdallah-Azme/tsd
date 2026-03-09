import React from "react";
import { motion } from "framer-motion";
import type { TeamMember } from "../services/teamService";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative w-full h-[450px] rounded-[32px] overflow-hidden cursor-pointer group bg-[#E2E8F0]"
    >
      {/* Dynamic Background Gradient */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-linear-to-br from-[#b4712e] via-[#2F3E53] to-[#041B33]"
      />

      {/* Profile Image Animation */}
      <motion.div
        variants={{
          initial: {
            width: "100%",
            height: "100%",
            top: 0,
            right: 0,
            borderRadius: "0px",
            scale: 1,
          },
          hover: {
            width: "120px",
            height: "120px",
            top: "32px",
            right: "32px",
            borderRadius: "24px",
            scale: 1.05,
          },
        }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-10 overflow-hidden"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay for normal state image */}
        <motion.div
          variants={{
            initial: { opacity: 1 },
            hover: { opacity: 0 },
          }}
          className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 via-black/20 to-transparent"
        />
      </motion.div>

      {/* Content Container */}
      <div className="absolute inset-0 p-8 z-20 flex flex-col">
        {/* Top Section (Moves up on hover) */}
        <motion.div
          variants={{
            initial: { y: 320 },
            hover: { y: 0 },
          }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-1"
        >
          <motion.h3
            variants={{
              initial: { fontSize: "24px", color: "#FFFFFF" },
              hover: { fontSize: "24px", color: "#FFFFFF" },
            }}
            className="font-bold"
          >
            {member.name}
          </motion.h3>
          <motion.p
            variants={{
              initial: { fontSize: "14px", color: "#D1D5DB" },
              hover: { fontSize: "14px", color: "#dfa56b" },
            }}
            className="font-medium"
          >
            {member.role}
          </motion.p>
        </motion.div>

        {/* Middle Section: Bio & Contacts (Fades in) */}
        <motion.div
          variants={{
            initial: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="mt-8 space-y-8 flex-1"
        >
          <p className="text-gray-300 text-[15px] leading-relaxed max-w-[210px]">
            {member.bio}
          </p>

          <div className="space-y-4">
            <div className="text-gray-300 text-sm">{member.email}</div>
            <div className="text-gray-300 text-sm">{member.phone}</div>
          </div>
        </motion.div>

        {/* Bottom Section: Socials (Fades in) */}
        <motion.div
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="flex items-center gap-4 mt-auto"
        >
          {member.socials.facebook && (
            <Facebook
              className="w-[18px] h-[18px] text-[#06b6d4] hover:scale-110 transition-transform"
              strokeWidth={2}
            />
          )}
          {member.socials.instagram && (
            <Instagram
              className="w-[18px] h-[18px] text-[#06b6d4] hover:scale-110 transition-transform"
              strokeWidth={2}
            />
          )}
          {member.socials.x && (
            <Twitter
              className="w-[18px] h-[18px] text-[#06b6d4] hover:scale-110 transition-transform"
              strokeWidth={2}
            />
          )}
          {member.socials.behance && (
            <span className="font-bold text-[#06b6d4] hover:scale-110 transition-transform text-sm">
              Bē
            </span>
          )}
          {member.socials.linkedin && (
            <Linkedin
              className="w-[18px] h-[18px] text-[#06b6d4] hover:scale-110 transition-transform"
              strokeWidth={2}
            />
          )}
        </motion.div>
      </div>

      {/* Bottom label for normal state (Name/Role) - already handled by the top-moving div but positioned at the bottom initially */}
    </motion.div>
  );
};
