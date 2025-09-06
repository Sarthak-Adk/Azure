import { useState } from "react";
import backgroundImg from "../assets/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const [expanded, setExpanded] = useState({});


  return (
    <div className="">
      <div
        className="bg-cover t bg-center h-[460px]  bg-gray-200 py-24 px-6"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
    </div>
      <div className="bg-white text-gray-800 py-12 px-[140px]">
        <div className="container mx-auto px-4 my-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h1 className="text-xl text-gray-600 font-bold mb-4">
                WE ARE HERE TO HELP YOU
              </h1>
              <p className="w-[500px] text-6xl mb-4">
                <span className="font-extrabold text-[#fd0d34]">Discuss</span> Your Thought
                Solutions
              </p>
              <p className="w-[500px] text-lg mt-7 mb-10">
                Are you looking for top-quality solutions tailored to your needs
                ? Reach out to us
              </p>
              <div className="flex flex-col gap-8 pl-1">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-2xl text-black"
                  />
                  <div className="text-lg flex gap-2">
                    <p className="font-bold text-xl text-[#fd0d34]">Email:</p>
                    <p>codearena@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-2xl text-black"
                  />
                  <div className="text-lg flex gap-2">
                    <p className="font-bold text-xl text-[#fd0d34]">Phone:</p>
                    <p>+977-9876543210</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-2xl text-black"
                  />
                  <div className="text-lg flex gap-2">
                    <p className="font-bold text-xl text-[#fd0d34]">Location:</p>
                    <p>Bharatpur-10, Chitwan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className=" rounded-3xl shadow-[0px_0px_7px_gray] p-8 ">
                <h2 className="text-2xl font-bold text-[#fd0d34] ">
                  Get in Touch
                </h2>
                <p className="text-gray-800 mb-6">You can reach us anytime</p>

                <form onSubmit={handleSubmit} className="text-sm">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="border border-gray-500 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="border border-gray-500 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                 <div className="grid grid-cols-2 gap-4 mb-4">
                   <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border border-gray-500 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 2a1 1 0 011 1v2.1a.5.5 0 00.15.35l7 7a.5.5 0 00.35.15H16a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm5.7 1.91A6.97 6.97 0 0110 9.893 6.97 6.97 0 0114.293 6.1c.177-.178.36-.36.552-.552A2.5 2.5 0 0016 5V4c0-.55-.21-.975-.552-1.31A2.5 2.5 0 0013.148 2.552 7.02 7.02 0 009.028 3.09z"
                          />
                        </svg>
                      </div>
                      <select
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border border-gray-500 rounded-md pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                      >
                        <option value="+977">+977 (Nepal)</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+91">+91 (India)</option>
                      </select>
                    </div>
                  </div>

                 </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="border border-gray-500 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter your message"
                      maxLength="120"
                    ></textarea>
                    <p className="text-gray-800 text-sm mt-1">0/120</p>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#fd0d34] text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Submit
                  </button>

                  <p className="text-gray-800 text-center mt-4 text-sm">
                    By contacting us, you agree to our{" "}
                    <a href="#" className="text-black font-bold">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-black font-bold">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="location-container mt-12 flex flex-col md:flex-row px-4">
          <div className="locationMap md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113085.33583457788!2d84.32349143692478!3d27.658047437493362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e0!3m2!1sen!2snp!4v1740031122154!5m2!1sen!2snp"
              referrerPolicy="no-referrer-when-downgrade"
              width="100%"
              height="450"
              loading="lazy"
              title="Bharatpur. Location"
            ></iframe>
          </div>

          <div className="location  md:w-1/2 md:pl-14 p-18  ">
            <h2 className="text-4xl text-[#fd0d34] font-bold mb-4">Our Location</h2>
            <p className="text-lg font-medium text-gray-700 mb-2">
              Connecting Near and Far
            </p>
            <h3 className="text-2xl text-black font-bold mb-2">Headquarters</h3>
            <p className="text-gray-700 text-lg">Code Arena</p>
            <p className="text-gray-700 text-lg">Chitwan, Nepal</p>
            <p className="text-gray-700 text-lg">TechByte</p>
            <p className="text-gray-700 text-lg">Bharatpur, Ward-12</p>
            <a
              href=""
              className="text-blue-500 text-2xl underline mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
       <section className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl font-bold text-black">
            Let’s connect and{" "}
            <span className="text-[#fd0d34]">turn your vision into reality.</span>
          </h2>
          <p className="text-gray-800 mt-4">
            We are available from 10:00 AM to 5:00 PM, Sunday to Friday.
          </p>
        </div>

        {/* Right Side Contact */}
        <div className="mt-8 md:mt-0 text-center md:text-right">
          <p className="uppercase text-sm tracking-wide text-gray-900">
            Reach out now!
          </p>
          <h3 className="text-3xl font-bold text-black mt-2">
            9801848492
          </h3>
        <Link to="">
          <button className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition">
            Let’s Start Conversation
          </button>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};
export default Contact;

