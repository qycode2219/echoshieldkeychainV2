import Image from "next/image";
import {
  Ruler,
  Weight,
  Package,
  Leaf,
  RefreshCcw,
  Wind,
  Trees,
  ShieldCheck
} from "lucide-react";

const specs = [
  {
    icon: Ruler,
    title: "Panjang",
    value: "78 mm"
  },
  {
    icon: Ruler,
    title: "Lebar",
    value: "52 mm"
  },
  {
    icon: Package,
    title: "Bahan",
    value: "PLA+ "
  },
  {
    icon: Leaf,
    title: "Aroma",
    value: "Herba Semula Jadi"
  }
];

const features = [
  {
    icon: RefreshCcw,
    title: "Kantung boleh ganti",
    desc: "Pek penghalau boleh diganti tanpa membeli produk baharu."
  },
  {
    icon: Wind,
    title: "Liang Udara 360°",
    desc: "Lubang pengudaraan membantu aroma semula jadi tersebar dengan lebih sekata."
  },
  {
    icon: Trees,
    title: "Mesra alam",
    desc: "Mengurangkan penggunaan bahan kimia serta plastik sekali guna."
  },
  {
    icon: ShieldCheck,
    title: "Perlindungan Harian",
    desc: "Sesuai digunakan di sekolah, taman, perkhemahan dan aktiviti luar."
  }
];

export default function ProductSection() {
  return (
    <section
      id="produk"
      className="py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Gambaran Keseluruhan Produk
          </span>

          <h2 className="mt-5 text-5xl font-bold text-gray-900">
            Spesifikasi Produk
          </h2>

        </div>

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          <div className="flex justify-center">

            <Image
              src="/product-main.png"
              alt="Product"
              width={450}
              height={450}
              className="drop-shadow-2xl"
            />

          </div>

          <div className="grid gap-5">

            {specs.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="flex items-center rounded-2xl border p-5"
                >

                  <div className="mr-5 rounded-xl bg-emerald-100 p-4">

                    <Icon
                      className="text-emerald-600"
                      size={26}
                    />

                  </div>

                  <div>

                    <p className="text-sm text-gray-950">
                      {item.title}
                    </p>

                    <h3 className="text-lg font-semibold text-gray-600">
                      {item.value}
                    </h3>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

        <div className="mt-24">

          <h2 className="text-center text-4xl font-bold text-gray-900">
            Mengapa EcoShield Keychain V2 Berbeza?
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {features.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">

                    <Icon
                      size={30}
                      className="text-emerald-600"
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.desc}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}
