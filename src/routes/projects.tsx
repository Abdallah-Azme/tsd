import { createFileRoute } from "@tanstack/react-router";
import { ProjectsGridSection } from "../features/projects/ui/ProjectsGridSection";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center w-full">
      <ProjectsGridSection />
    </div>
  );
}
