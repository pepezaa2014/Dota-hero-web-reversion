import React from "react";
import { getImageName, PrimaryAttr } from "../../constants/primary-attr";
import Image from "next/image";

interface PrimaryButtonProps {
  primaryAttr: PrimaryAttr;
  onClick: (attr: PrimaryAttr) => void;
  activeFilter: PrimaryAttr | null;
}

const FilterPrimaryAttrButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  primaryAttr,
  activeFilter,
}) => {
  return (
    <button
      className={`h-10 w-10 flex items-center justify-center bg-tertiaryColor ${
        activeFilter === primaryAttr ? "opacity-100" : "opacity-60"
      }`}
      onClick={() => onClick(primaryAttr)}
    >
      <Image
        width={48}
        height={48}
        src={`/images/${getImageName(primaryAttr)}`}
        className="object-cover h-full w-full p-2"
        alt={primaryAttr}
      />
    </button>
  );
};

export default FilterPrimaryAttrButton;
