import { Text } from "../Text/Text";
import { Project } from "../../models/Project";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div>
      {projects.map(({ projects_id }) => (
        <div className="project-item">
          <Text
            as="a"
            href={projects_id.project_link}
            variant={"light"}
            color={"text-tertiary"}
          >
            {projects_id.name}
          </Text>
        </div>
      ))}
    </div>
  );
};
