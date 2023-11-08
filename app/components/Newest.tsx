import Link from "next/link";
import { simplifiedProductTypes } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplifiedProductTypes[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>
          <Link
            href="/products"
            className="text-primary flex items-center gap-x-1"
          >
            See All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map(({ _id, imageUrl, name, price, categoryName, slug }) => (
            <Link
              href={`/products/${slug}`}
              key={_id}
              className="group relative"
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={imageUrl}
                  alt={name}
                  className="h-full w-full object-cover lg:h-full lg:w-full"
                  priority
                  width={300}
                  height={300}
                />
              </div>

              <div className="mt-4 flex justify-between items-start gap-x-2">
                <div>
                  <h3 className="text-sm text-gray-900 truncate">{name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{categoryName}</p>
                </div>

                <p className="text-sm font-medium text-gray-900">${price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
