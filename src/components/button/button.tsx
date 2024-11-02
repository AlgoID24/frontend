import React from 'react'
import { IconType } from "react-icons/ai";


interface IconButtonProps {
    text: string;
    icon: IconType;
}

const IconButton: React.FC<IconButtonProps> = ({
    text,
    icon,
}) => {
    return (
        <div className='w-[200px] bg-gray-100 shadow-lg border border-white p-4 rounded-lg flex justiify-between items-center gap-2'>
            <div className='text-primary'>{icon }</div>
            <div className='text-gray-500'>{ text}</div>
        </div>
    )
}

export default IconButton;