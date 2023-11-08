"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface GalleryProps {
  images: any;
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSelectImage = (image: any) => {
    setSelectedImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: number) => (
          <div
            key={index}
            onClick={() => handleSelectImage(image)}
            className="overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={urlFor(image).url()}
              alt="image"
              className="h-full w-full object-cover object-center cursor-pointer"
              priority
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(selectedImage).url()}
          alt="image"
          className="h-full w-full object-cover object-center cursor-pointer"
          priority
          width={500}
          height={500}
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-2.5 text-sm uppercase tracking-wider text-white text-bold">
          sale
        </span>
      </div>
    </div>
  );
}
