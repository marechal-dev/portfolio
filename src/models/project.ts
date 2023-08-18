type ProjectType = "FullStack" | "Back-End" | "Front-End" | "Mobile" | "Desktop" | "Discord Bot" | "White Paper";

export interface Project {
  title: string;
  type: ProjectType;
}
