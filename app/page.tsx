"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  FileText,
  Utensils,
  Plane,
  FileSignature,
  Bell,
  PawPrint,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { toast } from "sonner"
import Head from "next/head"
import { NavBar } from "@/components/layout/NavBar"
import { Footer } from "@/components/layout/Footer"

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  expandedContent: {
    description: string;
    images: string[];
    bulletPoints: string[];
  };
};

export default function Home() {
  const benefits: Benefit[] = [
    {
      icon: "/images/Benefits-Icon-1.png",
      title: "Simple & Intuitive Design",
      description: "Designed with intuitive, clear and clean UI — so you actually enjoy using it.",
    },
    {
      icon: "/images/Benefits-Icon-2.png",
      title: "One Solution for Everyday Hassles",
      description: "No more slips of paper, to-do lists scattered in your notes app, or separate apps for everything— it's all in one place.",
    },
    {
      icon: "/images/Benefits-Icon-3.png",
      title: "Stay on Top of Life",
      description: "Keep everything organized and never forget important tasks, documents, travel plans, grocery lists or emergency contacts again.",
    },
  ]

  const features: Feature[] = [
    {
      icon: <FileText size={28} className="text-white" />,
      title: "My Documents",
      description: "Securely store important docs (lease, ID, medical aid card) for quick access anytime.",
      expandedContent: {
        description:
          "Keep all your important documents in one secure, easily accessible place. Never search through multiple digital folders, stacks of paper or store files in your emails again.",
        images: ["/images/app-screenshots/documents.png"],
        bulletPoints: [
          "Categorized storage system",
          "Secure encryption for sensitive documents",
          "Quick search functionality",
          "Easily share documents with anyone via any app",
        ],
      },
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <path d="M9 10h6"></path>
          <path d="M12 7v6"></path>
          <path d="M9 17v4"></path>
          <path d="M15 17v4"></path>
          <path d="M12 21v-4"></path>
        </svg>
      ),
      title: "Emergency & Safety",
      description: "Store emergency contacts details — ready when it matters.",
      expandedContent: {
        description:
          "Quick access to all your critical emergency contacts when you need it most. Store the contact details and additional information of your local Fire Services, Police, Ambulance or family all in one secure place.",
        images: ["/images/app-screenshots/emergency-safety.png"],
        bulletPoints: [
          "One-tap emergency contacts - just the press of a button away!",
          "Store additional information for each contact",
        ],
      },
    },
    {
      icon: <Utensils size={28} className="text-white" />,
      title: "Mealprep, Recipes and Grocery List",
      description: "Plan meals with ease - Save your favorite recipes and create your grocery list in one dedicated place.",
      expandedContent: {
        description:
          "Stop wondering what to make for dinner - Save your favorite recipes, add recipe ingredients to your shopping list, and share your grocery list with anyone. MealPrep makes cooking at home easier and more organized.",
        images: ["/images/app-screenshots/mealprep.png", "/images/app-screenshots/grocery-list.png" , "/images/app-screenshots/recipe-details.png"],
        bulletPoints: [
          "Recipe collection with categorisation & search functionality",
          "Automatically add ingredients to your grocery list",
          "One dedicated space for your grocery list - no more loose pieces of paper or keeping track in your notes app",
        ],
      },
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
        </svg>
      ),
      title: "Travel Assistant",
      description: "Organize your trips with itineraries, tickets, bookings, packing lists, and travel reminders",
      expandedContent: {
        description:
          "Make travel planning stress-free with our comprehensive travel assistant. Store all your bookings, create packing lists, and get timely reminders for check-ins and departures.",
        images: [
          "/images/app-screenshots/travel-assistant.png",
          "/images/app-screenshots/travel-documents.png",
          "/images/app-screenshots/trip-details.png",
          "/images/app-screenshots/packing-list.png"
        ],
        bulletPoints: [
          "Keep track of all your upcoming trips",
          "Create a simple trip or a full itinerary with several locations and travel arrangements",
          "Booking confirmation storage - store all your trip bookings and tickets in one place, no more printouts and screenshots",
          "Customizable packing lists - plan what to pack for each trip and check off as you go",
        ],
      },
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6"></path>
          <path d="M14 3v5h5"></path>
          <circle cx="16" cy="16" r="6"></circle>
          <path d="M16 14v4"></path>
          <path d="M16 22v-1"></path>
        </svg>
      ),
      title: "Digital Will/Emergency Instructions",
      description: "Leave critical info for your loved ones in case of emergencies — easily editable.",
      expandedContent: {
        description:
          "Ensure your loved ones have access to important information if something happens to you. Create a comprehensive digital will that can be accessed in the event of an emergency.",
        images: ["/images/app-screenshots/digital-will.png"],
        bulletPoints: [
          "Secure storage of sensitive information",
          "Leave emergency instructions with ease",
          "Regular update reminders",
        ],
      },
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <circle cx="11" cy="4" r="2"></circle>
          <circle cx="18" cy="8" r="2"></circle>
          <circle cx="20" cy="16" r="2"></circle>
          <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
        </svg>
      ),
      title: "Smart Reminders",
      description: "Set custom recurring reminders — like car registration, dentist visits, and more.",
      expandedContent: {
        description:
          "Never miss an important chore or neglect critical recurring appointments again. Set up custom reminders for everything from annual car registrations to quarterly dental checkups.",
        images: ["/images/app-screenshots/reminders.png"],
        bulletPoints: [
          "Custom recurring reminder schedules",
          "Calendar integration",
          "Control when you are notified about upcoming reminders",
        ],
      },
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <circle cx="11" cy="4" r="2"></circle>
          <circle cx="18" cy="8" r="2"></circle>
          <circle cx="20" cy="16" r="2"></circle>
          <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
        </svg>
      ),
      title: "Pet Tracker",
      description: "Add your pets, track vaccines, vet visits, active treatments, and more.",
      expandedContent: {
        description:
          "Keep track of all your pet's health information in one place. Monitor vaccinations, medications, vet visits, and more to ensure your furry friends stay healthy.",
        images: ["/images/app-screenshots/pet-tracker.png"],
        bulletPoints: [
          "All your pets information in one place - Vaccination history, age, birthday etc.",
          "View active treatments",
          "Keep track of vet visits",
        ],
      },
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      title: "Vault",
      description: "Securely store passwords, banking details, Tax information, receipts and Proof of Purchase Slips.",
      expandedContent: {
        description:
          "Behind an extra layer of security, you can safely store sensitive bits of information such as Account Passwords, Banking Login/payment details, app/card pincodes, tax numbers etc.",
        images: ["/images/app-screenshots/vault.png"],
        bulletPoints: [
          "Secure encryption of content with pincode access.",
          "Categorized storage system",
          "Secure encryption for sensitive documents",
          "Quick search functionality",
        ],
      },
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Head>
        <link rel="preload" as="image" href="/images/iPhone-Vectors-1.png" />
        <link rel="preload" as="image" href="/images/iphone-frame-x3.png" />
        {benefits.map((benefit) => (
          <link key={`preload-benefit-${benefit.title}`} rel="preload" as="image" href={benefit.icon} />
        ))}
        {features.flatMap((feature) =>
          feature.expandedContent.images.map((image) => (
            <link key={`preload-feature-${image}`} rel="preload" as="image" href={image} />
          ))
        )}
      </Head>
      <NavBar />
      <HeroSection />
      <EmailSignupSection />
      <div className="relative z-10 pb-20">
        <div className="relative">
          <div
            className="absolute top-[-8rem] bottom-[-8rem] left-0 right-0 z-[-1]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 8rem, black calc(100% - 8rem), transparent)',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>
          
          <div className="space-y-32">
             <UnifiedBenefitsFeaturesSection benefits={benefits} features={features} />
             <IPhoneShowcaseSection />
             <div id="faq">
                <FaqSection />
             </div>
             <CtaSection />
          </div>
        </div>
      </div>
      <Footer />
      <FloatingElements />
    </div>
  )
}

