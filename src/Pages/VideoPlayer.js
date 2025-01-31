import React, { useState, useEffect } from "react";

const media = [
    "https://th.bing.com/th/id/R.1bad5bf0afee560b8f4863970cc053f0?rik=0i6P6b1oGvnYPg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKcn%2fXbg%2fKcnXbgn6i.gif&ehk=MHjMyv%2bLUJ7zylzOaZiXkXCuEDnyCFeqxsbQ9Q4xSpg%3d&risl=&pid=ImgRaw&r=0",
    "https://cdn.dribbble.com/users/4107408/screenshots/9974636/media/3410a2ae238a2a8a5a4d37e3a62f295a.gif",
    "https://i.pinimg.com/originals/47/ca/bb/47cabbd4f6c516fd96b57442017f8450.gif",
    "https://cdn.dribbble.com/users/1201194/screenshots/7197395/media/d5d300c76b56aa290f34cfc39de99c2d.gif",
    "https://cdn.dribbble.com/users/3601595/screenshots/17036371/media/24a2e85aaebf6bd51ca1c2478f44024d.gif",
    "https://cdn.dribbble.com/users/225068/screenshots/2224869/dog.gif",
    "https://clipart-library.com/images/zcX5gEbMi.gif",
];

const productCategories = ["Pets", "Pet Foods", "Pet Medicines", "Pet Accessories"];


const VideoPlayer = () => {
    const [index, setIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState("");
    const isVideo = media[index].includes("youtube.com");

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % media.length);
        }, isVideo ? 8000 : 3000);

        return () => clearInterval(interval);
    }, [index]);

    // Countdown Timer for 42 days
    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 42); // Target is 42 days from now

        const timer = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now; // Calculate the time difference in milliseconds

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft("EXPIRED");
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setTimeLeft(`${days}D ${hours}H ${minutes}M ${seconds}S`);
            }
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black relative">
            {/* Full Screen Transparent Dark Gray Background */}
{/* Full Screen Transparent Dark Gray Background */}
<div className="absolute inset-0 bg-gray-800 opacity-80 z-10"></div>


            {/* Product Categories - All in One Row */}
            {/* Product Categories - 2 per Row */}
            <div className="absolute z-20 top-32 text-blue-950 text-lg sm:text-2xl md:text-3xl font-semibold px-1 py-1 grid grid-cols-2 gap-6 text-center">
                {productCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-blue-950 bg-opacity-70 text-white p-3 rounded-xl shadow-lg font-bold"
                    >
                        {category}
                    </div>
                ))}
            </div>





            {/* Coming Soon Text with Horizontal Movement */}
            <div
                className="absolute z-20 text-white text-6xl sm:text-8xl md:text-8xl font-bold px-6 py-3 rounded-lg animate-[moveText_5s_linear_infinite] flex items-center"
                style={{
                    textShadow: "6px 6px 10px rgba(104, 72, 72, 0.8)",
                }}
            >
                <span className="mr-2">COMING</span>
                <span>SOON</span>
            </div>



            {/* Countdown Timer with Gray Background */}
            <div
                className="absolute z-20 text-white text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold px-4 py-2 sm:px-6 sm:py-3 mt-48 bg-purple-500 rounded-3xl sm:rounded-lg shadow-lg"
                style={{
                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
                }}
            >
                {timeLeft}
            </div>

            {/* CONTACT US Button Below Timer */}
            <a href="mailto:anirban.sarkar.kolkata@gmail.com" className="absolute z-20 bottom-16 text-white bg-blue-900 text-lg mb-4 font-bold px-4 py-2 rounded-full shadow-lg">
                REACH OUT TO US
            </a>



            {isVideo ? (
                <iframe
                    className="w-[80%] h-auto rounded-lg shadow-xl shadow-gray-500 relative"
                    src={media[index]}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                ></iframe>
            ) : (
                <img
                    className="w-full h-full rounded-lg shadow-xl shadow-gray-500 object-cover transition-opacity duration-500 relative"
                    src={media[index]}
                    alt="Full Screen GIF"
                />
            )}
        </div>
    );
};

export default VideoPlayer;
