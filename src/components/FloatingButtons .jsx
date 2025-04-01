import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp ,FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        const footer = document.getElementById("footer");
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) {
                observer.unobserve(footer);
            }
        };
    }, []);

    // Handle Scroll Event for Scroll to Top Button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300); // Show button after 300px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to Scroll to Top Smoothly
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`fixed bottom-10 right-5 flex flex-col gap-3 z-50 transition-opacity ${isFooterVisible ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}>
            {/* Phone Button */}
            <a
                href="tel:8383801636"
                className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
            >
                <FaPhoneAlt className="text-2xl" />
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/+918383801636"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
            >
                <FaWhatsapp className="text-2xl" />
            </a>

            {/* Scroll to Top Button */}
            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                    <FaArrowUp className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default FloatingButtons;
