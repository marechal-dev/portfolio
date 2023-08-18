import { TimeSpan } from "@/types/timespan";

type Degree = "Bachelor's Degree" | "Master's Degree" | "PhD" | "MBA" | "Specialization"

export interface Education {
  field: string;
  degreeType: Degree;
  timeSpan: TimeSpan;
};
