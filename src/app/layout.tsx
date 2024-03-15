import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Brito Next",
  description: "Created by Rodrigo Brito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
