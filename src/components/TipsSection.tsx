import { useState } from "react";
import { tipCategories } from "@/data/tipsData";
import { ChevronDown, ChevronUp } from "lucide-react";

function TipCard({ tip }: { tip: { id: string; title: string; content: string; icon: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-3 hover:bg-secondary/50 transition-colors text-left"
      >
        <span className="text-xl shrink-0">{tip.icon}</span>
        <span className="flex-1 font-heading text-sm font-semibold text-foreground">{tip.title}</span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-3 pt-0 animate-in fade-in-0 slide-in-from-top-1">
          <p className="text-muted-foreground font-body text-sm leading-relaxed">{tip.content}</p>
        </div>
      )}
    </div>
  );
}

export function TipsSection({ searchTerm }: { searchTerm: string }) {
  const filtered = tipCategories
    .map((cat) => ({
      ...cat,
      tips: cat.tips.filter(
        (t) =>
          !searchTerm.trim() ||
          t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.content.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.tips.length > 0);

  if (filtered.length === 0) {
    return <p className="text-center text-muted-foreground py-8 font-body text-lg">No tips found matching "{searchTerm}"</p>;
  }

  return (
    <div>
      {filtered.map((cat) => (
        <div key={cat.id} className="mb-6">
          <h3 className="font-heading text-lg font-bold text-foreground mb-3">{cat.title}</h3>
          {cat.tips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      ))}
    </div>
  );
}
