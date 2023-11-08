import AddToCart from "@/app/components/AddToCart";
import Checkout from "@/app/components/Checkout";
import Gallery from "@/app/components/Gallery";
import { productTypes } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const {
    images,
    categoryName,
    name,
    price,
    description,
    price_id,
  }: productTypes = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl p-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Gallery images={images} />

          <div className="md:py-8">
            <div className="mb-1 md:mb-2">
              <span className="mb-0.5 inline-block text-gray-500">
                {categoryName}
              </span>
              <h2 className="text-xl font-bold text-gray-800 lg:text-3xl">
                {name}
              </h2>
            </div>

            <div className="mb-4 flex items-center md:mb-6">
              <span className="text-md text-gray-900 mr-2 font-bold">4.5</span>
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${price + 30}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6 text-primary/75" />
              <span className="text-sm">3-4 Days Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToCart
                currency="USD"
                description={description}
                price={price}
                image={images[0]}
                name={name}
                price_id={price_id}
              />
              <Checkout
                currency="USD"
                description={description}
                price={price}
                image={images[0]}
                name={name}
                price_id={price_id}
              />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
