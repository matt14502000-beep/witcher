import { RotateCcw } from "lucide-react";
import witcherHero from "@/assets/witcher-hero.jpg";

interface GuideHeaderProps {
  totalDone: number;
  totalItems: number;
  onReset: () => void;
}

export function GuideHeader({ totalDone, totalItems, onReset }: GuideHeaderProps) {
  const pct = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;

  return (
    <div className="relative overflow-hidden rounded-xl mb-8">
      <img
        src={witcherHero}
        alt="The Witcher 3 Wild Hunt dark fantasy landscape"
        className="w-full h-48 sm:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-glow">
              The Witcher 3: Wild Hunt
            </h1>
            <p className="text-muted-foreground text-lg mt-1 font-body">
              100% Completion Guide — Xbox Edition
            </p>
          </div>
          <button
            onClick={() => {
              if (window.confirm("Reset ALL progress? This cannot be undone.")) {
                onReset();
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors text-sm font-heading"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-muted-foreground font-heading">Overall Progress</span>
            <span className="text-primary font-heading font-semibold">
              {pct}% — {totalDone}/{totalItems}
            </span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
