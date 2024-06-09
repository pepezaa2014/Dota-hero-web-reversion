export enum PrimaryAttr {
  Strength = "str",
  Agility = "agi",
  Intelligence = "int",
  Universal = "all",
}

export const getImageName = (primaryAttr: PrimaryAttr): string => {
  const imageMap: { [key in PrimaryAttr]: string } = {
    [PrimaryAttr.Strength]: "hero_strength.png",
    [PrimaryAttr.Agility]: "hero_agility.png",
    [PrimaryAttr.Intelligence]: "hero_intelligence.png",
    [PrimaryAttr.Universal]: "hero_universal.png",
  };

  return imageMap[primaryAttr];
};

export const primaryAttrMap: { [key: string]: PrimaryAttr } = {
  str: PrimaryAttr.Strength,
  agi: PrimaryAttr.Agility,
  int: PrimaryAttr.Intelligence,
  all: PrimaryAttr.Universal,
};

export const fullNamePrimaryAttr = (primaryAttr: PrimaryAttr): string => {
  const nameMap: { [key in PrimaryAttr]: string } = {
    [PrimaryAttr.Strength]: "Strength",
    [PrimaryAttr.Agility]: "Agility",
    [PrimaryAttr.Intelligence]: "Intelligence",
    [PrimaryAttr.Universal]: "Universal",
  };

  return nameMap[primaryAttr];
};
