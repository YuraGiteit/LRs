import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 cursor-pointer">
      <Image
        src="/logo.png"
        width={48}
        height={48}
        alt="The Wild Oasis logo"
        priority
      />
      <span className="text-xl font-semibold">The Wild Oasis</span>
    </Link>
  );
}

export default Logo;
