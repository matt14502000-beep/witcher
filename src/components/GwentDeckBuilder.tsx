import { useState, useMemo, useEffect, useCallback } from "react";
import { gwentCards, gwentFactions, type GwentFaction, type GwentCard } from "@/data/gwentData";
import { Swords, Shield, Crosshair, Crown, Sparkles, Star, Plus, Minus, Save, Trash2, RotateCcw, AlertTriangle, CheckCircle2 } from "lucide-react";

import northernRealmsImg from "@/assets/gwent/northern-realms.jpg";
import nilfgaardImg from "@/assets/gwent/nilfgaard.jpg";
import scoiataelImg from "@/assets/gwent/scoiatael.jpg";
import monstersImg from "@/assets/gwent/monsters.jpg";

const DECK_STORAGE_KEY = "witcher3-gwent-decks";

const factionImages: Record<string, string> = {
  "Northern Realms": northernRealmsImg,
  Nilfgaard: nilfgaardImg,
  "Scoia'tael": scoiataelImg,
  Monsters: monstersImg,
};

const playableFactions: GwentFaction[] = ["Northern Realms", "Nilfgaard", "Scoia'tael", "Monsters"];

const factionAbilities: Record<string, string> = {
  "Northern Realms": "Draw a card from your deck whenever you win a round.",
  Nilfgaard: "Win any round that ends in a draw.",
  "Scoia'tael": "Decide who goes first at the start of each round.",
  Monsters: "One random unit card stays on the battlefield after each round.",
};

const factionBorderColor: Record<string, string> = {
  "Northern Realms": "border-blue-500/50",
  Nilfgaard: "border-amber-500/50",
  "Scoia'tael": "border-green-500/50",
  Monsters: "border-red-500/50",
};

const factionBgColor: Record<string, string> = {
  "Northern Realms": "bg-blue-500/10",
  Nilfgaard: "bg-amber-500/10",
  "Scoia'tael": "bg-green-500/10",
  Monsters: "bg-red-500/10",
};

const factionAccentText: Record<string, string> = {
  "Northern Realms": "text-blue-400",
  Nilfgaard: "text-amber-400",
  "Scoia'tael": "text-green-400",
  Monsters: "text-red-400",
};

const rowIcons: Record<string, React.ReactNode> = {
  Close: <Swords className="h-3 w-3" />,
  Ranged: <Crosshair className="h-3 w-3" />,
  Siege: <Shield className="h-3 w-3" />,
  Leader: <Crown className="h-3 w-3" />,
  Special: <Sparkles className="h-3 w-3" />,
};

interface SavedDeck {
  name: string;
  faction: GwentFaction;
  leaderId: string | null;
  cardIds: string[];
}

