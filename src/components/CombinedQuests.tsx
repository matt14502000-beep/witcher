import { useMemo, useState } from "react";
import { questTabs, type Quest } from "@/data/questData";
import { mapRegions } from "@/data/mapData";
import { routePhases } from "@/data/routeData";
import { QuestItem } from "./QuestItem";
import { ChevronDown, ChevronRight, MapPin } from "lucide-react";

type QuestBucket = "main" | "side" | "contract" | "treasure";

interface RegionQuestGroups {
  main: Quest[];
  side: Quest[];
  contract: Quest[];
  treasure: Quest[];
}

const CANONICAL_REGION_ORDER = [
  "White Orchard",
  "Velen (No Man's Land)",
  "Novigrad",
  "Skellige Isles",
  "Kaer Morhen",
  "Vizima — Royal Palace",
  "Isle of Mists",
  "Oxenfurt",
  "Toussaint (Blood & Wine)",
];

const DEFAULT_REGION_BY_SECTION: Record<string, string> = {
  "Prologue & White Orchard": "White Orchard",
  "Velen & Novigrad": "Velen (No Man's Land)",
  "Skellige Isles": "Skellige Isles",
  "Battle of Kaer Morhen & Endgame": "Kaer Morhen",
  "Hearts of Stone": "Oxenfurt",
  "Blood and Wine": "Toussaint (Blood & Wine)",
  "White Orchard": "White Orchard",
  "Velen": "Velen (No Man's Land)",
  "Skellige": "Skellige Isles",
  "Hearts of Stone Side Quests": "Oxenfurt",
  "Blood and Wine Side Quests": "Toussaint (Blood & Wine)",
};

const REGION_ALIASES: Record<string, string[]> = {
  "White Orchard": ["white orchard"],
  "Velen (No Man's Land)": ["velen"],
  Novigrad: ["novigrad"],
  "Skellige Isles": ["skellige"],
  "Toussaint (Blood & Wine)": ["toussaint"],
  "Kaer Morhen": ["kaer morhen"],
  "Vizima — Royal Palace": ["vizima"],
  Oxenfurt: ["oxenfurt"],
  "Isle of Mists": ["isle of mists"],
};

function normalizeName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const QUEST_BUCKET_OVERRIDES: Record<string, QuestBucket> = {
  "viper school gear": "treasure",
  "temerian valuables": "treasure",
  "deserter gold": "treasure",
  "cat school gear part 1": "treasure",
  "cat school gear part 2": "treasure",
  "griffin school gear part 1": "treasure",
  "griffin school gear part 2": "treasure",
  "cat school gear part 3": "treasure",
  "cat school gear part 4": "treasure",
  "feline crossbow": "treasure",
  "novigrad smuggler caches": "treasure",
  "hidden eternal fire vault": "treasure",
  "bear school gear part 1": "treasure",
  "bear school gear part 2": "treasure",
  "bear school gear part 3": "treasure",
  "enhanced bear gear": "treasure",
  "superior bear gear": "treasure",
  "mastercrafted bear gear": "treasure",
  "skellige smuggler caches": "treasure",
  "ofieri armor diagrams": "treasure",
  "ofieri horse gear": "treasure",
  "ofieri saber diagrams": "treasure",
  "grandmaster feline gear": "treasure",
  "grandmaster ursine gear": "treasure",
  "grandmaster griffin gear": "treasure",
  "grandmaster wolven gear": "treasure",
  "grandmaster manticore gear": "treasure",
  "toussaint smuggler caches": "treasure",
  "devil by the well": "contract",
  "the nilfgaardian connection": "main",
  "bloody baron": "main",
  "ciri's story king of the wolves": "main",
  "family matters": "main",
  "a princess in distress": "main",
  "ciri's story the race": "main",
  "hunting a witch": "main",
  "wandering in the dark": "main",
  "ladies of the wood": "main",
  "the whispering hillock": "main",
  "ciri's story fleeing the bog": "main",
  "return to crookback bog": "main",
  "the battle of crow's perch": "main",
  "a matter of life and death": "side",
  "now or never": "side",
  "shrieker": "contract",
  "jenny o' the woods": "contract",
  "the merry widow": "contract",
  "missing brother": "contract",
  "swamp thing": "contract",
  "byways murders": "contract",
  "woodland beast": "contract",
  "the doppler effect": "contract",
  "deadly delights": "contract",
  "the white lady": "contract",
  "doors slamming shut": "contract",
  "the oxenfurt drunk": "contract",
  "the apiarian phantom": "contract",
  "the phantom of eldberg": "contract",
  "here comes the groom": "contract",
  "missing son": "contract",
  "strange beast": "contract",
  "the last rites": "contract",
  "muire d'yaeblen": "contract",
  "the ice giant": "contract",
  "contract the toad prince": "contract",
  "bovine blues": "contract",
  "the tufo monster": "contract",
  "the white widow": "contract",
  "the beast of beauclair": "contract",
  "the shaelmaar's lament": "contract",
};

