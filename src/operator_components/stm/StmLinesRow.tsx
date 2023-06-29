import React from "react";
import type {
  StmLine,
  StmLineName,
  StmTrunkLine,
} from "../../operators/stm/types";
import { StmLineBadge } from "./StmLineBadge";
import "./StmLinesRow.css";
import type { OperatorConfiguration } from "../../operators/types";



export function StmLinesRow(props: {
  config: OperatorConfiguration<StmTrunkLine, StmLineName>;
  lines: StmLine[];
}) {
  return (
    <div className={`stm station-lines`}>
      {props.lines.map((line, i) => {
        return <StmLineBadge key={i} line={line} config={props.config} />;
      })}
    </div>
  );
}

