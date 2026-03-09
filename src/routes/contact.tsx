import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "../features/contact/ui/ContactSection";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center w-full">
      <ContactSection />
    </div>
  );
}
