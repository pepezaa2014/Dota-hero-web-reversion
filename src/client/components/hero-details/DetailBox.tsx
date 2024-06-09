import React, { ReactNode } from "react";

interface DetailBoxProps {
  title: string;
  children: ReactNode;
}

const DetailBox: React.FC<DetailBoxProps> = ({ title, children }) => {
  return (
    <div className="flex flex-1 flex-col px-12 items-center justify-between">
      <div className="flex w-full justify-center">{children}</div>
      <div className="flex text-secondaryColor justify-end items-end">
        {title}
      </div>
    </div>
  );
};

export default DetailBox;
