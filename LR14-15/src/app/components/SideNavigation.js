"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Profile", href: "/account/profile" },
  { name: "Reservations", href: "/account/reservations" },
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 mt-6">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`block px-4 py-2 rounded-md text-lg font-medium transition-all ${
              isActive
                ? "bg-accent-500 text-primary-900"
                : "hover:bg-primary-800 hover:text-primary-50"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
