import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Suryansh's Portfolio",
  description: "Suryansh's latest portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
