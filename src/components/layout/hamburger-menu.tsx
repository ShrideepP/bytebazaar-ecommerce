import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import LogoMark from "../common/logo-mark";
import { Link } from "@tanstack/react-router";

const HamburgerMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="ghost">
            <Menu className="w-8 h-8" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="lg:hidden flex flex-col gap-y-4">
          <SheetHeader>
            <SheetTitle className="inline-flex gap-x-2">
              <LogoMark className="w-6 lg:w-8 h-6 lg:h-8 text-foreground" />
              <span className="text-base text-foreground font-bold">
                ByteBazaar
              </span>
            </SheetTitle>

            <SheetDescription className="text-start">
              Empowering Your Tech Journey, Byte by Byte
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col">
            <SheetTrigger asChild>
              <Link
                to="/"
                className="py-4 text-sm text-foreground font-medium border-b"
              >
                Home
              </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Link
                to="/"
                className="py-4 text-sm text-foreground font-medium border-b"
              >
                About
              </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Link
                to="/"
                className="py-4 text-sm text-foreground font-medium border-b"
              >
                Products
              </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Link
                to="/"
                className="py-4 text-sm text-foreground font-medium border-b"
              >
                Contact
              </Link>
            </SheetTrigger>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerMenu;
