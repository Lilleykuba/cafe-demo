import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/uploads/dall·e-2024-11-09-23.10.28-a-warm-inviting-hero-image-for-a-cafe-website.-the-scene-shows-a-cozy-modern-cafe-interior-with-a-mix-of-wooden-and-industrial-style-decor.-soft-am.webp')`,
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
              <img
                src="/uploads/dall·e-2024-11-09-23.13.56-a-beautiful-close-up-ad-image-of-a-coffee-latte-cappuccino-in-a-stylish-ceramic-cup-with-creamy-foam-art-on-top-in-a-heart-shape.-the-cup-is-set-on-.webp"
                alt="Specialty"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kávička 1</h2>
              <p>Káva se srdíčkem.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="/uploads/dall·e-2024-11-09-23.30.43-a-close-up-ad-image-of-an-espresso-shot-served-in-a-small-ceramic-cup-with-a-rich-dark-crema-on-top.-the-cup-is-placed-on-a-rustic-wooden-surface-wi.webp"
                alt="Specialty"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kávička 2</h2>
              <p>Káva old-school.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="/uploads/dall·e-2024-11-09-23.30.46-a-vibrant-ad-image-of-an-iced-coffee-served-in-a-tall-glass-filled-with-ice-cubes-and-rich-creamy-layers-of-coffee-and-milk.-the-drink-is-topped-with.webp"
                alt="Specialty"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kávička 3</h2>
              <p>Ledová káva</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
