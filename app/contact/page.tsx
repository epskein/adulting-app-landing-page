import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-32 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            For any general inquiries, issues, or feedback, please feel free to send us a message at{" "}
            <Link href="mailto:support@adulting-app.co" className="text-blue-600 hover:underline font-semibold">
              support@adulting-app.co
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 