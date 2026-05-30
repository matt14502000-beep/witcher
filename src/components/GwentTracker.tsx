import { useState, useMemo, useEffect, useCallback } from "react";
import { gwentCards, gwentFactions, type GwentFaction, type GwentCard } from "@/data/gwentData";
import { ChevronDown, ChevronUp, MapPin, Star, Swords, Shield, Crosshair, Crown, Sparkles, BookOpen, Layers, Library } from "lucide-react";
import { GwentDeckBuilder } from "@/components/GwentDeckBuilder";

import northernRealmsImg from "@/assets/gwent/northern-realms.jpg";
import nilfgaardImg from "@/assets/gwent/nilfgaard.jpg";
import scoiataelImg from "@/assets/gwent/scoiatael.jpg";
import monstersImg from "@/assets/gwent/monsters.jpg";
import neutralImg from "@/assets/gwent/neutral.jpg";

const STORAGE_KEY = "witcher3-gwent-collected";

const factionImages: Record<GwentFaction, string> = {
  "Northern Realms": northernRealmsImg,
  "Nilfgaard": nilfgaardImg,
  "Scoia'tael": scoiataelImg,
  "Monsters": monstersImg,
  "Neutral": neutralImg,
};

const factionColors: Record<GwentFaction, string> = {
  "Northern Realms": "border-blue-500/40 bg-blue-500/5",
  "Nilfgaard": "border-amber-500/40 bg-amber-500/5",
  "Scoia'tael": "border-green-500/40 bg-green-500/5",
  "Monsters": "border-red-500/40 bg-red-500/5",
  "Neutral": "border-purple-500/40 bg-purple-500/5",
};

const factionAccent: Record<GwentFaction, string> = {
  "Northern Realms": "bg-blue-500",
  "Nilfgaard": "bg-amber-500",
  "Scoia'tael": "bg-green-500",
  "Monsters": "bg-red-500",
  "Neutral": "bg-purple-500",
};

const rowIcons: Record<string, React.ReactNode> = {
  Close: <Swords className="h-3.5 w-3.5" />,
  Ranged: <Crosshair className="h-3.5 w-3.5" />,
  Siege: <Shield className="h-3.5 w-3.5" />,
  Leader: <Crown className="h-3.5 w-3.5" />,
  Special: <Sparkles className="h-3.5 w-3.5" />,
};

