import { Play, X } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#101727' }}>
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm leading-6 text-white/70 max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h6 className="text-sm font-semibold mb-4">Product</h6>
            <div className="space-y-3 text-sm text-white/70">
              <a href="#" className="block hover:text-white transition-colors">Features</a>
              <a href="#" className="block hover:text-white transition-colors">Pricing</a>
              <a href="#" className="block hover:text-white transition-colors">Templates</a>
              <a href="#" className="block hover:text-white transition-colors">Integrations</a>
            </div>
          </div>

          <div>
            <h6 className="text-sm font-semibold mb-4">Company</h6>
            <div className="space-y-3 text-sm text-white/70">
              <a href="#" className="block hover:text-white transition-colors">About</a>
              <a href="#" className="block hover:text-white transition-colors">Blog</a>
              <a href="#" className="block hover:text-white transition-colors">Careers</a>
              <a href="#" className="block hover:text-white transition-colors">Press</a>
            </div>
          </div>

          <div>
            <h6 className="text-sm font-semibold mb-4">Resources</h6>
            <div className="space-y-3 text-sm text-white/70">
              <a href="#" className="block hover:text-white transition-colors">Documentation</a>
              <a href="#" className="block hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block hover:text-white transition-colors">Community</a>
              <a href="#" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h6 className="text-sm font-semibold mb-4">Social Links</h6>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Youtube"
                className="w-9 h-9 rounded-full bg-white text-[#101727] flex items-center justify-center"
              >
                <Play size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white text-[#101727] flex items-center justify-center text-xs font-bold"
              >
                f
              </a>
              <a
                href="#"
                aria-label="X"
                className="w-9 h-9 rounded-full bg-white text-[#101727] flex items-center justify-center"
              >
                <X size={18} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="my-12 h-px w-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
        />

        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <p className="text-sm text-white/60">© 2026 Digitools. All rights reserved.</p>
          <div className="flex items-center gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
