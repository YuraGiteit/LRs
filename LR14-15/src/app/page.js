import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="Mountains and forests with two cabins"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <h1 className="text-5xl md:text-7xl text-primary-50 mb-10 tracking-tight font-normal">
        Welcome to paradise.
      </h1>

      <Link
        href="/cabins"
        className="bg-accent-500 px-8 py-4 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
      >
        Explore luxury cabins
      </Link>
    </main>
  );
}
