import { useState, useMemo } from "react";
import { questTabs } from "@/data/questData";
import { dialogueSections } from "@/data/dialogueData";
import { monsters } from "@/data/bestiaryData";
import { mapRegions } from "@/data/mapData";
import { builds } from "@/data/buildsData";
import { useQuestProgress } from "@/hooks/useQuestProgress";
import { GuideHeader } from "@/components/GuideHeader";
import { DialogueSectionView } from "@/components/DialogueTree";
import { Bestiary } from "@/components/Bestiary";
import { TipsSection } from "@/components/TipsSection";
import { BuildGuide } from "@/components/BuildGuide";
import { EndingsGuide } from "@/components/EndingsGuide";
import { RoutePlanner } from "@/components/RoutePlanner";
import { GwentTracker } from "@/components/GwentTracker";
import { PlacesOverview } from "@/components/PlacesOverview";
import { CombinedQuests } from "@/components/CombinedQuests";
import { StoryTimeline } from "@/components/StoryTimeline";
import { gwentCards } from "@/data/gwentData";
import { routePhases } from "@/data/routeData";
import { timelineActs } from "@/data/timelineData";
import { Search } from "lucide-react";

const DIALOGUE_TAB_ID = "dialogue";
const BESTIARY_TAB_ID = "bestiary";
const TIPS_TAB_ID = "tips";
const BUILDS_TAB_ID = "builds";
const ENDINGS_TAB_ID = "endings";
const ROUTE_TAB_ID = "route";
const GWENT_TAB_ID = "gwent";
const PLACES_TAB_ID = "places";
const QUESTS_TAB_ID = "quests";
const TIMELINE_TAB_ID = "timeline";

const SPECIAL_TABS = [QUESTS_TAB_ID, TIMELINE_TAB_ID, DIALOGUE_TAB_ID, BESTIARY_TAB_ID, TIPS_TAB_ID, BUILDS_TAB_ID, ENDINGS_TAB_ID, ROUTE_TAB_ID, GWENT_TAB_ID, PLACES_TAB_ID];

const Index = () => {
  const [activeTab, setActiveTab] = useState(QUESTS_TAB_ID);
  const [search, setSearch] = useState("");
  const { completed, toggle, resetAll } = useQuestProgress();
  const baseQuestTabs = useMemo(
    () => questTabs.filter((t) => t.id === "main" || t.id === "side"),
    []
  );

  const allQuests = useMemo(
    () => baseQuestTabs.flatMap((t) => t.sections.flatMap((s) => s.quests)),
    [baseQuestTabs]
  );
  const totalDone = allQuests.filter((q) => completed[q.id]).length;

  const filteredDialogueSections = useMemo(() => {
    if (activeTab !== DIALOGUE_TAB_ID) return [];
    if (!search.trim()) return dialogueSections;
    const term = search.toLowerCase();
    return dialogueSections
      .map((section) => ({
        ...section,
        trees: section.trees.filter(
          (t) =>
            t.questName.toLowerCase().includes(term) ||
            t.context.toLowerCase().includes(term)
        ),
      }))
      .filter((s) => s.trees.length > 0);
  }, [activeTab, search]);

  const allTabs = [
    { id: QUESTS_TAB_ID, label: "📜 Quests", count: `${totalDone}/${allQuests.length}` },
    { id: TIMELINE_TAB_ID, label: "🕰️ Timeline", count: `${timelineActs.length} acts` },
    { id: BESTIARY_TAB_ID, label: "🐺 Bestiary", count: `${monsters.length} monsters` },
    { id: BUILDS_TAB_ID, label: "⚔️ Builds", count: `${builds.length} builds` },
    { id: ENDINGS_TAB_ID, label: "🏆 Endings", count: "All endings" },
    { id: DIALOGUE_TAB_ID, label: "💬 Dialogue", count: `${dialogueSections.reduce((a, s) => a + s.trees.length, 0)} trees` },
    { id: ROUTE_TAB_ID, label: "📋 Route", count: `${routePhases.reduce((a, p) => a + p.steps.length, 0)} steps` },
    { id: PLACES_TAB_ID, label: "📍 Places", count: `${mapRegions.length} regions` },
    { id: GWENT_TAB_ID, label: "🃏 Gwent", count: `${gwentCards.length} cards` },
    { id: TIPS_TAB_ID, label: "💡 Tips", count: "26 tips" },
  ];

  const searchPlaceholder: Record<string, string> = {
    [DIALOGUE_TAB_ID]: "Search dialogues...",
    [BESTIARY_TAB_ID]: "Search monsters...",
    [TIPS_TAB_ID]: "Search tips...",
    [BUILDS_TAB_ID]: "Search builds...",
    [ENDINGS_TAB_ID]: "Search endings...",
    [ROUTE_TAB_ID]: "Search route steps...",
    [PLACES_TAB_ID]: "Search places, descriptions, or steps...",
    [GWENT_TAB_ID]: "Search Gwent cards...",
    [QUESTS_TAB_ID]: "Search quests or regions...",
    [TIMELINE_TAB_ID]: "Search timeline acts or events...",
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-6 max-w-4xl mx-auto">
        <GuideHeader
          totalDone={totalDone}
          totalItems={allQuests.length}
          onReset={resetAll}
        />

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholder[activeTab] || "Search quests..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-lg"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {allTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSearch("");
              }}
              className={`px-5 py-2.5 rounded-lg font-heading text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
              <span className="ml-2 opacity-70">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-card rounded-xl p-4 sm:p-6 card-glow">
          {activeTab === QUESTS_TAB_ID ? (
            <CombinedQuests searchTerm={search} completed={completed} onToggle={toggle} />
          ) : activeTab === TIMELINE_TAB_ID ? (
            <StoryTimeline searchTerm={search} />
          ) : activeTab === BESTIARY_TAB_ID ? (
            <Bestiary searchTerm={search} />
          ) : activeTab === BUILDS_TAB_ID ? (
            <BuildGuide searchTerm={search} />
          ) : activeTab === ENDINGS_TAB_ID ? (
            <EndingsGuide searchTerm={search} />
          ) : activeTab === ROUTE_TAB_ID ? (
            <RoutePlanner searchTerm={search} />
          ) : activeTab === PLACES_TAB_ID ? (
            <PlacesOverview searchTerm={search} />
          ) : activeTab === GWENT_TAB_ID ? (
            <GwentTracker searchTerm={search} />
          ) : activeTab === TIPS_TAB_ID ? (
            <TipsSection searchTerm={search} />
          ) : activeTab === DIALOGUE_TAB_ID ? (
            <>
              <div className="flex flex-wrap gap-4 mb-6 px-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-success" />
                  <span className="text-muted-foreground font-heading">Best Outcome</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-warning" />
                  <span className="text-muted-foreground font-heading">Neutral</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <span className="text-muted-foreground font-heading">Bad Outcome</span>
                </div>
              </div>
              {filteredDialogueSections.length === 0 ? (
                <p className="text-center text-muted-foreground py-8 font-body text-lg">
                  No dialogues found matching "{search}"
                </p>
              ) : (
                filteredDialogueSections.map((section) => (
                  <DialogueSectionView key={section.id} section={section} />
                ))
              )}
            </>
          ) : null}
        </div>

        <footer className="text-center text-muted-foreground text-sm py-8 font-body">
          The Witcher 3: Wild Hunt © CD Projekt RED. This is a fan-made guide.
        </footer>
      </div>
    </div>
  );
};

export default Index;
