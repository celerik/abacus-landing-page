import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abacus — Loan Lifecycle Management",
  description:
    "A unified platform for institutional loan management. Welcome to Abacus — where institutional loan management meets clarity, precision, and scale. Manage every loan, transaction, and cash flow from origination to settlement.",
  openGraph: {
    title: "Abacus — Loan Lifecycle Management",
    description:
      "A unified platform for institutional loan management — offering transparency, accuracy, and total control.",
    type: "website",
    siteName: "Abacus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abacus — Loan Lifecycle Management",
    description:
      "A unified platform for institutional loan management — precision, scale, and control.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
