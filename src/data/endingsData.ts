export interface EndingChoice {
  id: string;
  quest: string;
  description: string;
  goodChoice: string;
  badChoice: string;
}

export interface Ending {
  id: string;
  name: string;
  type: "good" | "neutral" | "bad";
  description: string;
  requirements: string;
  details: string;
}

export interface DLCEnding {
  id: string;
  name: string;
  dlc: string;
  type: "good" | "neutral" | "bad";
  description: string;
  howToGet: string;
}

export const ciriDecisions: EndingChoice[] = [
  {
    id: "snowball",
    quest: "Blood on the Battlefield",
    description: "After the Battle of Kaer Morhen, Ciri is upset about allies lost. You can cheer her up or be overprotective.",
    goodChoice: "🟢 Choose 'Think I know what might lift your spirits' → Have a snowball fight. Shows Ciri that Geralt sees her as an equal, not a child.",
    badChoice: "🔴 Choose 'Relax, you don't have to be good at everything' → Dismissive and patronizing. Ciri loses confidence.",
  },
  {
    id: "emhyr",
    quest: "Blood on the Battlefield",
    description: "Emhyr var Emreis wants to see Ciri. You can take her to him or refuse.",
    goodChoice: "🟢 Refuse to take Ciri to Emhyr OR take her but refuse the coin reward afterward. Shows Geralt isn't doing it for money.",
    badChoice: "🔴 Take Ciri to Emhyr AND accept the coin reward. Ciri feels like Geralt sold her out.",
  },
  {
    id: "lodge",
    quest: "Final Preparations",
    description: "Ciri wants to meet with the Lodge of Sorceresses alone. Geralt can insist on going with her or let her go solo.",
    goodChoice: "🟢 Let Ciri go alone ('Go for it' / 'You'll do fine on your own'). Shows trust in her independence.",
    badChoice: "🔴 Insist on going with her ('I'll go with you'). Makes Ciri feel Geralt doesn't trust her.",
  },
  {
    id: "skjall",
    quest: "Skjall's Grave (during Final Preparations)",
    description: "Ciri wants to visit Skjall's grave. You can go with her or tell her there's no time.",
    goodChoice: "🟢 Go to Skjall's grave with her ('Yeah, I'll go with you'). Shows emotional support for what Ciri cares about.",
    badChoice: "🔴 Tell her 'No time' or skip this quest entirely. Ciri feels unsupported.",
  },
  {
    id: "avallach-lab",
    quest: "Child of the Elder Blood",
    description: "Ciri discovers Avallac'h's secret lab. She's angry and wants to trash it.",
    goodChoice: "🟢 Let Ciri trash the lab ('Go for it' / let her vent). Lets her express anger healthily. She's in control.",
    badChoice: "🔴 Calm her down ('Calm down, don't let it get to you'). Suppresses her emotions. She feels controlled.",
  },
];

export const mainEndings: Ending[] = [
  {
    id: "ciri-witcher",
    name: "Ciri Becomes a Witcher",
    type: "good",
    description: "The best ending. Ciri survives the White Frost and returns to become a Witcher alongside Geralt. She gets her own Witcher sword.",
    requirements: "Make at least 3 out of 5 positive choices in the Ciri decisions above. Ciri must have enough confidence to survive.",
    details: "Geralt presents Ciri with a custom Witcher sword. She chooses the Witcher's path over politics. If you romanced someone, Geralt lives with them. The most satisfying ending for most players.",
  },
  {
    id: "ciri-empress",
    name: "Ciri Becomes Empress",
    type: "neutral",
    description: "Ciri survives but becomes Empress of Nilfgaard. She sacrifices her freedom for duty. Bittersweet ending.",
    requirements: "Make at least 3 positive Ciri choices AND take Ciri to Emhyr during Blood on the Battlefield. The key difference from the Witcher ending.",
    details: "Ciri becomes Empress Cirilla. She has power but loses her freedom. Geralt says goodbye at a crossroads. She's alive but unhappy with her fate. Many players consider this the 'realistic' ending.",
  },
  {
    id: "ciri-dies",
    name: "Ciri Dies (Bad Ending)",
    type: "bad",
    description: "Ciri doesn't survive the White Frost. Geralt retrieves her medallion from the last Crone and is surrounded by monsters. Implied Geralt dies too.",
    requirements: "Make 3 or more NEGATIVE choices in the Ciri decisions. Ciri doesn't have enough confidence/independence to survive.",
    details: "The most depressing ending. Geralt finds Ciri's Witcher medallion. He sits in a cabin surrounded by monsters as the screen fades to white. Neither romance option matters — Geralt is alone and broken. AVOID THIS by being supportive of Ciri throughout.",
  },
];

