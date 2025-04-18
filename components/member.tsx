"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ✅ Define types
type Member = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
};

type Section = "Leadership" | "Tech" | "Design" | "Management" | "Content" | "Marketing";

const sections: Section[] = ["Tech", "Design", "Management", "Content", "Marketing"];

const teams: Record<Section, Member[]> = {
  Leadership: [
    { name: "Tanishq Shah", role: "President", image: "/members1.webp", linkedin: "#", email: "mailto:tanishq@example.com" },
    { name: "Ashlesha Deshmukh", role: "General Secretary", image: "/members1.webp", linkedin: "#", email: "mailto:ashlesha@example.com" },
    { name: "Vedant Adsare", role: "Vice President", image: "/members1.webp", linkedin: "#", email: "mailto:vedant@example.com" },
    { name: "Savio Fernandes", role: "Treasurer", image: "/members1.webp", linkedin: "#", email: "mailto:savio@example.com" },
  ],
  Tech: [
    { name: "Atharva Kshirsagar", role: "Tech Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Chirag Bhalotia", role: "Tech Co-Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Oaj Bidnurkar", role: "1337 H4x0r", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Atharv Bhaise", role: "MERN stack developer", image: "/members1.webp", linkedin: "#", email: "#" },
  ],
  Design: [
    { name: "Atharva Kshirsagar", role: "Tech Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Chirag Bhalotia", role: "Tech Co-Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Oaj Bidnurkar", role: "1337 H4x0r", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Atharv Bhaise", role: "MERN stack developer", image: "/members1.webp", linkedin: "#", email: "#" },
  ],
  Management: [
    { name: "Atharva Kshirsagar", role: "Tech Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Chirag Bhalotia", role: "Tech Co-Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Oaj Bidnurkar", role: "1337 H4x0r", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Atharv Bhaise", role: "MERN stack developer", image: "/members1.webp", linkedin: "#", email: "#" },
  ],
  Content: [
    { name: "Atharva Kshirsagar", role: "Tech Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Chirag Bhalotia", role: "Tech Co-Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Oaj Bidnurkar", role: "1337 H4x0r", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Atharv Bhaise", role: "MERN stack developer", image: "/members1.webp", linkedin: "#", email: "#" },
  ],
  Marketing: [
    { name: "Atharva Kshirsagar", role: "Tech Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Chirag Bhalotia", role: "Tech Co-Head", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Oaj Bidnurkar", role: "1337 H4x0r", image: "/members1.webp", linkedin: "#", email: "#" },
    { name: "Atharv Bhaise", role: "MERN stack developer", image: "/members1.webp", linkedin: "#", email: "#" },
  ],
};

export default function Team() {
  const [activeSection, setActiveSection] = useState<Section>("Tech");

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center">
      {/* Leadership Section */}
      <h2 className="text-6xl font-bold mb-14 text-center">Leadership</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full px-4 sm:px-8">
        {teams["Leadership"].map((member, index) => (
          <div key={index} className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-black border-2 border-white rounded-2xl shadow-2xl p-6 text-center flex flex-col items-center transform transition duration-300 hover:scale-105 hover:bg-gray-800">
            <div className="relative w-full h-64 mb-6">
              <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-xl w-full" />
            </div>
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-lg text-gray-400">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href={member.email} className="text-white hover:text-gray-400"><FaEnvelope size={24} /></a>
              <a href={member.linkedin} className="text-white hover:text-gray-400"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaXTwitter size={24} /></a>
            </div>
          </div>
        ))}
      </div>

      {/* Section Buttons */}
      <div className="w-full max-w-7xl mt-16">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xl font-semibold border-b border-gray-600 pb-4 mb-12">
          {sections.map((section) => (
            <button
              key={section}
              className={`px-6 py-2 transition-colors ${
                activeSection === section ? "text-white border-b-4 border-white text-2xl" : "text-gray-400"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full px-4 sm:px-8">
          {teams[activeSection].map((member, index) => (
            <div key={index} className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-black border-2 border-white rounded-2xl shadow-2xl p-6 text-center flex flex-col items-center transform transition duration-300 hover:scale-105 hover:bg-gray-800">
              <div className="relative w-full h-64 mb-6">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-xl w-full" />
              </div>
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-lg text-gray-400">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={member.email} className="text-white hover:text-gray-400"><FaEnvelope size={24} /></a>
                <a href={member.linkedin} className="text-white hover:text-gray-400"><FaLinkedin size={24} /></a>
                <a href="#" className="text-white hover:text-gray-400"><FaXTwitter size={24} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
