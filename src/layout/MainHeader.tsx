import * as React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { StaticImage } from "gatsby-plugin-image";

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full px-6 py-2">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <StaticImage
            src="../images/logo.png"
            alt="Betamax Aluminum"
            height={70}
            width={120}
            placeholder="blurred"
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
