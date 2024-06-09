import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import Hero from "@/src/client/models/hero-model";
import {
  getImageName,
  PrimaryAttr,
  primaryAttrMap,
} from "@/src/client/constants/primary-attr";
import React from "react";
import DetailBox from "./DetailBox";
import Roles from "./Roles";
import Stats from "./Stats";
import HeroPortrait from "./HeroPortrait";
import StatBar from "./StatBar";
import IconWithStat from "./IconWithStat";
import Status from "./Status";

interface HeroDetailsProps {
  data: ReadonlyURLSearchParams;
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ data }) => {
  const id = parseInt(data.get("id") || "");
  const name = data.get("name") || "";
  const localized_name = data.get("localized_name") || "";
  const primary_attr = primaryAttrMap[data.get("primary_attr") ?? "all"];
  const base_health = parseInt(data.get("base_health") || "");
  const base_health_regen = parseFloat(data.get("base_health_regen") || "");
  const base_mana = parseInt(data.get("base_mana") || "");
  const base_mana_regen = parseFloat(data.get("base_mana_regen") || "");
  const base_armor = parseFloat(data.get("base_armor") || "");
  const base_mr = parseFloat(data.get("base_mr") || "");
  const base_attack_min = parseInt(data.get("base_attack_min") || "");
  const base_attack_max = parseInt(data.get("base_attack_max") || "");
  const base_str = parseInt(data.get("base_str") || "");
  const base_agi = parseInt(data.get("base_agi") || "");
  const base_int = parseInt(data.get("base_int") || "");
  const str_gain = parseFloat(data.get("str_gain") || "");
  const agi_gain = parseFloat(data.get("agi_gain") || "");
  const int_gain = parseFloat(data.get("int_gain") || "");

  const heroData = {
    id,
    name,
    localized_name,
    primary_attr,
    base_health,
    base_health_regen,
    base_mana,
    base_mana_regen,
    base_armor,
    base_mr,
    base_attack_min,
    base_attack_max,
    base_str,
    base_agi,
    base_int,
    str_gain,
    agi_gain,
    int_gain,
  };

  const newInfo = new Hero(heroData);

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-r from-gray-800 to-gray-600">
      <HeroPortrait heroData={data} />

      <div className="flex flex-row shadow-xl border-y-2 border-tertiaryColor bg-gradient-to-r from-containerGradientLeft to-containerGradientRight justify-evenly p-8 divide divide-x-2 divide-stone-600 gap-4">
        <DetailBox title="ค่าสถานะ">
          <Status heroData={data} newInfoHeroData={newInfo} />
        </DetailBox>

        <DetailBox title="ตำแหน่ง">
          <Roles containRoles={data.getAll("roles")} />
        </DetailBox>
        <DetailBox title="ค่าสถิติ">
          <Stats heroData={data} newInfoHeroData={newInfo} />
        </DetailBox>
      </div>
    </div>
  );
};

export default HeroDetails;
