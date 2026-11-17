import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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

/**
 * Scrolls to the #hash target after navigation (including cross-page links such as /#projects),
 * or back to the top when the route changes without a hash.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView();
      } else if (attempts++ < 10) {
        timer = setTimeout(scrollToTarget, 50);
      }
    };

    scrollToTarget();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PageTransition><Index /></PageTransition>} />
    <Route path="/projects/vision-gpt2" element={<PageTransition><VisionGPT2 /></PageTransition>} />
    <Route path="/projects/smart-chief" element={<PageTransition><SmartChief /></PageTransition>} />
    <Route path="/projects/hand-sign-detection" element={<PageTransition><HandSignDetection /></PageTransition>} />
    <Route path="/projects/plate-intelligence" element={<PageTransition><PlateIntelligence /></PageTransition>} />
    <Route path="/projects/sv-real-estate" element={<PageTransition><SVRealEstate /></PageTransition>} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
  </Routes>
);

// The saved/system theme class is applied by the inline script in index.html before first paint.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollManager />
        <AppRoutes />
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
