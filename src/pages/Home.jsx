import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/uploads/kbc-bubbles-1.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content px-4">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Welcome to Cafe Demo
            </h1>
            <p className="mb-5">
              Your cozy corner for the best coffee in town.
            </p>
            <Link to="/menu" className="btn btn-primary">
              View Menu
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Our Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img src="/path-to-image.jpg" alt="Specialty" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Specialty Name</h2>
              <p>Description of the specialty.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
