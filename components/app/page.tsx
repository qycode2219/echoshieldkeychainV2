import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import ProductSection from "@/components/product-section"
import StemSection from "@/components/stem-section"
import DemoSection from "@/components/demo-section"
import ContactSection from "@/components/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductSection />
        <StemSection />
        <DemoSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted-foreground">
          {"\u00A9 "}
          {new Date().getFullYear()} ECOKY SMK Seri Keledang, EcoShield Keychain V2 • Pertandingan Junior Innovathon 2026
        </div>
      </footer>
    </div>
  )
}
