"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", path: "/" },
  { name: "Men", path: "/Men" },
  { name: "Women", path: "/Women" },
  { name: "Teens", path: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b sticky top-0 bg-white z-20">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-xl md:text-lg font-bold text-gray-900">
            <span className="text-primary">Nike</span>Store
          </h1>
        </Link>

        <nav className="hidden gap-6 lg:flex 2xl:ml-16">
          {links.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              className={cn("text-md font-semibold", {
                "text-gray-600 transition duration-100 hover:text-primary":
                  pathname !== path,
                "text-primary": pathname === path,
              })}
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            onClick={() => handleCartClick()}
            variant="outline"
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-600 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
