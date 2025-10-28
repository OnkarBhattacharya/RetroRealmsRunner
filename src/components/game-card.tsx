import Link from 'next/link';
import Image from 'next/image';
import type { Game } from '@/lib/games';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === game.coverImage);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        {placeholder && (
          <div className="aspect-[3/4] relative">
            <Image
              src={placeholder.imageUrl}
              alt={`Cover art for ${game.title}`}
              fill
              className="object-cover"
              data-ai-hint={placeholder.imageHint}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="font-headline text-2xl">{game.title}</CardTitle>
        <CardDescription className="mt-2 text-base">{game.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/play/${game.slug}`}>
            Play Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
