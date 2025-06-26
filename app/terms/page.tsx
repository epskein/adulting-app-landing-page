import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import TermsAndConditionsContent from "@/components/layout/TermsAndConditionsContent";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 py-32">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Terms of Use</h1>
          <TermsAndConditionsContent />
        </div>
      </main>
      <Footer />
    </div>
  );
} 