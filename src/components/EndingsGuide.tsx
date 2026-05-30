import { useState } from "react";
import { ciriDecisions, mainEndings, romanceEndings, dlcEndings, skelligeRuler } from "@/data/endingsData";
import { ChevronDown, ChevronUp } from "lucide-react";

const typeColor = {
  good: "bg-success text-primary-foreground",
  neutral: "bg-warning text-primary-foreground",
  bad: "bg-destructive text-primary-foreground",
};

const typeLabel = { good: "Best", neutral: "Neutral", bad: "Bad" };

function Collapsible({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden mb-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-3 hover:bg-secondary/50 transition-colors">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-heading font-bold text-foreground text-sm">{title}</span>
          {badge && <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-heading">{badge}</span>}
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>
      {open && <div className="p-3 pt-0 animate-in fade-in-0 slide-in-from-top-1">{children}</div>}
    </div>
  );
}

export function EndingsGuide({ searchTerm }: { searchTerm: string }) {
  const term = searchTerm.toLowerCase();
  const matchesSearch = (text: string) => !searchTerm.trim() || text.toLowerCase().includes(term);

  return (
    <div className="space-y-6">
      {/* Ciri's 5 Key Decisions */}
      <div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-1">🎯 Ciri's 5 Key Decisions</h3>
        <p className="text-sm text-muted-foreground font-body mb-3">These 5 choices determine which of the 3 main endings you get. You need at least 3 positive choices for Ciri to survive.</p>
        {ciriDecisions.filter((d) => matchesSearch(d.quest + d.description)).map((d) => (
          <Collapsible key={d.id} title={d.quest}>
            <p className="text-sm text-muted-foreground font-body mb-3">{d.description}</p>
            <div className="space-y-2">
              <div className="bg-success/10 border border-success/20 rounded-lg p-2">
                <p className="text-sm font-body text-foreground">{d.goodChoice}</p>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-2">
                <p className="text-sm font-body text-foreground">{d.badChoice}</p>
              </div>
            </div>
          </Collapsible>
        ))}
      </div>

      {/* Main Endings */}
      <div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">🏰 Main Story Endings</h3>
        {mainEndings.filter((e) => matchesSearch(e.name + e.description)).map((e) => (
          <Collapsible key={e.id} title={e.name} badge={typeLabel[e.type]}>
            <div className="space-y-2">
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-heading font-semibold ${typeColor[e.type]}`}>{typeLabel[e.type]} Ending</span>
              <p className="text-sm text-muted-foreground font-body">{e.description}</p>
              <div className="bg-secondary/40 rounded-lg p-2">
                <p className="text-xs font-heading font-semibold text-foreground mb-1">How to get:</p>
                <p className="text-sm text-muted-foreground font-body">{e.requirements}</p>
              </div>
              <p className="text-sm text-muted-foreground font-body italic">{e.details}</p>
            </div>
          </Collapsible>
        ))}
      </div>

      {/* Romance */}
      <div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">💕 Romance Endings</h3>
        {romanceEndings.filter((r) => matchesSearch(r.name + r.result)).map((r) => (
          <Collapsible key={r.id} title={r.name} badge={typeLabel[r.type]}>
            <div className="space-y-2">
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-heading font-semibold ${typeColor[r.type]}`}>{typeLabel[r.type]}</span>
              <div className="bg-secondary/40 rounded-lg p-2">
                <p className="text-xs font-heading font-semibold text-foreground mb-1">Requirement:</p>
                <p className="text-sm text-muted-foreground font-body">{r.requirement}</p>
              </div>
              <p className="text-sm text-muted-foreground font-body">{r.result}</p>
            </div>
          </Collapsible>
        ))}
      </div>

      {/* Skellige Ruler */}
      <div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">👑 Skellige Ruler</h3>
        {Object.values(skelligeRuler).filter((r) => matchesSearch(r.name + r.description)).map((r) => (
          <Collapsible key={r.name} title={r.name} badge={typeLabel[r.type]}>
            <div className="space-y-2">
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-heading font-semibold ${typeColor[r.type]}`}>{typeLabel[r.type]}</span>
              <p className="text-sm text-muted-foreground font-body">{r.description}</p>
              <div className="bg-secondary/40 rounded-lg p-2">
                <p className="text-xs font-heading font-semibold text-foreground mb-1">How to get:</p>
                <p className="text-sm text-muted-foreground font-body">{r.howToGet}</p>
              </div>
            </div>
          </Collapsible>
        ))}
      </div>

      {/* DLC Endings */}
      <div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">📖 DLC Endings</h3>
        {dlcEndings.filter((e) => matchesSearch(e.name + e.dlc + e.description)).map((e) => (
          <Collapsible key={e.id} title={`${e.dlc}: ${e.name}`} badge={typeLabel[e.type]}>
            <div className="space-y-2">
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-heading font-semibold ${typeColor[e.type]}`}>{typeLabel[e.type]}</span>
              <p className="text-sm text-muted-foreground font-body">{e.description}</p>
              <div className="bg-secondary/40 rounded-lg p-2">
                <p className="text-xs font-heading font-semibold text-foreground mb-1">How to get:</p>
                <p className="text-sm text-muted-foreground font-body">{e.howToGet}</p>
              </div>
            </div>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
