import type { Metadata } from "next";
import "./globals.css";
import { GlobalProvider } from "@/state";

export const metadata: Metadata = {
  title: "Test Landing Page",
  description: "created with nextjs and springs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