function GwentHowToPlay() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-primary/30 bg-primary/5 overflow-hidden">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="font-heading font-bold text-foreground">How to Play Gwent</span>
          <span className="text-xs text-muted-foreground font-heading">Quick Guide</span>
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-4">
          {/* Faction gallery */}
          <div className="grid grid-cols-5 gap-2">
            {gwentFactions.map(f => (
              <div key={f} className="relative rounded-lg overflow-hidden aspect-[5/4]">
                <img src={factionImages[f]} alt={f} className="w-full h-full object-cover" loading="lazy" width={640} height={512} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-1.5">
                  <span className="text-[10px] sm:text-xs font-heading font-bold text-white leading-tight">{f}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Rules */}
          <div className="space-y-3 text-sm text-muted-foreground font-body">
            <div>
              <h4 className="font-heading font-semibold text-foreground text-xs uppercase tracking-wider mb-1">🎯 Objective</h4>
              <p>Win <strong className="text-foreground">2 out of 3 rounds</strong> by having a higher total card strength than your opponent when both players pass.</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-xs uppercase tracking-wider mb-1">🃏 Setup</h4>
              <p>Each player draws <strong className="text-foreground">10 cards</strong> from their deck. You can redraw up to <strong className="text-foreground">2 cards</strong> you don't like. Your deck must have at least 22 unit cards.</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-xs uppercase tracking-wider mb-1">⚔️ Card Rows</h4>
              <ul className="space-y-1 ml-4">
                <li className="flex items-center gap-2"><Swords className="h-3 w-3 shrink-0" /> <strong className="text-foreground">Close Combat</strong> — Melee fighters (front row)</li>
                <li className="flex items-center gap-2"><Crosshair className="h-3 w-3 shrink-0" /> <strong className="text-foreground">Ranged</strong> — Archers & mages (middle row)</li>
                <li className="flex items-center gap-2"><Shield className="h-3 w-3 shrink-0" /> <strong className="text-foreground">Siege</strong> — Catapults & war machines (back row)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-xs uppercase tracking-wider mb-1">🌟 Key Mechanics</h4>
              <ul className="space-y-1 ml-4 list-disc">
                <li><strong className="text-foreground">Spy cards</strong> — Play on opponent's side, but you draw 2 cards. Card advantage wins games!</li>
                <li><strong className="text-foreground">Hero cards</strong> — Immune to all special effects and weather. Can't be scorched or frozen.</li>
                <li><strong className="text-foreground">Weather cards</strong> — Reduce all non-hero cards in a row to 1 strength. Devastating!</li>
                <li><strong className="text-foreground">Decoy</strong> — Return one of your cards to hand. Use on spy cards to replay them!</li>
                <li><strong className="text-foreground">Scorch</strong> — Destroys the strongest card(s) on the board (both sides).</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-xs uppercase tracking-wider mb-1">💡 Pro Tips</h4>
              <ul className="space-y-1 ml-4 list-disc">
                <li>Consider losing Round 1 on purpose — play spies for card draw, then dominate Rounds 2 & 3.</li>
                <li>Northern Realms spy deck is the strongest starter strategy.</li>
                <li>Always carry Clear Weather to counter enemy weather cards.</li>
                <li>Buy cards from every merchant and innkeeper you meet!</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GwentCardItem({ card, collected, onToggle }: { card: GwentCard; collected: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`w-full text-left p-3 rounded-lg border transition-all ${
        collected
          ? "border-primary/40 bg-primary/10 opacity-75"
          : factionColors[card.faction]
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
          collected ? "border-primary bg-primary" : "border-muted-foreground/40"
        }`}>
          {collected && <span className="text-primary-foreground text-xs font-bold">✓</span>}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`font-heading text-sm font-semibold ${collected ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {card.name}
            </span>
            {card.hero && (
              <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 uppercase tracking-wider">
                <Star className="h-2.5 w-2.5" /> Hero
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">{rowIcons[card.row]} {card.row}</span>
            {card.strength > 0 && <span className="font-mono font-bold text-foreground/80">{card.strength}</span>}
            {card.ability && <span className="text-accent-foreground/70">{card.ability}</span>}
          </div>
          <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground/80">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{card.location}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

export function GwentTracker({ searchTerm }: { searchTerm: string }) {
  const [viewMode, setViewMode] = useState<"collection" | "deckbuilder">("collection");
  const [collected, setCollected] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch { return {}; }
  });
  const [activeFaction, setActiveFaction] = useState<GwentFaction | "All">("All");
  const [showCollected, setShowCollected] = useState(true);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collected));
  }, [collected]);

  const toggle = useCallback((id: string) => {
    setCollected(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const filtered = useMemo(() => {
    let cards = gwentCards;
    if (activeFaction !== "All") cards = cards.filter(c => c.faction === activeFaction);
    if (!showCollected) cards = cards.filter(c => !collected[c.id]);
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      cards = cards.filter(c =>
        c.name.toLowerCase().includes(term) ||
        c.location.toLowerCase().includes(term) ||
        (c.ability?.toLowerCase().includes(term))
      );
    }
    return cards;
  }, [activeFaction, showCollected, searchTerm, collected]);

  const groupedByFaction = useMemo(() => {
    const groups: Record<string, GwentCard[]> = {};
    for (const card of filtered) {
      (groups[card.faction] ??= []).push(card);
    }
    return groups;
  }, [filtered]);

  const totalCollected = Object.values(collected).filter(Boolean).length;

  const factionStats = useMemo(() => {
    const stats: Record<string, { total: number; collected: number }> = {};
    for (const f of gwentFactions) {
      const fCards = gwentCards.filter(c => c.faction === f);
      stats[f] = { total: fCards.length, collected: fCards.filter(c => collected[c.id]).length };
    }
    return stats;
  }, [collected]);

  return (
    <div className="space-y-4">
      {/* View mode toggle */}
      <div className="flex gap-1 p-1 rounded-lg bg-secondary/50">
        <button
          onClick={() => setViewMode("collection")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-heading font-semibold transition-all ${
            viewMode === "collection" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Library className="h-4 w-4" /> Collection
        </button>
        <button
          onClick={() => setViewMode("deckbuilder")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-heading font-semibold transition-all ${
            viewMode === "deckbuilder" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Layers className="h-4 w-4" /> Deck Builder
        </button>
      </div>

      {viewMode === "deckbuilder" ? (
        <GwentDeckBuilder />
      ) : (
        <>
          {/* How to Play guide */}
          <GwentHowToPlay />

          {/* Progress bar */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-heading text-sm text-muted-foreground">
              Collected: <span className="text-foreground font-bold">{totalCollected}</span> / {gwentCards.length}
            </span>
            <button
              onClick={() => setShowCollected(prev => !prev)}
              className="text-xs px-3 py-1 rounded-md bg-secondary text-muted-foreground hover:text-foreground transition-colors font-heading"
            >
              {showCollected ? "Hide Collected" : "Show All"}
            </button>
          </div>
          <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${(totalCollected / gwentCards.length) * 100}%` }}
            />
          </div>

          {/* Faction filters */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveFaction("All")}
              className={`px-3 py-1.5 rounded-md text-xs font-heading font-semibold whitespace-nowrap transition-all ${
                activeFaction === "All" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              All ({gwentCards.length})
            </button>
            {gwentFactions.map(f => (
              <button
                key={f}
                onClick={() => setActiveFaction(f)}
                className={`px-3 py-1.5 rounded-md text-xs font-heading font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeFaction === f ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className={`h-2 w-2 rounded-full ${factionAccent[f]}`} />
                {f} ({factionStats[f].collected}/{factionStats[f].total})
              </button>
            ))}
          </div>

          {/* Cards list */}
          {Object.keys(groupedByFaction).length === 0 ? (
            <p className="text-center text-muted-foreground py-8 font-body text-lg">
              {searchTerm ? `No cards found matching "${searchTerm}"` : "All cards collected! 🎉"}
            </p>
          ) : (
            Object.entries(groupedByFaction).map(([faction, cards]) => (
              <FactionGroup
                key={faction}
                faction={faction as GwentFaction}
                cards={cards}
                collected={collected}
                onToggle={toggle}
              />
            ))
          )}
        </>
      )}
    </div>
  );
}

