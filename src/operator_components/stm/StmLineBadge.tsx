import type {
  StmLine,
  StmTrunkLine,
  StmLineName,
} from "../../operators/stm/types";
import type { OperatorConfiguration } from "../../operators/types";
import "./StmLineBadge.css";

export function StmLineBadge(props: {
  line: StmLine;
  config: OperatorConfiguration<StmTrunkLine, StmLineName>;
}) {
  const { line, config } = props;
  return (
      <svg className="line-badge stm" version="1.1" viewBox="0 0 100 100">
        <g fill={config.getColor(line.trunkLine)} >
          <circle cx="50" cy="50" r="40" />
        </g>
      </svg>
  );
}
