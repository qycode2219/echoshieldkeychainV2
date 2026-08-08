import Image from "next/image";

const demos = [
  {
    image: "/demo-outdoor.png",
    title: "Penggunaan Harian",
    description:
      "EcoShield Keychain V2 boleh digantung pada beg sekolah, beg galas atau kunci dan sesuai digunakan semasa aktiviti luar.",
  },
  {
    image: "/demo-structure.png",
    title: "Reka Bentuk Produk",
    description:
      "Menunjukkan struktur dalaman EcoShield Keychain V2 serta ruang untuk repellent pouch yang boleh diganti.",
  },
  {
    image: "/demo-ingredients.jpg",
    title: "Bahan Semula Jadi",
    description:
      "Menggunakan bahan semula jadi seperti serai wangi, pudina, cengkih dan kulit lemon sebagai penghalau serangga.",
  },
];

export default function DemoSection() {
  return (
    <section id="demo" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Demonstrasi
          </span>
          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Demonstrasi Produk
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Berikut merupakan beberapa contoh penggunaan EcoShield Keychain V2, struktur produk serta bahan semula jadi yang digunakan dalam inovasi ini.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {demos.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

