/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import DotaHeroAPI from "@/client/constants/dota-hero-API";
import DotaPortrait from "@/client/constants/dota-portrait";
import { getImageName, PrimaryAttr } from "@/client/constants/primary-attr";
import Hero from "@/client/models/hero-model";
import Link from "next/link";

async function fetchHeroes(): Promise<Hero[]> {
  const res = await fetch(DotaHeroAPI);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Home = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<PrimaryAttr | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const heroData = await fetchHeroes();
      setHeroes(heroData);
    };
    fetchData();
  }, []);

  const filteredHeroes = heroes
    .filter((hero) =>
      hero.localized_name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((hero) =>
      activeFilter ? hero.primary_attr === activeFilter : true
    );

  const handleFilterClick = (attr: PrimaryAttr) => {
    setActiveFilter(activeFilter === attr ? null : attr);
  };

  return (
    <main className="bg-gradient-to-r from-gray-800 to-gray-600 font-serif ">
      <div className="flex flex-col h-screen overflow-auto">
        <div className="flex flex-col px-64 pt-16 w-full justify-center">
          <div className="w-full flex items-center justify-center ">
            <div className="h-16 w-96 mb-24">
              <img src="/dota2_logo_color.png" className="object-cover " />
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-between mb-4 p-4 bg-gray-800">
            <p className="text-xl font-bold">กรองฮีโร่</p>
            <div className="flex flex-row items-center justify-center gap-x-2">
              <p className="mr-2">สาย</p>
              <button
                className={`h-10 w-10 flex items-center justify-center bg-tertiaryColor ${
                  activeFilter === PrimaryAttr.Strength
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                onClick={() => handleFilterClick(PrimaryAttr.Strength)}
              >
                <img
                  src={`${getImageName(PrimaryAttr.Strength)}`}
                  className="h-6 w-6"
                />
              </button>
              <button
                className={`h-10 w-10 flex items-center justify-center bg-tertiaryColor ${
                  activeFilter === PrimaryAttr.Agility
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                onClick={() => handleFilterClick(PrimaryAttr.Agility)}
              >
                <img
                  src={`${getImageName(PrimaryAttr.Agility)}`}
                  className="h-6 w-6"
                />
              </button>
              <button
                className={`h-10 w-10 flex items-center justify-center bg-tertiaryColor ${
                  activeFilter === PrimaryAttr.Intelligence
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                onClick={() => handleFilterClick(PrimaryAttr.Intelligence)}
              >
                <img
                  src={`${getImageName(PrimaryAttr.Intelligence)}`}
                  className="h-6 w-6"
                />
              </button>
              <button
                className={`h-10 w-10 flex items-center justify-center bg-tertiaryColor ${
                  activeFilter === PrimaryAttr.Universal
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                onClick={() => handleFilterClick(PrimaryAttr.Universal)}
              >
                <img
                  src={`${getImageName(PrimaryAttr.Universal)}`}
                  className="h-6 w-6"
                />
              </button>
            </div>
            <div className="flex items-center bg-tertiaryColor rounded p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-white focus:outline-none pl-2"
              />
            </div>
          </div>

          <div className="flex flex-col mb-16">
            <div className="grid grid-cols-4 gap-4">
              {filteredHeroes
                .sort((a, b) => {
                  const nameA = a.localized_name ?? "";
                  const nameB = b.localized_name ?? "";
                  return nameA.localeCompare(nameB);
                })
                .map((hero: Hero) => {
                  const nem = hero.img?.split("/").pop()?.split("?")[0];
                  const primaryAttrImage = getImageName(hero.primary_attr);

                  return (
                    <Link
                      href={{ pathname: "/hero-info", query: hero }}
                      key={hero.id}
                      className="rounded-xl shadow-xl duration-300 hover:scale-105 bg-gradient-to-r from-gray-800 to-gray-900 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800"
                    >
                      <div className="p-4 items-center justify-end flex flex-col">
                        <img
                          src={`${DotaPortrait}${nem}`}
                          className="mb-4"
                          alt={`${hero.localized_name} portrait`}
                        />
                        <div className="flex flex-row items-center justify-center">
                          <div className="flex justify-center w-8 mr-2">
                            <img
                              src={`${primaryAttrImage}`}
                              className="object-cover"
                            />
                          </div>
                          <p className="text-lg font-bold text-center">
                            {hero.localized_name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
