'use client';

import Link from "next/link";

export default function Header() {
  return (
    <div>
        <h1>header</h1>

        <nav>
            {/* Prefetched when the link is hovered or enters the viewport */}
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            {/* No prefetching */}
            <a href="/contacts">Contacts</a>
        </nav>
    </div>
  );
}
