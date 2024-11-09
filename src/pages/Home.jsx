import React from "react";

function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `public/uploads/kbc-bubbles-1.png` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Cafe Demo</h1>
            <p className="mb-5">
              Your cozy corner for the best coffee in town.
            </p>
            <a href="/menu" className="btn btn-primary">
              View Menu
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img src="public/uploads/kbc-bubbles-1.png" alt="Specialty 1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Specialty Coffee</h2>
              <p>Experience the finest beans brewed to perfection.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img src="public/uploads/kbc-bubbles-1.png" alt="Specialty 2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Delicious Pastries</h2>
              <p>Freshly baked pastries to complement your coffee.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img src="public/uploads/kbc-bubbles-1.png" alt="Specialty 3" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Cozy Ambiance</h2>
              <p>A comfortable space to relax and unwind.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
