import { StmLineName, StmTrunkLine } from "./types";
import type { StmLine, StmStation } from "./types";

export const lines = {
  [StmLineName.BLUE]: {
    line: StmLineName.BLUE,
    displayName: "Ligne Bleue",
    trunkLine: StmTrunkLine.BLUE,
  },
  [StmLineName.YELLOW]: {
    line: StmLineName.YELLOW,
    displayName: "Ligne Jaune",
    trunkLine: StmTrunkLine.YELLOW,
  },
  [StmLineName.ORANGE]: {
    line: StmLineName.ORANGE,
    displayName: "Ligne Orange",
    trunkLine: StmTrunkLine.ORANGE,
  },
  [StmLineName.GREEN]: {
    line: StmLineName.GREEN,
    displayName: "Ligne verte",
    trunkLine: StmTrunkLine.GREEN,
  }
};

type StmTrunkLineMapping = { [k in StmTrunkLine]: StmLine[] };
export const linesByTrunkLine: StmTrunkLineMapping = Object.values(
  lines
).reduce((acc: StmTrunkLineMapping, cur: StmLine) => {
  if (acc[cur.trunkLine] === undefined) {
    acc[cur.trunkLine] = [];
  }
  acc[cur.trunkLine].push(cur);
  return acc;
}, {} as StmTrunkLineMapping);

