import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhoomika M T — Software Engineer & Full-Stack Developer",
  description:
    "Personal portfolio of Bhoomika M T, Software Engineering Student at MIT Mysore (CGPA: 8.64). Specializing in Full Stack Development, C, Python, Java, AWS Cloud, and Cybersecurity.",
  keywords: [
    "Bhoomika M T",
    "Software Engineer",
    "Full-Stack Developer",
    "MIT Mysore",
    "Mandya",
    "C Programming",
    "Python",
    "Java",
    "AWS",
    "Cybersecurity",
    "Portfolio"
  ],
  authors: [{ name: "Bhoomika M T" }],
  openGraph: {
    title: "Bhoomika M T — Portfolio",
    description: "Personal software engineering portfolio of Bhoomika M T.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sans.variable} ${mono.variable} antialiased bg-black text-[#FAFAFA]`}>
        {children}
      </body>
    </html>
  );
}
