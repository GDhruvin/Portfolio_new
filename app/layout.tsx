import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dhruvin Gabani - Full Stack Developer | MERN Stack & React Native',
  description: 'Full Stack Developer with experience in MERN Stack and React Native, specializing in building scalable web and mobile applications. Currently working at BMV System Integration.',
  keywords: [
    'full-stack developer',
    'MERN stack developer',
    'React developer',
    'React Native developer',
    'Node.js developer',
    'MongoDB developer',
    'web development',
    'mobile app development',
    'JavaScript developer',
    'Dhruvin Gabani',
    'BMV System Integration',
    'Ahmedabad developer'
  ],
  authors: [{ name: 'Dhruvin Gabani' }],
  creator: 'Dhruvin Gabani',
  publisher: 'Dhruvin Gabani',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhruvingabani.dev',
    title: 'Dhruvin Gabani - Full Stack Developer | MERN Stack & React Native',
    description: 'Full Stack Developer with experience in MERN Stack and React Native, specializing in building scalable web and mobile applications.',
    siteName: 'Dhruvin Gabani Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dhruvin Gabani - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruvin Gabani - Full Stack Developer | MERN Stack & React Native',
    description: 'Full Stack Developer with experience in MERN Stack and React Native, specializing in building scalable web and mobile applications.',
    images: ['/og-image.jpg'],
    creator: '@dhruvin_gabani',
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://dhruvingabani.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dhruvin Gabani',
              jobTitle: 'Full-Stack Developer',
              description: 'Full Stack Developer with experience in MERN Stack and React Native, specializing in building scalable web and mobile applications.',
              url: 'https://dhruvingabani.dev',
              sameAs: [
                'https://github.com/Dhruvin',
                'https://linkedin.com/in/dhruvin',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'BMV System Integration Pvt Ltd',
              },
              knowsAbout: [
                'React',
                'React Native',
                'Node.js',
                'MongoDB',
                'Express.js',
                'JavaScript',
                'Redux',
                'Web Development',
                'Mobile App Development',
                'Full-Stack Development',
                'MERN Stack',
              ],
            }),
          }}
        />
      </head>
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