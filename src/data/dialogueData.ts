export type DialogueOutcome = "good" | "bad" | "neutral";

export interface DialogueChoice {
  text: string;
  outcome: DialogueOutcome;
  result: string;
  followUp?: DialogueChoice[];
}

export interface DialogueTree {
  id: string;
  questName: string;
  context: string;
  choices: DialogueChoice[];
}

export interface DialogueSection {
  title: string;
  id: string;
  trees: DialogueTree[];
}

export interface DialogueNodeTemplateOption {
  choice_id: string;
  label: string;
  leads_to: string[];
}

export interface DialogueNodeTemplate {
  id: string;
  label: string;
  type: "decision" | "outcome";
  options?: DialogueNodeTemplateOption[];
  effects?: string[];
}

export const dialogueNodeTemplates: DialogueNodeTemplate[] = [
  {
    id: "dialogue_branch",
    label: "Dialogue branch",
    type: "decision",
    options: [
      { choice_id: "aggressive", label: "Aggressive approach", leads_to: ["aggressive_outcome"] },
      { choice_id: "deceptive", label: "Deception", leads_to: ["deception_outcome"] },
      { choice_id: "cooperative", label: "Cooperative approach", leads_to: ["cooperative_outcome"] },
    ],
  },
  {
    id: "investigation",
    label: "Investigate clues",
    type: "decision",
    options: [
      { choice_id: "suspect_a", label: "Accuse suspect A", leads_to: ["suspect_a_outcome"] },
      { choice_id: "suspect_b", label: "Accuse suspect B", leads_to: ["suspect_b_outcome"] },
    ],
  },
  {
    id: "locked_outcome",
    label: "Outcome based on previous flags",
    type: "outcome",
    effects: ["ENDING_A", "ENDING_LOCKED"],
  },
];

