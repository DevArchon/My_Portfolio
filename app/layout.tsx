import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahsan Abdullah - Software Engineer",
  description:
    "Results-driven Software Engineer with 1.5 years of experience in frontend development and Chrome extensions.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Chrome Extensions",
  ],
  authors: [{ name: "Ahsan Abdullah" }],
  creator: "Ahsan Abdullah",
  icons: {
    icon: "/favicol.ico",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Ahsan Abdullah - Software Engineer",
    description:
      "Results-driven Software Engineer with 1.5 years of experience in frontend development and Chrome extensions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
