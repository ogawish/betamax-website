import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MainHeader from "../layout/MainHeader";

const PortfolioPage: React.FC<PageProps> = () => {
    return (
        <div>
            <h2>asdas</h2>
            <MainHeader />
        </div>
    );
};

export default PortfolioPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
