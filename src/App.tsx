import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VisionGPT2 from "./pages/projects/VisionGPT2";
import SmartChief from "./pages/projects/SmartChief";

const queryClient = new QueryClient();

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
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/vision-gpt2" element={<VisionGPT2 />} />
            <Route path="/projects/smart-chief" element={<SmartChief />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