export const romanceEndings: { id: string; name: string; requirement: string; result: string; type: "good" | "neutral" | "bad" }[] = [
  {
    id: "yennefer",
    name: "Romance Yennefer",
    requirement: "During 'The Last Wish' in Skellige, tell Yennefer you love her. Do NOT also romance Triss.",
    result: "Geralt and Yennefer retire together (to Kovir or Corvo Bianco depending on ending). The 'canon' romance from the books.",
    type: "good",
  },
  {
    id: "triss",
    name: "Romance Triss",
    requirement: "During 'Now or Never' in Novigrad, tell Triss you love her and ask her to stay. Do NOT also romance Yennefer.",
    result: "Geralt and Triss retire together. Triss is the romance from the games. Sweet ending.",
    type: "good",
  },
  {
    id: "both-fail",
    name: "Romance Both (BAD IDEA)",
    requirement: "Tell BOTH Triss and Yennefer you love them.",
    result: "They find out. They tie Geralt to a bed as a 'surprise' and leave him there. Geralt ends up alone. Don't be greedy!",
    type: "bad",
  },
  {
    id: "no-romance",
    name: "Romance Neither",
    requirement: "Reject both Triss and Yennefer.",
    result: "Geralt retires alone (or with Ciri if she becomes a Witcher). Still a valid path.",
    type: "neutral",
  },
];

export const dlcEndings: DLCEnding[] = [
  {
    id: "hos-olgierd-saved",
    name: "Olgierd Saved",
    dlc: "Hearts of Stone",
    type: "good",
    description: "Geralt solves the riddle and defeats Gaunter O'Dimm, freeing Olgierd from his pact.",
    howToGet: "In the final confrontation, choose to help Olgierd. Complete the 'riddle of mirrors' puzzle in O'Dimm's dimension before time runs out. Follow the sound cues to find the correct path.",
  },
  {
    id: "hos-olgierd-dead",
    name: "Olgierd Dies",
    dlc: "Hearts of Stone",
    type: "bad",
    description: "Geralt lets Gaunter O'Dimm take Olgierd's soul. O'Dimm rewards Geralt but Olgierd is damned forever.",
    howToGet: "Simply don't intervene when O'Dimm claims Olgierd. Or fail the riddle puzzle. You get a reward from O'Dimm (choose the horn of plenty for infinite food).",
  },
  {
    id: "baw-best",
    name: "Everyone Survives",
    dlc: "Blood & Wine",
    type: "good",
    description: "Both Syanna and Anna Henrietta survive. The best ending. Requires very specific steps.",
    howToGet: "1) Go to the fairy-tale land (don't go to Unseen Elder). 2) In the fairy-tale land, find the ribbon item from the flint girl. 3) When Syanna attacks Anna Henrietta with the dagger, the ribbon saves Anna. 4) In jail, convince Syanna to forgive by selecting sympathetic dialogue options. Both sisters reconcile.",
  },
  {
    id: "baw-syanna-dies",
    name: "Syanna Dies",
    dlc: "Blood & Wine",
    type: "neutral",
    description: "Syanna successfully kills Anna Henrietta, or Detlaff kills Syanna. Tragic outcomes.",
    howToGet: "Go to fairy-tale land but DON'T get the ribbon, OR choose wrong dialogue with Syanna in jail. Without the ribbon, Syanna's assassination attempt succeeds (Anna dies) or Detlaff kills Syanna during the confrontation.",
  },
  {
    id: "baw-unseen-elder",
    name: "Unseen Elder Path",
    dlc: "Blood & Wine",
    type: "bad",
    description: "Going to the Unseen Elder instead of the fairy-tale land leads to Syanna's death and potentially Anna Henrietta's death.",
    howToGet: "Choose to find the Unseen Elder for information instead of going through the fairy-tale world. The Elder is the hardest boss — and this path locks you out of the best ending. Syanna dies, Anna Henrietta may also die.",
  },
];

export const skelligeRuler = {
  cerys: {
    name: "Cerys an Craite — Queen of Skellige",
    type: "good" as const,
    description: "Skellige prospers under wise Queen Cerys. She brings peace and stability. The best political outcome.",
    howToGet: "During 'King's Gambit', help Cerys solve the mystery of the berserker attack at the feast. Follow HER questline 'Possession' on the haunted isle.",
  },
  hjalmar: {
    name: "Hjalmar an Craite — King of Skellige",
    type: "neutral" as const,
    description: "Hjalmar is a warrior king. Skellige continues raiding and warfare. Not terrible, but not ideal.",
    howToGet: "During 'King's Gambit', help Hjalmar kill the Ice Giant on Undvik. Follow HIS questline. The more traditional choice.",
  },
  svanrige: {
    name: "Svanrige — King of Skellige",
    type: "bad" as const,
    description: "If you don't help either candidate, Svanrige Bran becomes king. Skellige declines under weak leadership.",
    howToGet: "Don't complete either Cerys's or Hjalmar's quests before advancing the main story. This is the 'default' bad outcome.",
  },
};
