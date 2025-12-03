import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <span className="text-blue-500">SaaS</span>Pro
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-8 flex-wrap">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Company</h4>
            <Link href="#">About</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Blog</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Product</h4>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Docs</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Support</h4>
            <Link href="#">Contact</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Privacy</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="hover:text-blue-500 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.16-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.39 4.49 13.94 13.94 0 01-10.12-5.13 4.91 4.91 0 001.52 6.56 4.92 4.92 0 01-2.23-.61v.06a4.93 4.93 0 003.95 4.83 4.93 4.93 0 01-2.22.08 4.93 4.93 0 004.6 3.42 9.87 9.87 0 01-6.1 2.1c-.4 0-.79-.02-1.18-.07a13.93 13.93 0 007.56 2.21c9.06 0 14.02-7.5 14.02-14.02l-.02-.64A10.03 10.03 0 0024 4.56z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.14 6.82 9.48.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.63.07-.62.07-.62 1.01.07 1.55 1.04 1.55 1.04.9 1.53 2.36 1.09 2.93.84.09-.66.35-1.09.63-1.34-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.57 9.57 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.57 1.03 2.65 0 3.81-2.34 4.64-4.57 4.89.36.31.69.92.69 1.85v2.74c0 .27.18.58.69.48a10.01 10.01 0 006.82-9.48c0-5.5-4.46-9.96-9.96-9.96z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SaaSPro. All rights reserved.
      </div>
    </footer>
  );
}