// Animated floating elements that appear throughout the page
function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-[32rem] h-[32rem] rounded-full bg-purple-200/15 blur-3xl animate-float-medium"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-cyan-200/20 blur-3xl animate-float-fast"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-indigo-200/15 blur-3xl animate-float-slow"></div>
    </div>
  )
}

function HeroSection() {
  return (
    <section id="home" className="pt-2 pb-2 md:pt-4 md:pb-4 text-gray-900 relative z-30 min-h-screen flex items-center">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in-up text-center lg:text-center order-2 lg:order-1">
            <div className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-600 mb-4 border border-gray-200 shadow-sm">
              Simplify your life
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              Your Daily Admin.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3c9aec] via-[#58a6f8] to-[#b37bef]">
                Sorted.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-auto">
              Being an adult is hard enough — and being organized feels amazing. That's why we built ADULTING: the one
              app that simplifies your daily adult admin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              {/* Modern App Store Button */}
              <a href="#" className="app-store-button-apple mx-auto sm:mx-0">
                <div className="icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="text">
                  <span className="text-small">Download on the </span>
                  <span className="text-large">App Store</span>
                </div>
              </a>
              
              {/* Modern Google Play Button */}
              <a href="#" className="app-store-button-google mx-auto sm:mx-0">
                <div className="icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text">
                  <span className="text-small">Get it on </span>
                  <span className="text-large">Google Play </span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in relative z-40 order-1 lg:order-2">
            <div className="relative w-[350px] lg:w-[450px] h-full transform hover:scale-105 transition-all duration-700">
              {/* Subtle gradient background for iPhone */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#3c9aec]/30 via-[#b37bef]/10 to-cyan-200/20 rounded-[40px] blur-xl opacity-60 animate-pulse-slow"></div>
              
              {/* iPhone mockup */}
              <div className="relative w-full h-full z-10">
                <Image
                  src="/images/iPhone-Vectors-1.png"
                  alt="ADULTING app interface mockup"
                  width={450}
                  height={900}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmailSignupSection() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter a valid email address.")
      return
    }
    setLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast.success("Thank you! We'll notify you upon release.")
        setEmail("")
      } else {
        const data = await response.json()
        toast.error(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative z-20 mt-8 md:mt-0 md:-mt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border-4 border-black p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Want us to notify you when the app is released?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Enter your email here and we'll send you a message as soon as it's available!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow text-center sm:text-left"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <Button type="submit" className="bg-black text-white hover:bg-gray-800" disabled={loading}>
                {loading ? "Submitting..." : "Notify Me"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function UnifiedBenefitsFeaturesSection({ benefits, features }: { benefits: Benefit[], features: Feature[] }) {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [activeBenefit, setActiveBenefit] = useState(0)
  const isMobile = useIsMobile()

  const [carouselIndices, setCarouselIndices] = useState<{ [key: string]: number }>({
    mealprep: 0,
    travel: 0,
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBenefitChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setActiveBenefit((prev) => (prev + 1) % benefits.length)
    } else {
      setActiveBenefit((prev) => (prev - 1 + benefits.length) % benefits.length)
    }
  }

  const toggleExpand = (index: number) => {
    if (expandedFeature === index) {
      setExpandedFeature(null)
    } else {
      setExpandedFeature(index)
    }
  }

  const handleCarouselNav = (featureKey: string, direction: 'prev' | 'next', totalImages: number) => {
    setCarouselIndices(prev => {
      const currentIndex = prev[featureKey] || 0
      let newIndex
      if (direction === 'prev') {
        newIndex = (currentIndex - 1 + totalImages) % totalImages
      } else {
        newIndex = (currentIndex + 1) % totalImages
      }
      return { ...prev, [featureKey]: newIndex }
    })
  }

  const setCarouselIndex = (featureKey: string, index: number) => {
    setCarouselIndices(prev => ({ ...prev, [featureKey]: index }))
  }

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        
        {/* Benefits Section */}
        <div id="benefits" className="relative mb-32">
          {/* Soft gradient overlay */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#3c9aec]/40 via-[#b37bef]/20 to-indigo-200/20 rounded-[2rem] blur-sm opacity-60"></div>
          
          <div className="relative bg-gray-100/95 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 md:p-16 shadow-xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Why You'll{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c9aec] to-[#b37bef]">
                  Love
                </span>{" "}
                Using ADULTING
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We've designed ADULTING to make your life easier, more organized, and less stressful.
              </p>
            </div>

            {isMobile ? (
              <div className="relative max-w-md mx-auto overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeBenefit * 100}%)` }}
                >
                  {benefits.map((benefit, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="group relative">
                        <div className="absolute -inset-1 bg-gray-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gray-50/95 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-xl text-center h-full min-h-[620px] flex flex-col items-center justify-center">
                          <div className="mb-6 flex justify-center">
                            <Image
                              src={benefit.icon}
                              alt={benefit.title}
                              width={256}
                              height={256}
                              className="h-64 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-6 mt-8">
                  <Button onClick={() => handleBenefitChange("prev")} variant="outline" size="icon" className="rounded-full shadow-md">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <div className="flex gap-3">
                    {benefits.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveBenefit(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          i === activeBenefit ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <Button onClick={() => handleBenefitChange("next")} variant="outline" size="icon" className="rounded-full shadow-md">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group relative" style={{ animationDelay: `${index * 150}ms` }}>
                    {/* Subtle hover effect */}
                    <div className="absolute -inset-1 bg-gray-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative bg-gray-50/95 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-xl text-center h-full">
                      <div className="mb-6 flex justify-center">
                        <Image
                          src={benefit.icon}
                          alt={benefit.title}
                          width={256}
                          height={256}
                          className="h-64 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="relative">
          {/* Soft gradient overlay */}
          <div className="absolute -inset-4 bg-gradient-to-br from-indigo-200/20 via-[#3c9aec]/40 to-[#b37bef]/20 rounded-[2rem] blur-sm opacity-60"></div>
          
          <div className="relative bg-gray-100/95 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 md:p-16 shadow-xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c9aec] to-[#b37bef]">
                  8 Core Modules
                </span>{" "}
                to Cover Your Most Essential Needs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                ADULTING brings together all the tools you need to manage your adult responsibilities in one simple app.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-700/40 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-700/60 border border-gray-600/80 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex-shrink-0 p-4 bg-gray-700/60 rounded-xl group-hover:bg-gray-700/80 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                    </div>
                    <Button
                      onClick={() => toggleExpand(index)}
                      variant="outline"
                      className="border-gray-400/50 text-gray-200 hover:text-white hover:bg-gray-700/50 hover:border-gray-300 flex-shrink-0 relative overflow-hidden group bg-transparent"
                    >
                      <span className="relative z-10">{expandedFeature === index ? "See Less" : "See More"}</span>
                      <span className="absolute inset-0 bg-gray-700/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Button>
                  </div>

                  {expandedFeature === index && (
                    <div className="mt-6 p-6 bg-gray-800/80 rounded-2xl animate-fade-in border border-gray-700/60">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Image Section - Left Side */}
                        <div className="relative order-2 md:order-1 md:w-1/2">
                          {feature.expandedContent.images.length > 1 ? (
                            // Carousel for multiple images
                            <div className="relative rounded-3xl overflow-hidden">
                              <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                  transform: `translateX(-${
                                    (carouselIndices[feature.title.split(" ")[0]] || 0) * 100
                                  }%)`,
                                }}
                              >
                                {feature.expandedContent.images.map((img, imgIndex) => (
                                  <div key={imgIndex} className="min-w-full flex-shrink-0 text-center">
                                    <div className="rounded-image-container">
                                      <Image
                                        src={img}
                                        alt={`${feature.title} screenshot ${imgIndex + 1}`}
                                        width={300}
                                        height={600}
                                        className="w-full h-auto object-contain max-h-[400px] md:max-h-[480px]"
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {/* Carousel Controls */}
                              <button
                                onClick={() =>
                                  handleCarouselNav(
                                    feature.title.split(" ")[0],
                                    "prev",
                                    feature.expandedContent.images.length
                                  )
                                }
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-800/70 hover:bg-gray-700/90 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
                              >
                                <ChevronLeft className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() =>
                                  handleCarouselNav(
                                    feature.title.split(" ")[0],
                                    "next",
                                    feature.expandedContent.images.length
                                  )
                                }
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 bg-gray-800/70 hover:bg-gray-700/90 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
                              >
                                <ChevronRight className="h-5 w-5" />
                              </button>

                              {/* Carousel Indicators */}
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                {feature.expandedContent.images.map((_, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={() => setCarouselIndex(feature.title.split(" ")[0], imgIndex)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      (carouselIndices[feature.title.split(" ")[0]] || 0) === imgIndex
                                        ? "bg-white"
                                        : "bg-white/50 hover:bg-white/75"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          ) : (
                            // Single image
                            <div className="overflow-hidden text-center">
                              <div className="rounded-image-container">
                                <Image
                                  src={feature.expandedContent.images[0]}
                                  alt={`${feature.title} screenshot`}
                                  width={300}
                                  height={600}
                                  className="w-full h-auto object-contain max-h-[400px] md:max-h-[480px]"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Content Section - Right Side */}
                        <div className="flex-1 order-1 md:order-2 md:w-1/2">
                          <p className="text-gray-200 mb-6 leading-relaxed break-words">{feature.expandedContent.description}</p>
                          <h4 className="font-bold mb-4 text-white">Key Features:</h4>
                          <ul className="space-y-3 text-gray-200">
                            {feature.expandedContent.bulletPoints.map((point, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-700/60 rounded-full mr-3 mt-0.5 text-white text-xs flex-shrink-0">
                                  ✓
                                </span>
                                <span className="leading-relaxed break-words">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* New Subheading Section */}
              <div className="text-center pt-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Full Control/Customizability
                </h3>
                <p className="text-lg text-gray-600">
                  Don't want to use/see modules? Simply hide them in Settings!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IPhoneShowcaseSection() {
  return (
    <section className="container mx-auto px-4 relative z-10">
      <div className="relative">
        {/* Soft gradient overlay */}
        <div className="absolute -inset-4 bg-gradient-to-br from-cyan-200/20 via-[#3c9aec]/30 to-[#b37bef]/20 rounded-[2rem] blur-sm opacity-60"></div>
        
        <div className="relative bg-gray-100/95 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 md:p-16 shadow-xl">
          {/* iPhone Showcase */}
          <div className="relative z-10 flex justify-center max-w-4xl mx-auto">
            <div className="relative group">
              {/* Subtle gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3c9aec]/50 via-[#b37bef]/30 to-cyan-200/20 rounded-3xl blur-2xl transform group-hover:scale-110 transition-transform duration-700"></div>
              
              {/* iPhone Frame */}
              <Image
                src="/images/iphone-frame-x3.png"
                alt="ADULTING App Showcase"
                width={600}
                height={1200}
                className="relative z-10 object-contain w-full h-auto transform group-hover:scale-105 transition-all duration-700 drop-shadow-2xl"
                priority
              />
              
              {/* Floating elements around the phone - subtle grey dots */}
              <div className="absolute top-1/4 -left-16 w-3 h-3 bg-gray-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 -right-12 w-2 h-2 bg-gray-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 -left-8 w-2 h-2 bg-gray-600/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/4 -right-16 w-3 h-3 bg-gray-300/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Decorative text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center opacity-2">
              <h3 className="text-6xl md:text-8xl font-bold text-gray-500/5 tracking-wider">
                ADULTING
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      question: "Is my data safe?",
      answer:
        "Yes — your data is stored securely and only accessible to you. We use industry-standard encryption to protect your information.",
    },
    {
      question: "Do I need an internet connection to access my info?",
      answer:
        "Core features work offline. Some syncing requires a connection, but you'll always have access to your essential information.",
    },
    {
      question: "Is ADULTING free?",
      answer:
        "ADULTING offers a free trial with all the features for a limited time upon downloading, after this period a monthly subscription fee will allow full functionality.",
    },
    {
      question: "Can I use ADULTING on multiple devices?",
      answer:
        "Yes — just log in with the same account on any device. Your data will sync automatically across all your devices.",
    },
    {
      question: "How do I suggest new features?",
      answer: "We love feedback! Use the in-app suggestion box or email us directly at support@adulting-app.co",
    },
  ]

  return (
    <section id="faq" className="container mx-auto px-4 relative z-10">
      <div className="relative">
        {/* Soft gradient overlay */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#3c9aec]/30 via-indigo-200/20 to-[#b37bef]/20 rounded-[2rem] blur-sm opacity-60"></div>
        
        <div className="relative bg-gray-100/95 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 md:p-16 shadow-xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Questions?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-bl from-[#3c9aec] via-[#58a6f8] to-[#b37bef]">
                We've Got Answers.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about ADULTING.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-600/90 backdrop-blur-sm rounded-2xl border border-gray-500/30 hover:bg-gray-600 transition-all duration-300 animate-fade-in-up shadow-lg hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-8 py-6 text-left font-semibold hover:no-underline group">
                    <span className="group-hover:text-white transition-colors duration-300 text-gray-100 text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-200 leading-relaxed animate-fade-in">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="container mx-auto px-4 relative z-10">
      <div className="relative max-w-5xl mx-auto">
        {/* Soft gradient overlay */}
        <div className="absolute -inset-4 bg-gradient-to-br from-purple-300/20 via-cyan-200/20 to-[#3c9aec]/30 rounded-[2rem] blur-sm opacity-60"></div>

        <div className="relative bg-gray-100/95 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 md:p-16 text-center shadow-xl">
          <div className="inline-block px-6 py-2 rounded-full bg-white/80 text-gray-600 text-sm font-semibold mb-6 border border-gray-200 shadow-sm">
            Get Started Today
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Ready to finally feel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c9aec] to-[#b37bef]">
              organized
            </span>
            ?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Download ADULTING today and take control of your grown-up life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Modern App Store Button */}
            <a href="#" className="app-store-button-apple mx-auto sm:mx-0">
              <div className="icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <div className="text">
                <span className="text-small">Download on the </span>
                <span className="text-large">App Store</span>
              </div>
            </a>
            
            {/* Modern Google Play Button */}
            <a href="#" className="app-store-button-google mx-auto sm:mx-0">
              <div className="icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="text">
                <span className="text-small">Get it on </span>
                <span className="text-large">Google Play </span>
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  )
}
