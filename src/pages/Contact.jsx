import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>{/* Contact info and map */}</div>
        <div>{/* Contact form */}</div>
      </div>
    </div>
  );
}

export default Contact;
