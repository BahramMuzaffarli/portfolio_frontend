import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalLoader from "./components/GlobalLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bahram Muzaffarli | Data Analyst & IT Business Analyst",
  description: "Personal portfolio of Bahram Muzaffarli - IT Business Analyst, Data Analyst with expertise in Python, SQL, Power BI, and Tableau. Transforming data into actionable insights.",
  keywords: "data analyst, business analyst, portfolio, Python, SQL, Power BI, Tableau, analytics",
  authors: [{ name: "Bahram Muzaffarli" }],
  creator: "Bahram Muzaffarli",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bahram-portfolio.com",
    title: "Bahram Muzaffarli | Data Analyst & IT Business Analyst",
    description: "Transforming raw data into clear, actionable insights. Experienced in analytics, BI tools, and business optimization.",
    siteName: "Bahram Muzaffarli Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahram Muzaffarli | Data Analyst",
    description: "IT Business Analyst specializing in data analytics and BI solutions.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0f172a",
};


export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bahram Muzaffarli",
    "url": "https://bahram-portfolio.com",
    "jobTitle": "IT Business Analyst & Data Analyst",
    "location": {
      "@type": "Place",
      "name": "Baku, Azerbaijan"
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GlobalLoader>
          {children}
        </GlobalLoader>
      </body>
    </html>
  );
}
