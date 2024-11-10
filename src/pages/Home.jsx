import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Existing Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/uploads/dall-e-cafe-hero-image.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content px-4">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Vítejte v Demo Kavárně
            </h1>
            <p className="mb-5">Nejlepší kafe v Brně v útulném prostředí</p>
            <Link to="/menu" className="btn btn-primary">
              Naše nabídka
            </Link>
          </div>
        </div>
      </div>

      {/* Existing Specialties Section */}
      <div className="container mx-auto my-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Naše speciality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="/uploads/dall-e-coffee-latte-cappuccino.webp"
                alt="Kávička 1"
                className="w-full h-auto"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kávička 1</h2>
              <p>Káva se srdíčkem.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="/uploads/dall-e-espresso-shot.webp"
                alt="Kávička 2"
                className="w-full h-auto"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kávička 2</h2>
              <p>Káva old-school.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="/uploads/dall-e-iced-coffee.webp"
                alt="Kávička 3"
                className="w-full h-auto"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kávička 3</h2>
              <p>Ledová káva</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Component: About Us */}
      <div className="bg-base-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">O nás</h2>
          <p className="mb-6">
            Demo Kavárna je rodinná kavárna v srdci Brna, která nabízí nejlepší
            kávu a domácí zákusky. Přijďte si vychutnat příjemnou atmosféru a
            milý personál.
          </p>
          <Link to="/about" className="btn btn-secondary">
            Více o nás
          </Link>
        </div>
      </div>

      {/* New Component: Opening Hours and Location */}
      <div className="bg-base-200 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Opening Hours */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                Otevírací doba
              </h2>
              <ul className="text-center md:text-left">
                <li>Pondělí – Pátek: 7:00 – 18:00</li>
                <li>Sobota: 8:00 – 14:00</li>
                <li>Neděle: Zavřeno</li>
              </ul>
            </div>
            {/* Location Map */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                Kde nás najdete
              </h2>
              <div className="w-full h-64">
                <iframe
                  title="Mapa kavárny"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dXXXXXXX"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
