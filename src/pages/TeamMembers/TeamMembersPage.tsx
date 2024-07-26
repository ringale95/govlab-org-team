import _ from "lodash";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";
import { TeamMember } from "../../models/TeamMember";
import TeamService from "../../services/TeamService";

export const TeamMembersPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadTeamMembers = async () => {
    try {
      const members = await TeamService.getTeamMembers();
      setTeamMembers(customSort(members));
    } catch (err) {
      setError("Failed to fetch team members.");
    } finally {
      setLoading(false);
    }
  };

  const customSort = (members: TeamMember[]): TeamMember[] => {
    return members.sort((a, b) => {
      const specialNames = ["BETH SIMONE NOVECK", "STEFAAN VERHULST"];
      if (
        specialNames.includes(_.upperCase(a.name)) &&
        specialNames.includes(_.upperCase(b.name))
      ) {
        return (
          specialNames.indexOf(_.upperCase(a.name)) -
          specialNames.indexOf(_.upperCase(b.name))
        );
      }
      if (specialNames.includes(_.upperCase(a.name))) return -1;
      if (specialNames.includes(_.upperCase(b.name))) return 1;
      return a.name.localeCompare(b.name);
    });
  };

  useEffect(() => {
    loadTeamMembers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <Header />
      <div className="team-member-container">
        {teamMembers.map((member) => (
          <TeamMemberCard {...member} />
        ))}
      </div>
    </>
  );
};
