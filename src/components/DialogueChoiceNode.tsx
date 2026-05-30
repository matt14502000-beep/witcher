import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { DialogueChoice, DialogueOutcome } from "@/data/dialogueData";

export const outcomeColors: Record<DialogueOutcome, string> = {
  good: "border-l-success bg-success/5",
  bad: "border-l-destructive bg-destructive/5",
  neutral: "border-l-warning bg-warning/5",
};

export const outcomeDot: Record<DialogueOutcome, string> = {
  good: "bg-success",
  bad: "bg-destructive",
  neutral: "bg-warning",
};

export const outcomeLabel: Record<DialogueOutcome, string> = {
  good: "Best Outcome",
  bad: "Bad Outcome",
  neutral: "Neutral",
};

export function DialogueChoiceNode({
  choice,
  depth = 0,
}: {
  choice: DialogueChoice;
  depth?: number;
}) {
  const [open, setOpen] = useState(false);
  const hasFollowUp = choice.followUp && choice.followUp.length > 0;

  return (
    <div className={depth > 0 ? "ml-4" : ""}>
      <div
        className={`border-l-4 rounded-r-lg p-3 mb-2 ${outcomeColors[choice.outcome]} ${
          hasFollowUp ? "cursor-pointer" : ""
        }`}
        onClick={() => hasFollowUp && setOpen(!open)}
      >
        <div className="flex items-start gap-2">
          <div
            className={`h-3 w-3 rounded-full flex-shrink-0 mt-1.5 ${outcomeDot[choice.outcome]}`}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-heading font-semibold text-foreground">
                {choice.text}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded font-heading ${
                  choice.outcome === "good"
                    ? "bg-success/20 text-success"
                    : choice.outcome === "bad"
                    ? "bg-destructive/20 text-destructive"
                    : "bg-warning/20 text-warning"
                }`}
              >
                {outcomeLabel[choice.outcome]}
              </span>
              {hasFollowUp && (
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  {open ? (
                    <ChevronDown className="h-3 w-3" />
                  ) : (
                    <ChevronRight className="h-3 w-3" />
                  )}
                  {choice.followUp!.length} follow-up
                  {choice.followUp!.length > 1 ? "s" : ""}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {choice.result}
            </p>
          </div>
        </div>
      </div>
      {open && hasFollowUp && (
        <div className="ml-6 border-l border-border pl-2">
          {choice.followUp!.map((fc, i) => (
            <DialogueChoiceNode key={i} choice={fc} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
