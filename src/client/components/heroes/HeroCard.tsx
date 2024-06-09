import Link from "next/link";
import Hero from "../../models/hero-model";
import DotaPortrait from "../../constants/dota-portrait";
import { getImageName as getPrimaryAttrImageName } from "../../constants/primary-attr";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  const heroNameEdit = hero.img?.split("/").pop()?.split("?")[0];
  const primaryAttrImage = getPrimaryAttrImageName(hero.primary_attr);

  return (
    <div className="rounded-xl shadow-xl duration-300 hover:scale-105 bg-gradient-to-r from-gray-800 to-gray-900 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 h-full ">
      <Link href={{ pathname: "/hero-info", query: hero }} key={hero.id}>
        <div className="p-4 items-center justify-end flex flex-col h-full">
          <img
            src={`${DotaPortrait}${heroNameEdit}`}
            className="mb-4"
            alt={`${hero.localized_name}`}
          />
          <div className="flex flex-row items-center justify-center">
            <div className="flex justify-center w-8 mr-2">
              <img
                src={`images/${primaryAttrImage}`}
                className="object-cover"
                alt={primaryAttrImage}
              />
            </div>
            <p className="text-lg font-bold text-center">
              {hero.localized_name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeroCard;
