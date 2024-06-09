import { ReadonlyURLSearchParams } from "next/navigation";
import { getImageName, PrimaryAttr } from "../../constants/primary-attr";
import Hero from "../../models/hero-model";
import IconWithStat from "./IconWithStat";
import StatBar from "./StatBar";
import React from "react";

interface StatusProps {
  heroData: ReadonlyURLSearchParams;
  newInfoHeroData: Hero;
}

const Status: React.FC<StatusProps> = ({ heroData, newInfoHeroData }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center mr-4">
        <StatBar
          gradientLeft="hpBarGradientLeft"
          gradientRight="hpBarGradientRight"
          mainDetail={newInfoHeroData.health().toString()}
          plusDetail={newInfoHeroData.healthRegen().toFixed(1)}
        />
        <StatBar
          gradientLeft="manaBarGradientLeft"
          gradientRight="manaBarGradientRight"
          mainDetail={newInfoHeroData.mana().toString()}
          plusDetail={newInfoHeroData.manaRegen().toFixed(1)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <IconWithStat
          imagePath={`/images/${getImageName(PrimaryAttr.Strength)}`}
          detail={heroData.get("base_str") ?? ""}
          plusDetail={`+${heroData.get("str_gain")}`}
          className="font-bold text-lg ml-1"
        />
        <IconWithStat
          imagePath={`/images/${getImageName(PrimaryAttr.Agility)}`}
          detail={heroData.get("base_agi") ?? ""}
          plusDetail={`+${heroData.get("agi_gain")}`}
          className="font-bold text-lg ml-1"
        />
        <IconWithStat
          imagePath={`/images/${getImageName(PrimaryAttr.Intelligence)}`}
          detail={heroData.get("base_int") ?? ""}
          plusDetail={`+${heroData.get("int_gain")}`}
          className="font-bold text-lg ml-1"
        />
      </div>
    </div>
  );
};

export default Status;
