import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle, Swords, FlaskConical, Bomb, MessageSquare } from "lucide-react";
import type { Quest } from "@/data/questData";
import { DialogueChoiceNode } from "./DialogueChoiceNode";

const typeStyles: Record<string, string> = {
  main: "bg-quest-main text-primary-foreground",
  side: "bg-quest-side text-primary-foreground",
  gwent: "bg-quest-gwent text-primary-foreground",
  collectible: "bg-quest-collectible text-primary-foreground",
};

const typeLabels: Record<string, string> = {
  main: "Main",
  side: "Side",
  gwent: "Gwent",
  collectible: "Info",
};

interface QuestItemProps {
  quest: Quest;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

export function QuestItem({ quest, isCompleted, onToggle }: QuestItemProps) {
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [showDialogues, setShowDialogues] = useState(false);

  const hasDialogues = !!quest.dialogues && quest.dialogues.length > 0;

  const getSpoilerIcon = () => {
    const tip = quest.spoilerTip || "";
    if (tip.startsWith("⚔️")) return <Swords className="h-4 w-4" />;
    if (tip.startsWith("🧪")) return <FlaskConical className="h-4 w-4" />;
    if (tip.startsWith("💣")) return <Bomb className="h-4 w-4" />;
    return <AlertTriangle className="h-4 w-4" />;
  };

  return (
    <div className="space-y-0">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isCompleted
            ? "bg-success/10 border border-success/20"
            : "bg-secondary/50 border border-border hover:bg-secondary/80"
        }`}
      >
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggle(quest.id)}
          className="h-5 w-5 rounded accent-primary cursor-pointer flex-shrink-0"
        />
        <div
          className={`h-3 w-3 rounded-full flex-shrink-0 transition-colors ${
            isCompleted ? "bg-success" : "bg-muted-foreground/30"
          }`}
        />
        <span
          className={`flex-1 text-lg ${
            isCompleted ? "line-through text-muted-foreground" : ""
          }`}
        >
          {quest.name}
        </span>
        <span
          className={`px-2 py-0.5 rounded text-xs font-heading font-semibold tracking-wide uppercase ${
            typeStyles[quest.type]
          }`}
        >
          {typeLabels[quest.type]}
        </span>
        {hasDialogues && (
          <button
            onClick={() => setShowDialogues(!showDialogues)}
            className={`p-1.5 rounded-md transition-colors flex items-center gap-1 ${
              showDialogues
                ? "bg-primary/20 text-primary"
                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
            }`}
            title="Show/hide dialogue choices"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs font-heading">{quest.dialogues!.length}</span>
          </button>
        )}
        {quest.spoilerTip && (
          <button
            onClick={() => setShowSpoiler(!showSpoiler)}
            className="p-1.5 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
            title="Show/hide guide tip"
          >
            {showSpoiler ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      {showSpoiler && quest.spoilerTip && (
        <div className="ml-11 mr-4 px-4 py-3 bg-muted/50 border-l-2 border-primary rounded-b-lg text-sm leading-relaxed flex items-start gap-2">
          <span className="flex-shrink-0 mt-0.5">{getSpoilerIcon()}</span>
          <span>{quest.spoilerTip.replace(/^[⚠️⚔️🧪💣]\s*/, "")}</span>
        </div>
      )}
      {showDialogues && hasDialogues && (
        <div className="ml-11 mr-4 mt-2 px-4 py-3 bg-muted/30 border-l-2 border-primary rounded-b-lg">
          {quest.dialogueContext && (
            <p className="text-sm text-muted-foreground italic mb-3 leading-relaxed">
              {quest.dialogueContext}
            </p>
          )}
          {quest.dialogues!.map((choice, i) => (
            <DialogueChoiceNode key={i} choice={choice} />
          ))}
        </div>
      )}
    </div>
  );
}

