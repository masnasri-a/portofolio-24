import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";
import Header from "./header";

const inter = VT323({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nasri Adzlani | Portofolio",
  description: "Nasri Adzlani's portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Header />
        {children}
      </body>
    </html>
  );
}
