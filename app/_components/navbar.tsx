"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/* LEFT */}
      <div className="flex items-center gap-10">
        <Image
          src="/monicount-logo.png"
          width={173}
          height={39}
          alt="Monicount"
        />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-teal-500"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-teal-500"
              : "text-muted-foreground"
          }
        >
          Transactions
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-teal-500"
              : "text-muted-foreground"
          }
        >
          Subscriptions
        </Link>
      </div>
      {/* RIGHT */}
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
