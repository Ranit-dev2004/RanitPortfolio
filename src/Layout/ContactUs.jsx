import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://portfolioback-1-o107.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!I’ll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("⚠️ " + (data.error || "Failed to send message"));
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20 space-y-24">
      <div className="max-w-3xl w-full bg-[#111] border border-gray-700 rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-serif text-white text-center mb-6 tracking-wide">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-10 font-light">
          I'd love to hear from you. Whether it’s a question, feedback, or an
          opportunity, reach out and I’ll respond with care.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm uppercase text-gray-400 mb-2 tracking-wider">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm uppercase text-gray-400 mb-2 tracking-wider">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm uppercase text-gray-400 mb-2 tracking-wider">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-semibold tracking-wide py-3 rounded-lg shadow hover:bg-gray-200 transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-10 font-light">
          © {new Date().getFullYear()} Ranit Saha — All Rights Reserved.
        </p>
      </div>

      <div className="max-w-2xl w-full bg-[#111] border border-gray-700 rounded-2xl shadow-xl p-10 text-center">
        <h2 className="text-3xl font-serif text-white mb-4 tracking-wide">
          Download My Resume
        </h2>
        <p className="text-gray-400 mb-8 font-light">
          Want to know more about my skills and experience?  
          Download my resume below.
        </p>
        <a
          href="/Ranit_Saha_Resume.pdf"
          download
          className="inline-block bg-white text-black font-semibold tracking-wide py-3 px-8 rounded-lg shadow hover:bg-gray-200 transition-all"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
