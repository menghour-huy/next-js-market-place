import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarketHub | Marketplace",
  description: "Modern marketplace for discovering unique products and trending deals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