const QUEST_REGION_OVERRIDES: Record<string, string> = {
  "kaer morhen tutorial": "White Orchard",
  "lilac and gooseberries": "White Orchard",
  "the beast of white orchard": "White Orchard",
  "incident in the white orchard tavern": "White Orchard",
  "twisted firestarter": "White Orchard",
  "missing in action": "White Orchard",
  "a frying pan spick and span": "White Orchard",
  "precious cargo": "White Orchard",
  "devil by the well": "White Orchard",
  "viper school gear": "White Orchard",
  "temerian valuables": "White Orchard",
  "deserter gold": "White Orchard",
  "the nilfgaardian connection": "Velen (No Man's Land)",
  "bloody baron": "Velen (No Man's Land)",
  "ciri's story king of the wolves": "Velen (No Man's Land)",
  "family matters": "Velen (No Man's Land)",
  "a princess in distress": "Velen (No Man's Land)",
  "ciri's story the race": "Velen (No Man's Land)",
  "hunting a witch": "Velen (No Man's Land)",
  "wandering in the dark": "Velen (No Man's Land)",
  "ladies of the wood": "Velen (No Man's Land)",
  "the whispering hillock": "Velen (No Man's Land)",
  "ciri's story fleeing the bog": "Velen (No Man's Land)",
  "return to crookback bog": "Velen (No Man's Land)",
  "the battle of crow's perch": "Velen (No Man's Land)",
  "forefathers' eve": "Velen (No Man's Land)",
  "a towerful of mice": "Velen (No Man's Land)",
  "ghosts of the past": "Velen (No Man's Land)",
  "the truth is in the stars": "Velen (No Man's Land)",
  "the fall of the house of reardon": "Velen (No Man's Land)",
  "the volunteer": "Velen (No Man's Land)",
  "a greedy god": "Velen (No Man's Land)",
  "shrieker": "Velen (No Man's Land)",
  "jenny o' the woods": "Velen (No Man's Land)",
  "the merry widow": "Velen (No Man's Land)",
  "missing brother": "Velen (No Man's Land)",
  "swamp thing": "Velen (No Man's Land)",
  "byways murders": "Velen (No Man's Land)",
  "woodland beast": "Velen (No Man's Land)",
  "cat school gear part 1": "Velen (No Man's Land)",
  "cat school gear part 2": "Velen (No Man's Land)",
  "griffin school gear part 1": "Velen (No Man's Land)",
  "griffin school gear part 2": "Velen (No Man's Land)",
  "pyres of novigrad": "Novigrad",
  "novigrad dreaming": "Novigrad",
  "broken flowers": "Novigrad",
  "get junior": "Novigrad",
  "count reuven's treasure": "Novigrad",
  "the play's the thing": "Novigrad",
  "a poet under pressure": "Novigrad",
  "ciri's story breakneck speed": "Novigrad",
  "destination skellige": "Novigrad",
  "a matter of life and death": "Novigrad",
  "now or never": "Novigrad",
  "redania's most wanted": "Novigrad",
  "a deadly plot": "Novigrad",
  "an eye for an eye": "Novigrad",
  "reason of state": "Novigrad",
  "gangs of novigrad": "Novigrad",
  "honor among thieves": "Novigrad",
  "the gangs of novigrad aftermath": "Novigrad",
  "witch hunter raids": "Novigrad",
  "the soldier statuette": "Novigrad",
  "the nobleman statuette": "Novigrad",
  "cabaret": "Novigrad",
  "carnal sins": "Novigrad",
  "a feast for crows": "Novigrad",
  "the dwarven document dilemma": "Novigrad",
  "the black pearl": "Novigrad",
  "fencing lessons": "Novigrad",
  "the nobleman's stash": "Novigrad",
  "the price of passage": "Novigrad",
  "the doppler effect": "Novigrad",
  "deadly delights": "Novigrad",
  "the white lady": "Novigrad",
  "doors slamming shut": "Novigrad",
  "the oxenfurt drunk": "Novigrad",
  "the apiarian phantom": "Novigrad",
  "cat school gear part 3": "Novigrad",
  "cat school gear part 4": "Novigrad",
  "feline crossbow": "Novigrad",
  "novigrad smuggler caches": "Novigrad",
  "hidden eternal fire vault": "Novigrad",
  "destination skellige": "Skellige Isles",
  "the king is dead long live the king": "Skellige Isles",
  "echoes of the past": "Skellige Isles",
  "missing persons": "Skellige Isles",
  "nameless": "Skellige Isles",
  "the calm before the storm": "Skellige Isles",
  "the lord of undvik": "Skellige Isles",
  "possession": "Skellige Isles",
  "the path of warriors": "Skellige Isles",
  "king's gambit": "Skellige Isles",
  "coronation": "Skellige Isles",
  "the family blade": "Skellige Isles",
  "hard times": "Skellige Isles",
  "the last wish": "Skellige Isles",
  "stranger in a strange land": "Skellige Isles",
  "cave of dreams": "Skellige Isles",
  "the heroes pursuits": "Skellige Isles",
  "the price of honor": "Skellige Isles",
  "the abandoned sawmill": "Skellige Isles",
  "possession side threads": "Skellige Isles",
  "the tower outta nowheres": "Skellige Isles",
  "in the heart of the woods": "Skellige Isles",
  "the nithing": "Skellige Isles",
  "shock therapy": "Skellige Isles",
  "the great escape": "Skellige Isles",
  "the phantom of eldberg": "Skellige Isles",
  "here comes the groom": "Skellige Isles",
  "missing son": "Skellige Isles",
  "strange beast": "Skellige Isles",
  "the last rites": "Skellige Isles",
  "muire d'yaeblen": "Skellige Isles",
  "the ice giant": "Skellige Isles",
  "bear school gear part 1": "Skellige Isles",
  "bear school gear part 2": "Skellige Isles",
  "bear school gear part 3": "Skellige Isles",
  "enhanced bear gear": "Skellige Isles",
  "superior bear gear": "Skellige Isles",
  "mastercrafted bear gear": "Skellige Isles",
  "skellige smuggler caches": "Skellige Isles",
  "evil's soft first touches": "Oxenfurt",
  "dead man's party": "Oxenfurt",
  "open sesame": "Oxenfurt",
  "scenes from a marriage": "Oxenfurt",
  "whatsoever a man soweth": "Oxenfurt",
  "a midnight clear": "Oxenfurt",
  "a gift for the newlyweds": "Oxenfurt",
  "the runewright start up costs": "Oxenfurt",
  "the runewright enchanting": "Oxenfurt",
  "the runewright mastercrafted enchantments": "Oxenfurt",
  "contract the oxenfurt drunk": "Oxenfurt",
  "contract the toad prince": "Oxenfurt",
  "ofieri armor diagrams": "Oxenfurt",
  "ofieri horse gear": "Oxenfurt",
  "ofieri saber diagrams": "Oxenfurt",
  "envoys wineboys": "Toussaint (Blood & Wine)",
  "the beast of toussaint": "Toussaint (Blood & Wine)",
  "blood run": "Toussaint (Blood & Wine)",
  "la cage au fou": "Toussaint (Blood & Wine)",
  "where children toil toys waste away": "Toussaint (Blood & Wine)",
  "wine is sacred": "Toussaint (Blood & Wine)",
  "the man from cintra": "Toussaint (Blood & Wine)",
  "capture the castle": "Toussaint (Blood & Wine)",
  "the night of long fangs": "Toussaint (Blood & Wine)",
  "beyond hill and dale": "Toussaint (Blood & Wine)",
  "tesham mutna": "Toussaint (Blood & Wine)",
  "pomp and strange circumstance": "Toussaint (Blood & Wine)",
  "no place like home": "Toussaint (Blood & Wine)",
  "renovating corvo bianco": "Toussaint (Blood & Wine)",
  "a portrait of the witcher as an old man": "Toussaint (Blood & Wine)",
  "a knight's tales": "Toussaint (Blood & Wine)",
  "the warble of a smitten knight": "Toussaint (Blood & Wine)",
  "goodness gracious great balls of granite": "Toussaint (Blood & Wine)",
  "mutual of beauclair's wild kingdom": "Toussaint (Blood & Wine)",
  "big game hunter": "Toussaint (Blood & Wine)",
  "turn and face the strange": "Toussaint (Blood & Wine)",
  "there can be only one": "Toussaint (Blood & Wine)",
  "the hunger game": "Toussaint (Blood & Wine)",
  "the curse of coronata": "Toussaint (Blood & Wine)",
  "father knows worst": "Toussaint (Blood & Wine)",
  "knight for hire": "Toussaint (Blood & Wine)",
  "paperchase": "Toussaint (Blood & Wine)",
  "the last exploits of selina's gang": "Toussaint (Blood & Wine)",
  "the beast of beauclair side tie in": "Toussaint (Blood & Wine)",
  "bovine blues": "Toussaint (Blood & Wine)",
  "the tufo monster": "Toussaint (Blood & Wine)",
  "the white widow": "Toussaint (Blood & Wine)",
  "the beast of beauclair": "Toussaint (Blood & Wine)",
  "the shaelmaar's lament": "Toussaint (Blood & Wine)",
  "grandmaster feline gear": "Toussaint (Blood & Wine)",
  "grandmaster ursine gear": "Toussaint (Blood & Wine)",
  "grandmaster griffin gear": "Toussaint (Blood & Wine)",
  "grandmaster wolven gear": "Toussaint (Blood & Wine)",
  "grandmaster manticore gear": "Toussaint (Blood & Wine)",
  "toussaint smuggler caches": "Toussaint (Blood & Wine)",
};

