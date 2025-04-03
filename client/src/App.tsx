import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Press from "@/pages/Press";
import Appearances from "@/pages/AppearancesSimple";
import ThoughtLeadership from "@/pages/ThoughtLeadershipSimple";
import MemoryMachines from "@/pages/MemoryMachines";
import LeavingTheFrame from "@/pages/LeavingTheFrame";
import ExitMindset from "@/pages/ExitMindset";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PersistentLanguageSwitcher from "@/components/ui/PersistentLanguageSwitcher";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./contexts/LanguageContext";

function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/press" component={Press} />
        <Route path="/appearances" component={Appearances} />
        <Route path="/thought-leadership" component={ThoughtLeadership} />
        <Route path="/thought-leadership/memory-machines" component={MemoryMachines} />
        <Route path="/thought-leadership/leaving-the-frame" component={LeavingTheFrame} />
        <Route path="/thought-leadership/exit-mindset" component={ExitMindset} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {/* Google Analytics */}
        <GoogleAnalytics measurementId="G-8DB562KP52" />
        
        <div className="flex flex-col min-h-screen">
          <Header />
          <motion.main 
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Router />
          </motion.main>
          <Footer />
          <PersistentLanguageSwitcher />
        </div>
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
