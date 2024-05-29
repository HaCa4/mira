import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ----------------------------------------------------------------------

const inter = Inter({ subsets: ["latin"] });

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: "MiraOS",
  description: "An internal app that Mira uses to service member’s care requests",
};

// ----------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
