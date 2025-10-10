import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erstelle Next App",
  description: "Erstellt mit create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={jakartaSans.variable + " antialiased"}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