function isContractQuest(quest: Quest): boolean {
  return normalizeName(quest.name).startsWith("contract ");
}

function isTreasureQuest(quest: Quest): boolean {
  const override = QUEST_BUCKET_OVERRIDES[normalizeName(quest.name)];
  if (override) return override === "treasure";
  const n = normalizeName(quest.name);
  return (
    n.includes("treasure hunt") ||
    n.includes("scavenger hunt") ||
    n.includes("school gear") ||
    n.includes("viper school gear") ||
    n.includes("temerian valuables") ||
    n === "deserter gold"
  );
}

function defaultBucket(quest: Quest): QuestBucket {
  const override = QUEST_BUCKET_OVERRIDES[normalizeName(quest.name)];
  if (override) return override;
  if (isTreasureQuest(quest)) return "treasure";
  if (isContractQuest(quest)) return "contract";
  return quest.type === "main" ? "main" : "side";
}

function bucketLabel(bucket: QuestBucket): string {
  if (bucket === "main") return "Main";
  if (bucket === "side") return "Side";
  if (bucket === "treasure") return "Treasure";
  return "Contracts";
}

function buildQuestRegionLookup(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const phase of routePhases) {
    for (const step of phase.steps) {
      const normalized = normalizeName(step.quest);
      if (!normalized) continue;
      const region = mapRegions.find((r) => {
        const aliases = REGION_ALIASES[r.name] || [r.name.toLowerCase()];
        const phaseRegion = phase.region.toLowerCase();
        const stepRegion = step.region.toLowerCase();
        return aliases.some(
          (a) =>
            phaseRegion.includes(a) ||
            stepRegion.includes(a) ||
            normalizeName(step.quest).includes(a)
        );
      })?.name;
      if (region) map[normalized] = region;
    }
  }
  return map;
}

