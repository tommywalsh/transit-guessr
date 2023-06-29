import React from "react";
import type {
  StmStation,
  StmLineName,
  StmTrunkLine,
} from "../../operators/stm/types";
import type { OperatorConfiguration } from "../../operators/types";
import { StmLinesRow } from "./StmLinesRow";
import "./StmStationHeader.css";

export function StmStationHeader(props: {
  station: StmStation;
  config: OperatorConfiguration<StmTrunkLine, StmLineName>;
}) {
  const { station, config } = props;
  return (
    <div className="station-heading stm">
      <svg className="system-logo stm" version="1.1" viewBox="0 0 100 100">
        <g fill="#dddddd">
          <path d="M50,90 l34,-34 l-8,-8 l-18,18 v-40 h-16 v40 l-18,-18 l-8,8 z"/>
        </g>
      </svg>
      <StmLinesRow config={config} lines={station.lines} />
      <div className="station-name stm">{station.name}</div>
    </div>
  );
}
