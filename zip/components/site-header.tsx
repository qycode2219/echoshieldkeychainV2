"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Utama", href: "#home" },
  { title: "Produk", href: "#produk" },
  { title: "STEM", href: "#stem" },
  { title: "Demonstrasi", href: "#demo" },
  { title: "Hubungi", href: "#hubungi" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handle = () => setScroll(window.scrollY > 40);

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scroll
          ? "bg-white/80 backdrop-blur-xl shadow"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link href="#home" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">
            ES
          </div>

          <div>

            <h2 className="font-bold text-gray-950 text-lg">
              ECOKY
            </h2>

            <p className="text-xs text-gray-500">
              Penghalau Serangga Semula Jadi Mudah Alih
            </p>

          </div>

        </Link>

        <nav className="hidden md:flex gap-8">

          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="font-medium text-gray-700 hover:text-emerald-600 transition"
            >
              {item.title}
            </a>
          ))}

        </nav>

        <a
          href="#hubungi"
          className="hidden md:block rounded-full bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-700 transition"
        >
          Hubungi Kami
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden border-t bg-white">

          <div className="flex flex-col">

            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="px-6 py-4 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            ))}

          </div>

        </div>
      )}
    </header>
  );
}