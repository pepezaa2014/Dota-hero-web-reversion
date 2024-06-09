import React, { ReactNode } from "react";

interface StatFormProps {
  title: String;
  children: ReactNode;
}

const StatForm: React.FC<StatFormProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg font-bold text-secondaryColor mb-2">{title}</p>
      {children}
    </div>
  );
};

export default StatForm;
