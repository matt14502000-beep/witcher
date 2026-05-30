export interface BuildSkill {
  name: string;
  points: number;
  description: string;
}

export interface Build {
  id: string;
  name: string;
  subtitle: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  gear: string;
  weapons: string;
  mutagens: string;
  mutation?: string;
  skills: BuildSkill[];
  playstyle: string;
  strengths: string[];
  weaknesses: string[];
}

export const builds: Build[] = [
  {
    id: "cat-fast-attack",
    name: "⚔️ Cat School — Fast Attack Assassin",
    subtitle: "Death by a thousand cuts",
    difficulty: "Beginner",
    description: "The most popular build. Stack fast attack damage with Feline gear for massive critical hit chains. Easy to learn, devastating at all levels.",
    gear: "Grandmaster Feline Armor (full set). Light armor bonuses stack with fast attack skills. Looks cool too.",
    weapons: "Feline Steel & Silver Swords (Grandmaster). Aerondight (B&W) replaces silver sword endgame.",
    mutagens: "3x Greater Red Mutagens in all slots. Pair with Combat skills for +60% attack power.",
    mutation: "Euphoria (Blood & Wine). With 3+ decoctions active, you get +100% attack power and sign intensity.",
    skills: [
      { name: "Muscle Memory", points: 3, description: "Fast attack damage +25%. Core skill — max first." },
      { name: "Precise Blows", points: 3, description: "Fast attack critical hit chance +10% and damage +75%." },
      { name: "Whirl", points: 3, description: "Spinning attack hits everything around you. Crowd control." },
      { name: "Crippling Strikes", points: 3, description: "Fast attacks apply bleeding. Stacks with other DoTs." },
      { name: "Resolve", points: 3, description: "Adrenaline points don't drop when hit. Keep your combo going." },
      { name: "Undying", points: 3, description: "When HP hits 0, spend adrenaline to survive. Safety net." },
      { name: "Cat School Techniques", points: 1, description: "MANDATORY. Light armor gives crit damage + attack power bonus." },
      { name: "Acquired Tolerance", points: 3, description: "More toxicity = more decoctions active at once." },
      { name: "Heightened Tolerance", points: 3, description: "Stack 3+ decoctions without overdosing." },
      { name: "Synergy", points: 3, description: "Mutagen bonuses increased. More red mutagen = more power." },
    ],
    playstyle: "Stay mobile, dodge constantly (don't roll — sidestep). Chain fast attacks in 3-hit combos then dodge. Use Whirl against groups. Keep 3 decoctions running for Euphoria bonus. Apply the correct oil before every fight.",
    strengths: ["Highest DPS in the game", "Easy to learn", "Great against groups with Whirl", "Works from level 1 to 100"],
    weaknesses: ["Squishy — dies fast if you stop dodging", "Relies on oils/decoctions for max damage", "Boring if you want sign variety"],
  },
  {
    id: "griffin-sign-master",
    name: "🔮 Griffin School — Sign Master",
    subtitle: "Magic over muscle",
    difficulty: "Intermediate",
    description: "Focus on Witcher Signs for damage and control. Griffin gear boosts sign intensity. Igni melts everything, Yrden controls the battlefield, Aard stuns crowds.",
    gear: "Grandmaster Griffin Armor (full set). Medium armor with sign intensity bonuses per piece. Set bonus: casting a sign casts a second one free.",
    weapons: "Griffin Swords (sign intensity bonus). Any sword with sign intensity enchant works.",
    mutagens: "3x Greater Blue Mutagens in all slots. Pair with Sign skills for +60% sign intensity.",
    mutation: "Piercing Cold (Blood & Wine). Aard can freeze and instant-kill enemies. Or Magic Sensibilities for more sign damage.",
    skills: [
      { name: "Melt Armor", points: 3, description: "Igni permanently weakens enemy armor by 75%. Core skill." },
      { name: "Firestream", points: 3, description: "Channel Igni as a flamethrower. Melts everything." },
      { name: "Sustained Glyphs", points: 3, description: "Yrden lasts longer and slows more. Great for specters." },
      { name: "Magic Trap", points: 3, description: "Alternate Yrden damages and slows everything in area." },
      { name: "Far-Reaching Aard", points: 3, description: "Bigger Aard cone = more enemies knocked down." },
      { name: "Aard Sweep", points: 3, description: "360° Aard. Knocks everyone around you. Crowd control king." },
      { name: "Active Shield", points: 3, description: "Alt Quen heals you when absorbing damage. Free healing." },
      { name: "Exploding Shield", points: 3, description: "Quen knockback when it breaks. Offensive defense." },
      { name: "Griffin School Techniques", points: 1, description: "MANDATORY. Medium armor gives stamina regen and sign intensity." },
      { name: "Rage Management", points: 1, description: "Use adrenaline to cast signs when out of stamina. Never stop casting." },
    ],
    playstyle: "Open with Igni to set enemies on fire. Use Aard to knock groups down for instant kills. Place Yrden for specters and fast enemies. Active Shield Quen for healing. You're a battlemage — cast signs between sword combos.",
    strengths: ["Very versatile — a sign for every situation", "Great crowd control", "Self-healing with Active Shield", "Griffin set bonus gives free signs"],
    weaknesses: ["Lower raw DPS than Cat build", "Stamina management is crucial", "Weaker against sign-resistant bosses"],
  },
  {
    id: "bear-tank",
    name: "🛡️ Bear School — Unkillable Tank",
    subtitle: "Can't kill what won't die",
    difficulty: "Beginner",
    description: "Maximum survivability with Ursine heavy armor. Stack adrenaline, use Quen constantly, and outlast everything. Great for Death March difficulty.",
    gear: "Grandmaster Ursine Armor (full set). Heavy armor with massive damage resistance. Set bonus: Quen heals you when attacked.",
    weapons: "Ursine Swords (adrenaline generation). Heavy, slow but devastating hits.",
    mutagens: "3x Greater Green Mutagens. Pair with Alchemy/General skills for +1000 vitality.",
    mutation: "Second Life (Blood & Wine). Resurrect with full HP once per fight. Or Euphoria for hybrid damage.",
    skills: [
      { name: "Strength Training", points: 3, description: "Strong attack damage +25%. Your heavy hits demolish." },
      { name: "Crushing Blows", points: 3, description: "Strong attack crit chance +10% and damage +75%." },
      { name: "Rend", points: 3, description: "Charged heavy attack that ignores armor. Boss killer." },
      { name: "Sunder Armor", points: 3, description: "Strong attacks reduce enemy damage resistance. Stacks." },
      { name: "Resolve", points: 3, description: "Adrenaline doesn't drop when hit. Crucial for tank build." },
      { name: "Razor Focus", points: 3, description: "Start combat with adrenaline. Sword hits give more adrenaline." },
      { name: "Bear School Techniques", points: 1, description: "MANDATORY. Heavy armor gives damage resistance + adrenaline bonus." },
      { name: "Protective Coating", points: 3, description: "When correct oil is applied, take 25% less damage from that monster type." },
      { name: "Tissue Transmutation", points: 3, description: "Decoctions increase max vitality. Tank harder." },
      { name: "Acquired Tolerance", points: 3, description: "More toxicity headroom for extra decoctions." },
    ],
    playstyle: "Stand your ground. Keep Quen up at all times — the Ursine set bonus heals you through Quen. Use strong attacks (2 swings then dodge). Rend for massive single-target damage. You're slow but nearly unkillable. Stack adrenaline for Rend crits.",
    strengths: ["Near-immortal on Death March", "Simple playstyle", "Great for bosses — outlast them", "Ursine Quen healing is broken"],
    weaknesses: ["Slow movement and attacks", "Weak against large groups (no AoE)", "Boring for some players", "Heavy dodge reliance despite armor"],
  },
  {
    id: "alchemy-god",
    name: "🧪 Manticore School — Alchemy God",
    subtitle: "Potions, oils, and poisons",
    difficulty: "Advanced",
    description: "The strongest endgame build. Stack toxicity with 4+ decoctions, use Euphoria mutation for insane damage. Requires extensive alchemy recipe collection.",
    gear: "Grandmaster Manticore Armor (Blood & Wine). Set bonus: all alchemy items are always at maximum quality regardless of recipe level. Medium armor.",
    weapons: "Any Witcher swords with Severance runeword. Aerondight for silver (stacking damage).",
    mutagens: "3x Greater Green Mutagens paired with Alchemy skills for max vitality AND toxicity.",
    mutation: "Euphoria (MANDATORY). Every point of toxicity gives +0.75% attack power AND sign intensity. With 4 decoctions = +200% damage.",
    skills: [
      { name: "Acquired Tolerance", points: 3, description: "Increases max toxicity by number of known formulas. CORE SKILL — learn every recipe." },
      { name: "Heightened Tolerance", points: 3, description: "No toxicity damage until you exceed safe threshold. Run 4+ decoctions." },
      { name: "Synergy", points: 3, description: "Mutagen slot bonuses increased by 50%. Massive stat boost." },
      { name: "Protective Coating", points: 3, description: "25% damage reduction when correct oil applied. Basically permanent." },
      { name: "Fixative", points: 3, description: "Oils don't lose charges. Apply once, lasts forever." },
      { name: "Killing Spree", points: 3, description: "Each kill in a fight increases crit chance. Snowball effect." },
      { name: "Muscle Memory", points: 3, description: "Fast attack damage. Pairs with Euphoria for absurd DPS." },
      { name: "Precise Blows", points: 3, description: "Crit chance + crit damage on fast attacks." },
      { name: "Cat School Techniques", points: 1, description: "Manticore counts as light armor. Cat techniques apply." },
      { name: "Hunter Instinct", points: 3, description: "When adrenaline is full, critical hit damage +100% from Alchemy tree." },
    ],
    playstyle: "Before every fight: apply oil, drink decoctions until near max toxicity. Euphoria converts all that toxicity into raw power. Use fast attacks. You'll be hitting for 5,000+ damage per swing endgame. Drink Thunderbolt + Tawny Owl for even more. This build REQUIRES collecting every alchemy formula in the game for max Acquired Tolerance benefit.",
    strengths: ["Highest possible damage in the game", "Nearly unkillable with proper decoctions", "Oils provide 25% damage reduction", "Scales infinitely with recipe collection"],
    weaknesses: ["Requires finding hundreds of alchemy recipes", "Complex resource management", "Not great until level 30+", "Need Blood & Wine for Euphoria and Manticore gear"],
  },
  {
    id: "hybrid-combat-signs",
    name: "⚡ Wolf School — Combat-Sign Hybrid",
    subtitle: "Jack of all trades, master of both",
    difficulty: "Intermediate",
    description: "Balanced build using Wolf School gear. Mix fast attacks with sign casting for versatile combat. Great for players who want options in every fight.",
    gear: "Grandmaster Wolven Armor (full set). Medium armor balancing attack power and sign intensity. Set bonus: increases attack power and sign intensity based on adrenaline.",
    weapons: "Wolf School Swords. Balanced stats. Enchant with Severance for extended Whirl/Rend range.",
    mutagens: "Mix of Greater Red and Blue Mutagens. Place reds with combat skills, blues with sign skills.",
    mutation: "Euphoria or Piercing Cold. Euphoria if you use decoctions, Piercing Cold for Aard freeze kills.",
    skills: [
      { name: "Muscle Memory", points: 3, description: "Fast attack damage. Your bread and butter." },
      { name: "Precise Blows", points: 3, description: "Crit chance and damage on fast attacks." },
      { name: "Whirl", points: 3, description: "Spinning fast attack for groups." },
      { name: "Melt Armor", points: 3, description: "Igni weakens armor. Open every fight with this." },
      { name: "Firestream", points: 3, description: "Channeled Igni for sustained damage." },
      { name: "Active Shield", points: 3, description: "Alt Quen for healing. Your survival tool." },
      { name: "Resolve", points: 3, description: "Keep adrenaline when hit." },
      { name: "Razor Focus", points: 3, description: "Start with adrenaline, generate more per hit." },
      { name: "Acquired Tolerance", points: 3, description: "More decoction slots for Euphoria." },
      { name: "Cat School Techniques", points: 1, description: "Wolf gear counts as medium but Cat techniques give better crit bonuses." },
    ],
    playstyle: "Open fights with Igni (Melt Armor), then fast attack combo. Use Aard on groups, Yrden on fast enemies, Active Shield Quen when hurt. Switch between sword and signs fluidly. Adrenaline powers everything — don't get hit to maintain it.",
    strengths: ["Most versatile build", "Good at everything", "Wolf gear looks amazing", "Fun varied combat"],
    weaknesses: ["Not the best at any one thing", "Requires more skill to play optimally", "Mutagen placement is awkward with mixed colors"],
  },
];
