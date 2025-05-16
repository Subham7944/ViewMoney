import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ViewMoney",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          {/* Add top margin to prevent content from being hidden behind the Header */}
          <main className="min-h-screen mt-20">{children}</main>
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text text-center text-gray-600">
              <p>Made with Love</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
