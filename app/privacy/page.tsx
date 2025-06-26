import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { PrivacyPolicyContent } from "@/components/layout/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 py-32">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
          <div className="prose lg:prose-xl max-w-none text-gray-700">
            <PrivacyPolicyContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 