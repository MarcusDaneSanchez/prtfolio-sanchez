import sparkThumb from '../assets/Projects/SPARK/Thumbnail.png';
import spark1 from '../assets/Projects/SPARK/Gallery/image copy.png';
import spark2 from '../assets/Projects/SPARK/Gallery/image.png';
import spark3 from '../assets/Projects/SPARK/Gallery/WhatsApp Image 2026-05-23 at 8.14.36 PM (1).jpeg';
import spark4 from '../assets/Projects/SPARK/Gallery/WhatsApp Image 2026-05-23 at 8.14.36 PM.jpeg';
import spark5 from '../assets/Projects/SPARK/Gallery/WhatsApp Image 2026-05-23 at 8.14.37 PM (1).jpeg';
import spark6 from '../assets/Projects/SPARK/Gallery/WhatsApp Image 2026-05-23 at 8.14.37 PM.jpeg';

import dsciplrThumb from '../assets/Projects/DSCIPLR/Thumbnail.png';
import dsciplr1 from '../assets/Projects/DSCIPLR/Gallery/image copy.png';
import dsciplr2 from '../assets/Projects/DSCIPLR/Gallery/image.png';

import gdgThumb from '../assets/Projects/GDGOC/Thumbnail.png';
import gdg1 from '../assets/Projects/GDGOC/Gallery/image copy.png';
import gdg2 from '../assets/Projects/GDGOC/Gallery/image.png';

import xplorexThumb from '../assets/Projects/XPlorex/Thumbnail.png';
import xplorex1 from '../assets/Projects/XPlorex/Gallery/Xplorex About Us.png';
import xplorex2 from '../assets/Projects/XPlorex/Gallery/Xplorex Contact.png';

import artThumb from '../assets/Projects/Digital Art/Thumbnail.png';
import art1 from '../assets/Projects/Digital Art/Gallery/FB.png';
import art2 from '../assets/Projects/Digital Art/Gallery/IG.png';
import art3 from '../assets/Projects/Digital Art/Gallery/The Casino in Your Pocket.png';
import art4 from '../assets/Projects/Digital Art/Gallery/The Meme Battleground.png';
import art5 from '../assets/Projects/Digital Art/Gallery/The VIP Gold Mine.png';
import art6 from '../assets/Projects/Digital Art/Gallery/Valo D.png';
import art7 from '../assets/Projects/Digital Art/Gallery/Valo F.png';

export interface Project {
  id: number;
  name: string;
  category: string;
  role: string;
  image: string;
  description: string;
  fullDescription: string;
  images: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "SPARK",
    category: "Web & Mobile App",
    role: "Project Lead / UI/UX / Mobile Dev",
    image: sparkThumb,
    description:
      "Learning platform designed for Special Education students, emphasizing usability, accessibility, and user-centered design.",
    fullDescription:
      "SPARK is a progressive learning platform custom-tailored for Special Education students. It centers on inclusive education strategies, emphasizing usability, robust accessibility standards, and fundamentally user-centered design. Built comprehensively with Flutter and supporting Web technologies.",
    images: [spark1, spark2, spark3, spark4, spark5, spark6],
    link: "https://sparklearningplatform.site",
  },
  {
    id: 2,
    name: "DSCIPLR",
    category: "Web & Mobile App",
    role: "Web Dev / Database",
    image: dsciplrThumb,
    description:
      "A web and Mobile application designed to streamline the management of church operations, including records and attendance.",
    fullDescription:
      "DSCIPLR completely revolutionizes church operation management inside community sectors. It provides a robust architecture for membership logging, attendance auditing, and secure financial records processing. I handled data structure engineering and backend API integrations across both the Web and Mobile ecosystems.",
    images: [dsciplr1, dsciplr2],
    link: "https://dsciplr-eight.vercel.app",
  },

  {
    id: 3,
    name: "GDGOC NU Website",
    category: "Web App",
    role: "UI/UX Dev Lead",
    image: gdgThumb,
    description:
      "The official Google Developer Group on Campus – NU Baliwag website. Led the design and user-experience development.",
    fullDescription:
      "The official landing platform and community node for the Google Developer Group on Campus – NU Baliwag. I guided the team in constructing a compelling interface highlighting organizational goals, maintaining aesthetic cohesion, and ensuring top-level usability metrics.",
    images: [gdg1, gdg2],
    link: "https://gdgoc-nubaliwag.vercel.app",
  },
  {
    id: 4,
    name: "Xplorex Travel",
    category: "Web App",
    role: "UI/UX / Frontend",
    image: xplorexThumb,
    description:
      "Designed a travel and tour website handling UI/UX design and front-end development, focusing on intuitive interfaces.",
    fullDescription:
      "A dynamic visual travel agency portal capturing scenic destinations and optimizing conversion paths for tour packages. I owned the complete frontend implementation ensuring a pixel-perfect, highly responsive interface driving optimal user experiences across all breakpoints.",
    images: [xplorex1, xplorex2],
  },

  {
    id: 5,
    name: "Digital Art & Design",
    category: "Freelance Commissions",
    role: "Visual Designer",
    image: artThumb,
    description:
      "Creates custom digital artworks tailored to client concepts and project timelines using Photoshop and Clip Studio Paint.",
    fullDescription:
      "Ongoing freelance endeavor producing high-tier structural art commissions, branding pieces, and custom visual illustrations. Utilizing an array of creative suites (Clip Studio Paint, Adobe Photoshop, Figma), I bring complex creative briefs to fruition tightly anchored to client concepts and deadlines.",
    images: [art1, art2, art3, art4, art5, art6, art7],
  },
];
