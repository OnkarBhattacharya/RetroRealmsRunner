import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { AppHeader } from '@/components/app-header';
import { Toaster } from '@/components/ui/toaster';
import { BannerAd } from '@/components/banner-ad';

export const metadata: Metadata = {
  title: 'Retro Realms Runner',
  description: "Play classic arcade games like Kiddie Kickers and Kirby's Adventure Land on any device.",
  keywords: ['retro', 'arcade', 'games', 'mobile', 'tablet', 'Kiddie Kickers', "Kirby's Adventure Land"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased flex flex-col')}>
        <ThemeProvider
          storageKey="retro-realms-theme"
          defaultTheme="system"
          enableSystem
        >
          <AppHeader />
          <main className="flex-1 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <BannerAd />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
