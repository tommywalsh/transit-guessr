import { Operator } from "./types";
import mtaConfig from "./mta/config";
import mbtaConfig from "./mbta/config";
import stmConfig from "./stm/config";

export type PlayableConfig = typeof mtaConfig | typeof mbtaConfig | typeof stmConfig;
export type PlayableStation =
  | typeof mtaConfig["stations"][number]
  | typeof mbtaConfig["stations"][number]
  | typeof stmConfig["stations"][number];

// TODO: types ????
export type AnalyzableConfig = typeof mtaConfig;
export type AnalyzableTrunkLine = keyof AnalyzableConfig["linesByTrunkLine"];
export type AnalyzableLine = AnalyzableConfig["lines"][number];
export type AnalyzableStation = AnalyzableConfig["stations"][number];

const configByOperator = {
  [Operator.MTA]: mtaConfig,
  [Operator.MBTA]: mbtaConfig,
  [Operator.STM]: stmConfig,
};

export default configByOperator;
