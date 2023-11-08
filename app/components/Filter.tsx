import Link from "next/link";

export default function Filter() {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row">
      <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
        <Link
          href="/Men"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Men
        </Link>
        <Link
          href="/Women"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Women
        </Link>
        <Link
          href="/Teens"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Teens
        </Link>
      </div>
    </div>
  );
}
