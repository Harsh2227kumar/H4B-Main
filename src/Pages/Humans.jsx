
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import AnimatedTitle from "../Components/AnimatedTitle";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const OrganizerCard = ({ member }) => {
  const ref = useRef(null);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -25;
    const rotationY = (offsetX / (rect.width / 2)) * 25;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseEnter = () => {
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  const transform = useMotionTemplate`
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(${scale})
  `;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
      className="relative group rounded-3xl bg-[#111111] p-5 text-white shadow-xl flex flex-col items-center justify-between h-[320px] w-[220px] overflow-hidden"
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 z-0 rounded-3xl bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="h-48 w-48 overflow-hidden z-10">
        <img
          src={member.src}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="text-center mt-4 z-10">
        <h3 className="text-xl font-general">{member.name}</h3>
        <p className="text-sm font-robert-regular text-gray-300 mt-1">{member.label}</p>
      </div>

      <div className="flex gap-4 text-2xl text-gray-300 mt-5 z-10">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-sky-400 transition" />
        </a>
      </div>
    </motion.div>
  );
};

const Organizers = () => {
  const organizers = [
    {
      name: "Aarav Shah",
      label: "Lead Organizer",
      src: "/img/human1.png",
    },
    {
      name: "Sneha Patel",
      label: "Design Lead",
      src: "/img/human2.png",
    },
    {
      name: "Rohan Mehta",
      label: "Tech Head",
      src: "/img/human1.png",
    },
    {
      name: "Ishita Verma",
      label: "Sponsorship",
      src: "/img/human2.png",
    },
    {
      name: "Devansh Gupta",
      label: "Operations",
      src: "/img/human1.png",
    },
    {
      name: "Mira Roy",
      label: "Marketing",
      src: "/img/human2.png",
    },
    {
      name: "Ritik Singh",
      label: "Event Coordinator",
      src: "/img/human1.png",
    },
    {
      name: "Anaya Joshi",
      label: "Logistics Lead",
      src: "/img/human2.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center">
      <AnimatedTitle
        title="<b>Humans</b>"
        containerClass="mt-8 text-black text-center reveal-element"
      />
      <div className="mt-16 w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 max-w-6xl w-full justify-items-center">
          {organizers.map((member, index) => (
            <OrganizerCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizers;
