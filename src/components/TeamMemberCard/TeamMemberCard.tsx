import _ from "lodash";
import { Avatar } from "../Avatar/Avatar";
import { Text } from "../Text/Text";
import { Dropdown } from "../Dropdown/Dropdown";
import { useState } from "react";
import DOMPurify from "dompurify";
import { ProjectList } from "../ProjectList/ProjectList";
import { TeamMember } from "../../models/TeamMember";

/**
 * Sanitizes HTML content to prevent XSS attacks.
 * @param {string} html - The HTML string to be sanitized.
 * @returns {string} - The sanitized HTML string.
 */
const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html);
};

/**
 * Renders a card for a team member, displaying their avatar, name, title, bio, and projects.
 * Includes functionality to show more/less of the bio and toggle the project list.
 *
 * @param {TeamMember} member - The team member data to be displayed in the card.
 * @returns {JSX.Element} - The JSX for the team member card component.
 */
const TeamMemberCard = (member: TeamMember) => {
  const [showMore, setShowMore] = useState(false);
  const [showProject, setShowProject] = useState(false);

  return (
    <div className="team-member-container">
      <div className="team-member-card">
        <div className="team-member-avatar">
          <Avatar url={member.picture_blog2020} size="xl" />
        </div>
        <div className="team-member-info">
          <Text variant="bold" as="h3" color="text-primary">
            {_.upperCase(member.name)}
          </Text>
          <Text variant="regular" as="h4" color="text-secondary">
            {_.upperCase(member.title)}
          </Text>
          <Text variant="light" as="p" color="text-primary">
            <span
              dangerouslySetInnerHTML={{
                __html: sanitizeHTML(
                  showMore && member.bio.length !== 0 && member.bio !== "NULL"
                    ? member.bio
                    : member.bio_short
                ),
              }}
            />
          </Text>
          <div className="team-member-buttons">
            {!!member.bio_short && (
              <Dropdown handleClick={() => setShowMore(!showMore)}>
                {showMore ? "LESS" : "MORE"}
              </Dropdown>
            )}
            {member.projects.length !== 0 && (
              <Dropdown handleClick={() => setShowProject(!showProject)}>
                PROJECTS
              </Dropdown>
            )}
          </div>
          {showProject && <ProjectList projects={member.projects} />}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
