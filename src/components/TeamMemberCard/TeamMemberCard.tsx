import _ from "lodash";
import { TeamMember } from "../../models/TeamMember";
import { Avatar } from "../Avatar/Avatar";
import { Text } from "../Text/Text";
import { Dropdown } from "../Dropdown/Dropdown";
import { useState } from "react";
import DOMPurify from "dompurify";
import { ProjectList } from "../ProjectList/ProjectList";

const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html);
};

const TeamMemberCard = (member: TeamMember) => {
  const [showMore, setShowMore] = useState(false);
  const [showProject, setShowProject] = useState(false);
  return (
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
                showMore && member.bio.length != 0 && member.bio !== "NULL"
                  ? member.bio
                  : member.bio_short
              ),
            }}
          />
        </Text>
        {!!member.bio_short && (
          <Dropdown handleClick={() => setShowMore(!showMore)}>
            {showMore ? "LESS" : "MORE"}
          </Dropdown>
        )}

        {member.projects.length != 0 && (
          <Dropdown handleClick={() => setShowProject(!showProject)}>
            PROJECTS
          </Dropdown>
        )}
        {showProject && <ProjectList projects={member.projects} />}
      </div>
    </div>
  );
};

export default TeamMemberCard;
