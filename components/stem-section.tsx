import { Atom, Cpu, Cog, Calculator } from "lucide-react";

const stemItems = [
  {
    icon: Atom,
    title: "Science",
    subtitle: "Sains",
    description: "Mengkaji tingkah laku serangga serta keberkesanan bahan semula jadi seperti serai wangi, pudina, cengkih dan kulit lemon sebagai bahan penghalau.",
  },
  {
    icon: Cpu,
    title: "Technology",
    subtitle: "Teknologi",
    description: "Menggunakan perisian reka bentuk 3D dan teknologi pencetakan 3D bagi menghasilkan prototaip EcoShield Keychain V2.",
  },
  {
    icon: Cog,
    title: "Engineering",
    subtitle: "Kejuruteraan",
    description: "Mereka bentuk struktur produk supaya ringan, tahan lasak, mempunyai aliran udara yang baik dan mudah menggantikan repellent pouch.",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    subtitle: "Matematik",
    description: "Mengira dimensi, isipadu, ketebalan dan nisbah campuran bahan bagi memastikan prestasi serta saiz produk yang optimum.",
  },
];

export default function StemSection() {
  return (
    <section id="stem" className="bg-gradient-to-b from-white to-emerald-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10 tracking-wide uppercase">
            Integrasi STEM
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Penggunaan STEM Dalam Projek
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            EcoShield Keychain 2.0 dibangunkan melalui gabungan empat elemen utama STEM bagi memastikan produk lebih inovatif, praktikal dan mesra alam.
          </p>
        </div>

        {/* Grid Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stemItems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200"
                >
                  <div>
                    {/* Icon Container */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon size={28} strokeWidth={1.75} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-950">
                      {item.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="mt-1 text-sm font-semibold tracking-wider text-emerald-600 uppercase">
                      {item.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
