import { useState, useMemo } from "react";
import { routePhases, typeLabels, typeColors } from "@/data/routeData";
import { ChevronDown, ChevronRight, AlertTriangle, MapPin, Swords, Shield, FlaskConical, Gamepad2, Compass } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const typeIcons: Record<string, React.ReactNode> = {
  main: <Swords className="h-3.5 w-3.5" />,
  side: <Shield className="h-3.5 w-3.5" />,
  contract: <MapPin className="h-3.5 w-3.5" />,
  witcher_gear: <FlaskConical className="h-3.5 w-3.5" />,
  gwent: <Gamepad2 className="h-3.5 w-3.5" />,
  exploration: <Compass className="h-3.5 w-3.5" />,
};

function PhaseCard({ phase, checkedSteps, onToggle }: {
  phase: typeof routePhases[0];
  checkedSteps: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const done = phase.steps.filter(s => checkedSteps[s.id]).length;
  const total = phase.steps.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="border border-border rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-secondary/50 hover:bg-secondary/80 transition-colors text-left"
      >
        {open ? <ChevronDown className="h-5 w-5 text-primary shrink-0" /> : <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-heading font-bold text-foreground">{phase.name}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">Lv. {phase.levelRange}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Progress value={pct} className="h-1.5 flex-1 max-w-[200px]" />
            <span className="text-xs text-muted-foreground font-body">{done}/{total}</span>
          </div>
        </div>
      </button>

      {open && (
        <div className="divide-y divide-border/50">
          {phase.steps.map((step, i) => (
            <div
              key={step.id}
              className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                checkedSteps[step.id] ? "bg-success/5" : "hover:bg-muted/30"
              }`}
            >
              {/* Step number + checkbox */}
              <div className="flex flex-col items-center gap-1 pt-0.5">
                <span className="text-xs font-bold text-muted-foreground w-5 text-center">{i + 1}</span>
                <button
                  onClick={() => onToggle(step.id)}
                  className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-colors ${
                    checkedSteps[step.id]
                      ? "bg-success border-success text-success-foreground"
                      : "border-muted-foreground/40 hover:border-primary"
                  }`}
                >
                  {checkedSteps[step.id] && <span className="text-xs">✓</span>}
                </button>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-semibold ${typeColors[step.type]}`}>
                    {typeIcons[step.type]}
                    {typeLabels[step.type]}
                  </span>
                  <span className="text-xs text-muted-foreground">Lv. {step.level}</span>
                  {step.missable && (
                    <span className="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-full bg-destructive/20 text-destructive font-semibold">
                      <AlertTriangle className="h-3 w-3" />
                      Missable
                    </span>
                  )}
                </div>
                <p className={`font-heading font-semibold text-sm ${checkedSteps[step.id] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {step.quest}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">{step.note}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function RoutePlanner({ searchTerm = "" }: { searchTerm?: string }) {
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem("w3-route-progress") || "{}");
    } catch { return {}; }
  });

  const toggle = (id: string) => {
    setCheckedSteps(prev => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("w3-route-progress", JSON.stringify(next));
      return next;
    });
  };

  const filteredPhases = useMemo(() => {
    if (!searchTerm.trim()) return routePhases;
    const term = searchTerm.toLowerCase();
    return routePhases
      .map(phase => ({
        ...phase,
        steps: phase.steps.filter(s =>
          s.quest.toLowerCase().includes(term) || s.note.toLowerCase().includes(term)
        ),
      }))
      .filter(p => p.steps.length > 0);
  }, [searchTerm]);

  const totalSteps = routePhases.reduce((a, p) => a + p.steps.length, 0);
  const totalDone = Object.values(checkedSteps).filter(Boolean).length;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-1">📋 Recommended Quest Order</h2>
        <p className="text-sm text-muted-foreground font-body mb-3">
          Optimal level-by-level path through the entire game. Follow this order to stay properly leveled and never miss critical content.
        </p>
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <Progress value={totalSteps > 0 ? (totalDone / totalSteps) * 100 : 0} className="h-2 flex-1 max-w-xs" />
          <span className="text-sm font-heading font-semibold text-foreground">{totalDone}/{totalSteps} completed</span>
        </div>

        {/* Legend */}
        <div className="flex gap-2 flex-wrap">
          {Object.entries(typeLabels).map(([key, label]) => (
            <span key={key} className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold ${typeColors[key]}`}>
              {typeIcons[key]}
              {label}
            </span>
          ))}
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-destructive/20 text-destructive font-semibold">
            <AlertTriangle className="h-3 w-3" />
            Missable
          </span>
        </div>
      </div>

      {filteredPhases.length === 0 ? (
        <p className="text-center text-muted-foreground py-8 font-body">No quests found matching "{searchTerm}"</p>
      ) : (
        filteredPhases.map(phase => (
          <PhaseCard key={phase.id} phase={phase} checkedSteps={checkedSteps} onToggle={toggle} />
        ))
      )}
    </div>
  );
}
