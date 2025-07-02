import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import pages
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import Resume from "@/pages/resume";
import Portfolio from "@/pages/portfolio";
import SkillsPage from "@/pages/skills";
import Services from "@/pages/services";
import ExperiencePage from "@/pages/experience";
import DropdownDemo from "@/pages/dropdown";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function AppContent() {
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div
          className={`min-h-screen transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          }`}
        >
          <SEO />
          <Navigation />

          {/* Main Content */}
          <div>
            <main>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={AboutPage} />
                <Route path="/services" component={Services} />
                <Route path="/experience" component={ExperiencePage} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/skills" component={SkillsPage} />
                <Route path="/dropdown" component={DropdownDemo} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>

          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
