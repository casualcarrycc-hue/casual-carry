import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, EB_Garamond, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { NavDrawerProvider } from "@/components/NavDrawerContext";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import NavDrawer from "@/components/NavDrawer";
import Footer from "@/components/Footer";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
  variable: "--font-garamond",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Casual Carry — Style in Hand",
    template: "%s",
  },
  description:
    "Casual Carry: full-grain, vegetable-tanned leather handbags handcrafted for the modern Indian woman.",
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/images/favicon.png",
    apple: [{ url: "/images/favicon.png", sizes: "192x192" }],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fff8f3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${bodoni.variable} ${garamond.variable} ${barlow.variable}`}
    >
      <body className="bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen">
        <NavDrawerProvider>
          <Header />
          <main className="flex-1 flex flex-col relative w-full pt-16 md:pt-20 pb-16 md:pb-0 bg-surface">
            {children}
          </main>
          <Footer />
          <BottomNav />
          <NavDrawer />
        </NavDrawerProvider>
      </body>
    </html>
  );
}
