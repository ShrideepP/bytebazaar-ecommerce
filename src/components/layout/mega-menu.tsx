import { Link } from "@tanstack/react-router";
import { FC } from "react";
import LogoMark from "../common/logo-mark";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface ListItemProps {
  component: Component;
}

const ListItem: FC<ListItemProps> = ({
  component: { title, description, href },
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="w-72 p-4 block space-y-1 select-none rounded-md hover:bg-muted transition-colors"
        >
          <span className="text-sm text-foreground font-medium">{title}</span>
          <p className="text-sm text-muted-foreground font-normal">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

interface MegaMenuProps {
  categories: Category[];
}

const MegaMenu: FC<MegaMenuProps> = ({ categories }) => {
  return (
    <div className="hidden lg:flex items-center gap-x-4">
      <Link to="/" className="inline-flex items-center gap-x-2">
        <LogoMark className="w-8 h-8 text-foreground" />
        <span className="text-base text-foreground font-bold">ByteBazaar</span>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {categories.map(({ name, components }) => (
            <NavigationMenuItem key={name}>
              <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-max p-2 grid grid-cols-2 gap-2">
                  {components.map((component) => (
                    <ListItem key={component.title} component={component} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MegaMenu;
