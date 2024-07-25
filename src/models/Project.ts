export interface Project {
    id: number;
    team_id: string;
    projects_id: {
        description: string;
        id: number;
        name: string;
        project_link: string;
    };
}
