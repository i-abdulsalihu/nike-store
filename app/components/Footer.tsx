"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "Men", path: "/Men" },
      { name: "Women", path: "/Women" },
      { name: "Teens", path: "/Teens" },
    ],
  },
  {
    title: "Get Help",
    links: [
      { name: "Order Status" },
      { name: "Delivery" },
      { name: "Returns" },
      { name: "Payment Options" },
      { name: "Contact Us On Nike.com Inquiries" },
      { name: "Contact Us On All Other Inquiries" },
    ],
  },
  {
    title: "About NikeStore",
    links: [
      { name: "News" },
      { name: "Careers" },
      { name: "Investors" },
      { name: "Sustainability" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="mt-10 bg-zinc-900">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="py-10 flex flex-wrap gap-6">
          {footerLinks.map(({ title, links }, index) => (
            <div className="flex flex-col gap-4 w-72" key={index}>
              <h3 className="text-white text-md md:text-xl">{title}</h3>

              <div className="flex flex-col gap-2">
                {links.map(
                  (
                    {
                      name,
                      path,
                    }: {
                      name: string;
                      path?: string;
                    },
                    index
                  ) =>
                    path ? (
                      <Link
                        key={index + new Date().getFullYear()}
                        href={path}
                        className={cn("text-sm", {
                          "text-gray-400 transition duration-100 hover:text-primary":
                            pathname !== path,
                          "text-primary": pathname === path,
                        })}
                      >
                        {name}
                      </Link>
                    ) : (
                      <p
                        key={index + new Date().getFullYear()}
                        className="text-gray-400 transition duration-100 hover:text-white text-sm cursor-pointer"
                      >
                        {name}
                      </p>
                    )
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="py-10 flex flex-wrap items-center justify-between border-t border-zinc-500">
          <p className="text-sm text-white">
            © 2023 Nike, Inc. All Rights Reserved
          </p>

          <div className="flex items-center gap-x-4">
            <p className="text-gray-400 text-sm transition duration-100 hover:text-white">
              Guides
            </p>
            <p className="text-gray-400 text-sm transition duration-100 hover:text-white">
              Terms of Sale
            </p>
            <p className="text-gray-400 text-sm transition duration-100 hover:text-white">
              Terms of Use
            </p>
            <p className="text-gray-400 text-sm transition duration-100 hover:text-white">
              Nike Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
