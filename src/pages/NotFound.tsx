import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const NotFound = () => {
  const location = useLocation();

  useDocumentMeta({
    title: "Page not found | Prasada Vishwesh",
    description: "The page you were looking for does not exist.",
    path: location.pathname,
    noindex: true,
  });

  useEffect(() => {
    // Only log in development to prevent information leakage
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" tabIndex={-1} className="flex flex-1 items-center outline-none">
        <div className="page-container py-20">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Page not found</h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            The page you’re looking for doesn’t exist or may have moved.
          </p>
          <Button asChild className="mt-8">
            <Link to="/">
              <ArrowLeft />
              Back to home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
