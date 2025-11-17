import { Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              BolajiVerse
            </h3>
            <p className="text-sm text-muted-foreground">
              Modern fashion for the digital age. Discover your style.
            </p>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/new" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                New Arrivals
              </NavLink>
              <NavLink to="/men" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Men
              </NavLink>
              <NavLink to="/women" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Women
              </NavLink>
              <NavLink to="/collections" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Collections
              </NavLink>
            </nav>
          </div>

          {/* Help Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Help</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                FAQ
              </NavLink>
              <NavLink to="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Shipping
              </NavLink>
              <NavLink to="/returns" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Returns
              </NavLink>
              <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 BolajiVerse. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <NavLink to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
