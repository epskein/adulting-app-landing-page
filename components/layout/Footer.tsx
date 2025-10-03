"use client"

import Link from "next/link"

export function Footer() {
  const legalLinks = [
    { href: "/terms", label: "Terms of Use" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks: Record<"linkedin" | "instagram" | "tiktok", string> = {
    linkedin: "https://www.linkedin.com/company/adulting-mobile",
    instagram: "https://www.instagram.com/_adulting_app_/",
    tiktok: "https://www.tiktok.com/@_adulting_app_",
  }

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
            {["linkedin", "instagram", "tiktok"].map((social, i) => (
              <Link
                key={i}
                href={socialLinks[social as keyof typeof socialLinks]}
                aria-label={social}
                title={social}
                target="_blank"
                rel="noopener noreferrer"
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
                    // TikTok (monochrome)
                    <path
                      d="M12 2v11.5c0 2.33-1.9 4.22-4.22 4.22S3.56 15.83 3.56 13.5 5.45 9.28 7.78 9.28c.27 0 .54.02.8.06V7.02c-.26-.03-.53-.04-.8-.04-3.39 0-6.14 2.75-6.14 6.14s2.75 6.14 6.14 6.14 6.14-2.75 6.14-6.14V6.2c1.38 1.05 3.1 1.68 4.96 1.68V5.1c-1.72 0-3.3-.56-4.58-1.5V2H12z"
                      fill="currentColor"
                      stroke="none"
                    />
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