function FactionGroup({ faction, cards, collected, onToggle }: {
  faction: GwentFaction;
  cards: GwentCard[];
  collected: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const heroCards = cards.filter(c => c.hero);
  const leaderCards = cards.filter(c => c.row === "Leader");
  const unitCards = cards.filter(c => !c.hero && c.row !== "Leader" && c.row !== "Special");
  const specialCards = cards.filter(c => c.row === "Special");
  const collectedCount = cards.filter(c => collected[c.id]).length;

  return (
    <div className={`rounded-xl border ${factionColors[faction]} overflow-hidden`}>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-3">
          <img
            src={factionImages[faction]}
            alt={faction}
            className="h-8 w-8 rounded-md object-cover"
            loading="lazy"
            width={32}
            height={32}
          />
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-foreground">{faction}</span>
            <span className="text-xs text-muted-foreground font-heading">{collectedCount}/{cards.length}</span>
          </div>
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-4">
          {leaderCards.length > 0 && (
            <CardSubgroup label="Leaders" cards={leaderCards} collected={collected} onToggle={onToggle} />
          )}
          {heroCards.length > 0 && (
            <CardSubgroup label="Hero Cards" cards={heroCards} collected={collected} onToggle={onToggle} />
          )}
          {unitCards.length > 0 && (
            <CardSubgroup label="Unit Cards" cards={unitCards} collected={collected} onToggle={onToggle} />
          )}
          {specialCards.length > 0 && (
            <CardSubgroup label="Special Cards" cards={specialCards} collected={collected} onToggle={onToggle} />
          )}
        </div>
      )}
    </div>
  );
}

function CardSubgroup({ label, cards, collected, onToggle }: {
  label: string;
  cards: GwentCard[];
  collected: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  return (
    <div>
      <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">{label}</h4>
      <div className="grid gap-2 sm:grid-cols-2">
        {cards.map(card => (
          <GwentCardItem key={card.id} card={card} collected={!!collected[card.id]} onToggle={() => onToggle(card.id)} />
        ))}
      </div>
    </div>
  );
}
