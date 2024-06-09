import React from "react";
import { getRoleName, Role } from "../../constants/roles";

interface RolesProps {
  containRoles: string[];
}

const Roles: React.FC<RolesProps> = ({ containRoles }) => {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-4">
      {Object.values(Role).map((role) => {
        const isSelected = containRoles.includes(role);

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
  );
};

export default Roles;
