import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gorilla Mux + EdgeOne Pages",
  description: "Go Functions allow you to run Go web frameworks like Gorilla Mux on EdgeOne Pages. Build full-stack applications with Mux's powerful URL routing and middleware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/mux-favicon.svg" />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
