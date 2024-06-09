import React from "react";

interface StatBarProps {
  mainDetail: string;
  plusDetail: string;
  gradientLeft: string;
  gradientRight: string;
}

const StatBar: React.FC<StatBarProps> = ({
  mainDetail,
  plusDetail,
  gradientLeft,
  gradientRight,
}) => {
  return (
    <div
      className={`flex flex-row bg-gradient-to-r from-${gradientLeft} to-${gradientRight} items-center w-40 font-bold relative py-1`}
    >
      <div className="text-base text-center absolute w-full">{mainDetail}</div>
      <div className="flex text-xs text-tertiaryColor justify-end mr-4 w-full">
        +{plusDetail}
      </div>
    </div>
  );
};

export default StatBar;
