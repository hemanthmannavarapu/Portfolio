import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mannavarapu Narasimha Hemanth — Portfolio",
  description:
    "Personal portfolio of Mannavarapu Narasimha Hemanth. B.Tech in Computer Science Engineering student at NBKRIST, showcasing web applications, database integration, and software engineering projects.",
  keywords: [
    "Mannavarapu Narasimha Hemanth",
    "Hemanth Mannavarapu",
    "Computer Science Engineering",
    "Software Engineer",
    "Web Development",
    "NBKRIST",
    "Portfolio",
  ],
  authors: [{ name: "Mannavarapu Narasimha Hemanth" }],
  creator: "Mannavarapu Narasimha Hemanth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col">{children}</body>
    </html>
  );
}
