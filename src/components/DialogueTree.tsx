import { useState } from "react";
import { ChevronDown, ChevronRight, TreePine } from "lucide-react";
import type { DialogueTree } from "@/data/dialogueData";
import { DialogueChoiceNode } from "./DialogueChoiceNode";

function DialogueTreeCard({ tree }: { tree: DialogueTree }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border hover:bg-secondary/80 transition-colors text-left"
      >
        <TreePine className="h-5 w-5 text-primary flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-heading font-semibold text-foreground">{tree.questName}</h4>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{tree.context}</p>
        </div>
        {open ? (
          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="mt-2 ml-2">
          <p className="text-sm text-muted-foreground mb-3 px-2 italic">{tree.context}</p>
          {tree.choices.map((choice, i) => (
            <DialogueChoiceNode key={i} choice={choice} />
          ))}
        </div>
      )}
    </div>
  );
}

interface DialogueSectionViewProps {
  section: { title: string; id: string; trees: DialogueTree[] };
}

export function DialogueSectionView({ section }: DialogueSectionViewProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 py-3 px-1 border-b border-border hover:border-primary/50 transition-colors group"
      >
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-primary" />
        ) : (
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {section.title}
        </h3>
        <span className="text-sm text-muted-foreground font-heading">
          {section.trees.length} dialogue{section.trees.length > 1 ? "s" : ""}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3">
          {section.trees.map((tree) => (
            <DialogueTreeCard key={tree.id} tree={tree} />
          ))}
        </div>
      )}
    </div>
  );
}
