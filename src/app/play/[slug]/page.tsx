'use client';

import { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { games } from '@/lib/games';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader, Dices, Circle } from 'lucide-react';
import { GameControls } from '@/components/game-controls';

export default function PlayPage() {
  const [showAd, setShowAd] = useState(true);
  const params = useParams();
  const slug = params.slug as string;
  const game = games.find((g) => g.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(false);
    }, 2500); // Simulate ad loading time

    return () => clearTimeout(timer);
  }, []);

  if (!game) {
    notFound();
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Library
          </Link>
        </Button>
        <h1 className="text-2xl font-bold font-headline">{game.title}</h1>
        <div className="w-28"></div> {/* Spacer */}
      </div>

      <div className="flex-1 w-full bg-card border rounded-lg shadow-inner flex items-center justify-center relative overflow-hidden">
        {showAd ? (
          <div className="flex flex-col items-center text-muted-foreground animate-pulse">
            <Loader className="h-8 w-8 animate-spin mb-4" />
            <p className="text-sm">Loading Advertisement...</p>
          </div>
        ) : (
          <>
            <div className="text-center text-muted-foreground p-8">
              <Dices className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h2 className="text-xl font-semibold">Game Starts Here</h2>
              <p className="mt-2 max-w-md mx-auto">
                This is where the game canvas for &quot;{game.title}&quot; would be rendered.
                Controller support for platforms like Amazon Luna would be handled by the game engine.
              </p>
            </div>
            <GameControls />
          </>
        )}
      </div>
    </div>
  );
}
