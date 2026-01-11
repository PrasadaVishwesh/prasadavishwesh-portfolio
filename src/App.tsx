import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VisionGPT2 from "./pages/projects/VisionGPT2";
import SmartChief from "./pages/projects/SmartChief";
import HandSignDetection from "./pages/projects/HandSignDetection";
import PlateIntelligence from "./pages/projects/PlateIntelligence";
import SVRealEstate from "./pages/projects/SVRealEstate";
import BackToTop from "./components/BackToTop";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/projects/vision-gpt2"
          element={
            <PageTransition>
              <VisionGPT2 />
            </PageTransition>
          }
        />
        <Route
          path="/projects/smart-chief"
          element={
            <PageTransition>
              <SmartChief />
            </PageTransition>
          }
        />
        <Route
          path="/projects/hand-sign-detection"
          element={
            <PageTransition>
              <HandSignDetection />
            </PageTransition>
          }
        />
        <Route
          path="/projects/plate-intelligence"
          element={
            <PageTransition>
              <PlateIntelligence />
            </PageTransition>
          }
        />
        <Route
          path="/projects/sv-real-estate"
          element={
            <PageTransition>
              <SVRealEstate />
            </PageTransition>
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
          <BackToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
