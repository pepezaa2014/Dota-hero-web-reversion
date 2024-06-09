import React, { useEffect, useState } from "react";
import Hero from "../../models/hero-model";
import TitleLogo from "./TitleLogo";
import Navbar from "../navbar/Navbar";
import HeroCard from "./HeroCard";
import { useHandleFilterClick, useFilteredHeroes } from "./actions";
import { GET as fetchHeroes } from "@/src/app/api/app/hero/route";

const SelectHero = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchHero, setSearchHero] = useState<string>("");
  const { activeFilter, handleFilterClick } = useHandleFilterClick();
  const filteredHeroes = useFilteredHeroes(heroes, searchHero, activeFilter);

  useEffect(() => {
    const fetchData = async () => {
      const heroData = await fetchHeroes();
      if (heroData) {
        setHeroes(heroData);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-800 to-gray-600">
      <div className="flex flex-col px-64 pt-16 w-full justify-center">
        <TitleLogo />
        <Navbar
          searchHero={searchHero}
          setSearchHero={setSearchHero}
          handleFilterClick={handleFilterClick}
          activeFilter={activeFilter}
        />
        <div className="flex flex-col mb-16">
          <div className="grid grid-cols-4 gap-4">
            {filteredHeroes
              .sort((a, b) => {
                const A = a.localized_name ?? "";
                const B = b.localized_name ?? "";
                return A.localeCompare(B);
              })
              .map((hero: Hero) => {
                return (
                  <div key={hero.id}>
                    <HeroCard hero={hero} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectHero;
