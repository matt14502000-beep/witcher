import { useState, useMemo, useEffect, useCallback } from "react";
import { mapRegions, pinTypeStyles, type MapRegion, type MapPin } from "@/data/mapData";
import { MapPin as MapPinIcon, ChevronDown, ChevronUp, X, Filter, Eye, EyeOff, Search, CheckCircle2 } from "lucide-react";

const VISITED_KEY = "witcher3-map-visited";

function PinBadge({ type }: { type: MapPin["type"] }) {
  const style = pinTypeStyles[type];
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-heading font-semibold ${style.color} text-primary-foreground`}>
      {style.label}
    </span>
  );
}

function RegionCard({
  region,
  activeFilter,
  search,
  visited,
  onToggleVisited,
}: {
  region: MapRegion;
  activeFilter: string | null;
  search: string;
  visited: Record<string, boolean>;
  onToggleVisited: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(null);

  const filteredPins = useMemo(() => {
    let pins = region.pins;
    if (activeFilter) pins = pins.filter((p) => p.type === activeFilter);
    if (search.trim()) {
      const term = search.toLowerCase();
      pins = pins.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }
    return pins;
  }, [region.pins, activeFilter, search]);

  const visitedCount = region.pins.filter((p) => visited[p.id]).length;

  // auto-open when searching
  const shouldOpen = open || (search.trim().length > 0 && filteredPins.length > 0);

  return (
    <div className="border border-border rounded-lg overflow-hidden mb-4">
      {/* Region map image */}
      <div className="relative">
        <img
          src={region.image}
          alt={`${region.name} Map`}
          className="w-full h-48 object-cover"
          loading="lazy"
          width={960}
          height={540}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <button
          onClick={() => {
            setOpen(!open);
            setSelectedPin(null);
          }}
          className="absolute inset-0 w-full flex items-end justify-between p-4"
        >
          <div className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-primary drop-shadow-lg" />
            <div className="text-left">
              <h3 className="font-heading text-lg font-bold text-foreground drop-shadow-lg">
                {region.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body drop-shadow-lg">
                {region.level}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-heading drop-shadow-lg">
              {visitedCount}/{region.pins.length} visited
            </span>
            <div className="w-16 h-1.5 rounded-full bg-secondary/60 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{
                  width: `${region.pins.length > 0 ? (visitedCount / region.pins.length) * 100 : 0}%`,
                }}
              />
            </div>
            {shouldOpen ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground drop-shadow-lg" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground drop-shadow-lg" />
            )}
          </div>
        </button>
      </div>

      {shouldOpen && (
        <div className="p-4">
          <p className="text-muted-foreground font-body mb-4">
            {region.description}
          </p>

          {filteredPins.length === 0 ? (
            <p className="text-center text-muted-foreground py-4 font-body text-sm">
              No locations match current filters
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {filteredPins.map((pin) => (
                <button
                  key={pin.id}
                  onClick={() =>
                    setSelectedPin(
                      selectedPin?.id === pin.id ? null : pin
                    )
                  }
                  className={`flex items-center gap-2 p-2 rounded-lg text-left transition-colors ${
                    selectedPin?.id === pin.id
                      ? "bg-primary/20 border border-primary/40"
                      : "bg-secondary/30 hover:bg-secondary/60 border border-transparent"
                  }`}
                >
                  <div
                    className={`h-3 w-3 rounded-full shrink-0 ${pinTypeStyles[pin.type].color}`}
                  />
                  <span
                    className={`text-sm font-body truncate flex-1 ${
                      visited[pin.id]
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }`}
                  >
                    {pin.name}
                  </span>
                  {visited[pin.id] && (
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                  )}
                </button>
              ))}
            </div>
          )}

          {selectedPin && (
            <div className="bg-secondary/50 border border-border rounded-lg p-4 animate-in fade-in-0 slide-in-from-top-2">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-heading font-bold text-foreground">
                    {selectedPin.name}
                  </h4>
                  <PinBadge type={selectedPin.type} />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleVisited(selectedPin.id)}
                    className={`text-xs px-2 py-1 rounded-md font-heading transition-colors ${
                      visited[selectedPin.id]
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {visited[selectedPin.id] ? "✓ Visited" : "Mark Visited"}
                  </button>
                  <button
                    onClick={() => setSelectedPin(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-muted-foreground font-body text-sm mt-2">
                {selectedPin.description}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function WorldMap() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [showVisited, setShowVisited] = useState(true);
  const [visited, setVisited] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(VISITED_KEY) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(VISITED_KEY, JSON.stringify(visited));
  }, [visited]);

  const toggleVisited = useCallback((id: string) => {
    setVisited((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const allPins = useMemo(
    () => mapRegions.flatMap((r) => r.pins),
    []
  );
  const totalVisited = allPins.filter((p) => visited[p.id]).length;

  const pinTypeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const pin of allPins) {
      counts[pin.type] = (counts[pin.type] || 0) + 1;
    }
    return counts;
  }, [allPins]);

  return (
    <div>
      {/* Header stats */}
      <div className="flex items-center justify-between mb-6 p-4 rounded-lg bg-secondary/50 border border-border">
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground">
            The Continent
          </h3>
          <p className="text-sm text-muted-foreground font-body">
            {mapRegions.length} regions · {allPins.length} locations
          </p>
        </div>
        <div className="text-right">
          <span className="font-heading text-sm text-foreground font-bold">
            {totalVisited}/{allPins.length}
          </span>
          <p className="text-xs text-muted-foreground">explored</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search all locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm"
        />
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 scrollbar-hide">
        <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
        <button
          onClick={() => setActiveFilter(null)}
          className={`px-2.5 py-1 rounded-md text-xs font-heading font-semibold whitespace-nowrap transition-all ${
            !activeFilter
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {Object.entries(pinTypeStyles).map(([type, style]) => (
          <button
            key={type}
            onClick={() => setActiveFilter(activeFilter === type ? null : type)}
            className={`px-2.5 py-1 rounded-md text-xs font-heading font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeFilter === type
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className={`h-2 w-2 rounded-full ${style.color}`} />
            {style.label}
            <span className="opacity-60">({pinTypeCounts[type] || 0})</span>
          </button>
        ))}
      </div>

      {/* Visited toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-full h-2 rounded-full bg-secondary overflow-hidden mr-4">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${(totalVisited / allPins.length) * 100}%` }}
          />
        </div>
        <button
          onClick={() => setShowVisited((v) => !v)}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-heading whitespace-nowrap"
        >
          {showVisited ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
          {showVisited ? "Hide visited" : "Show visited"}
        </button>
      </div>

      {/* Region cards */}
      {mapRegions.map((region) => (
        <RegionCard
          key={region.id}
          region={region}
          activeFilter={activeFilter}
          search={search}
          visited={showVisited ? visited : Object.fromEntries(Object.entries(visited).filter(([, v]) => !v))}
          onToggleVisited={toggleVisited}
        />
      ))}
    </div>
  );
}
