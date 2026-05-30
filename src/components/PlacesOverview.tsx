import { useMemo, useState } from "react";
import { mapRegions } from "@/data/mapData";
import { routePhases } from "@/data/routeData";
import { ChevronDown, ChevronRight, MapPin, ScrollText, ShieldAlert, Swords } from "lucide-react";

type RouteStep = (typeof routePhases)[number]["steps"][number];

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

function classifyStep(step: RouteStep): "main" | "side" | "contract" | "other" {
  if (step.type === "main") return "main";
  if (step.type === "side") return "side";
  if (step.type === "contract") return "contract";
  return "other";
}

function regionMatchesStep(regionName: string, step: RouteStep): boolean {
  const aliases = REGION_ALIASES[regionName] || [regionName.toLowerCase()];
  const stepRegion = step.region.toLowerCase();
  const stepQuest = step.quest.toLowerCase();
  const stepNote = step.note.toLowerCase();

  return aliases.some(
    (a) => stepRegion.includes(a) || stepQuest.includes(a) || stepNote.includes(a)
  );
}

function RegionPlacesCard({
  name,
  description,
  level,
  image,
  steps,
}: {
  name: string;
  description: string;
  level: string;
  image: string;
  steps: RouteStep[];
}) {
  const [open, setOpen] = useState(false);
  const mainSteps = steps.filter((s) => classifyStep(s) === "main");
  const sideSteps = steps.filter((s) => classifyStep(s) === "side");
  const contractSteps = steps.filter((s) => classifyStep(s) === "contract");
  const otherSteps = steps.filter((s) => classifyStep(s) === "other");

  return (
    <div className="border border-border rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-3 hover:bg-secondary/50 transition-colors text-left"
      >
        {open ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
        )}
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-lg object-cover border border-border shrink-0"
          loading="lazy"
          width={64}
          height={64}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <MapPin className="h-4 w-4 text-primary" />
            <h4 className="font-heading font-bold text-foreground">{name}</h4>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">
              {level}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-body">{description}</p>
          <div className="mt-1 text-xs font-body text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Main:</span> {mainSteps.length}
            <span className="mx-2">•</span>
            <span className="font-semibold text-foreground">Side:</span> {sideSteps.length}
            <span className="mx-2">•</span>
            <span className="font-semibold text-foreground">Contracts:</span> {contractSteps.length}
          </div>
        </div>
      </button>

      {open && (
        <div className="p-4 pt-0 animate-in fade-in-0 slide-in-from-top-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Swords className="h-4 w-4 text-primary" />
                <span className="text-xs font-heading font-semibold text-foreground">Main Quests</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{mainSteps.length} steps in this region</p>
            </div>
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <ScrollText className="h-4 w-4 text-quest-side" />
                <span className="text-xs font-heading font-semibold text-foreground">Side Quests</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{sideSteps.length} steps in this region</p>
            </div>
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <ShieldAlert className="h-4 w-4 text-destructive" />
                <span className="text-xs font-heading font-semibold text-foreground">Contracts</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{contractSteps.length} contracts in this region</p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-4">
            <h5 className="text-xs font-heading font-semibold text-primary mb-1">Region Notes</h5>
            <p className="text-sm text-muted-foreground font-body">{description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-2">
                Main Quest Steps
              </h4>
              {mainSteps.length === 0 ? (
                <p className="text-xs text-muted-foreground font-body">No mapped main steps yet.</p>
              ) : (
                <ol className="space-y-1 text-sm text-muted-foreground font-body">
                  {mainSteps.map((s) => (
                    <li key={s.id} className="leading-relaxed">
                      {s.quest}
                    </li>
                  ))}
                </ol>
              )}
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground mb-2">
                Side Quest Steps
              </h4>
              {sideSteps.length === 0 ? (
                <p className="text-xs text-muted-foreground font-body">No mapped side steps yet.</p>
              ) : (
                <ol className="space-y-1 text-sm text-muted-foreground font-body">
                  {sideSteps.map((s) => (
                    <li key={s.id} className="leading-relaxed">
                      {s.quest}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-heading font-semibold text-foreground mb-2">
              Contract Steps
            </h4>
            {contractSteps.length === 0 ? (
              <p className="text-xs text-muted-foreground font-body">No mapped contracts yet.</p>
            ) : (
              <ol className="space-y-1 text-sm text-muted-foreground font-body">
                {contractSteps.map((s) => (
                  <li key={s.id} className="leading-relaxed">
                    {s.quest}
                  </li>
                ))}
              </ol>
            )}
          </div>

          {otherSteps.length > 0 && (
            <div className="mt-4">
              <h4 className="font-heading font-semibold text-foreground mb-2">
                Extra Steps (Gear, Gwent, Exploration)
              </h4>
              <ol className="space-y-1 text-sm text-muted-foreground font-body">
                {otherSteps.map((s) => (
                  <li key={s.id} className="leading-relaxed">
                    {s.quest}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function PlacesOverview({ searchTerm = "" }: { searchTerm?: string }) {
  const allSteps = useMemo(() => routePhases.flatMap((p) => p.steps), []);
  const regions = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return mapRegions
      .map((r) => ({
        ...r,
        steps: allSteps.filter((s) => regionMatchesStep(r.name, s)),
      }))
      .filter((r) => {
        if (!term) return true;
        return (
          r.name.toLowerCase().includes(term) ||
          r.description.toLowerCase().includes(term) ||
          r.steps.some((s) => s.quest.toLowerCase().includes(term))
        );
      });
  }, [allSteps, searchTerm]);

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-1">
          🧭 Places Overview
        </h2>
        <p className="text-sm text-muted-foreground font-body">
          Region overviews with grouped main, side, and contract steps.
        </p>
      </div>

      {regions.length === 0 ? (
        <p className="text-center text-muted-foreground py-8 font-body">
          No places found matching "{searchTerm}"
        </p>
      ) : (
        regions.map((r) => (
          <RegionPlacesCard
            key={r.id}
            name={r.name}
            description={r.description}
            level={r.level}
            image={r.image}
            steps={r.steps}
          />
        ))
      )}
    </div>
  );
}
