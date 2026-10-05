import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Shambhoo Phalke | Animation, Media & Business Development",
  description: "Official professional portfolio of Shambhoo Phalke - animation industry veteran, business development and strategy professional with 30+ years of experience across animation, media and entertainment.",
  keywords: "Shambhoo Phalke, Shambhoo Phalke animation, Shambhoo Phalke business development, animation business development India, animation industry strategist, animation executive India, VFX business development, animation production, media entertainment strategy, AI animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-primary text-secondary antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
