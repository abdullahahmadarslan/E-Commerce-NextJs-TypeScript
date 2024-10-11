import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description:
    "This is an E-Commerce webiste built using NextJs and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main flex flex-col min-h-screen">
          <Navbar />
          {/* pages of next js app are children here */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
