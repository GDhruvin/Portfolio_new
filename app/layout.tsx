import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dhruvingabani.dev'),
  title: 'Dhruvin Gabani - Full Stack Developer & Mobile App Engineer | SDE',
  description:
    'Full Stack Developer & Mobile App Engineer (SDE) with experience across Next.js, React.js, React Native, Node.js, and TypeScript. Specializing in scalable multi-tenant architecture, HIPAA-compliant platforms, performance optimization, and AI-assisted engineering.',
  keywords: [
    'Dhruvin Gabani',
    'Full Stack Developer',
    'Software Development Engineer',
    'SDE',
    'Mobile Application Developer',
    'React Native Developer',
    'Next.js Developer',
    'React 19 Developer',
    'TypeScript Engineer',
    'MERN Stack',
    'Multi-tenant Architecture',
    'HIPAA-Compliant Systems',
    'DICOM CornerstoneJS',
    'Zustand Redux Toolkit',
    'AI-Assisted Development',
    'Freelance Full Stack Engineer',
    'Freelance Mobile Developer',
    'Multiminds Technology',
    'BMV System Integration',
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
    title: 'Dhruvin Gabani - Full Stack Developer & Mobile App Engineer | SDE',
    description:
      'Full Stack Developer & Mobile App Engineer (SDE) specializing in scalable multi-tenant architectures, HIPAA-compliant platforms, Next.js, React Native, and high-performance web and mobile applications.',
    siteName: 'Dhruvin Gabani Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dhruvin Gabani - Full Stack Developer & Mobile App Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruvin Gabani - Full Stack Developer & Mobile App Engineer | SDE',
    description:
      'Specializing in building scalable, high-performance web and mobile applications with Next.js, React Native, TypeScript, and Node.js.',
    images: ['/og-image.jpg'],
    creator: '@dhruvin_gabani',
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
              jobTitle: 'Full Stack Developer & Mobile App Engineer (SDE)',
              description:
                'Full Stack Developer & Mobile App Engineer (SDE) with experience across React.js, Next.js, React Native, Node.js, and TypeScript, specializing in multi-tenant architecture, HIPAA-compliant systems, and AI-assisted development.',
              url: 'https://dhruvingabani.dev',
              telephone: '+918799300227',
              email: 'gabannidhruvin30@gmail.com',
              sameAs: [
                'https://github.com/Dhruvin',
                'https://linkedin.com/in/dhruvin',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Multiminds Technology Pvt Ltd',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Silver Oak University',
              },
              knowsAbout: [
                'React.js',
                'Next.js',
                'React Native',
                'TypeScript',
                'Redux Toolkit',
                'Zustand',
                'Node.js',
                'PostgreSQL',
                'MongoDB',
                'Multi-tenant Architecture',
                'HIPAA Compliance',
                'CornerstoneJS DICOM',
                'WebAssembly',
                'AI-Assisted Development',
                'Claude Code',
                'Antigravity',
                'MCP',
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
