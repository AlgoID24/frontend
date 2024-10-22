import React from "react";
import { IconType } from "react-icons/ai";

interface SavingsProps {
  text: string;
  count: string;
  income: string;
  IconComponent: IconType;
}

const SavingsCard: React.FC<SavingsProps> = ({
  text,
  count,
  income,
  IconComponent,
}) => {
  return (
    <div className="w-full p-4 rounded-lg flex items-center justify-between">
      <div className="space-y-2 border border-1 border-gray-200 rounded-lg p-4">
        <div className='grid grid-cols-2 gap-4 '>
          {/* Icon */}
          <div className="flex items-center justify-between">
          <div>
            <IconComponent className="w-6 h-6 mr-2 text-gray-500" />
          </div>
          <div>
            <p className="text-black text-base">{text}</p>
            <p className="text-sm text-primary ">Income {income} %</p>
          </div>
          </div>


          {/* Amoount */}
          <div className='pt-2'>
          <div className="flex justify-center items-center text-sm text-gray-500 space-x-6">N {count}</div>

          </div>
        </div>
      </div>
    </div>
  );
};


export default SavingsCard;