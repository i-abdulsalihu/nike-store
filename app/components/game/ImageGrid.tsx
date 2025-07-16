import Image from 'next/image';

interface ImageGridProps {
  images: string[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-40 w-40">
          <Image src={image} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  );
}
