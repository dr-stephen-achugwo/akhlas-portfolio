import { FunctionComponent } from "react";
import { IconType } from "react-icons";

export interface IService {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface WorkedWith{
  Icon : IconType;
  name : string
}
export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "React" | "JS/TS" | "Python" | "BlockChain" | "Other";