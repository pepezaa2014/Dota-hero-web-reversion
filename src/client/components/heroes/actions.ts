import { useMemo, useState } from "react";
import { PrimaryAttr } from "../../constants/primary-attr";
import Hero from "../../models/hero-model";

export const useFilteredHeroes = (
  heroes: Hero[],
  searchHero: string,
  activeFilter: PrimaryAttr | null
) => {
  const filteredHeroes = useMemo(() => {
    return heroes
      .filter((hero) =>
        hero.localized_name?.toLowerCase().includes(searchHero.toLowerCase())
      )
      .filter((hero) =>
        activeFilter ? hero.primary_attr === activeFilter : true
      );
  }, [heroes, searchHero, activeFilter]);

  return filteredHeroes;
};

export const useHandleFilterClick = () => {
  const [activeFilter, setActiveFilter] = useState<PrimaryAttr | null>(null);

  const handleFilterClick = (attr: PrimaryAttr) => {
    setActiveFilter(activeFilter === attr ? null : attr);
  };

  return { activeFilter, handleFilterClick };
};
