import React from "react";
import { IconType } from "react-icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface CountCardProps {
  count: number;
  text: string;
  IconComponent?: IconType;
  percentageChange: number;
}

const CountCard: React.FC<CountCardProps> = ({
  count,
  text,
  IconComponent,
  percentageChange,
}) => {
  const isIncrease = percentageChange > 30;

  return (
    <div className="w-full bg-white shadow-lg border border-white p-4 rounded-lg flex items-center justify-between">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            {IconComponent && (
              <IconComponent className="w-6 h-6 mr-2 text-gray-500" />
            )}
          </div>
          <div>
            <p className="text-sm text-primary">{text}</p>
          </div>
        </div>
        <p className="text-2xl font-normal">N{count}</p>
        {percentageChange !== undefined && (
          <div className="flex items-center text-sm">
            {isIncrease ? (
              <AiOutlinePlus className="w-4 h-4 text-green" />
            ) : (
              <AiOutlineMinus className="w-4 h-4 text-red" />
            )}
            <span
              className={`ml-1 ${
                isIncrease ? "text-green-500" : "text-red-500"
              }`}
            >
              {Math.abs(percentageChange)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountCard;
