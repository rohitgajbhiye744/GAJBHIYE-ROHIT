import { useState } from "react";
import logo from "../assets/logo.png"; // Ensure the path to your logo is correct
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -100; // Adjust if necessary to fit your header's height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="bg-black text-white font-sans">
            <nav className="fixed inset-x-0 top-0 z-50 w-full"> {/* Adjust width here */}
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-3xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex"> {/* Increase max-w to 6xl or another value */}
                    <div className="flex items-center justify-between gap-6">
                        <div>
                            <a href="#">
                                <img src={logo} width={150} alt="logo" />
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            className="text-small hover:text-yellow-400" 
                                            href={item.href} 
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                                {/* Adding the Resume button */}
                                <li>
                                    <a 
                                        href="/path/to/your/resume.pdf" // Update this path to your resume
                                        className="text-small hover:text-yellow-400"
                                        target="_blank" // Opens in a new tab
                                        rel="noopener noreferrer" // For security
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={90} className="m-2" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className="m-2 h-6 w-5" /> 
                                ) : (
                                    <FaBars className="m-2 h-6 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href} 
                                        className="block w-full text-lg hover:text-yellow-400" 
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            {/* Resume Button for Mobile */}
                            <li>
                                <a 
                                    href="/path/to/your/resume.pdf" // Update this path to your resume
                                    className="block w-full text-lg hover:text-yellow-400"
                                    target="_blank" // Opens in a new tab
                                    rel="noopener noreferrer" // For security
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
