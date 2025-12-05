import Image from "next/image";
import Link from "next/link";

export default function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, image } = cabin;

  return (
    <div className="bg-primary-900 rounded-lg overflow-hidden shadow-md">
      <Image
        src={image}
        alt={name}
        width={400}
        height={250}
        className="object-cover w-full h-[250px]"
      />

      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p>Max capacity: {maxCapacity} guests</p>
        <p>Price: ${regularPrice}</p>

        <Link
          href={`/cabins/${id}`}
          className="inline-block mt-3 bg-accent-500 px-6 py-2 text-primary-900 rounded-md font-semibold hover:bg-accent-600 transition-all"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
