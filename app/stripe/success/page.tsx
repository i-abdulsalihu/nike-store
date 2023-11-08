import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Success() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCircle2 className="text-green-600 w-28 h-28 mx-auto my-3" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment successful!
          </h3>
          <p className="max-w-xl mx-auto my-3 text-sm text-gray-600">
            Thank you for purchasing from our store. We hope you enjoyed our
            service and hope to see you soon.
          </p>
          <p className="text-gray-900 text-md">Have a great day!</p>

          <Button asChild className="mt-5">
            <Link href="/">Continue shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
