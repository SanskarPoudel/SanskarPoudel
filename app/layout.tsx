import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { VisitorTracker } from "@/components/visitor-tracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanskar Paudel - Full Stack Developer & Software Engineer",
  description:
    "Professional CV of Sanskar Paudel, a Full Stack Web Developer & Software Engineer with expertise in Node.js, React.js, and cloud technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <VisitorTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
