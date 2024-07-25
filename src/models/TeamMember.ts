import { Picture } from "./Picture";
import { Project } from "./Project";

export interface TeamMember {
    bio: string;
    bio_short: string;
    blogslug: string;
    id: number;
    name: string;
    slug: string;
    status: string;
    title: string;
    picture_blog2020: string;
    picture: Picture;
    projects: Project[];
}
