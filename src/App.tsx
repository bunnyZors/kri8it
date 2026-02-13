import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroller from "@/components/SmoothScroller";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Automotive from "./pages/Automotive";
import TravelTourism from "./pages/TravelTourism";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SmoothScroller>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/automotive" element={<Automotive />} />
            <Route path="/travel-tourism" element={<TravelTourism />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SmoothScroller>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
