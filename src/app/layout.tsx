import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reviewing English",
  description: "Reviewing English",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-sm mx-auto`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
