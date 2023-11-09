import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./components/Navbar";
import CartProviders from "./components/Providers";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NikeStore",
  description:
    "NikeStore is an e-commerce application that provides customers with various products and services from the Nike Store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <CartProviders>
          <Navbar />
          <Modal />
          {children}
          <Footer />
        </CartProviders>
      </body>
    </html>
  );
}
