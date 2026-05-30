export interface Tip {
  id: string;
  title: string;
  content: string;
  icon: string; // emoji
}

export interface TipCategory {
  id: string;
  title: string;
  tips: Tip[];
}

export const tipCategories: TipCategory[] = [
  {
    id: "combat",
    title: "⚔️ Combat & Survival",
    tips: [
      { id: "c1", title: "Always Keep Quen Active", content: "Quen is the most important sign in the game. It absorbs one hit completely. On Death March difficulty, recast it after every hit you take. Upgrade to Active Quen to heal from absorbed damage.", icon: "🛡️" },
      { id: "c2", title: "Dodge, Don't Roll", content: "Sidestepping (dodge) is faster and uses less stamina than rolling. Roll only to escape area attacks. Most enemy combos can be avoided with a single sidestep.", icon: "🏃" },
      { id: "c3", title: "Oils Stack With Everything", content: "Sword oils don't expire on Death March if you have the Fixative skill. Apply the correct oil for every fight — it's a flat 10-50% damage boost that stacks with everything else.", icon: "🗡️" },
      { id: "c4", title: "Parry Humans, Dodge Monsters", content: "You can parry most human enemies for a free riposte. Never try to parry monsters — it doesn't work and you'll take full damage. Against humans, hold parry and wait for them to attack.", icon: "⚔️" },
      { id: "c5", title: "Use Bestiary Weaknesses", content: "Every monster has specific weaknesses listed in the Bestiary. Check it before every contract. The right oil + sign + bomb combination can make a boss fight trivially easy.", icon: "📖" },
      { id: "c6", title: "Food Heals in Real-Time", content: "Food regenerates health over time (20 seconds). On lower difficulties, eat food during fights instead of wasting potions. On Death March, food healing is reduced — rely on Swallow potion instead.", icon: "🍖" },
    ],
  },
  {
    id: "money",
    title: "💰 Money Making",
    tips: [
      { id: "m1", title: "Sell Weapons to Blacksmiths, Armor to Armorers", content: "You get better prices selling to the correct vendor type. Swords/axes go to blacksmiths, armor/gloves/boots go to armorers. Never sell to general merchants.", icon: "💰" },
      { id: "m2", title: "Loot Everything in Skellige", content: "Skellige's ocean is filled with smuggler's caches containing weapons worth 200-500 crowns each. Sail around with the boat and loot them all. Easy 50,000+ crowns.", icon: "🚢" },
      { id: "m3", title: "Exchange Foreign Currency", content: "Visit Vivaldi's Bank in Novigrad to exchange Florens and Orens for Crowns. You accumulate tons of foreign currency without realizing it.", icon: "🏦" },
      { id: "m4", title: "Dismantle Before Selling Rare Materials", content: "Some items contain rare crafting materials when dismantled (like shells → pearls). Check what components items break down into before selling.", icon: "🔨" },
      { id: "m5", title: "Hanse Bases = Infinite Money (Blood & Wine)", content: "In Toussaint, the three Hanse bases respawn enemies that drop valuable loot. Farm them for weapons to sell. Each run is worth ~5,000 crowns.", icon: "🏰" },
    ],
  },
  {
    id: "exploration",
    title: "🗺️ Exploration & Secrets",
    tips: [
      { id: "e1", title: "Get All Places of Power", content: "There are 30+ Places of Power in the game, each giving a free ability point. That's 30 free levels worth of skill points. Prioritize finding them all.", icon: "✨" },
      { id: "e2", title: "Explore Underwater", content: "Many treasure caches are underwater. Use the crossbow to kill Drowners/Sirens, then dive. Skellige has the most underwater loot in the game.", icon: "🌊" },
      { id: "e3", title: "Check Every Notice Board", content: "Notice boards unlock quest markers and points of interest on your map. Always check them when entering a new village.", icon: "📋" },
      { id: "e4", title: "Return to White Orchard", content: "Many players forget to fully explore White Orchard before leaving. Go back — there are Places of Power and quests you probably missed.", icon: "🏡" },
      { id: "e5", title: "Abandoned Sites = Free Merchants", content: "Clearing monster nests at abandoned sites restores them to settlements with merchants and fast travel points. Always clear them.", icon: "🏘️" },
    ],
  },
  {
    id: "missable",
    title: "⚠️ Missable Content",
    tips: [
      { id: "ms1", title: "Keira Metz — Don't Let Her Go to Radovid", content: "After completing 'For the Advancement of Learning,' convince Keira to go to Kaer Morhen instead of Radovid. If she goes to Radovid, she dies. If you send her to Kaer Morhen, she helps in the battle AND Lambert survives.", icon: "💀" },
      { id: "ms2", title: "Save Before the Isle of Mists", content: "Going to the Isle of Mists locks you out of several side quests. Complete ALL of these first: Now or Never (Triss), Last Wish (Yen), Cabaret, A Deadly Plot, Redania's Most Wanted.", icon: "🔒" },
      { id: "ms3", title: "Don't Romance Both Triss AND Yennefer", content: "If you tell BOTH Triss and Yennefer you love them, they team up to prank you and you end up alone. Pick ONE. This is permanent and irreversible.", icon: "💔" },
      { id: "ms4", title: "The 5 Ciri Decisions for Best Ending", content: "1) Snowball fight (positive) 2) Visit Skjall's grave 3) Don't take Emhyr's money 4) Let her trash the lab 5) Go with her to the Lodge meeting but let her go in alone. Get all 5 right for the best ending.", icon: "👸" },
      { id: "ms5", title: "Brothers in Arms — Recruit Everyone", content: "Before Kaer Morhen, complete all ally recruitment quests. Every ally you recruit fights in the battle. Missing allies means missing outcomes and possible character deaths.", icon: "🤝" },
      { id: "ms6", title: "Collect All Gwent Cards Before Isle of Mists", content: "Some Gwent cards are only available from NPCs who become unavailable after certain quests. Play every merchant and innkeeper you meet.", icon: "🃏" },
    ],
  },
  {
    id: "builds",
    title: "🧬 Character Builds",
    tips: [
      { id: "b1", title: "Cat School (Fast Attack DPS)", content: "Light armor + fast attacks + Cat School Techniques. Skills: Muscle Memory, Precise Blows, Whirl, Resolve. Gear: Feline set. Playstyle: Glass cannon — dodge everything, attack fast.", icon: "🐱" },
      { id: "b2", title: "Griffin School (Sign Build)", content: "Medium armor + sign intensity + Griffin School Techniques. Skills: All sign upgrades, especially Igni and Aard. Gear: Griffin set. Playstyle: Crowd control and sustained damage through signs.", icon: "🦅" },
      { id: "b3", title: "Bear School (Tank)", content: "Heavy armor + strong attacks + Bear School Techniques. Skills: Strength Training, Crushing Blows, Rend, Undying. Gear: Ursine set. Playstyle: Facetank hits with Quen, hit hard and slow.", icon: "🐻" },
      { id: "b4", title: "Alchemy God (Best Build)", content: "Any Witcher gear + Euphoria mutation + all decoctions. Skills: Acquired Tolerance, Heightened Tolerance, Synergy, Killing Spree. Gear: Manticore set. Playstyle: Stack toxicity to 300+ for massive damage from Euphoria mutation. The strongest build in the game.", icon: "🧪" },
    ],
  },
];
