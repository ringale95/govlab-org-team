import axios from "axios";
import { TeamMember } from "../models/TeamMember";

class TeamService {
    private http = axios.create({
        baseURL: 'https://content.thegovlab.com'
    });

    async getTeamMembers(): Promise<TeamMember[]> {
        try {
            const response = await this.http.get<{ data: TeamMember[] }>(
                '/items/team',
                {
                    params: {
                        limit: -1,
                        sort: 'name',
                        'fields[0]': '*.*',
                        'fields[1]': 'picture.*',
                        'fields[2]': 'projects.projects_id.*'
                    }
                }
            );

            return response.data.data; // Ensure this matches the API response structure
        } catch (error) {
            console.error('Error fetching team members:', error);
            throw error;
        }
    }
}

export default new TeamService();