function QuestRegionCard({
  regionName,
  regionLevel,
  regionDescription,
  regionImage,
  groups,
  activeBucket,
  onBucketChange,
  completed,
  onToggle,
  searchTerm,
}: {
  regionName: string;
  regionLevel: string;
  regionDescription: string;
  regionImage: string;
  groups: RegionQuestGroups;
  activeBucket: QuestBucket;
  onBucketChange: (next: QuestBucket) => void;
  completed: Record<string, boolean>;
  onToggle: (id: string) => void;
  searchTerm: string;
}) {
  const [open, setOpen] = useState(true);
  const hasSearch = searchTerm.trim().length > 0;
  const firstNonEmptyBucket = (["main", "side", "contract", "treasure"] as QuestBucket[]).find(
    (bucket) => groups[bucket].length > 0
  );
  // When searching, auto-show the first bucket with matches so results never appear "missing".
  const effectiveBucket: QuestBucket =
    hasSearch && groups[activeBucket].length === 0 && firstNonEmptyBucket
      ? firstNonEmptyBucket
      : activeBucket;
  const visibleQuests = groups[effectiveBucket];
  const totalRegion = groups.main.length + groups.side.length + groups.contract.length;
  const totalRegionWithTreasure = totalRegion + groups.treasure.length;
  const doneRegion =
    groups.main.filter((q) => completed[q.id]).length +
    groups.side.filter((q) => completed[q.id]).length +
    groups.contract.filter((q) => completed[q.id]).length +
    groups.treasure.filter((q) => completed[q.id]).length;

  return (
    <div className="border border-border rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-secondary/50 hover:bg-secondary/80 transition-colors text-left"
      >
        {open ? (
          <ChevronDown className="h-5 w-5 text-primary shrink-0" />
        ) : (
          <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-heading font-bold text-foreground">{regionName}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">
              {regionLevel}
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-body mt-0.5">
            {doneRegion}/{totalRegionWithTreasure} completed
          </p>
        </div>
      </button>

      {open && (
        <div className="p-4 border-t border-border/60">
          <img
            src={regionImage}
            alt={regionName}
            className="w-full h-44 object-cover rounded-lg border border-border mb-3"
            loading="lazy"
            width={960}
            height={540}
          />
          <p className="text-sm text-muted-foreground font-body mb-4">{regionDescription}</p>

          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            {(["main", "side", "contract", "treasure"] as QuestBucket[]).map((bucket) => (
              <button
                key={bucket}
                onClick={() => onBucketChange(bucket)}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold whitespace-nowrap transition-colors ${
                  effectiveBucket === bucket
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {bucketLabel(bucket)} ({groups[bucket].length})
              </button>
            ))}
          </div>

          {visibleQuests.length === 0 ? (
            <p className="text-xs text-muted-foreground font-body">
              No {bucketLabel(effectiveBucket).toLowerCase()} quests in this region.
            </p>
          ) : (
            <div className="space-y-2">
              {visibleQuests.map((quest) => (
                <QuestItem
                  key={quest.id}
                  quest={quest}
                  isCompleted={!!completed[quest.id]}
                  onToggle={onToggle}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function CombinedQuests({
  searchTerm,
  completed,
  onToggle,
}: {
  searchTerm: string;
  completed: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const [activeRegionBucket, setActiveRegionBucket] = useState<Record<string, QuestBucket>>({});

  const questRegionLookup = useMemo(() => buildQuestRegionLookup(), []);
  const baseTabs = useMemo(
    () => questTabs.filter((t) => t.id === "main" || t.id === "side"),
    []
  );

  const regionMap = useMemo(() => {
    const regions = new Map<string, RegionQuestGroups>();
    for (const regionName of CANONICAL_REGION_ORDER) {
      regions.set(regionName, { main: [], side: [], contract: [], treasure: [] });
    }

    for (const tab of baseTabs) {
      for (const section of tab.sections) {
        const fallbackRegion =
          DEFAULT_REGION_BY_SECTION[section.title] ?? "Velen (No Man's Land)";
        for (const quest of section.quests) {
          const normalized = normalizeName(quest.name);
          const inferredRegion =
            QUEST_REGION_OVERRIDES[normalized] ??
            questRegionLookup[normalized] ??
            fallbackRegion;
          if (!regions.has(inferredRegion)) continue;
          const bucket = defaultBucket(quest);
          regions.get(inferredRegion)![bucket].push(quest);
        }
      }
    }

    return regions;
  }, [baseTabs, questRegionLookup]);

  const filteredRegions = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return CANONICAL_REGION_ORDER.map((regionName) => {
      const region = mapRegions.find((r) => r.name === regionName);
      if (!region) return null;
          const groups = regionMap.get(regionName) ?? { main: [], side: [], contract: [], treasure: [] };
      if (!term) return { region, groups };

      const matchesRegion =
        region.name.toLowerCase().includes(term) ||
        region.description.toLowerCase().includes(term);
      const filteredGroups: RegionQuestGroups = {
        main: groups.main.filter((q) => q.name.toLowerCase().includes(term)),
        side: groups.side.filter((q) => q.name.toLowerCase().includes(term)),
        contract: groups.contract.filter((q) => q.name.toLowerCase().includes(term)),
        treasure: groups.treasure.filter((q) => q.name.toLowerCase().includes(term)),
      };
      const hasQuestMatch =
        filteredGroups.main.length > 0 ||
        filteredGroups.side.length > 0 ||
        filteredGroups.contract.length > 0 ||
        filteredGroups.treasure.length > 0;

      if (!matchesRegion && !hasQuestMatch) return null;
      return {
        region,
        groups: matchesRegion ? groups : filteredGroups,
      };
    }).filter((entry): entry is { region: (typeof mapRegions)[number]; groups: RegionQuestGroups } => Boolean(entry));
  }, [regionMap, searchTerm]);

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-1">
          📜 Quests By Region
        </h2>
        <p className="text-sm text-muted-foreground font-body">
          Open a region, then switch between Main, Side, and Contracts.
        </p>
      </div>

      {filteredRegions.length === 0 ? (
        <p className="text-center text-muted-foreground py-8 font-body">
          No regions or quests found matching "{searchTerm}"
        </p>
      ) : (
        filteredRegions.map(({ region, groups }) => (
          <QuestRegionCard
            key={region.id}
            regionName={region.name}
            regionLevel={region.level}
            regionDescription={region.description}
            regionImage={region.image}
            groups={groups}
            activeBucket={activeRegionBucket[region.name] ?? "main"}
            onBucketChange={(next) =>
              setActiveRegionBucket((prev) => ({ ...prev, [region.name]: next }))
            }
            completed={completed}
            onToggle={onToggle}
            searchTerm={searchTerm}
          />
        ))
      )}
    </div>
  );
}
