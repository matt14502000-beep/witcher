import { useState } from "react";
import { ChevronDown, ChevronRight, Clock3 } from "lucide-react";
import { timelineActs } from "@/data/timelineData";

export function StoryTimeline({ searchTerm = "" }: { searchTerm?: string }) {
  const [openActs, setOpenActs] = useState<Record<string, boolean>>(
    Object.fromEntries(timelineActs.map((a) => [a.id, true]))
  );

  const term = searchTerm.trim().toLowerCase();
  const filtered = timelineActs.filter((act) => {
    if (!term) return true;
    return (
      act.act.toLowerCase().includes(term) ||
      act.events.some((e) => e.toLowerCase().includes(term))
    );
  });

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-1">
          🕰️ Story Timeline
        </h2>
        <p className="text-sm text-muted-foreground font-body">
          Full Witcher 3 progression in chronological acts.
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-8 font-body">
          No timeline acts found matching "{searchTerm}"
        </p>
      ) : (
        filtered.map((act) => {
          const isOpen = !!openActs[act.id];
          return (
            <div key={act.id} className="border border-border rounded-lg overflow-hidden mb-3">
              <button
                onClick={() =>
                  setOpenActs((prev) => ({ ...prev, [act.id]: !prev[act.id] }))
                }
                className="w-full flex items-center gap-3 px-4 py-3 bg-secondary/50 hover:bg-secondary/80 transition-colors text-left"
              >
                {isOpen ? (
                  <ChevronDown className="h-5 w-5 text-primary shrink-0" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Clock3 className="h-4 w-4 text-primary" />
                    <span className="font-heading font-bold text-foreground">{act.act}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">
                    {act.events.length} key events
                  </p>
                </div>
              </button>

              {isOpen && (
                <div className="p-4 border-t border-border/60">
                  <ol className="space-y-2 text-sm text-muted-foreground font-body">
                    {act.events.map((event, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {event}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
