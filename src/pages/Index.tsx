import React from "react";
import { Link } from "react-router-dom";
// import heroImage from "../assets/hero-image.png"; // Make sure this image exists in /src/assets
const heroImage = "https://source.unsplash.com/featured/?technology,ai";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 bg-background">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
          Discover Your Ideal Tech Career Path
        </h1>
        <p className="text-muted-foreground text-lg">
          Explore personalized recommendations tailored to your interests and goals.
        </p>
        <Link
          to="/path"
          className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 transition duration-300"
        >
          Get Started
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-md md:max-w-lg mx-auto">
        <img
          src={heroImage}
          alt="Career Path"
          className="w-full h-auto object-contain animate-fade-in"
        />
      </div>
    </section>
  );
};

export default Home;

