import * as React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { StaticImage } from "gatsby-plugin-image";

type MainHeaderProps = {
    useWhiteHeader?: boolean;
};

const MainHeader: React.FC<MainHeaderProps> = ({ useWhiteHeader }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="w-full px-6 py-2">
            <div className="mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <StaticImage
                        src="../images/logo-white.png"
                        alt="Betamax Aluminum"
                        placeholder="blurred"
                        className="h-20 w-30 md:h-40 md:w-50"
                    />
                </div>

                <div className="flex gap-x-4">
                    {/* Contact Us Button */}
                    <button className="text-base bg-white px-4 rounded-full border-1 border-gray-200 hover:bg-blue-300 transition-colors">
                        Contact Us
                    </button>

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-lg transition-shadow space-y-1 pointer"
                        aria-label="Toggle menu"
                    >
                        <RxHamburgerMenu />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
