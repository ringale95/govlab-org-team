import { Text } from "../Text/Text";
import { Project } from "../../models/Project";

/**
 * Props for the ProjectList component.
 * @interface
 */
interface ProjectListProps {
  /** Array of projects to display. */
  projects: Project[];
}

/**
 * Component that renders a list of projects.
 * @param {ProjectListProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div>
      {projects.map(({ projects_id }) => (
        <div className="project-item" key={projects_id.id}>
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
