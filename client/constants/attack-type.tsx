export enum AttackType {
  Melee = "Melee",
  Range = "Range",
}

export const getImageTypeName = (attackType: AttackType): string => {
  const imageMap: { [key in AttackType]: string } = {
    [AttackType.Melee]: "melee.png",
    [AttackType.Range]: "ranged.png",
  };

  return imageMap[attackType];
};

export const attackTypeMap: { [key: string]: AttackType } = {
  Melee: AttackType.Melee,
  Ranged: AttackType.Range,
};
