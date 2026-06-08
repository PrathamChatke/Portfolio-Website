import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_gi7uro2",
      "template_knklq9v",
      form,
      "eav7Wr-ZDxb_WtAz6"
    )
    .then(() => alert("Message sent!"))
    .catch(() => alert("Error sending message"));
  };

  return (
    <section id="contact" className="p-10 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>

      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 bg-gray-900 rounded"
          onChange={(e) => setForm({...form, name: e.target.value})}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-900 rounded"
          onChange={(e) => setForm({...form, email: e.target.value})}
        />

        <textarea
          placeholder="Message"
          className="w-full p-3 bg-gray-900 rounded"
          onChange={(e) => setForm({...form, message: e.target.value})}
        />

        <button className="bg-blue-600 px-6 py-3 rounded-xl">
          Send Message
        </button>
      </form>
    </section>
  );
}