import { Link } from "@tanstack/react-router";
import LogoMark from "../common/logo-mark";
import HamburgerMenu from "./hamburger-menu";
import { Button } from "../ui/button";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import SubMenu from "./sub-menu";

const SiteHeader = () => {
  return (
    <header>
      <nav className="px-4 py-6 lg:px-40 lg:py-4 relative flex justify-between items-center gap-x-4 lg:gap-x-8">
        <HamburgerMenu />

        <Link to="/" className="hidden lg:inline-flex items-center gap-x-2">
          <LogoMark className="w-8 h-8 text-foreground" />
          <span className="text-lg text-foreground font-bold">ByteBazaar</span>
        </Link>

        <Button variant="outline" className="relative flex-1 justify-start">
          <Search className="w-4 h-4 hidden lg:inline" /> Find Products
          <span className="px-2 py-0.5 absolute top-2/4 right-2 -translate-y-2/4 hidden lg:inline rounded bg-muted">
            <kbd className="text-xs text-muted-foreground font-medium">/</kbd>
          </span>
        </Button>

        <div className="hidden lg:flex gap-x-2">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>

          <Link to="/">
            <Button variant="ghost">About</Button>
          </Link>

          <Link to="/">
            <Button variant="ghost">Products</Button>
          </Link>

          <Link to="/">
            <Button variant="ghost">Contact</Button>
          </Link>
        </div>

        <div className="flex lg:gap-x-2">
          <Button size="icon" variant="ghost">
            <Heart className="w-4 h-4" />
          </Button>

          <Button size="icon" variant="ghost">
            <ShoppingCart className="w-4 h-4" />
          </Button>

          <Button size="icon" variant="ghost">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      <SubMenu />
    </header>
  );
};

export default SiteHeader;
