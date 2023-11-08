"use client";

import { PropsWithChildren } from "react";
import { CartProvider } from "use-shopping-cart";

export default function CartProviders({ children }: PropsWithChildren) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      successUrl={process.env.NEXT_PUBLIC_STRIPE_REDIRECT_SUCCESS as string}
      cancelUrl={process.env.NEXT_PUBLIC_STRIPE_REDIRECT_ERROR as string}
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
