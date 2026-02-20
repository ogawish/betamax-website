import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MainHeader from "../layout/MainHeader";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className="h-svh bg-[url(/images/main-background.jpg)] bg-center bg-fixed">
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <div className="relative z-20">
                <MainHeader useWhiteHeader={true} />
            </div>

            <div className="relative z-20 flex items-center justify-center px-6">
                <div className="text-center p-8 bg-gray-200/30 max-w-4xl backdrop-blur-xs">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        We Transform Buildings with Premium Aluminum Solutions
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Leading the industry in architectural aluminum systems
                        and facade solutions
                    </p>
                    <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg font-medium">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Betamax Aluminum</title>;
