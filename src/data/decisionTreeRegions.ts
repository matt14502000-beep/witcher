export interface DecisionTreeRegionMap {
  white_orchard: string[];
  velen: string[];
  novigrad: string[];
  skellige: string[];
  hearts_of_stone: string[];
  blood_and_wine: string[];
}

export const decisionTreeRegions: DecisionTreeRegionMap = {
  white_orchard: ["DT-WO-CT01"],
  velen: [
    "DT-VEL-MQ01",
    "DT-VEL-MQ04",
    "DT-VEL-MQ07",
    "DT-VEL-MQ08",
    "DT-VEL-MQ10",
    "DT-VEL-SQ11",
    "DT-VEL-SQ17",
    "DT-VEL-CT02",
  ],
  novigrad: [
    "DT-NOV-MQ04",
    "DT-NOV-MQ05",
    "DT-NOV-SQ01",
    "DT-NOV-SQ02",
    "DT-NOV-SQ06",
    "DT-NOV-SQ14",
    "DT-NOV-CT01",
  ],
  skellige: ["DT-SK-MQ07", "DT-SK-MQ08", "DT-SK-MQ10", "DT-SK-SQ03", "DT-SK-SQ11"],
  hearts_of_stone: ["DT-HOS-MQ02", "DT-HOS-MQ03", "DT-HOS-MQ04", "DT-HOS-MQ05", "DT-HOS-SQ01"],
  blood_and_wine: ["DT-BAW-MQ09", "DT-BAW-MQ12", "DT-BAW-SQ05", "DT-BAW-SQ10", "DT-BAW-SQ14"],
};
