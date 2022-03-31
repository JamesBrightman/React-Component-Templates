import React, { FC } from 'react';

interface PageHeaderProps {
}

export const PageHeader: FC<PageHeaderProps> = () => {
    return <div className="w-full text-4xl font-bold shadow-lg py-4 pl-8">{"Header"}</div>;
};