import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/uploads/dall-e-2024-11-09-23.10.28-cafe-hero-image.webp')`,
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

      {/* New Component: Why Choose Us */}
      <div className="bg-base-200 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Proč si vybrat nás
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Icon for High Quality */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.105 0-2 .895-2 2 0 .295.08.57.216.816L12 17l1.784-6.184A1.993 1.993 0 0014 10c0-1.105-.895-2-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vysoká kvalita</h3>
              <p>
                Nabízíme prvotřídní služby a produkty, které splní vaše
                očekávání.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Icon for Personal Approach */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0-3.866 3.134-7 7-7m-7 7c0 3.866-3.134 7-7 7m14 0c-1.657 0-3-1.343-3-3s1.343-3 3-3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Individuální přístup
              </h3>
              <p>
                Ke každému klientovi přistupujeme individuálně a s maximální
                péčí.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Icon for Local Support */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h18M3 12h18M3 17h18M6 7v10M10 7v10M14 7v10M18 7v10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Podpora místních podniků
              </h3>
              <p>Spolupracujeme s místními podniky a podporujeme komunitu.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
