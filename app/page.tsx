"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <NavBar />
      <HeroSection />
      <div className="relative z-10 space-y-8 pb-20">
        <UnifiedBenefitsFeaturesSection />
        <IPhoneShowcaseSection />
        <FaqSection />
        <CtaSection />
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
      {/* Gradient orbs that float around */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-300/10 to-emerald-500/10 blur-3xl animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-gray-400/10 to-gray-600/10 blur-3xl animate-float-medium"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-400/5 to-gray-500/5 blur-3xl animate-float-fast"></div>
    </div>
  )
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 rounded-full ${
        scrolled ? "bg-black/95 shadow-lg" : "bg-black/90"
      } shadow-xl shadow-black/50`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <h1 className="text-2xl font-bold tracking-tighter relative text-white font-horizon">
            ADULTING
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden relative overflow-hidden group text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative z-10">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</div>
          <span className="absolute inset-0 bg-gray-800 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Benefits", "Features", "FAQ"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium relative group text-white">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full relative overflow-hidden group">
            <span className="relative z-10">Download Now</span>
            <span className="absolute inset-0 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black rounded-2xl shadow-lg md:hidden animate-slide-down">
            <div className="flex flex-col p-4 space-y-4">
              {["Home", "Benefits", "Features", "FAQ"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white hover:text-emerald-500 transition-colors duration-300 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </Link>
              ))}
              <Button
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-full relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Download Now</span>
                <span className="absolute inset-0 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="home" className="pt-2 pb-2 md:pt-4 md:pb-4 text-white relative z-30">
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="md:w-1/2 space-y-6 animate-fade-in-up text-center -mt-20 md:-mt-16">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-emerald-300 mb-2">
              Simplify your life
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Your Daily Admin.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
                Sorted.
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md mx-auto">
              Being an adult is hard enough — and being organized feels amazing. That's why we built ADULTING: the one
              app that simplifies your daily adult admin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* Modern App Store Button */}
              <a href="#" className="app-store-button mx-auto sm:mx-0">
                <div className="icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="text">
                  <span className="text-small">Download on the</span>
                  <span className="text-large">App Store</span>
                </div>
              </a>
              
              {/* Modern Google Play Button */}
              <a href="#" className="app-store-button mx-auto sm:mx-0">
                <div className="icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text">
                  <span className="text-small">Get it on</span>
                  <span className="text-large">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in relative z-40">
            <div className="relative w-[512px] h-full transform hover:rotate-1 transition-transform duration-500 mb-12">
              {/* iPhone mockup with reduced size (20% smaller: 640->512, 1280->1024) */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/iPhone-Vectors-1.png"
                  alt="ADULTING app interface mockup"
                  width={512}
                  height={1024}
                  className="object-contain w-full h-full drop-shadow-2xl"
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

function UnifiedBenefitsFeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [carouselIndices, setCarouselIndices] = useState<{[key: string]: number}>({
    mealprep: 0,
    travel: 0
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const benefits = [
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
      title: "Simple & Intuitive Design",
      description: "Designed with intuitive, clear and clean UI — so you actually enjoy using it.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
      title: "One Solution for Everyday Hassles",
      description: "No more slips of paper, to-do lists scattered in your notes app, or separate apps for everything— it's all in one place.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
      title: "Stay on Top of Life",
      description: "Keep everything organized and never forget important tasks, documents, travel plans, grocery lists or emergency contacts again.",
    },
  ]

  const features = [
    {
      icon: <ShieldCheck size={28} className="text-white" />,
      title: "emergency & safety",
      description: "Store emergency contacts, insurance info, and medical details — ready when it matters.",
      expandedContent: {
        description:
          "Quick access to all your emergency information when you need it most. Store important contacts, medical information, insurance details, and emergency procedures all in one secure place.",
        images: ["/images/app-screenshots/emergency-safety.png"],
        bulletPoints: [
          "One-tap emergency contacts",
          "Medical information card for first responders",
          "Insurance policy details and contact numbers",
          "Emergency procedures and checklists",
        ],
      },
    },
    {
      icon: <Utensils size={28} className="text-white" />,
      title: "mealprep",
      description: "Save your favorite recipes, create grocery lists, and plan meals with ease.",
      expandedContent: {
        description:
          "Plan your meals for the week, save your favorite recipes, and generate shopping lists automatically. MealPrep makes cooking at home easier and more organized.",
        images: ["/images/app-screenshots/mealprep.png", "/images/app-screenshots/grocery-list.png"],
        bulletPoints: [
          "Weekly meal planning calendar",
          "Recipe collection with search functionality",
          "Automatic grocery list generation",
          "Dietary preferences and restrictions tracking",
        ],
      },
    },
    {
      icon: <FileText size={28} className="text-white" />,
      title: "my documents",
      description: "Securely store important docs (lease, ID, medical aid card) for quick access anytime.",
      expandedContent: {
        description:
          "Keep all your important documents in one secure, easily accessible place. Never search through stacks of paper or multiple digital folders again.",
        images: ["/images/app-screenshots/documents.png"],
        bulletPoints: [
          "Document scanner with OCR technology",
          "Categorized storage system",
          "Secure encryption for sensitive documents",
          "Quick search functionality",
        ],
      },
    },
    {
      icon: <Plane size={28} className="text-white" />,
      title: "travel assistant",
      description: "Organize your trips with itineraries, tickets, bookings, packing lists, and travel reminders.",
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
          "Trip itinerary builder",
          "Booking confirmation storage",
          "Customizable packing lists",
          "Travel document organizer with offline access",
        ],
      },
    },
    {
      icon: <FileSignature size={28} className="text-white" />,
      title: "digital will",
      description: "Leave critical info for your loved ones in case of emergencies — easily editable.",
      expandedContent: {
        description:
          "Ensure your loved ones have access to important information if something happens to you. Create a comprehensive digital will that can be securely shared when needed.",
        images: ["/images/app-screenshots/digital-will.png"],
        bulletPoints: [
          "Guided will creation process",
          "Secure storage of sensitive information",
          "Emergency access protocols",
          "Regular update reminders",
        ],
      },
    },
    {
      icon: <Bell size={28} className="text-white" />,
      title: "smart reminders",
      description: "Set custom recurring reminders — like car registration, dentist visits, and more.",
      expandedContent: {
        description:
          "Never miss an important deadline or appointment again. Set up custom reminders for everything from annual car registrations to quarterly dental checkups.",
        images: ["/images/app-screenshots/reminders.png"],
        bulletPoints: [
          "Custom recurring reminder schedules",
          "Priority-based notification system",
          "Calendar integration",
          "Location-based reminders",
        ],
      },
    },
    {
      icon: <PawPrint size={28} className="text-white" />,
      title: "pet tracker",
      description: "Add your pets, track vaccines, vet visits, active treatments, and more.",
      expandedContent: {
        description:
          "Keep track of all your pet's health information in one place. Monitor vaccinations, medications, vet visits, and more to ensure your furry friends stay healthy.",
        images: ["/images/app-screenshots/pet-tracker.png"],
        bulletPoints: [
          "Vaccination schedule and history",
          "Medication tracker with reminders",
          "Vet visit records and upcoming appointments",
          "Diet and exercise logs",
        ],
      },
    },
    {
      icon: <FileText size={28} className="text-white" />,
      title: "vault",
      description: "Securely store passwords, banking details, Tax information, receipts and Proof of Purchase Slips.",
      expandedContent: {
        description:
          "Behind an extra layer of security, you can safely store sensitive bits of information such as Account Passwords, Banking Login/payment details, app/card pincodes, tax numbers etc.",
        images: ["/images/app-screenshots/documents.png"],
        bulletPoints: [
          "Secure encryption of content with pincode access",
          "Categorized storage system",
          "Secure encryption for sensitive documents",
          "Quick search functionality",
        ],
      },
    },
  ]

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
    <section className="container mx-auto px-4 relative z-10 -mt-48">
      <div className="bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/20 animate-fade-in relative overflow-hidden">
        {/* Gradient accent border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-300 rounded-t-3xl"></div>
        
        {/* Subtle pattern background */}
        <div 
          className="absolute inset-0 opacity-3 rounded-3xl" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>

        {/* ========== BENEFITS SECTION ========== */}
        <div className="p-8 md:p-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left mb-6 animate-fade-in text-white relative z-10 max-w-2xl">
            Why You'll{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Love</span>{" "}
            Using ADULTING
          </h2>
          <p className="text-gray-300 text-left max-w-2xl mb-16 animate-fade-in relative z-10">
            We've designed ADULTING to make your life easier, more organized, and less stressful.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-[80%] mx-auto mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-3 transition-transform duration-300 mx-auto">
                  <span className="text-black">{benefit.icon}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors duration-300 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========== FEATURES SECTION ========== */}
        <div className="p-8 md:p-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              8 Core Modules
            </span>{" "}
            to Cover Your Most Essential Needs
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            ADULTING brings together all the tools you need to manage your adult responsibilities in one simple app.
          </p>

          {/* Feature Cards - reduced width from 90% to 60% */}
          <div className="space-y-6 max-w-[60%] mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-2xl transition-all duration-500 hover:from-gray-700 hover:to-gray-600 ${
                  expandedFeature === index
                    ? "mb-8 shadow-2xl shadow-emerald-500/30 ring-2 ring-emerald-500/50"
                    : "transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-emerald-500/20 rounded-xl">{feature.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                  <Button
                    onClick={() => toggleExpand(index)}
                    variant="outline"
                    className="border-emerald-500/50 text-emerald-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400 flex-shrink-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">{expandedFeature === index ? "See Less" : "See More"}</span>
                    <span className="absolute inset-0 bg-emerald-500/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Button>
                </div>

                {expandedFeature === index && (
                  <div className="mt-6 pt-6 border-t border-gray-500 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Image/Carousel Section */}
                      <div className="relative">
                        {feature.expandedContent.images.length > 1 ? (
                          // Carousel for multiple images
                          <div className="relative overflow-hidden rounded-3xl">
                            <div 
                              className="flex transition-transform duration-500 ease-in-out"
                              style={{ 
                                transform: `translateX(-${(carouselIndices[feature.title.split(' ')[0]] || 0) * 100}%)` 
                              }}
                            >
                              {feature.expandedContent.images.map((image, imgIndex) => (
                                <div key={imgIndex} className="min-w-full">
                                  <Image
                                    src={image}
                                    alt={`${feature.title} screenshot ${imgIndex + 1}`}
                                    width={800}
                                    height={300}
                                    className="rounded-3xl w-full h-[300px] object-contain transform hover:scale-105 transition-transform duration-700"
                                  />
                                </div>
                              ))}
                            </div>
                            
                            {/* Carousel Controls */}
                            <button
                              onClick={() => handleCarouselNav(feature.title.split(' ')[0], 'prev', feature.expandedContent.images.length)}
                              className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"></path>
                              </svg>
                            </button>
                            <button
                              onClick={() => handleCarouselNav(feature.title.split(' ')[0], 'next', feature.expandedContent.images.length)}
                              className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </button>
                            
                            {/* Carousel Indicators */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                              {feature.expandedContent.images.map((_, imgIndex) => (
                                <button
                                  key={imgIndex}
                                  onClick={() => setCarouselIndex(feature.title.split(' ')[0], imgIndex)}
                                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    (carouselIndices[feature.title.split(' ')[0]] || 0) === imgIndex 
                                      ? 'bg-white' 
                                      : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Single image
                          <div className="relative overflow-hidden rounded-3xl group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image
                              src={feature.expandedContent.images[0]}
                              alt={`${feature.title} screenshot`}
                              width={800}
                              height={300}
                              className="rounded-3xl w-full h-[300px] object-contain transform group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Content Section */}
                      <div>
                          <p className="text-gray-200 mb-4">{feature.expandedContent.description}</p>
                          <h4 className="font-semibold mb-2 text-emerald-300">Key Features:</h4>
                          <ul className="space-y-2 text-gray-200">
                          {feature.expandedContent.bulletPoints.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-flex items-center justify-center w-5 h-5 bg-emerald-500/20 rounded-full mr-2 mt-1 text-emerald-300 text-xs">
                                ✓
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IPhoneShowcaseSection() {
  return (
    <section className="container mx-auto px-4 relative z-10">
      <div className="bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/20 animate-fade-in relative overflow-hidden">
        {/* Gradient accent border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-300 rounded-t-3xl"></div>
        
        {/* Subtle pattern background */}
        <div 
          className="absolute inset-0 opacity-3 rounded-3xl" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>

        {/* ========== IPHONE SHOWCASE SECTION ========== */}
        <div className="p-8 md:p-12 relative z-10">
          {/* iPhone Showcase - scaled to match Features Cards width */}
          <div className="relative z-10 flex justify-center max-w-[90%] mx-auto">
            <div className="relative group w-full">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-300/5 to-emerald-500/10 rounded-3xl blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
              
              {/* iPhone Frame with rounded corners - increased scale */}
              <Image
                src="/images/iphone-frame-x3.png"
                alt="ADULTING App Showcase"
                width={700}
                height={1400}
                className="relative z-10 object-contain w-full h-auto transform group-hover:scale-105 transition-all duration-700 drop-shadow-2xl rounded-3xl"
                priority
              />
              
              {/* Floating elements around the phone */}
              <div className="absolute top-1/4 -left-20 w-4 h-4 bg-emerald-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 -right-16 w-3 h-3 bg-emerald-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 -left-12 w-2 h-2 bg-emerald-600/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/4 -right-20 w-5 h-5 bg-emerald-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Decorative text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center opacity-5">
              <h3 className="text-6xl md:text-8xl font-bold text-emerald-500/10 tracking-wider">
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
      answer: "We love feedback! Use the in-app suggestion box or email us directly at feedback@adultingapp.com.",
    },
  ]

  return (
    <section id="faq" className="container mx-auto px-4 relative z-10">
      <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-300/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-300/5 to-emerald-500/5 rounded-full blur-3xl"></div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in text-gray-900 relative z-10">
          Questions?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
            We've Got Answers.
          </span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 animate-fade-in relative z-10">
          Find answers to the most common questions about ADULTING.
        </p>

        <div className="max-w-3xl mx-auto relative z-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline group">
                  <span className="group-hover:text-emerald-600 transition-colors duration-300 text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 animate-fade-in">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="container mx-auto px-4 relative z-10">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl shadow-black/20 text-center relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-gray-100 rounded-3xl"></div>

        {/* Animated dots */}
        <div className="absolute inset-0 opacity-20 rounded-3xl">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.2) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          ></div>
        </div>

        <div className="relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Get Started Today
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Ready to finally feel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              organized
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Download ADULTING today and take control of your grown-up life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            {/* Modern App Store Button */}
            <a href="#" className="app-store-button mx-auto sm:mx-0">
              <div className="icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <div className="text">
                <span className="text-small">Download on the</span>
                <span className="text-large">App Store</span>
              </div>
            </a>
            
            {/* Modern Google Play Button */}
            <a href="#" className="app-store-button mx-auto sm:mx-0">
              <div className="icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="text">
                <span className="text-small">Get it on</span>
                <span className="text-large">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black/90 text-white py-12 relative overflow-hidden mt-20">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4 relative inline-block font-horizon">
              ADULTING
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500"></span>
            </h2>
            <p className="text-gray-400 max-w-md">
              ADULTING is your everyday admin assistant — built to help grown-ups stay sane.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Links
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500"></span>
              </h3>
              <ul className="space-y-2">
                {["Home", "Benefits", "Features", "FAQ"].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                    >
                      <span className="w-0 h-0.5 bg-emerald-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Legal
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500"></span>
              </h3>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Use", "Contact"].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                    >
                      <span className="w-0 h-0.5 bg-emerald-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} ADULTING. All rights reserved.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {["linkedin", "instagram", "twitter"].map((social, i) => (
              <Link
                key={i}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