function loadDecks(): SavedDeck[] {
  try {
    return JSON.parse(localStorage.getItem(DECK_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveDecks(decks: SavedDeck[]) {
  localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
}

export function GwentDeckBuilder() {
  const [faction, setFaction] = useState<GwentFaction | null>(null);
  const [leaderId, setLeaderId] = useState<string | null>(null);
  const [deckCardIds, setDeckCardIds] = useState<string[]>([]);
  const [savedDecks, setSavedDecks] = useState<SavedDeck[]>(loadDecks);
  const [deckName, setDeckName] = useState("");
  const [cardFilter, setCardFilter] = useState("");

  useEffect(() => {
    saveDecks(savedDecks);
  }, [savedDecks]);

  const resetDeck = useCallback(() => {
    setLeaderId(null);
    setDeckCardIds([]);
    setDeckName("");
    setCardFilter("");
  }, []);

  const selectFaction = useCallback((f: GwentFaction) => {
    setFaction(f);
    resetDeck();
  }, [resetDeck]);

  // Available cards for current faction + neutrals
  const availableCards = useMemo(() => {
    if (!faction) return [];
    return gwentCards.filter(
      c => (c.faction === faction || c.faction === "Neutral") && c.row !== "Leader"
    );
  }, [faction]);

  const leaderCards = useMemo(() => {
    if (!faction) return [];
    return gwentCards.filter(c => c.faction === faction && c.row === "Leader");
  }, [faction]);

  const selectedLeader = leaderCards.find(c => c.id === leaderId) ?? null;

  const deckCards = useMemo(() => {
    return deckCardIds.map(id => gwentCards.find(c => c.id === id)!).filter(Boolean);
  }, [deckCardIds]);

  // Stats
  const totalStrength = deckCards.reduce((sum, c) => sum + c.strength, 0);
  const unitCount = deckCards.filter(c => c.row !== "Special").length;
  const specialCount = deckCards.filter(c => c.row === "Special").length;
  const closeCards = deckCards.filter(c => c.row === "Close");
  const rangedCards = deckCards.filter(c => c.row === "Ranged");
  const siegeCards = deckCards.filter(c => c.row === "Siege");
  const meetsMinimum = unitCount >= 22;

  const addCard = useCallback((id: string) => {
    setDeckCardIds(prev => [...prev, id]);
  }, []);

  const removeCard = useCallback((index: number) => {
    setDeckCardIds(prev => prev.filter((_, i) => i !== index));
  }, []);

  const isInDeck = useCallback(
    (id: string) => deckCardIds.includes(id),
    [deckCardIds]
  );

  const filteredAvailable = useMemo(() => {
    let cards = availableCards;
    if (cardFilter.trim()) {
      const term = cardFilter.toLowerCase();
      cards = cards.filter(
        c =>
          c.name.toLowerCase().includes(term) ||
          c.row.toLowerCase().includes(term) ||
          (c.ability?.toLowerCase().includes(term))
      );
    }
    return cards;
  }, [availableCards, cardFilter]);

  const saveDeck = useCallback(() => {
    if (!faction || !deckName.trim()) return;
    const deck: SavedDeck = {
      name: deckName.trim(),
      faction,
      leaderId,
      cardIds: deckCardIds,
    };
    setSavedDecks(prev => [...prev, deck]);
    setDeckName("");
  }, [faction, leaderId, deckCardIds, deckName]);

  const loadDeck = useCallback((deck: SavedDeck) => {
    setFaction(deck.faction);
    setLeaderId(deck.leaderId);
    setDeckCardIds(deck.cardIds);
    setDeckName("");
    setCardFilter("");
  }, []);

  const deleteSavedDeck = useCallback((index: number) => {
    setSavedDecks(prev => prev.filter((_, i) => i !== index));
  }, []);

  // ── No faction selected ──
  if (!faction) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-heading text-lg font-bold text-foreground mb-1">Choose Your Faction</h3>
          <p className="text-sm text-muted-foreground font-body">Select a faction to start building your deck</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {playableFactions.map(f => (
            <button
              key={f}
              onClick={() => selectFaction(f)}
              className={`relative rounded-xl border-2 ${factionBorderColor[f]} overflow-hidden group transition-all hover:scale-[1.02] active:scale-[0.98]`}
            >
              <img
                src={factionImages[f]}
                alt={f}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                width={640}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-start justify-end p-3">
                <span className="font-heading font-bold text-white text-sm">{f}</span>
                <span className="text-[11px] text-white/70 font-body leading-tight mt-0.5">{factionAbilities[f]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Saved decks */}
        {savedDecks.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider">Saved Decks</h4>
            <div className="grid gap-2">
              {savedDecks.map((deck, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-lg border ${factionBorderColor[deck.faction]} ${factionBgColor[deck.faction]}`}
                >
                  <button onClick={() => loadDeck(deck)} className="flex items-center gap-3 text-left flex-1 min-w-0">
                    <img src={factionImages[deck.faction]} alt={deck.faction} className="h-8 w-8 rounded object-cover" width={32} height={32} />
                    <div className="min-w-0">
                      <span className="font-heading font-semibold text-sm text-foreground block truncate">{deck.name}</span>
                      <span className="text-xs text-muted-foreground">{deck.faction} · {deck.cardIds.length} cards</span>
                    </div>
                  </button>
                  <button onClick={() => deleteSavedDeck(i)} className="p-1.5 rounded-md hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── Deck builder ──
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={factionImages[faction]} alt={faction} className="h-10 w-10 rounded-lg object-cover" width={40} height={40} />
          <div>
            <h3 className={`font-heading font-bold text-foreground`}>{faction}</h3>
            <p className="text-xs text-muted-foreground font-body">{factionAbilities[faction]}</p>
          </div>
        </div>
        <button
          onClick={() => { setFaction(null); resetDeck(); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-muted-foreground hover:text-foreground text-xs font-heading transition-colors"
        >
          <RotateCcw className="h-3 w-3" /> Change
        </button>
      </div>

      {/* Deck stats panel */}
      <div className={`rounded-xl border ${factionBorderColor[faction]} ${factionBgColor[faction]} p-4 space-y-3`}>
        <div className="flex items-center justify-between">
          <span className="font-heading font-bold text-sm text-foreground">Deck Stats</span>
          <div className="flex items-center gap-1.5">
            {meetsMinimum ? (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            )}
            <span className={`text-xs font-heading ${meetsMinimum ? "text-green-500" : "text-amber-500"}`}>
              {meetsMinimum ? "Deck valid" : `Need ${22 - unitCount} more unit cards`}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <StatBox label="Total Str" value={totalStrength} accent={factionAccentText[faction]} />
          <StatBox label="Cards" value={deckCards.length} accent={factionAccentText[faction]} />
          <StatBox label="Units" value={unitCount} accent={factionAccentText[faction]} />
          <StatBox label="Specials" value={specialCount} accent={factionAccentText[faction]} />
        </div>

        {/* Row breakdown */}
        <div className="flex gap-4 text-xs text-muted-foreground font-heading">
          <span className="flex items-center gap-1"><Swords className="h-3 w-3" /> Close: {closeCards.length} ({closeCards.reduce((s, c) => s + c.strength, 0)} str)</span>
          <span className="flex items-center gap-1"><Crosshair className="h-3 w-3" /> Ranged: {rangedCards.length} ({rangedCards.reduce((s, c) => s + c.strength, 0)} str)</span>
          <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> Siege: {siegeCards.length} ({siegeCards.reduce((s, c) => s + c.strength, 0)} str)</span>
        </div>
      </div>

      {/* Leader selection */}
      <div>
        <h4 className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2">Leader Card</h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {leaderCards.map(card => (
            <button
              key={card.id}
              onClick={() => setLeaderId(card.id === leaderId ? null : card.id)}
              className={`text-left p-3 rounded-lg border transition-all ${
                card.id === leaderId
                  ? `${factionBorderColor[faction]} ${factionBgColor[faction]}`
                  : "border-border bg-card hover:border-muted-foreground/30"
              }`}
            >
              <div className="flex items-center gap-2">
                <Crown className={`h-4 w-4 shrink-0 ${card.id === leaderId ? factionAccentText[faction] : "text-muted-foreground"}`} />
                <div className="min-w-0">
                  <span className={`font-heading text-sm font-semibold block ${card.id === leaderId ? "text-foreground" : "text-muted-foreground"}`}>
                    {card.name}
                  </span>
                  {card.ability && (
                    <span className="text-xs text-muted-foreground">{card.ability}</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Current deck cards */}
      {deckCards.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wider">
              Your Deck ({deckCards.length} cards)
            </h4>
            <button
              onClick={resetDeck}
              className="text-xs px-2 py-1 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors font-heading"
            >
              Clear All
            </button>
          </div>
          <div className="grid gap-1.5 sm:grid-cols-2">
            {deckCards.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className={`flex items-center justify-between p-2 rounded-lg border ${factionBorderColor[faction]} ${factionBgColor[faction]}`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {rowIcons[card.row]}
                  <span className="font-heading text-xs font-semibold text-foreground truncate">{card.name}</span>
                  {card.strength > 0 && <span className="font-mono text-xs font-bold text-foreground/70">{card.strength}</span>}
                  {card.hero && <Star className="h-2.5 w-2.5 text-amber-400 shrink-0" />}
                </div>
                <button onClick={() => removeCard(idx)} className="p-1 rounded hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors shrink-0">
                  <Minus className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Save deck */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Deck name..."
          value={deckName}
          onChange={e => setDeckName(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm"
        />
        <button
          onClick={saveDeck}
          disabled={!deckName.trim() || deckCards.length === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
        >
          <Save className="h-3.5 w-3.5" /> Save
        </button>
      </div>

      {/* Available cards to add */}
      <div>
        <h4 className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2">Available Cards</h4>
        <input
          type="text"
          placeholder="Filter cards..."
          value={cardFilter}
          onChange={e => setCardFilter(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm mb-3"
        />
        <div className="grid gap-1.5 sm:grid-cols-2 max-h-[400px] overflow-y-auto pr-1">
          {filteredAvailable.map(card => {
            const inDeck = isInDeck(card.id);
            return (
              <button
                key={card.id}
                onClick={() => addCard(card.id)}
                className={`flex items-center justify-between p-2 rounded-lg border text-left transition-all ${
                  inDeck
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card hover:border-muted-foreground/30"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {rowIcons[card.row]}
                  <span className="font-heading text-xs font-semibold text-foreground truncate">{card.name}</span>
                  {card.strength > 0 && <span className="font-mono text-xs font-bold text-foreground/70">{card.strength}</span>}
                  {card.hero && <Star className="h-2.5 w-2.5 text-amber-400 shrink-0" />}
                  {card.faction === "Neutral" && <span className="text-[9px] px-1 py-0.5 rounded bg-purple-500/20 text-purple-400 font-heading uppercase">N</span>}
                </div>
                <Plus className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div className="text-center p-2 rounded-lg bg-background/50">
      <div className={`font-mono text-lg font-bold ${accent}`}>{value}</div>
      <div className="text-[10px] text-muted-foreground font-heading uppercase tracking-wider">{label}</div>
    </div>
  );
}
