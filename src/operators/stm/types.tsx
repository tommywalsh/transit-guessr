import { IStation, ILine } from "../types";

export enum StmTrunkLine {
  ORANGE = "orange",
  BLUE = "bleue",
  GREEN = "verte",
  YELLOW = "jaune",
}

export enum StmLineName {
  YELLOW = "jaune",
  BLUE = "bleue",
  GREEN = "verte",
  ORANGE = "orange",
}

export type StmLine = ILine<StmTrunkLine, StmLineName>;
export type StmStation = IStation<StmTrunkLine, StmLineName>;
