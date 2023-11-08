"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function Modal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    removeItem,
    cartDetails,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckout(event: any) {
    event.preventDefault();

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6 text">Your shopping cart is empty</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map(
                    ({ id, image, name, price, description, quantity }) => (
                      <li key={id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            src={image as string}
                            alt={name}
                            className="h-full w-full object-cover lg:h-full lg:w-full"
                            priority
                            width={100}
                            height={100}
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="text-gray-900 font-bold truncate">
                                {name}
                              </h3>
                              <p className="ml-4 text-sm text-gray-600">
                                ${price}
                              </p>
                            </div>

                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                              {description}
                            </p>
                          </div>

                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-primary text-sm">
                              QTY: {quantity}
                            </p>

                            <div className="flex">
                              <button
                                onClick={() => removeItem(id)}
                                type="button"
                                className="font-medium text-destructive hover:text-destructive/80"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-4">
            <div className="flex justify-between text-base font-medium">
              <p className="text-md text-gray-900">Subtotal:</p>
              <p className="text-md text-gray-900 font-bold">${totalPrice}</p>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button className="w-full" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>

            <div className="mt-4 flex justify-center text-center text-gray-500">
              <p className="text-xs">
                OR{" "}
                <button
                  className="font-medium text-primary hover:text-primary/70"
                  onClick={() => handleCartClick()}
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
