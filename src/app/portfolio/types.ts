export type ProjectDataSchema = {
  id: number;
  name: string;
  logo: string;
  bannerImage: string;
  description: string;
  projectLink: string;
  designTools?: string[]; // Array of file paths (URLs) for design tools
  solutions: {
    title: string;
    points: string[]; // Array of solution points
  }[];
  techStack: string[]; // Array of file paths (URLs) for tech stack icons
  projectBreakDown: string[]; // Array of project breakdown details
};
