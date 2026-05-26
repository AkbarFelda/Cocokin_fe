import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface MissionCardProps {
  icon?: IconDefinition;
  title: string;
  description: string;
  isPrimary?: boolean;
}

const MissionCard: React.FC<MissionCardProps> = ({ icon, title, description, isPrimary = false }) => {
  if (isPrimary) {
    return (
      <div className="p-10 bg-blue-800 text-white rounded-2xl flex flex-col justify-center items-start gap-4 shadow-md text-left relative overflow-hidden">
        <div className="w-64 h-64 absolute -right-10 -top-20 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col gap-3 relative z-10">
          {icon && (
            <span className="text-white/80 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <FontAwesomeIcon icon={icon} /> COMPLIANCE ACCURACY
            </span>
          )}
          <h3 className="text-white text-3xl font-bold font-manrope leading-tight">{title}</h3>
          <p className="text-white/90 text-lg font-light leading-relaxed max-w-xl">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 bg-white rounded-2xl flex flex-col justify-start items-start gap-4 shadow-xs border border-gray-50 text-left">
      {icon && (
        <div className="w-12 h-12 bg-blue-800/10 text-blue-800 rounded-lg flex items-center justify-center text-xl">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      <h3 className="text-zinc-900 text-2xl font-bold font-manrope pt-2">{title}</h3>
      <p className="text-gray-700 text-base font-normal leading-relaxed">{description}</p>
    </div>
  );
};

export default MissionCard;