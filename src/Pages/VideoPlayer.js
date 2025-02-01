import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const media = [
    "https://media.giphy.com/media/Jo1Ox5v5pV9g9ati4S/giphy.gif"
];

const VideoPlayer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    // Countdown Timer for 42 days
    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 42); // Target is 42 days from now

        const timer = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now; // Calculate the time difference in milliseconds

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
            } else {
                const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
                const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
                const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
                const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black relative overflow-hidden">
            {/* Full Screen Transparent Dark Gray Background */}
            <div className="absolute inset-0 bg-gray-800 opacity-80 z-10"></div>

            {/* Caption */}
            <div className="absolute top-10 sm:top-20 z-20 text-yellow-200 text-xl sm:text-3xl md:text-4xl font-semibold px-4 py-2 text-center w-full">
                Your pet's happiness is our top priority!
            </div>

            {/* Tagline - Below Caption */}
            <div className="absolute top-32 sm:top-48 z-20 text-white text-sm sm:text-xs md:text-lg font-semibold px-4 py-2 text-center w-full flex justify-center items-center">
                Our online pet store will offer high-quality pet food, medicine, and supplies, carefully curated to ensure your furry friend's well-being. Stay tuned for our launch and get ready to give your pet the best.
            </div>

            {/* Coming Soon Text */}
            <div
                className="absolute top-72 sm:top-96 md:bottom-32 z-20 text-white text-5xl sm:text-6xl md:text-8xl font-bold px-6 py-3 rounded-lg animate-[moveText_5s_linear_infinite] flex items-center"
                style={{ textShadow: "6px 6px 10px rgba(104, 72, 72, 0.8)" }}
            >
                <span className="mr-2">COMING</span>
                <span>SOON</span>
            </div>

            {/* Countdown Timer */}
            <div
                className="absolute z-20 text-white text-3xl sm:text-2xl md:text-7xl font-bold px-4 py-2 sm:px-6 sm:py-3 mt-40 sm:mt-52 bg-purple-500 rounded-3xl sm:rounded-lg shadow-lg text-center w-4/5 sm:w-auto
                md:top-10 md:left-10 md:transform md:translate-x-0 md:translate-y-0"
            >
                <div className="flex justify-between items-center space-x-3 sm:space-x-1">
                    <div>
                        <div className="text-4xl sm:text-3xl md:text-5xl">{timeLeft.days}:</div>
                        <div className="text-sm sm:text-base md:text-lg text-gray-200">Days</div>
                    </div>
                    <div>
                        <div className="text-4xl sm:text-3xl md:text-5xl">{timeLeft.hours}:</div>
                        <div className="text-sm sm:text-base md:text-lg text-gray-200">Hours</div>
                    </div>
                    <div>
                        <div className="text-4xl sm:text-3xl md:text-5xl">{timeLeft.minutes}:</div>
                        <div className="text-sm sm:text-base md:text-lg text-gray-200">Min</div>
                    </div>
                    <div>
                        <div className="text-4xl sm:text-3xl md:text-5xl">{timeLeft.seconds}</div>
                        <div className="text-sm sm:text-base md:text-lg text-gray-200">Sec</div>
                    </div>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="absolute z-20 bottom-10 sm:bottom-16 md:bottom-16 flex justify-center space-x-4 sm:space-x-2 w-full">
                <ul className="flex space-x-4 justify-center">
                    <li className="bg-white p-3 rounded-md shadow-lg">
                        <div className="text-blue-600 text-2xl sm:text-xl">
                            <FaFacebookF />
                        </div>
                    </li>
                    <li className="bg-white p-3 rounded-md shadow-lg">
                        <div className="text-blue-400 text-2xl sm:text-xl">
                            <FaTwitter />
                        </div>
                    </li>
                    <li className="bg-white p-3 rounded-md shadow-lg">
                        <div className="text-pink-500 text-2xl sm:text-xl">
                            <FaInstagram />
                        </div>
                    </li>
                    <li className="bg-white p-3 rounded-md shadow-lg">
                        <div className="text-blue-700 text-2xl sm:text-xl">
                            <FaLinkedinIn />
                        </div>
                    </li>
                </ul>
            </div>

            {/* Powered by Text */}
            <div className="absolute z-20 bottom-4 sm:bottom-6 text-center w-full text-sm sm:text-xs text-gray-200 font-medium">
                POWERED BY, Nasraax Tech Pvt Ltd
            </div>

            {/* Subscribe Section */}
            <div className="absolute z-20 bottom-24 sm:bottom-32 w-full mt-20 flex justify-center items-center space-x-2
                md:absolute md:top-10 md:right-10 md:flex md:justify-end md:items-center md:space-x-4
                sm:bottom-32 sm:top-96">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 rounded-md text-black text-sm sm:text-xs md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    className="bg-purple-500 text-white p-2 rounded-md text-sm sm:text-xs md:text-base hover:bg-purple-600 transition"
                >
                    Subscribe
                </button>
            </div>

            {/* GIF Display */}
            <img
                className="w-full h-full rounded-lg shadow-xl shadow-gray-500 object-cover transition-opacity duration-500 relative"
                src={media[0]}
                alt="Full Screen GIF"
            />
        </div>
    );
};

export default VideoPlayer;
