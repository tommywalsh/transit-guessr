import { OperatorConfiguration, Operator } from "../types";
import { StmTrunkLine, StmLineName } from "./types";
import type { StmStation, StmLine } from "./types";
import { stationGuessData, stations, lines, linesByTrunkLine } from "./data";
import { StmStationHeader } from "../../operator_components/stm/StmStationHeader";
import { StmLineBadgeCondensed } from "../../operator_components/stm/StmLineBadgeCondensed";

class StmConfig implements OperatorConfiguration<StmTrunkLine, StmLineName> {
  operator = Operator.STM;
  stations = stations;
  operatorName = "stm";
  domain = "devneusestm.com";  // Drop vowel in "devineuse", just like in "guesser".
  appName = "DevneuseSTM";
  zeroPointDistanceInMeters = 15000;
  lines = Object.values(lines);
  linesByTrunkLine = linesByTrunkLine as { [k in StmTrunkLine]: StmLine[] };
  hasAnalysisPage = true;
  initialMapState = {
    longitude: -73.59273,
    latitude: 45.50,
    zoom: 10,
  };
  stationGuessData = stationGuessData;

  getColor(t: StmTrunkLine) {
    switch (t) {
      case StmTrunkLine.BLUE:
        return "#0072BC";
      case StmTrunkLine.GREEN:
        return "#00A651";
      case StmTrunkLine.ORANGE:
        return "#F58220";
      case StmTrunkLine.YELLOW:
        return "#FFDE00";
    }
  }

  shortNameForStation(station: StmStation) {
    return station.name;
  }

  uniqueNameForStation(station: StmStation) {
    return station.name;
  }

  renderStationHeading(station: StmStation) {
    return <StmStationHeader station={station} config={this} />;
  }

  renderLineForAnalysisMapView(l: StmLine, props: { greyscale?: boolean }) {
    return (
      <StmLineBadgeCondensed
        line={l}
        greyscale={props.greyscale}
        config={this}
      />
    );
  }

  renderLinesForDataView(ls: StmLine[]) {
    return (
      <div className="stm station-lines-small">
        {ls.map((l) => {
          return <StmLineBadgeCondensed line={l} config={this} />;
        })}
      </div>
    );
  }
}

const config: OperatorConfiguration<StmTrunkLine, StmLineName> =
  new StmConfig();

export default config;
