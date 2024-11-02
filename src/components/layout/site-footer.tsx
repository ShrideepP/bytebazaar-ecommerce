import { Link } from "@tanstack/react-router";
import LogoMark from "../common/logo-mark";
import { buttonVariants } from "../ui/button";
import { Github } from "lucide-react";
import ToggleTheme from "../toggle-theme";

const SiteFooter = () => {
  return (
    <footer className="px-6 py-6 lg:px-36 lg:py-4 flex justify-between items-center border-t">
      <Link to="/" className="inline-flex items-center gap-x-2">
        <LogoMark className="w-8 h-8 text-foreground" />
        <span className="text-base text-foreground font-bold">ByteBazaar</span>
      </Link>

      <div className="space-x-2">
        <a
          target="_blank"
          href="https://github.com/ShrideepP/bytebazaar-ecommerce"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <Github className="w-4 h-4" />
        </a>

        <ToggleTheme />
      </div>
    </footer>
  );
};

export default SiteFooter;
