import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import B2BHeader from "@/components/B2BHeader";
import B2BSidebar from "@/components/B2BSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WholesaleHub Pro - Enterprise B2B Distribution Platform",
  description: "Enterprise-grade B2B wholesale platform connecting manufacturers with retailers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        {/* B2B Header */}
        <B2BHeader />
        
        {/* Main Layout */}
        <div className="flex h-[calc(100vh-4.5rem)]">
          {/* Sidebar */}
          <B2BSidebar />
          
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}