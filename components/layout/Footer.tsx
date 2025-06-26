"use client"

import Link from "next/link"

export function Footer() {
  const legalLinks = [
    { href: "/terms", label: "Terms of Use" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-black/90 text-white py-16 relative overflow-hidden mt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 relative inline-block font-horizon">
              ADULTING
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#609bf0] via-[#609bf0] to-[#ad31f3]"></span>
            </h2>
            <p className="text-gray-300 max-w-md text-lg leading-relaxed">
              ADULTING is your everyday admin assistant — built to help grown-ups stay sane.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                Links
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gray-400"></span>
              </h3>
              <ul className="space-y-3">
                {["Home", "Benefits", "Features", "FAQ"].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center text-lg"
                    >
                      <span className="w-0 h-0.5 bg-gray-400 mr-0 group-hover:w-3 group-hover:mr-3 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                Legal
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gray-400"></span>
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center text-lg"
                    >
                      <span className="w-0 h-0.5 bg-gray-400 mr-0 group-hover:w-3 group-hover:mr-3 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-base">&copy; {new Date().getFullYear()} ADULTING. All rights reserved.</p>

          <div className="flex space-x-6 mt-6 md:mt-0">
            {["linkedin", "instagram", "twitter"].map((social, i) => (
              <Link
                key={i}
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-${social}`}
                >
                  {social === "linkedin" ? (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  ) : social === "instagram" ? (
                    <>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </>
                  ) : (
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4z" />
                  )}
                </svg>
                <span className="sr-only">{social}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 