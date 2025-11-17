import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 z-0" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              BolajiVerse
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Discover your unique style with our curated collection of modern fashion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/20 text-primary hover:bg-primary-foreground/10 transition-smooth"
            >
              View Collections
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </section>

      {/* Featured Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">
              Explore our latest collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Cards - Placeholder structure */}
            {["New Arrivals", "Men's Fashion", "Women's Fashion"].map((category) => (
              <div
                key={category}
                className="group relative h-96 rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-smooth cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-muted" /> {/* Placeholder for image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {category}
                  </h3>
                  <Button 
                    variant="outline" 
                    className="border-primary-foreground/50 text-primary hover:bg-primary-foreground/10"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
