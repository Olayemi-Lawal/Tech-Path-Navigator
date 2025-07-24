import React from "react";
import { Link } from "react-router-dom";

const heroImage = "https://source.unsplash.com/featured/?technology,ai";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 sm:px-6 md:px-12 py-12 bg-background">
      {/* Text Section */}
      <div className="flex-1 w-full text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-primary">
          Discover Your Ideal Tech Career Path
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
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
      <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
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


