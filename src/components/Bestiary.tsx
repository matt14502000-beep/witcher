import { useState } from "react";
import { monsters, monsterCategories, type Monster } from "@/data/bestiaryData";
import { ChevronDown, ChevronUp, Skull, Shield, Flame, Droplets } from "lucide-react";

const difficultyColors: Record<string, string> = {
  Easy: "bg-success text-primary-foreground",
  Medium: "bg-warning text-primary-foreground",
  Hard: "bg-destructive text-primary-foreground",
  Boss: "bg-quest-main text-primary-foreground",
};

function MonsterCard({ monster }: { monster: Monster }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-3 hover:bg-secondary/50 transition-colors"
      >
        <img
          src={monster.image}
          alt={monster.name}
          className="h-16 w-16 rounded-lg object-cover border border-border shrink-0"
        />
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-heading font-bold text-foreground">{monster.name}</h4>
            <span className={`px-2 py-0.5 rounded text-xs font-heading font-semibold ${difficultyColors[monster.difficulty]}`}>
              {monster.difficulty}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-body">{monster.category}</p>
          <div className="mt-1 text-xs font-body text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Oil:</span> {monster.oil}
            <span className="mx-2">•</span>
            <span className="font-semibold text-foreground">Weakness:</span> {monster.weakness}
          </div>
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
      </button>

      {open && (
        <div className="p-4 pt-0 animate-in fade-in-0 slide-in-from-top-1">
          <p className="text-muted-foreground font-body text-sm mb-4">{monster.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Droplets className="h-4 w-4 text-quest-side" />
                <span className="text-xs font-heading font-semibold text-foreground">Oil</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{monster.oil}</p>
            </div>
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Flame className="h-4 w-4 text-destructive" />
                <span className="text-xs font-heading font-semibold text-foreground">Signs</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{monster.signs}</p>
            </div>
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Skull className="h-4 w-4 text-warning" />
                <span className="text-xs font-heading font-semibold text-foreground">Bombs</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{monster.bombs}</p>
            </div>
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-xs font-heading font-semibold text-foreground">Weakness</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{monster.weakness}</p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-2">
            <h5 className="text-xs font-heading font-semibold text-primary mb-1">💡 Combat Tips</h5>
            <p className="text-sm text-muted-foreground font-body">{monster.tips}</p>
          </div>

          <p className="text-xs text-muted-foreground font-body mt-2">
            <span className="font-heading font-semibold">Locations:</span> {monster.locations}
          </p>
        </div>
      )}
    </div>
  );
}

export function Bestiary({ searchTerm }: { searchTerm: string }) {
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filtered = monsters.filter((m) => {
    const matchesSearch = !searchTerm.trim() || m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || m.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Category filter */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setFilterCategory("all")}
          className={`px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-colors ${
            filterCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {monsterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-colors ${
              filterCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-8 font-body text-lg">No monsters found</p>
      ) : (
        filtered.map((m) => <MonsterCard key={m.id} monster={m} />)
      )}
    </div>
  );
}
