import type { StmLine } from "../../operators/stm/types";
import { StmLineName, StmTrunkLine } from "../../operators/stm/types";
import type { OperatorConfiguration } from "../../operators/types";

const condensedLineDisplayByLine = {
  [StmLineName.BLUE]: "LB",
  [StmLineName.GREEN]: "LV",
  [StmLineName.YELLOW]: "LJ",
  [StmLineName.ORANGE]: "LO",
};

export function StmLineBadgeCondensed(props: {
  config: OperatorConfiguration<StmTrunkLine, StmLineName>;
  line: StmLine;
  greyscale?: boolean;
}) {
  const { line, config, greyscale } = props;
  return (
    <div
      style={{
        backgroundColor: greyscale
          ? "#64748b"
          : config.getColor(line.trunkLine),
        color: greyscale ? "#cbd5e1" : "#e2e8f0",
      }}
      className="stm station-line"
    >
      <span className="station-line-name">
        {condensedLineDisplayByLine[line.line]}
      </span>
    </div>
  );
}
