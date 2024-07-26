import _ from "lodash";
import { useState, useEffect, MouseEventHandler } from "react";
import Header from "../../components/Header/Header";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";
import { TeamMember } from "../../models/TeamMember";
import TeamService from "../../services/TeamService";
import { Footer } from "../../components/Footer/Footer";

/**
 * Page component that displays a list of team members.
 * Handles loading state, error handling, and menu toggling.
 * @returns {JSX.Element} The rendered TeamMembersPage component.
 */
export const TeamMembersPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [menuActive, setMenuActive] = useState(false);

  /**
   * Toggles the menu state.
   * @param {MouseEvent} e - The mouse event object.
   */
  const toggleMenu: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setMenuActive(!menuActive);
  };

  /**
   * Fetches team members from the TeamService and updates the state.
   * Handles errors and updates the loading state.
   */
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

  /**
   * Custom sorting function for team members.
   * Special names are given priority in the sorting order.
   * @param {TeamMember[]} members - The array of team members to be sorted.
   * @returns {TeamMember[]} The sorted array of team members.
   */
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
      <div onClick={() => setMenuActive(false)} className="main-container">
        <Header toggleMenu={toggleMenu} menuActive={menuActive} />
        <main>
          <div className="team-member-container">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
