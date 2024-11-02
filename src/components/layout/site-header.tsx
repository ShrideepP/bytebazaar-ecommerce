import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import HamburgerMenu from "./hamburger-menu";
import MegaMenu from "./mega-menu";

const SiteHeader = () => {
  return (
    <header className="px-6 py-6 lg:px-36 lg:py-4 sticky top-0 flex items-center gap-x-2 border-b bg-background">
      <nav>
        <HamburgerMenu categories={categories} />
        <MegaMenu categories={categories} />
      </nav>

      <div className="flex-1 flex justify-end items-center gap-x-2">
        <Button
          variant="outline"
          className="lg:w-72 flex-1 lg:flex-none relative justify-start"
        >
          <Search className="w-4 h-4 hidden lg:inline" /> Find your style...
          <span className="px-2 py-0.5 absolute top-2/4 right-2 -translate-y-2/4 hidden lg:inline rounded-md border bg-muted">
            <kbd className="text-xs text-muted-foreground font-medium leading-none">
              Cmd+F
            </kbd>
          </span>
        </Button>

        <Button size="icon" variant="outline">
          <ShoppingCart className="w-4 h-4" />
        </Button>

        <Button size="icon" variant="outline">
          <User className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;

const categories = [
  {
    name: "Men's",
    components: [
      {
        title: "Tops",
        description:
          "Casual and stylish tees, polos, hoodies, and more for everyday wear.",
        href: "/",
      },
      {
        title: "Bottoms",
        description:
          "Versatile jeans, chinos, shorts, and trousers for any occasion.",
        href: "/",
      },
      {
        title: "Activewear",
        description: "Durable sportswear designed for workouts and athleisure.",
        href: "/",
      },
      {
        title: "Formal Wear",
        description:
          "Sharp dress shirts, blazers, and suits for business or events.",
        href: "/",
      },
      {
        title: "Outerwear",
        description: "Jackets and coats to keep you warm and on-trend.",
        href: "/",
      },
    ],
  },
  {
    name: "Women's",
    components: [
      {
        title: "Tops",
        description: "Stylish blouses, tees, and sweaters for all occasions.",
        href: "/",
      },
      {
        title: "Bottoms",
        description: "Chic jeans, skirts, and trousers for any style.",
        href: "/",
      },
      {
        title: "Dresses",
        description: "Elegant dresses for every event, from casual to formal.",
        href: "/",
      },
      {
        title: "Activewear",
        description: "Comfortable sportswear for fitness and casual wear.",
        href: "/",
      },
      {
        title: "Outerwear",
        description: "Trendy coats and jackets for warmth and style.",
        href: "/",
      },
    ],
  },
  {
    name: "Accessories",
    components: [
      {
        title: "Bags & Wallets",
        description: "Fashionable bags and wallets for every look.",
        href: "/",
      },
      {
        title: "Jewelry",
        description:
          "Elegant necklaces, earrings, and bracelets to accessorize.",
        href: "/",
      },
      {
        title: "Hats & Caps",
        description: "Trendy hats and caps to complete your outfit.",
        href: "/",
      },
      {
        title: "Belts & Scarves",
        description: "Essential belts and scarves for a finishing touch.",
        href: "/",
      },
      {
        title: "Sunglasses",
        description: "Stylish sunglasses to protect and elevate your look.",
        href: "/",
      },
      {
        title: "Footwear",
        description: "Comfortable, stylish shoes for every occasion.",
        href: "/",
      },
    ],
  },
];
