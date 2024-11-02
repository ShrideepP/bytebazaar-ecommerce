import { Link } from "@tanstack/react-router";
import LogoMark from "../common/logo-mark";
import { ExternalLink, Github, Instagram } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="px-4 lg:px-40 bg-foreground">
      <div className="py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
        <div className="flex flex-col gap-y-4">
          <Link to="/" className="inline-flex items-center gap-x-2">
            <LogoMark className="w-6 lg:w-8 h-6 lg:h-8 text-muted" />
            <span className="text-base lg:text-lg text-muted font-bold">
              ByteBazaar
            </span>
          </Link>

          <p className="text-sm lg:text-base text-muted-foreground font-normal">
            Empowering Your Tech Journey, Byte by Byte
          </p>

          <div className="inline-flex lg:gap-x-2">
            <a
              target="_blank"
              href="https://github.com/ShrideepP/"
              className="w-10 h-10 text-muted-foreground hover:text-muted inline-flex justify-center items-center transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/_shrideep/"
              className="w-10 h-10 text-muted-foreground hover:text-muted inline-flex justify-center items-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              target="_blank"
              href="https://devbyshrideep.com/"
              className="w-10 h-10 text-muted-foreground hover:text-muted inline-flex justify-center items-center transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 lg:gap-x-10">
          <div className="flex flex-col gap-y-4">
            <h6 className="text-sm lg:text-base text-muted font-medium">
              Site Navigation
            </h6>

            <Link
              to="/"
              className="text-sm lg:text-base text-muted-foreground hover:text-muted font-medium transition-colors"
            >
              About
            </Link>

            <Link
              to="/"
              className="text-sm lg:text-base text-muted-foreground hover:text-muted font-medium transition-colors"
            >
              Products
            </Link>

            <Link
              to="/"
              className="text-sm lg:text-base text-muted-foreground hover:text-muted font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-y-4">
            <h6 className="text-sm lg:text-base text-muted font-medium">
              Quick Access
            </h6>

            <Link
              to="/"
              className="text-sm lg:text-base text-muted-foreground hover:text-muted font-medium transition-colors"
            >
              Wishlist
            </Link>

            <Link
              to="/"
              className="text-sm lg:text-base text-muted-foreground hover:text-muted font-medium transition-colors"
            >
              Your Cart
            </Link>

            <Link
              to="/"
              className="text-sm lg:text-base text-muted-foreground hover:text-muted font-medium transition-colors"
            >
              My Account
            </Link>
          </div>
        </div>
      </div>

      <div className="h-20 flex justify-center items-center border-t border-muted-foreground">
        <span className="text-sm lg:text-base text-muted font-medium">
          Built by{" "}
          <a
            target="_blank"
            href="https://devbyshrideep.com/"
            className="underline hover:no-underline underline-offset-2"
          >
            ShrideepP
          </a>
        </span>
      </div>
    </footer>
  );
};

export default SiteFooter;
