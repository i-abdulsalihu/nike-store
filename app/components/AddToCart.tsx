"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { CartTypes } from "../interface";
import { urlFor } from "../lib/sanity";

export default function AddToCart({
  price_id,
  currency,
  description,
  name,
  image,
  price,
}: CartTypes) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
}
