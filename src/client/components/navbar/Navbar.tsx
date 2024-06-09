import React from "react";
import { PrimaryAttr } from "../../constants/primary-attr";
import FilterPrimaryAttrButton from "../button/FilterPrimaryAttrButton";
import { useHandleFilterClick } from "../heroes/actions";
import Searchfield from "../searchfield/Searchfield";

interface NavbarProps {
  searchHero: string;
  setSearchHero: (hero: string) => void;
  handleFilterClick: (attr: PrimaryAttr) => void;
  activeFilter: PrimaryAttr | null;
}

const Navbar: React.FC<NavbarProps> = ({
  searchHero,
  setSearchHero,
  handleFilterClick,
  activeFilter,
}) => {
  return (
    <div className="flex flex-row w-full items-center justify-between mb-4 p-4 bg-gray-800">
      <p className="text-xl font-bold">กรองฮีโร่</p>
      <div className="flex flex-row items-center justify-center gap-x-2">
        <p className="mr-2">สาย</p>
        <FilterPrimaryAttrButton
          primaryAttr={PrimaryAttr.Strength}
          onClick={handleFilterClick}
          activeFilter={activeFilter}
        />
        <FilterPrimaryAttrButton
          primaryAttr={PrimaryAttr.Agility}
          onClick={handleFilterClick}
          activeFilter={activeFilter}
        />
        <FilterPrimaryAttrButton
          primaryAttr={PrimaryAttr.Intelligence}
          onClick={handleFilterClick}
          activeFilter={activeFilter}
        />
        <FilterPrimaryAttrButton
          primaryAttr={PrimaryAttr.Universal}
          onClick={handleFilterClick}
          activeFilter={activeFilter}
        />
      </div>
      <Searchfield searchHero={searchHero} setSearchHero={setSearchHero} />
    </div>
  );
};

export default Navbar;
