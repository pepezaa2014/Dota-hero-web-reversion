/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";

import { useSearchParams } from "next/navigation";
import Hero from "@/client/models/hero-model";
import DotaPortrait from "@/client/constants/dota-portrait";
import {
  fullNamePrimaryAttr,
  getImageName,
  PrimaryAttr,
  primaryAttrMap,
} from "@/client/constants/primary-attr";
import {
  attackTypeMap,
  getImageTypeName,
} from "@/client/constants/attack-type";
import { getRoleName, Role } from "@/client/constants/roles";

const HeroInfo = () => {
  const data = useSearchParams();

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
  const nem = data.get("img")?.split("/").pop()?.split("?")[0] ?? "";
  const primaryAttrImage = getImageName(
    primaryAttrMap[data.get("primary_attr") ?? "all"]
  );
  const primaryAttrName = fullNamePrimaryAttr(primary_attr);
  const attackTypeImage = getImageTypeName(
    attackTypeMap[data.get("attack_type") ?? "melee"]
  );

  return (
    <main className="bg-gradient-to-r from-gray-800 to-gray-600 font-serif">
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ml-8 justify-center">
            <div className="flex flex-row mb-2">
              <div className="flex justify-center h-8 w-8 mr-2">
                <img src={`${primaryAttrImage}`} className="object-cover" />
              </div>
              <p className="text-2xl">{primaryAttrName}</p>
            </div>
            <p className="text-5xl font-bold mb-4">
              {data.get("localized_name")}
            </p>
            <div className="flex flex-col">
              <p className="text-gray-400 mb-1">ประเภทการโจมตี</p>
              <div className="flex flex-row item-center">
                <div className="h-5 w-5 mr-2 mb-4">
                  <img
                    src={`${attackTypeImage}`}
                    className="object-cover h-full w-full"
                  />
                </div>
                <p className="font-bold">{data.get("attack_type")}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-2/6 p-8">
            <img src={`${DotaPortrait}${nem}`} className="mb-4" />
          </div>
        </div>

        <div className="flex flex-row shadow-xl border-y-2 border-tertiaryColor bg-gradient-to-r from-containerGradientLeft to-containerGradientRight justify-evenly p-8 divide divide-x-2 divide-stone-600 gap-4">
          <div className="flex flex-1 flex-col items-center px-12 justify-between">
            <div className="flex flex-row justify-between mb-2 gap-8">
              <div className="flex flex-col justify-center">
                <div className="flex flex-row bg-gradient-to-r from-hpBarGradientLeft to-hpBarGradientRight items-center w-40 font-bold relative py-1">
                  <div className="text-base text-center absolute w-full">
                    {newInfo.health()}
                  </div>
                  <div className="flex text-xs text-tertiaryColor justify-end mr-4 w-full">
                    +{newInfo.healthRegen().toFixed(1)}
                  </div>
                </div>
                <div className="flex flex-row bg-gradient-to-r from-manaBarGradientLeft to-manaBarGradientRight items-center w-40 font-bold relative py-1">
                  <div className="text-base text-center absolute w-full">
                    {newInfo.mana()}
                  </div>
                  <div className="flex text-xs text-tertiaryColor justify-end mr-4 w-full">
                    +{newInfo.manaRegen().toFixed(1)}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center">
                  <div className="h-6 w-6 mr-2">
                    <img
                      src={`${getImageName(PrimaryAttr.Strength)}`}
                      className="mb-4"
                    />
                  </div>
                  <p className="font-bold text-lg">{data.get("base_str")}</p>
                  <p className="text-secondaryColor text-sm ml-1">
                    +{data.get("str_gain")}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="h-6 w-6 mr-2">
                    <img
                      src={`${getImageName(PrimaryAttr.Agility)}`}
                      className="mb-4"
                    />
                  </div>
                  <p className="font-bold text-lg">{data.get("base_agi")}</p>
                  <p className="text-secondaryColor text-sm ml-1">
                    +{data.get("agi_gain")}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="h-6 w-6 mr-2">
                    <img
                      src={`${getImageName(PrimaryAttr.Intelligence)}`}
                      className="mb-4"
                    />
                  </div>
                  <p className="font-bold text-lg">{data.get("base_int")}</p>
                  <p className="text-secondaryColor text-sm ml-1">
                    +{data.get("int_gain")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-secondaryColor justify-end items-end">
              ค่าสถานะ
            </div>
          </div>

          <div className="flex flex-1 flex-col px-12 items-center justify-between">
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              {Object.values(Role).map((role) => {
                const isSelected = data.getAll("roles").includes(role);
                return (
                  <p
                    key={role}
                    className={`text-center font-bold ${
                      isSelected ? "neon-text" : "text-tertiaryColor"
                    }`}
                  >
                    {getRoleName(role as Role)}
                  </p>
                );
              })}
            </div>
            <div className="flex text-secondaryColor justify-end items-end">
              ตำแหน่ง
            </div>
          </div>

          <div className="flex flex-1 flex-col px-12 items-center">
            <div className="justify-between flex flex-row gap-8">
              <div className="flex flex-col">
                <p className="text-lg font-bold text-secondaryColor mb-2">
                  การโจมตี
                </p>
                <div className="flex flex-row items-center">
                  <div className="h-4 w-4 mr-2">
                    <img
                      src={`melee.png`}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <p>
                    {newInfo.attackMin()}-{newInfo.attackMax()}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="h-4 w-4 mr-2">
                    <img
                      src={`icon_attack_rate.png`}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <p>{data.get("attack_rate")}</p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="h-4 w-4 mr-2">
                    <img
                      src={`icon_attack_range.png`}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <p>{data.get("attack_range")}</p>
                </div>
                {parseInt(data.get("projectile_speed") ?? "0") !== 0 && (
                  <div className="flex flex-row items-center">
                    <div className="h-4 w-4 mr-2">
                      <img
                        src={`icon_projectile_speed.png`}
                        className="object-cover h-full w-full"
                        alt="Projectile Speed"
                      />
                    </div>
                    <p>{data.get("projectile_speed")}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-bold text-secondaryColor mb-2">
                  การป้องกัน
                </p>
                <div className="flex flex-row items-center">
                  <div className="h-4 w-4 mr-2">
                    <img
                      src={`icon_armor.png`}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <p>{newInfo.armor().toFixed(1)}</p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="h-4 w-4 mr-2">
                    <img
                      src={`icon_magic_resist.png`}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <p>{data.get("base_mr")}%</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-bold text-secondaryColor mb-2">
                  การเคลื่อนที่
                </p>
                <div className="flex flex-row items-center">
                  <div className="h-4 w-4 mr-2">
                    <img
                      src={`icon_movement_speed.png`}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <p>{data.get("move_speed")}</p>
                </div>
                {data.get("turn_rate") !== null &&
                  data.get("turn_rate") !== "" && (
                    <div className="flex flex-row items-center">
                      <div className="h-4 w-4 mr-2">
                        <img
                          src={`icon_turn_rate.png`}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <p>{data.get("turn_rate")}</p>
                    </div>
                  )}
                <div className="flex flex-row items-center">
                  <div className="h-4 w-4 mr-2">
                    <img
                      src={`icon_vision.png`}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <p>
                    {data.get("day_vision")}/{data.get("night_vision")}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-secondaryColor justify-end">ค่าสถิติ</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroInfo;
