import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "תמר ויילר - כרטיס ביקור",
  description: "UX/UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
