import { Home, Search, MapPin, Building } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";
import svRealEstatePreview from "@/assets/sv-real-estate-preview.webp";

const features = [
  {
    icon: Search,
    title: "Property Search & Filtering",
    description:
      "Advanced search functionality allowing users to filter properties by price, location, type, and other criteria.",
  },
  {
    icon: Home,
    title: "Intuitive UI/UX Design",
    description: "Clean and user-friendly interface designed for optimal user engagement and seamless navigation.",
  },
  {
    icon: MapPin,
    title: "Location-Based Listings",
    description: "Properties organized by location with detailed address information and neighborhood insights.",
  },
  {
    icon: Building,
    title: "Rich Property Details",
    description: "Comprehensive property information including images, pricing, specifications, and contact details.",
  },
];

const stackDetails = [
  { name: "React.js", category: "Frontend Framework" },
  { name: "JavaScript", category: "Programming Language" },
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "Responsive Design", category: "UI/UX" },
];

const SVRealEstate = () => (
  <ProjectLayout
    slug="sv-real-estate"
    title="S.V. Real Estate"
    category="Full-Stack Web Development"
    summary="A dynamic and responsive real estate web application that helps users browse and explore property listings with ease. The platform displays property details including price, location, and relevant images, enabling prospective buyers, sellers, and renters to quickly find real estate options that match their preferences."
    techStack={stackDetails.map((tech) => tech.name)}
    demo="https://sv-real-estate-tau.vercel.app/"
    facts={[
      { label: "Timeline", value: "Nov 2025 - Present" },
      { label: "Associated with", value: "Bennett University" },
      { label: "Category", value: "Real Estate Platform" },
    ]}
    preview={{
      src: svRealEstatePreview,
      alt: "S.V. Real Estate homepage with property search, buy and rent options, and customer testimonials",
      caption: "Homepage featuring property search, buy/rent options, and trusted customer testimonials",
      width: 1600,
      height: 815,
    }}
    featuresTitle="Key features"
    features={features}
    stackDetails={stackDetails}
  />
);

export default SVRealEstate;
