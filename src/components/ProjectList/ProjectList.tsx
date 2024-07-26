import { Text } from "../Text/Text";
import { Project } from "../../models/Project";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div>
      {projects.map(({ projects_id }) => (
        <Text
          as="a"
          href={projects_id.project_link}
          variant={"bold"}
          color={"text-primary"}
        >
          {projects_id.name}
        </Text>
      ))}
    </div>
  );
};
