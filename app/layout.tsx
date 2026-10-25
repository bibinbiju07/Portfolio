import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/sections/Footer";
import { MotionProvider } from "@/components/shared/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bibin | Portfolio",
  description: "Junior Software Engineer Portfolio",
  icons: {
    icon: {
      url: "/favicon-icon.png",
      type: "image/png",
      sizes: "256x256",
    },
    shortcut: "/favicon-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#050A16] text-white antialiased">
        <MotionProvider>
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}