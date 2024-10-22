import React from 'react'

interface SectionCardProps {
    header: React.ReactNode;
    content: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ header, content }) => {
    return (
        <div className='shadow-lg border border-white rounded-lg bg-white p-6'>
            <div>{header}</div>
            <div>{content}</div>
        </div>
    )
}

export default SectionCard