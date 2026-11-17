import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const Index = () => {
  useDocumentMeta({
    title: "Prasada Vishwesh | AI Engineer – Generative AI & Computer Vision",
    description:
      "Portfolio of Jatangi Y D M V Prasada Vishwesh, an AI engineer building generative AI, NLP and computer vision products with PyTorch, TensorFlow and React.",
    path: "/",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
