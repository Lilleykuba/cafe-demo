import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p>Address: 123 Coffee Lane, Bean Town</p>
          <p>Email: info@cafedemo.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="mt-8">
            <iframe
              title="Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with your actual map link
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
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
                <span className="label-text">Your Email</span>
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
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-full">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
