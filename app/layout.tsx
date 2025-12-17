import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2B Wholesale Distribution Platform",
  description: "Enterprise-grade B2B wholesale platform documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <div className="max-w-4xl mx-auto px-4 py-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}