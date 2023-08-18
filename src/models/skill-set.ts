type SetType = "Programming Languages" | "Back-End" | "Front-End" | "Mobile" | "Desktop" | "Databases" | "DevOps";

export interface SkillSet {
  type: SetType;
  skills: string[];
}
