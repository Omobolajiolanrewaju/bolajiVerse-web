import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              BolajiVerse
            </h1>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/new"
              className="text-sm font-medium transition-smooth hover:text-primary"
              activeClassName="text-primary"
            >
              New Arrivals
            </NavLink>
            <NavLink
              to="/men"
              className="text-sm font-medium transition-smooth hover:text-primary"
              activeClassName="text-primary"
            >
              Men
            </NavLink>
            <NavLink
              to="/women"
              className="text-sm font-medium transition-smooth hover:text-primary"
              activeClassName="text-primary"
            >
              Women
            </NavLink>
            <NavLink
              to="/collections"
              className="text-sm font-medium transition-smooth hover:text-primary"
              activeClassName="text-primary"
            >
              Collections
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="transition-smooth hover:text-primary hover:bg-transparent">
              <Search className="h-5 w-5" />
            </Button>
            <NavLink to="/login">
              <Button variant="ghost" size="icon" className="transition-smooth hover:text-primary hover:bg-transparent">
                <User className="h-5 w-5" />
              </Button>
            </NavLink>
            <Button variant="ghost" size="icon" className="relative transition-smooth hover:text-primary hover:bg-transparent">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
