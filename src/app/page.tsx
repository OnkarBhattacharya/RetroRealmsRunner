import { GameCard } from '@/components/game-card';
import { games } from '@/lib/games';

export default function Home() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-center text-primary-foreground dark:text-foreground">
          Game Library
        </h1>
        <p className="mt-2 text-lg text-muted-foreground text-center">
          Select a game to start playing!
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
}