export const stations: StmStation[] = [
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.547217,
        45.5612107
      ]
    ],
    "name": "Viau"
  },
  {
    "lines": [lines[StmLineName.YELLOW]],
    "coordinates": [
      [
        -73.533166,
        45.5124354
      ]
    ],
    "name": "Jean-Drapeau"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.6175641,
        45.5034516
      ]
    ],
    "name": "Université-de-Montréal"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5798146,
        45.4953505
      ]
    ],
    "name": "Guy-Concordia"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5750245,
        45.5005644
      ]
    ],
    "name": "Peel"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5715335,
        45.5040687
      ]
    ],
    "name": "McGill"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5683367,
        45.5080372
      ]
    ],
    "name": "Place-des-Arts"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5648225,
        45.5109236
      ]
    ],
    "name": "Saint-Laurent"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5863126,
        45.4896787
      ]
    ],
    "name": "Atwater"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5693747,
        45.4783949
      ]
    ],
    "name": "Charlevoix"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5529443,
        45.5240492
      ]
    ],
    "name": "Papineau"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5571887,
        45.519546
      ]
    ],
    "name": "Beaudry"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.6234712,
        45.4966415
      ]
    ],
    "name": "Côte-des-Neiges"
  },
  {
    "lines": [lines[StmLineName.ORANGE], lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.628346,
        45.4863416
      ]
    ],
    "name": "Snowdon"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.612563,
        45.510131
      ]
    ],
    "name": "Édouard-Montpetit"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.6237717,
        45.5232203
      ]
    ],
    "name": "Acadie"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.6244545,
        45.5304337
      ]
    ],
    "name": "Parc"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.6200292,
        45.5352841
      ]
    ],
    "name": "De Castelnau"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.607922,
        45.5467272
      ]
    ],
    "name": "Fabre"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.6022739,
        45.5530778
      ]
    ],
    "name": "D’Iberville"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.5999419,
        45.559813
      ]
    ],
    "name": "Saint-Michel"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.552479,
        45.5329932
      ]
    ],
    "name": "Frontenac"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5542209,
        45.541717
      ]
    ],
    "name": "Préfontaine"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5511268,
        45.5468903
      ]
    ],
    "name": "Joliette"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5820354,
        45.4567578
      ]
    ],
    "name": "Jolicoeur"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5937306,
        45.4511015
      ]
    ],
    "name": "Monk"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5472116,
        45.5691651
      ]
    ],
    "name": "Assomption"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5467179,
        45.5768391
      ]
    ],
    "name": "Cadillac"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5431832,
        45.5827497
      ]
    ],
    "name": "Langelier"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.53942,
        45.5891558
      ]
    ],
    "name": "Radisson"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5354197,
        45.5964086
      ]
    ],
    "name": "Honoré-Beaugrand"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5515006,
        45.5542002
      ]
    ],
    "name": "Pie IX"
  },
  {
    "lines": [lines[StmLineName.GREEN], lines[StmLineName.ORANGE], lines[StmLineName.YELLOW]],
    "coordinates": [
      [
        -73.5612625,
        45.5150265
      ]
    ],
    "name": "Berri-UQAM"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5661442,
        45.4709055
      ]
    ],
    "name": "LaSalle"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5670439,
        45.4627714
      ]
    ],
    "name": "De l'Église"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.603611,
        45.4462277
      ]
    ],
    "name": "Angrignon"
  },
  {
    "lines": [lines[StmLineName.GREEN], lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5801891,
        45.4824581
      ]
    ],
    "name": "Lionel-Groulx"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5564161,
        45.510082
      ]
    ],
    "name": "Champ-de-Mars"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6833019,
        45.5142831
      ]
    ],
    "name": "Côte-Vertu"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6616085,
        45.5002999
      ]
    ],
    "name": "De La Savane"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6529005,
        45.4948911
      ]
    ],
    "name": "Namur"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6378267,
        45.4943764
      ]
    ],
    "name": "Plamondon"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6328648,
        45.4923068
      ]
    ],
    "name": "Côte-Sainte-Catherine"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6196655,
        45.4797223
      ]
    ],
    "name": "Villa-Maria"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6037929,
        45.4739256
      ]
    ],
    "name": "Vendôme"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5866584,
        45.4771907
      ]
    ],
    "name": "Place Saint-Henri"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5765137,
        45.488977
      ]
    ],
    "name": "Georges-Vanier"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5670909,
        45.4982692
      ]
    ],
    "name": "Bonaventure"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5631239,
        45.5020325
      ]
    ],
    "name": "Square-Victoria-OACI"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5597499,
        45.5060568
      ]
    ],
    "name": "Place d’Armes"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.568089,
        45.5186543
      ]
    ],
    "name": "Sherbrooke"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5814435,
        45.5247175
      ]
    ],
    "name": "Mont-Royal"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5886089,
        45.5282239
      ]
    ],
    "name": "Laurier"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5974076,
        45.5315669
      ]
    ],
    "name": "Rosemont"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6045785,
        45.5351456
      ]
    ],
    "name": "Beaubien"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6388299,
        45.5460864
      ]
    ],
    "name": "Crémazie"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6562646,
        45.5510299
      ]
    ],
    "name": "Sauvé"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6673883,
        45.5542168
      ]
    ],
    "name": "Henri-Bourassa"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6815792,
        45.5600823
      ]
    ],
    "name": "Cartier"
  },
  {
    "lines": [lines[StmLineName.YELLOW]],
    "coordinates": [
      [
        -73.5219729,
        45.5249659
      ]
    ],
    "name": "Longueuil–Université-de-Sherbrooke"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.7098435,
        45.5607006
      ]
    ],
    "name": "De la Concorde"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.722034,
        45.5585006
      ]
    ],
    "name": "Montmorency"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6729484,
        45.5084157
      ]
    ],
    "name": "Du Collège"
  },
  {
    "lines": [lines[StmLineName.ORANGE], lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.6138264,
        45.5392329
      ]
    ],
    "name": "Jean-Talon"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.5709676,
        45.4949933
      ]
    ],
    "name": "Lucien L'Allier"
  },
  {
    "lines": [lines[StmLineName.ORANGE]],
    "coordinates": [
      [
        -73.6286581,
        45.5432411
      ]
    ],
    "name": "Jarry"
  },
  {
    "lines": [lines[StmLineName.BLUE]],
    "coordinates": [
      [
        -73.6149036,
        45.5200867
      ]
    ],
    "name": "Outremont"
  },
  {
    "lines": [lines[StmLineName.GREEN]],
    "coordinates": [
      [
        -73.5731629,
        45.4594567
      ]
    ],
    "name": "Verdun"
  }
];

export const stationGuessData = [
];

console.log(
  JSON.stringify(
    Object.values(lines).map((line) => {
      const thisLineStations = stations.filter(
        (station) => station.lines.indexOf(line) >= 0
      );
      const coords = thisLineStations
        .map((st) => st.coordinates[0]!)
        .sort((a: any, b: any) => a[1] - a[0] - (b[1] - b[0]));
      return {
        geometry: {
          type: "LineString",
          coordinates: coords,
        },
        type: "Feature",
        properties: {
          name: line.displayName,
        },
      };
    })
  )
);
