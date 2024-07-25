import "./css/index.css";
import { Text } from "./components/Text/Text";
import { Dropdown } from "./components/Dropdown/Dropdown";
import TeamService from "./services/TeamService";
import { TeamMember } from "./models/TeamMember";
import { useEffect, useState } from "react";
import _ from "lodash";

function App() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadTeamMembers = async () => {
    try {
      const members = await TeamService.getTeamMembers();
      setTeamMembers(members);
    } catch (err) {
      setError("Failed to fetch team members.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeamMembers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {teamMembers.map((member) => (
        <div key={member.id}>
          <Text variant="bold" as="h3" color="text-primary">
            {_.upperCase(member.name)}
          </Text>
          <Text variant="regular" as="h4" color="text-secondary">
            {_.upperCase(member.title)}
          </Text>
          <Text variant="light" as="p" color="text-primary">
            {member.bio_short}
          </Text>
          <Dropdown>MORE</Dropdown>
          <Dropdown>PROJECTS</Dropdown>
        </div>
      ))}
    </>
  );
}

export default App;
