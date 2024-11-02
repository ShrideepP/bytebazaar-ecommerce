import { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import LogoMark from "../common/logo-mark";
import { Link } from "@tanstack/react-router";

interface HamburgerMenuProps {
  categories: Category[];
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ categories }) => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="w-4 h-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="space-y-4">
          <SheetHeader>
            <SheetTitle className="inline-flex items-center gap-x-2">
              <LogoMark className="w-8 h-8 text-foreground" />
              <span className="text-base text-foreground font-bold">
                ByteBazaar
              </span>
            </SheetTitle>
            <SheetDescription className="text-start">
              Lorem ipsum dolor sit amet.
            </SheetDescription>
          </SheetHeader>

          <Accordion type="single" collapsible>
            {categories.map(({ name, components }) => (
              <AccordionItem key={name} value={name}>
                <AccordionTrigger className="text-sm">{name}</AccordionTrigger>
                <AccordionContent className="flex flex-col">
                  {components.map(({ title, href }) => (
                    <SheetTrigger key={title} asChild>
                      <Link
                        to={href}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
                      >
                        {title}
                      </Link>
                    </SheetTrigger>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerMenu;
