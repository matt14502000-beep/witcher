import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { QuestSection as QuestSectionType } from "@/data/questData";
import { QuestItem } from "./QuestItem";

interface QuestSectionProps {
  section: QuestSectionType;
  completed: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export function QuestSection({ section, completed, onToggle }: QuestSectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const total = section.quests.length;
  const done = section.quests.filter((q) => completed[q.id]).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-1 border-b border-border hover:border-primary/50 transition-colors group"
      >
        <div className="flex items-center gap-3">
          {isOpen ? (
            <ChevronDown className="h-5 w-5 text-primary" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {section.title}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-sm font-heading text-muted-foreground min-w-[60px] text-right">
            {done}/{total}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="mt-3 space-y-2">
          {section.quests.map((quest) => (
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
  );
}
