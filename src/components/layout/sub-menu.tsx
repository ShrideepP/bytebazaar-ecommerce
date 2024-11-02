import { Link } from "@tanstack/react-router";
import {
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad,
} from "lucide-react";
import { Separator } from "../ui/separator";

const components = [
  { name: "Smartphone", icon: Smartphone },
  { name: "Laptop", icon: Laptop },
  { name: "Watch", icon: Watch },
  { name: "Camera", icon: Camera },
  { name: "Headphones", icon: Headphones },
  { name: "Gamepad", icon: Gamepad },
];

const SubMenu = () => {
  return (
    <div className="px-40 py-2 hidden lg:flex justify-between items-center bg-foreground">
      {components.map(({ name, icon: Icon }, index) => (
        <>
          <Link
            to="/"
            key={index}
            className="text-muted-foreground hover:text-muted inline-flex items-center gap-x-2 transition-colors"
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{name}</span>
          </Link>

          {components.length - 1 !== index ? (
            <Separator
              key={index}
              orientation="vertical"
              className="h-6 bg-muted-foreground"
            />
          ) : null}
        </>
      ))}
    </div>
  );
};

export default SubMenu;
