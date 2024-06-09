import React from "react";
import { getImageTypeName, attackTypeMap } from "../../constants/attack-type";
import {
  getImageName,
  primaryAttrMap,
  fullNamePrimaryAttr,
} from "../../constants/primary-attr";
import Image from "next/image";
import DotaPortrait from "../../constants/dota-portrait";

interface HeroPortraitProps {
  heroData: URLSearchParams;
}

const HeroPortrait: React.FC<HeroPortraitProps> = ({ heroData }) => {
  const primaryAttrImage = getImageName(
    primaryAttrMap[heroData.get("primary_attr") ?? "all"]
  );
  const primaryAttrName = fullNamePrimaryAttr(
    primaryAttrMap[heroData.get("primary_attr") ?? "all"]
  );
  const attackTypeImage = getImageTypeName(
    attackTypeMap[heroData.get("attack_type") ?? "melee"]
  );

  const editPortraitName =
    heroData.get("img")?.split("/").pop()?.split("?")[0] ?? "";

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col ml-8 justify-center">
        <div className="flex flex-row mb-2">
          <Image
            src={`/images/${primaryAttrImage}`}
            alt={primaryAttrImage}
            className="mr-2"
            width={32}
            height={32}
          />
          <p className="text-2xl">{primaryAttrName}</p>
        </div>
        <p className="text-5xl font-bold mb-4">
          {heroData.get("localized_name")}
        </p>
        <div className="flex flex-col">
          <p className="text-gray-400 mb-1">ประเภทการโจมตี</p>
          <div className="flex flex-row item-center">
            <div className="h-5 w-5 mr-2 mb-4">
              <Image
                src={`/images/${attackTypeImage}`}
                alt={attackTypeImage}
                className="mr-2 mb-4"
                width={20}
                height={20}
              />
            </div>
            <p className="font-bold">{heroData.get("attack_type")}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-2/6 p-8 mb-4">
        <img src={`${DotaPortrait}${editPortraitName}`} alt="" />
      </div>
    </div>
  );
};

export default HeroPortrait;
