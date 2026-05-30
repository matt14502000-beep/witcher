import { useState } from "react";
import { builds, type Build } from "@/data/buildsData";
import { ChevronDown, ChevronUp, Sword, Shield, Flame, Star } from "lucide-react";

const difficultyColor: Record<string, string> = {
  Beginner: "bg-success text-primary-foreground",
  Intermediate: "bg-warning text-primary-foreground",
  Advanced: "bg-destructive text-primary-foreground",
};

function BuildCard({ build }: { build: Build }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-heading font-bold text-foreground text-lg">{build.name}</h3>
            <span className={`px-2 py-0.5 rounded text-xs font-heading font-semibold ${difficultyColor[build.difficulty]}`}>
              {build.difficulty}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-body italic">{build.subtitle}</p>
        </div>
        {open ? <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />}
      </button>

      {open && (
        <div className="p-4 pt-0 space-y-4 animate-in fade-in-0 slide-in-from-top-1">
          <p className="text-muted-foreground font-body">{build.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-xs font-heading font-semibold text-foreground">Gear</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{build.gear}</p>
            </div>
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Sword className="h-4 w-4 text-destructive" />
                <span className="text-xs font-heading font-semibold text-foreground">Weapons</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{build.weapons}</p>
            </div>
            <div className="bg-secondary/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Flame className="h-4 w-4 text-warning" />
                <span className="text-xs font-heading font-semibold text-foreground">Mutagens</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{build.mutagens}</p>
            </div>
            {build.mutation && (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-xs font-heading font-semibold text-foreground">Mutation (B&W)</span>
                </div>
                <p className="text-sm text-muted-foreground font-body">{build.mutation}</p>
              </div>
            )}
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-2">Skill Point Allocation</h4>
            <div className="space-y-2">
              {build.skills.map((skill, i) => (
                <div key={i} className="bg-secondary/30 rounded-lg p-2 flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground text-xs font-heading font-bold rounded px-2 py-0.5 shrink-0 mt-0.5">
                    {skill.points}pt
                  </span>
                  <div>
                    <span className="font-heading font-semibold text-sm text-foreground">{skill.name}</span>
                    <p className="text-xs text-muted-foreground font-body">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Playstyle */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
            <h5 className="text-xs font-heading font-semibold text-primary mb-1">🎮 Playstyle</h5>
            <p className="text-sm text-muted-foreground font-body">{build.playstyle}</p>
          </div>

          {/* Strengths/Weaknesses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <h5 className="font-heading font-semibold text-success text-sm mb-1">✅ Strengths</h5>
              <ul className="space-y-1">
                {build.strengths.map((s, i) => (
                  <li key={i} className="text-xs text-muted-foreground font-body">• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-destructive text-sm mb-1">❌ Weaknesses</h5>
              <ul className="space-y-1">
                {build.weaknesses.map((w, i) => (
                  <li key={i} className="text-xs text-muted-foreground font-body">• {w}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function BuildGuide({ searchTerm }: { searchTerm: string }) {
  const filtered = builds.filter(
    (b) =>
      !searchTerm.trim() ||
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    return <p className="text-center text-muted-foreground py-8 font-body text-lg">No builds found</p>;
  }

  return (
    <div>
      <p className="text-muted-foreground font-body mb-4">5 optimized builds with full skill point allocation, gear recommendations, and playstyle guides.</p>
      {filtered.map((b) => (
        <BuildCard key={b.id} build={b} />
      ))}
    </div>
  );
}
