import React from "react";
import Hero from "../../models/hero-model";
import StatForm from "./StatForm";
import IconWithStat from "./IconWithStat";
import { ReadonlyURLSearchParams } from "next/navigation";

interface StatsProps {
  heroData: ReadonlyURLSearchParams;
  newInfoHeroData: Hero;
}

const Stats: React.FC<StatsProps> = ({ heroData, newInfoHeroData }) => {
  return (
    <div className="flex flex-row w-full justify-between">
      <StatForm title="การโจมตี">
        <IconWithStat
          imagePath="/images/melee.png"
          detail={`${newInfoHeroData.attackMin()}-${newInfoHeroData.attackMax()}`}
        />
        <IconWithStat
          imagePath="/images/icon_attack_rate.png"
          detail={`${heroData.get("attack_range")}`}
        />
        <IconWithStat
          imagePath="/images/icon_attack_range.png"
          detail={`${heroData.get("attack_range")}`}
        />
        {parseInt(heroData.get("projectile_speed") ?? "0") !== 0 && (
          <IconWithStat
            imagePath="/images/icon_projectile_speed.png"
            detail={`${heroData.get("projectile_speed")}`}
          />
        )}
      </StatForm>
      <StatForm title="การป้องกัน">
        <IconWithStat
          imagePath="/images/icon_armor.png"
          detail={`${newInfoHeroData.armor().toFixed(1)}`}
        />
        <IconWithStat
          imagePath="/images/icon_magic_resist.png"
          detail={`${heroData.get("base_mr")}`}
        />
      </StatForm>
      <StatForm title="การเคลื่อนที่">
        <IconWithStat
          imagePath="/images/icon_movement_speed.png"
          detail={`${heroData.get("base_mr")}`}
        />
        {heroData.get("turn_rate") !== null &&
          heroData.get("turn_rate") !== "" && (
            <IconWithStat
              imagePath="/images/icon_turn_rate.png"
              detail={`${heroData.get("base_mr")}`}
            />
          )}
        <IconWithStat
          imagePath="/images/icon_vision.png"
          detail={`${heroData.get("day_vision")}/${heroData.get(
            "night_vision"
          )}`}
        />
      </StatForm>
    </div>
  );
};

export default Stats;
