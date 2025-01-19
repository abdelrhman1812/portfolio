import { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrhman Ali - Portfolio",

  description:
    "Abdelrhman Ali's portfolio showcasing full-stack development projects using MERN stack.",
  keywords: [
    "MERN stack",
    "React",
    "Node.js",
    "JavaScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Abdelrhman Ali" }],
  creator: "Abdelrhman Ali",
  publisher: "Abdelrhman Ali",

  icons: {
    icon: "/MERN-Stack-Development-Company.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Abdelrhman1812.github.io/portfolio",
    title: "Abdelrhman Ali - Portfolio",
    description:
      "A collection of my web development projects built with MERN stack.",
    siteName: "Abdelrhman Ali Portfolio",
    images: [
      {
        url: "/assets/Images/Abdelrhman.png",
        width: 1200,
        height: 630,
        alt: "MERN Stack Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrhman Ali - Portfolio",
    description:
      "Explore my full-stack development projects on my personal portfolio.",
    images: ["https://x.com/Ody_Ody_1999/photo"],
    creator: "@@Ody_Ody_1999",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    other: {
      me: ["abdelrhmanali1812@gmail.com"],
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
