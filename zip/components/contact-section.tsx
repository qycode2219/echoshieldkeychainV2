import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Share2,
  School,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="hubungi"
      className="bg-gradient-to-b from-emerald-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Hubungi Kami
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Maklumat Projek
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-950">
            Sekiranya anda ingin mengetahui lebih lanjut mengenai projek
            EcoShield Keychain V2, sila hubungi pihak sekolah atau pasukan
            projek melalui maklumat di bawah.
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <div className="flex items-center gap-5">

              <Image
                src="/schoollogo.jpg"
                alt="Seri Keledang Ipoh 学校校徽"
                width={80}
                height={80}
              />

              <div>

                <h3 className="text-2xl font-bold text-gray-900">
                  SMK Seri Keledang
                </h3>

                <p className="text-gray-500">
                  Junior Innovathon 2026
                </p>

              </div>

            </div>

            <div className="mt-10 space-y-7">

              <div className="flex items-start gap-4">

                <School className="mt-1 text-emerald-600" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    Sekolah
                  </h4>

                  <p className="text-gray-600">
                    Sekolah Menengah Kebangsaan Seri Keledang
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Phone className="mt-1 text-emerald-600" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    Telefon
                  </h4>

                  <p className="text-gray-600">
                    +60 5-281 3240
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Mail className="mt-1 text-emerald-600" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    AEA2047@moe.edu.my
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <MapPin className="mt-1 text-emerald-600" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    Alamat
                  </h4>

                  <p className="text-gray-600">
                    Persiaran Keledang Timur 2, 
                    31450 Menglembu, 
                    Perak
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Share2 className="mt-1 text-emerald-600" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    Facebook
                  </h4>

                  <p className="text-gray-600">
                    https://www.facebook.com/serikeledangmenglembu
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=SMK+Seri+Keledang&output=embed"
              className="h-full min-h-[550px] w-full border-0"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