export const dialogueSections: DialogueSection[] = [
  {
    title: "Main Story — Critical Choices",
    id: "mainDialogue",
    trees: [
      {
        id: "dt1",
        questName: "The Whispering Hillock / Ladies of the Wood",
        context: "Meet the spirit, then decide: kill or free it. This choice determines children and Downwarren outcomes.",
        choices: [
          {
            text: "Kill the spirit",
            outcome: "neutral",
            result: "Children die, Downwarren survives. Flags: SPIRIT_KILLED, CHILDREN_DEAD, DOWNWARREN_SAFE.",
            followUp: [
              { text: "Follow through the Baron line", outcome: "neutral", result: "This path usually reduces immediate village destruction but loses the children." },
            ],
          },
          {
            text: "Free the spirit",
            outcome: "neutral",
            result: "Children saved, Downwarren destroyed. Flags: SPIRIT_FREED, CHILDREN_SAVED, DOWNWARREN_DESTROYED.",
            followUp: [
              { text: "Follow through the Baron line", outcome: "neutral", result: "This path saves the children but causes severe fallout in Downwarren." },
            ],
          },
        ],
      },
      {
        id: "dt2",
        questName: "Now or Never — Triss Romance Lock",
        context: "Escort mages, then choose at the docks whether to confess to Triss.",
        choices: [
          {
            text: "Tell Triss you love her",
            outcome: "good",
            result: "Triss stays. Flags: TRISS_ROMANCE, ROMANCE_ACTIVE.",
            followUp: [
              { text: "Continue Triss route", outcome: "good", result: "Romance path remains open for Triss ending outcomes." },
            ],
          },
          {
            text: "Say nothing",
            outcome: "neutral",
            result: "Triss leaves. Flags: TRISS_NO_ROMANCE, ROMANCE_LOCKED.",
          },
        ],
      },
      {
        id: "dt3",
        questName: "The Last Wish — Yennefer Romance Lock",
        context: "After the djinn binding is broken, Yen asks whether what's between you is real. This is the Yennefer romance lock-in.",
        choices: [
          {
            text: "Tell her your feelings are unchanged",
            outcome: "good",
            result: "Locks in the Yennefer romance. The wish is gone, the bond is not. Yen ending: you retire together — the closest to the books' canon. If you also confessed to Triss, both dump you.",
            followUp: [
              { text: "Romance Yennefer only — never confess to Triss", outcome: "good", result: "Yennefer ending: a peaceful retirement together at Corvo Bianco." },
              { text: "You also confessed to Triss", outcome: "bad", result: "Both women walk out on Geralt. He spends the epilogue alone, visited only by Dandelion." },
            ],
          },
          {
            text: "Tell her it's over",
            outcome: "neutral",
            result: "Yennefer is hurt but accepts it. Her romance route is permanently closed. Triss is still possible if you chose her path.",
          },
        ],
      },
      {
        id: "dt4",
        questName: "Blood on the Battlefield — Ciri's Choice #1",
        context: "After Kaer Morhen falls and Vesemir is dead, Ciri spirals. How you handle her grief is one of the five hidden tallies that decide her fate.",
        choices: [
          {
            text: "Suggest blowing off steam — the snowball fight",
            outcome: "good",
            result: "Positive tally for the good ending. Letting her find a moment of joy in the grief counts toward Ciri Lives.",
          },
          {
            text: "Try to settle her down or dismiss her anger",
            outcome: "bad",
            result: "Negative tally. Brushing aside her grief makes her feel unheard and tips her toward fatalism.",
          },
          {
            text: "Go drinking with the witchers instead",
            outcome: "neutral",
            result: "Doesn't score either way. The snowball-fight option is the clearly correct choice.",
          },
        ],
      },
      {
        id: "dt5",
        questName: "Final Preparations — Ciri's Choice #2",
        context: "Ciri wants to honor Skjall, the Skellige boy who paid for helping her. You can go with her to Hindarsfjall or push to skip it.",
        choices: [
          {
            text: "Agree to visit Skjall's grave together",
            outcome: "good",
            result: "Positive tally. Shows Ciri you respect the people who sacrificed for her.",
          },
          {
            text: "Refuse — say there's no time",
            outcome: "bad",
            result: "Negative tally. Ciri reads it as you not caring about what others gave up for her.",
          },
        ],
      },
      {
        id: "dt6",
        questName: "Final Preparations — Ciri's Choice #3 (The Lodge)",
        context: "The Lodge of Sorceresses summons Ciri. You can let her face them alone or insist on going in with her.",
        choices: [
          {
            text: "Tell her to go in alone",
            outcome: "good",
            result: "Positive tally. Trusting Ciri to stand on her own in front of powerful people counts toward Ciri Lives.",
          },
          {
            text: "Insist on going in with her",
            outcome: "bad",
            result: "Negative tally. She reads it as you not believing she can handle herself.",
          },
        ],
      },
      {
        id: "dt7",
        questName: "Final Preparations — Ciri's Choice #4 (Emhyr's Court)",
        context: "Emperor Emhyr offers Geralt a coin purse for bringing Ciri to him. Ciri is in the room.",
        choices: [
          {
            text: "Refuse the emperor's payment",
            outcome: "good",
            result: "Positive tally. Tells Ciri this was never about money — it was about her.",
          },
          {
            text: "Take the coin",
            outcome: "bad",
            result: "Negative tally. Ciri feels she was treated like a delivery, not a daughter.",
          },
          {
            text: "Skip the audience with Emhyr entirely",
            outcome: "neutral",
            result: "Not visiting at all skips this tally outright. You lose some lore but no points either way.",
          },
        ],
      },
      {
        id: "dt8",
        questName: "Final Preparations — Ciri's Choice #5 (Avallac'h's Lab)",
        context: "Ciri finds notes suggesting Avallac'h has been studying her and wants to wreck the lab.",
        choices: [
          {
            text: "Step aside and let her tear the place apart",
            outcome: "good",
            result: "Positive tally. Giving her room to vent her anger counts toward Ciri Lives.",
          },
          {
            text: "Try to talk her down",
            outcome: "bad",
            result: "Negative tally. Suppressing her reaction reinforces the feeling that she has no control over her own life.",
          },
        ],
      },
    ],
  },
  {
    title: "Ending Combinations",
    id: "endingDialogue",
    trees: [
      {
        id: "dt9",
        questName: "Ending Calculator — The Five Ciri Tallies",
        context: "The game silently tracks five binary calls about how you treat Ciri: the snowball fight, Skjall's grave, the Lodge meeting, Emhyr's coin, and Avallac'h's lab. Three or more positive results = good ending. Two or fewer = bad ending.",
        choices: [
          {
            text: "3+ positive choices — Good ending (Ciri lives)",
            outcome: "good",
            result: "Ciri returns from the White Frost. If Nilfgaard wins the war and you visited Emhyr, she becomes Empress. Otherwise she takes up the Path as a Witcher.",
            followUp: [
              { text: "Ciri the Witcher", outcome: "good", result: "Geralt gives her a silver sword and she rides off on the Path. Widely considered the most emotionally satisfying outcome. Requires 3+ positive choices and either Nilfgaard losing or skipping the Emhyr visit." },
              { text: "Ciri the Empress", outcome: "neutral", result: "Ciri takes the Nilfgaardian throne. Bittersweet — alive, but bound to rule. Requires 3+ positive choices, Nilfgaard winning, and you having visited Emhyr." },
            ],
          },
          {
            text: "2 or fewer positive choices — Bad ending (Ciri dies)",
            outcome: "bad",
            result: "Ciri does not return from the White Frost. Geralt recovers her medallion from a monster-haunted swamp and is last seen alone in a cabin, surrounded by drowners. Fade to white.",
          },
        ],
      },
      {
        id: "dt10",
        questName: "Reason of State — Who Rules the North?",
        context: "Dijkstra recruits you to help assassinate King Radovid. The outcome decides the political map of the North.",
        choices: [
          {
            text: "Help kill Radovid — then stop Dijkstra from murdering Roche",
            outcome: "good",
            result: "Radovid dies. You step in when Dijkstra turns on Roche and Ves. Temeria becomes a Nilfgaardian vassal with self-rule, and the mages are safe. The most humane political outcome.",
            followUp: [
              { text: "Save Roche and Ves", outcome: "good", result: "Roche and Ves live. Temeria keeps autonomy, mages stay free — the best result for the most people." },
              { text: "Walk away and let Dijkstra finish them", outcome: "neutral", result: "Dijkstra rules the North alone — stable but ruthless. Roche and Ves die. Mages are mostly safe." },
            ],
          },
          {
            text: "Refuse to help kill Radovid",
            outcome: "bad",
            result: "Radovid lives, doubles down on persecution of mages and nonhumans, and the witch hunts intensify. Nilfgaard may still win the war regardless.",
          },
          {
            text: "Never start the quest",
            outcome: "neutral",
            result: "Same effective result as refusing: Radovid lives. The quest is easy to miss — visit Dijkstra after Count Reuven's Treasure to trigger it.",
          },
        ],
      },
    ],
  },
  {
    title: "Hearts of Stone — Key Dialogues",
    id: "hosDialogue",
    trees: [
      {
        id: "dt11",
        questName: "Whatsoever a Man Soweth — Olgierd's Fate",
        context: "O'Dimm's bargain reaches its final choice: side with O'Dimm or save Olgierd.",
        choices: [
          {
            text: "Let O'Dimm take Olgierd's soul",
            outcome: "neutral",
            result: "O'Dimm wins. Flags: ODIMM_VICTORY, OLGIERD_DEAD.",
            followUp: [
              { text: "Accept outcome", outcome: "neutral", result: "Olgierd is dead and O'Dimm's victory path is locked." },
            ],
          },
          {
            text: "Challenge O'Dimm and save Olgierd",
            outcome: "good",
            result: "Olgierd lives. Flags: OLGIERD_SAVED, ODIMM_DEFEATED.",
            followUp: [
              { text: "Complete the challenge", outcome: "good", result: "O'Dimm is defeated and Olgierd survives." },
            ],
          },
        ],
      },
      {
        id: "dt12",
        questName: "Dead Man's Party — Shani Romance",
        context: "Possessed by Vlodimir's spirit, you spend the night at a country wedding with Shani. Afterwards, you can quietly pursue a romance.",
        choices: [
          {
            text: "Give Shani the rowanberry token and stay sincere",
            outcome: "good",
            result: "Triggers the romance scene with Shani. Standalone and consequence-free — does not affect Triss or Yennefer.",
          },
          {
            text: "Pick another gift or stay friendly",
            outcome: "neutral",
            result: "The romance scene doesn't fire and Shani remains a friend. No downside.",
          },
        ],
      },
    ],
  },
  {
    title: "Blood and Wine — Key Dialogues",
    id: "btwDialogue",
    trees: [
      {
        id: "dt13",
        questName: "The Night of Long Fangs — The Path Split",
        context: "Beauclair is under vampire attack. You choose how to find Dettlaff: appeal to the ancient Unseen Elder, or follow Orianna's lead to track Syanna.",
        choices: [
          {
            text: "Go straight to the Unseen Elder",
            outcome: "neutral",
            result: "The shorter route. You meet one of the most powerful beings in the setting and gain a fast way to call off Dettlaff, at the cost of skipping a chunk of story.",
            followUp: [
              { text: "Follow the Elder's terms exactly", outcome: "good", result: "He calls Dettlaff off. Efficient, but Syanna's full arc passes you by." },
              { text: "Mouth off to the Elder", outcome: "bad", result: "He kills Geralt on the spot — one of the game's rare instant-death moments." },
            ],
          },
          {
            text: "Investigate via Orianna and track Syanna",
            outcome: "good",
            result: "The longer, more story-rich path. You enter the Land of a Thousand Fables, learn Syanna's real motive, and unlock more options at the finale.",
          },
        ],
      },
      {
        id: "dt14",
        questName: "Blood and Wine Finale — Who Lives?",
        context: "At the climax, Syanna confronts Duchess Anna Henrietta. Whether either sister survives depends on whether you held onto the ribbon and how you handle the room.",
        choices: [
          {
            text: "Keep the fairy-tale ribbon and broker peace between the sisters",
            outcome: "good",
            result: "Best ending: both sisters survive and partly reconcile. Syanna is jailed but alive, Dettlaff dies, and Geralt walks away a hero.",
            followUp: [
              { text: "Use the ribbon and choose the reconciliation lines", outcome: "good", result: "The sisters embrace. The cleanest possible Blood & Wine outcome." },
            ],
          },
          {
            text: "Skip the ribbon or pick the wrong lines",
            outcome: "bad",
            result: "Syanna stabs Anna Henrietta with a hidden blade. Both die, and Geralt is briefly thrown in prison. The full-tragedy ending.",
          },
          {
            text: "Kill Dettlaff before the sisters meet",
            outcome: "neutral",
            result: "Dettlaff dies. Syanna's survival still hinges on the ribbon you bring back from the fairy-tale world — never sell it.",
          },
        ],
      },
      {
        id: "dt15",
        questName: "Be It Ever So Humble — Who Visits Corvo Bianco?",
        context: "The final scene of the game. Who shows up at the vineyard is decided by every romance and main-story choice you made.",
        choices: [
          {
            text: "Romanced Triss only",
            outcome: "good",
            result: "Triss moves into Corvo Bianco. Warm, settled, happy ending — she helps run the estate.",
          },
          {
            text: "Romanced Yennefer only",
            outcome: "good",
            result: "Yen moves in, grumbles about rural life, and clearly loves it. Closest to the books' canon.",
          },
          {
            text: "Romanced both or neither",
            outcome: "neutral",
            result: "Both: nobody comes and Dandelion ribs you about it. Neither: Ciri visits if she became a Witcher; otherwise Dandelion.",
          },
          {
            text: "Ciri became a Witcher with no romance locked in",
            outcome: "good",
            result: "Ciri rides up between contracts and stops by. Many players consider this the most emotionally rewarding visit.",
          },
        ],
      },
    ],
  },
  {
    title: "Additional Main Quest Choices",
    id: "extraMainDialogue",
    trees: [
      {
        id: "dt20",
        questName: "Imperial Audience — Meeting Emhyr",
        context: "Geralt is brought before Emperor Emhyr var Emreis in Vizima. Tone only — no lasting consequence.",
        choices: [
          {
            text: "Stay respectful and businesslike",
            outcome: "neutral",
            result: "Smooth audience. You learn Ciri is alive and being hunted, and accept the contract to find her.",
          },
          {
            text: "Be sarcastic or curt with the emperor",
            outcome: "neutral",
            result: "Same result either way — Emhyr is unfazed. Pick the tone that fits your Geralt.",
          },
        ],
      },
      {
        id: "dt21",
        questName: "Hunting a Witch — Keira Metz",
        context: "Keira helps you investigate Ciri's trail in Velen. Some of her dialogue gates an optional romance later in 'An Invitation from Keira Metz'.",
        choices: [
          {
            text: "Flirt — accept her invitation to her cottage",
            outcome: "neutral",
            result: "Opens the door to a one-night romance scene in her follow-up quest. Does not affect Triss or Yennefer.",
          },
          {
            text: "Keep it strictly business",
            outcome: "neutral",
            result: "Keira stays an ally without the romance. No downside — you can still recruit her to Kaer Morhen later.",
          },
        ],
      },
      {
        id: "dt22",
        questName: "Count Reuven's Treasure — Whoreson's Legs",
        context: "Dijkstra interrogates Whoreson Junior to find a lead on Ciri. You can step in or let Dijkstra handle it his way.",
        choices: [
          {
            text: "Stay out of it and let Dijkstra work",
            outcome: "good",
            result: "Dijkstra gets what he needs and remains a strong political ally. Keeps the Reason of State quest line open.",
          },
          {
            text: "Intervene to stop Dijkstra",
            outcome: "bad",
            result: "Dijkstra is furious. You damage the relationship and may lose access to a key ally later on.",
          },
        ],
      },
      {
        id: "dt23",
        questName: "Get Junior — Whoreson's Fate",
        context: "After tearing through his operation, you finally corner Whoreson Junior. He's defeated and unarmed.",
        choices: [
          {
            text: "Kill Whoreson",
            outcome: "neutral",
            result: "He dies on the spot. Cathartic, given what he's done — no lasting story impact.",
          },
          {
            text: "Spare him",
            outcome: "neutral",
            result: "He's left alive but broken. He shows up briefly later, miserable and harmless. Pick whichever feels right.",
          },
        ],
      },
      {
        id: "dt24",
        questName: "Battle of Kaer Morhen — Allies Recap",
        context: "The defense of Kaer Morhen is much easier with allies recruited beforehand. Vesemir dies no matter what.",
        choices: [
          {
            text: "Recruit Keira, Letho, Roche, Ves, Hjalmar, Cerys, Ermion, the Lodge",
            outcome: "good",
            result: "Maximum allies. The siege is far less punishing and more named characters survive. Each ally is locked in by an earlier side quest.",
          },
          {
            text: "Skip ally recruitment and tackle it solo",
            outcome: "bad",
            result: "Brutal siege. Higher chance you lose witchers and named allies in the fight. Vesemir still dies regardless.",
          },
        ],
      },
      {
        id: "dt25",
        questName: "Open Sesame! — The Heist Crew",
        context: "Olgierd's heist on Borsodi's auction house needs a specialist. You choose who joins you and Quinto.",
        choices: [
          {
            text: "Bring the Safecracker (Casimir)",
            outcome: "good",
            result: "Cleaner heist with a quieter vault breach. Generally the smoother run.",
          },
          {
            text: "Bring the Demolitionist (Eveline)",
            outcome: "neutral",
            result: "Louder, more chaotic vault entry. Still works — just a messier path to the same goal.",
          },
        ],
      },
      {
        id: "dt29",
        questName: "Bloody Baron — First Audience Tone",
        context: "Meet the Baron, then choose your tone. This affects how cooperative he is during follow-up steps.",
        choices: [
          {
            text: "Be respectful",
            outcome: "good",
            result: "Baron becomes cooperative. Flags: BARON_FRIENDLY, BARON_HELP_EASIER.",
            followUp: [
              { text: "Continue the investigation with a calm tone", outcome: "good", result: "You keep dialogue smoother and reduce friction in the Baron's chain." },
            ],
          },
          {
            text: "Be hostile",
            outcome: "neutral",
            result: "Baron becomes defensive. Flags: BARON_HOSTILE, BARON_HELP_HARDER.",
            followUp: [
              { text: "Push through the chain anyway", outcome: "neutral", result: "You can still progress, but conversations tend to be rougher and less cooperative." },
            ],
          },
        ],
      },
      {
        id: "dt30",
        questName: "Family Matters — Botchling Choice",
        context: "Investigate the Baron's home, then decide how to deal with the Botchling.",
        choices: [
          {
            text: "Kill the Botchling",
            outcome: "neutral",
            result: "Harder ritual, fewer clues. Flags: BOTCHLING_KILLED, PEL_RITUAL_HARD, LESS_INFO.",
            followUp: [
              { text: "Continue with the Pellar route", outcome: "neutral", result: "Progress still works, but with a rougher investigation path." },
            ],
          },
          {
            text: "Lift the curse (Lubberkin)",
            outcome: "good",
            result: "Lubberkin reveals more clues. Flags: BOTCHLING_SAVED, PEL_RITUAL_EASY, MORE_INFO.",
            followUp: [
              { text: "Follow Lubberkin's clues", outcome: "good", result: "Investigation flow is cleaner and more informative." },
            ],
          },
        ],
      },
      {
        id: "dt31",
        questName: "The Whispering Hillock — Spirit Choice",
        context: "Meet the spirit, then decide whether to kill or free it.",
        choices: [
          {
            text: "Kill the spirit",
            outcome: "neutral",
            result: "Children die, Downwarren survives. Flags: SPIRIT_KILLED, CHILDREN_DEAD, DOWNWARREN_SAFE.",
          },
          {
            text: "Free the spirit",
            outcome: "neutral",
            result: "Children saved, Downwarren destroyed. Flags: SPIRIT_FREED, CHILDREN_SAVED, DOWNWARREN_DESTROYED.",
          },
        ],
      },
      {
        id: "dt32",
        questName: "Return to Crookback Bog — Outcome Lock",
        context: "Return with the Baron. Final state is locked by earlier Botchling and Spirit decisions.",
        choices: [
          {
            text: "BOTCHLING_SAVED + SPIRIT_KILLED",
            outcome: "good",
            result: "Baron redemption path. Effect: BARON_REDEEMS.",
          },
          {
            text: "BOTCHLING_KILLED or SPIRIT_FREED",
            outcome: "bad",
            result: "Baron tragedy path. Effect: BARON_TRAGEDY.",
          },
        ],
      },
      {
        id: "dt33",
        questName: "Forefathers' Eve — Ritual Alignment",
        context: "Attend the ritual and decide whether to defend the Pellar or side with the villagers.",
        choices: [
          {
            text: "Defend the Pellar",
            outcome: "good",
            result: "Pellar survives, ritual succeeds. Flags: PELLAR_SUPPORTED, PELLAR_LIVES.",
          },
          {
            text: "Side with villagers",
            outcome: "bad",
            result: "Pellar is injured, ritual fails. Flags: VILLAGERS_SUPPORTED, PELLAR_HURT.",
          },
        ],
      },
      {
        id: "dt34",
        questName: "Wild at Heart — Accusation Choice",
        context: "Investigate Margrit's disappearance and choose who to accuse.",
        choices: [
          {
            text: "Accuse Margrit",
            outcome: "bad",
            result: "Wrong accusation leads to a tragic ending. Effect: NIELLEN_DIES.",
          },
          {
            text: "Accuse Niellen",
            outcome: "neutral",
            result: "Correct accusation reveals the werewolf truth. Effect: NIELLEN_WEREWOLF_KILLED.",
          },
        ],
      },
      {
        id: "dt35",
        questName: "Jenny o' the Woods — Contract Pay Choice",
        context: "Investigate the wraith, then decide whether to haggle for higher pay or accept standard pay.",
        choices: [
          {
            text: "Negotiate higher pay",
            outcome: "good",
            result: "Higher reward. Flags: PAY_INCREASED, REWARD_HIGH.",
          },
          {
            text: "Accept base pay",
            outcome: "neutral",
            result: "Standard reward. Flags: PAY_BASE, REWARD_STANDARD.",
          },
        ],
      },
    ],
  },
  {
    title: "Side Quest — Key Dialogues",
    id: "sideDialogue",
    trees: [
      {
        id: "dt16",
        questName: "Keira Metz — For the Advancement of Learning",
        context: "Keira reveals she stole the plague research from Fyke Isle and means to hand it to Radovid in exchange for his favor.",
        choices: [
          {
            text: "Convince her to take it to Kaer Morhen instead",
            outcome: "good",
            result: "Keira joins the defense of Kaer Morhen, survives, and ends up with Lambert. Best outcome — gains a strong ally.",
          },
          {
            text: "Let her go to Radovid",
            outcome: "bad",
            result: "Radovid has her executed. You find her body later. Never let her walk into his court.",
          },
          {
            text: "Fight and kill Keira",
            outcome: "bad",
            result: "She dies on the spot, no one gets the research, and you lose a major ally. The worst option by far.",
          },
        ],
      },
      {
        id: "dt17",
        questName: "Ghosts of the Past — Letho's Fate",
        context: "Letho, the kingslayer from The Witcher 2, is hiding from Nilfgaardian assassins. If you imported a save where he lives, you can choose his fate here.",
        choices: [
          {
            text: "Help Letho and invite him to Kaer Morhen",
            outcome: "good",
            result: "He joins the defense and is one of the strongest allies in the battle. Sticks around at Corvo Bianco later if you own Blood and Wine.",
          },
          {
            text: "Help him but don't extend the invitation",
            outcome: "neutral",
            result: "Letho moves on. You miss out on a powerful ally during the siege.",
          },
          {
            text: "Refuse to help or kill him",
            outcome: "bad",
            result: "Letho dies. You lose a great ally and some excellent reunion dialogue.",
          },
        ],
      },
      {
        id: "dt18",
        questName: "Carnal Sins — The Real Killer",
        context: "A serial killer is mutilating prominent Novigrad citizens. You and Dandelion follow the trail. The obvious suspect isn't the killer.",
        choices: [
          {
            text: "Investigate every scene before accusing anyone",
            outcome: "good",
            result: "Leads you to the actual culprit — a Higher Vampire posing as a coroner. Defeating him ends the murders for good.",
          },
          {
            text: "Accuse the obvious suspect",
            outcome: "bad",
            result: "You kill an innocent man, the real killer slips away, and the murders continue off-screen. A failed investigation.",
          },
        ],
      },
      {
        id: "dt19",
        questName: "King's Gambit — Skellige's Next Ruler",
        context: "A coronation feast turns into a slaughter. You can investigate the conspiracy with Cerys or counter-attack with Hjalmar. Whoever you back becomes the ruler of Skellige.",
        choices: [
          {
            text: "Back Cerys an Craite's investigation",
            outcome: "good",
            result: "Cerys becomes Queen. A wise, diplomatic ruler — Skellige prospers under her. The stronger long-term outcome for the isles.",
          },
          {
            text: "Charge in with Hjalmar an Craite",
            outcome: "neutral",
            result: "Hjalmar becomes King — a bold warrior-ruler. Skellige stays strong but warlike. Perfectly valid if you prefer the brawler path.",
          },
          {
            text: "Ignore the feast entirely",
            outcome: "bad",
            result: "Svanrige takes the throne by default and rules as a puppet under Birna. The worst outcome for Skellige.",
          },
        ],
      },
      {
        id: "dt26",
        questName: "A Towerful of Mice — Fyke Isle's Curse",
        context: "Keira asks you to investigate a plague-ridden tower. At the end, you must decide how to handle the spirit tied to the curse.",
        choices: [
          {
            text: "Carry the bones to Graham and let her meet him",
            outcome: "good",
            result: "The truth comes out, the curse is lifted, and the chain into Keira's later quests stays clean. This is the safest completion path.",
          },
          {
            text: "Try to release her spirit without resolving the lovers' story",
            outcome: "bad",
            result: "The plague maiden remains dangerous and innocent people can die later. Fast choice, ugly consequence.",
          },
          {
            text: "Question every clue before deciding",
            outcome: "neutral",
            result: "Slower route, but it gives you full context before making a permanent call. Best for first-time players.",
          },
        ],
      },
      {
        id: "dt27",
        questName: "Now or Never — Saving the Mages in Novigrad",
        context: "During Triss's evacuation, a panic scene forces a hard call between stealth and rescue timing. This affects tone, rewards, and your romance path.",
        choices: [
          {
            text: "Take the risk and help the endangered mages",
            outcome: "good",
            result: "You save more lives and keep Triss's trust high. The escape gets messier, but the moral outcome is stronger.",
          },
          {
            text: "Prioritize the clean escape and move on",
            outcome: "neutral",
            result: "Main objective still succeeds, but people are left behind. Practical, colder outcome.",
          },
          {
            text: "At the docks, ask Triss to stay and clearly commit",
            outcome: "good",
            result: "Romance lock succeeds if your earlier Triss moments were supportive. If not, she still sails and the route closes.",
          },
        ],
      },
      {
        id: "dt28",
        questName: "Brothers in Arms — Ally Recruitment Priority",
        context: "Before Isle of Mists, several side chains decide who appears at Kaer Morhen. Missing these now means losing support later.",
        choices: [
          {
            text: "Finish Keira, Roche, and Skellige ally chains first",
            outcome: "good",
            result: "Maximum war-table support at Kaer Morhen with better survivability and stronger scene coverage.",
          },
          {
            text: "Rush the main quest and skip recruitment cleanup",
            outcome: "bad",
            result: "You lock yourself into a thinner ally roster. The battle remains winnable, but your margin for mistakes shrinks.",
          },
          {
            text: "Pause at level 22 warning and clear your side log",
            outcome: "good",
            result: "Best pacing strategy: you preserve missables, keep XP value, and enter endgame properly prepared.",
          },
        ],
      },
    ],
  },
];
