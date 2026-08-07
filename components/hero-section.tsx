"use client";

import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100"
    >
      {/* Background */}

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-green-400/10 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-28 lg:flex-row">

        {/* Left */}

        <div className="flex-1">

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">

            <Leaf size={16} />

            Penghalau Serangga Semula Jadi Mudah Alih

          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">

            EcoShield
            <br />

            Keychain V2

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

            EcoShield Keychain V2 ialah inovasi berasaskan STEM yang
            menggunakan bahan semula jadi untuk membantu mengurangkan gangguan
            serangga dalam kehidupan harian.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#produk"
              className="rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-emerald-700"
            >
              Ketahui Lebih Lanjut
            </a>

            <a
              href="#demo"
              className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition hover:border-emerald-600 hover:text-emerald-600"
            >
              Lihat Demonstrasi

              <ArrowRight size={18} />
            </a>

          </div>

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="rounded-2xl bg-white p-5 shadow">

              <Leaf className="text-emerald-600" />

              <p className="mt-3 text-sm text-gray-950 font-semibold">
                Bahan Semula Jadi
              </p>

            </div>

            <div className="rounded-2xl bg-white p-5 shadow">

              <ShieldCheck className="text-emerald-600" />

              <p className="mt-3 text-sm text-gray-950 font-semibold">
                Mesra Alam
              </p>

            </div>

            <div className="rounded-2xl bg-white p-5 shadow">

              <span className="text-3xl">
                ♻️
              </span>

              <p className="mt-3 text-sm text-gray-950 font-semibold">
                Boleh diisi semula
              </p>

            </div>

            <div className="rounded-2xl bg-white p-5 shadow">

              <span className="text-3xl">
                🎒
              </span>

              <p className="mt-3 text-sm text-gray-950 font-semibold">
                Mudah Dibawa
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative mt-16 flex flex-1 items-center justify-center lg:mt-0">

          <div className="absolute h-[430px] w-[430px] rounded-full bg-emerald-300/20 blur-3xl" />

          <Image
            src="/product.png"
            alt="EcoShield"
            width={600}
            height={600}
            priority
            className="relative w-full max-w-lg drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105"
          />

        </div>

      </div>

    </section>
  );
}