import React, { FC, HTMLAttributes } from 'react';
import { PageHeader } from "./PageHeader";

interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
}

export const PageWrapper: FC<PageWrapperProps> = ({children}) => {

    return <div className="flex flex-col">
        <PageHeader/>
        <div>
            {children}
        </div>
    </div>;
};