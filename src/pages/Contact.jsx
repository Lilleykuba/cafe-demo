// src/pages/Contact.jsx

import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">O Nás</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information and Map */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Stavte se k nám</h2>
          <p className="mb-2">
            <span className="font-semibold">Adresa:</span> 123 Coffee Lane, Bean
            Town
          </p>
          <p className="mb-2">
            <span className="font-semibold">Telefon:</span> +420 123456789
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> demokavarna@gmail.com
          </p>
          <p className="mb-4">
            Máme otevřeno:{" "}
            <span className="font-semibold">Pondělí - Pátek, 8:00 - 18:00</span>
            .
          </p>
          {/* Embedded Google Map */}
          <div className="mt-8">
            <iframe
              title="Cafe Demo Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197378999563!2d-122.4194150846815!3d37.7749297797599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064bfba1e6f%3A0x4e9b6b0faffc7d7d!2sCoffee%20Shop!5e0!3m2!1sen!2sus!4v1616086427584!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Napište nám</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-4"
          >
            {/* Hidden Input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Vaše Jméno</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Váš Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Zpráva</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                rows="5"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-full">
                Odeslat Zprávu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
