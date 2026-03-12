import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CirclePlus, CircleMinus } from "lucide-react";

const faqs = [
  {
    question: "Why do I need to use a Design System?",
    answer:
      "It centralizes project management, collaboration, and analytics in one workspace designed for developers.",
  },
  {
    question: "How does this platform help software teams?",
    answer:
      "We provide customized workflows, advanced integrations, and scalable infrastructure to help teams collaborate better and ship faster without technical debt.",
  },
  {
    question: "How does this platform help software teams?",
    answer:
      "Timelines vary based on complexity, but most of our projects take between 2 to 6 months from initial discovery to final deployment.",
  },
  {
    question: "How does this platform help software teams?",
    answer:
      "Yes! We offer dedicated post-launch support, regular maintenance, and feature updates to ensure your software remains secure and up-to-date.",
  },
  {
    question: "How does this platform help software teams?",
    answer:
      "Our team consists of experts across a wide range of modern tech stacks, including React, Node.js, Python, AWS, and more, tailored optimally to your specific project needs.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-6 px-6 lg:px-8 max-w-4xl mx-auto overflow-hidden">
      <SectionHeader
        badge="FAQ's"
        title="Answers That Help You"
        description="FAQ to answer your queries and common questions without having to reach out entirely to the customer support service."
        className="mb-12"
      />

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-none px-6 rounded-xl bg-[#eef1f4] data-[state=open]:bg-[#5b738b] transition-colors duration-300 group"
          >
            <AccordionTrigger className="text-[17px] font-medium hover:no-underline text-left text-gray-800 data-[state=open]:text-white **:data-[slot=accordion-trigger-icon]:hidden py-5">
              {faq.question}
              <CirclePlus
                className="shrink-0 w-[20px] h-[20px] text-gray-500 group-data-[state=open]:hidden"
                strokeWidth={1.5}
              />
              <CircleMinus
                className="shrink-0 w-[20px] h-[20px] text-white/80 hidden group-data-[state=open]:block"
                strokeWidth={1.5}
              />
            </AccordionTrigger>
            <AccordionContent className="text-[15px] text-gray-600 group-data-[state=open]:text-[#dcdfe4] leading-relaxed pb-6 pr-8">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
