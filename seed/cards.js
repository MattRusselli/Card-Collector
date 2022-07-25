const db = require('../db')
const { Set, Card } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const op18 = await Set.find({
    name: 'OTS Tournament Pack 18 (OP18)OTS Tournament Pack 18 (OP18)'
  })
  const ldS3 = await Set.find({ name: 'Legendary Duelists: Season 3 (LDS3)' })

  const cards = [
    {
      name: 'Dogmatika Ecclesia, the Virtuous',
      img: 'https://i.imgur.com/ECE0iEv.jpg',
      type: 'Effect Monster',
      effect:
        'Cannot be destroyed by battle with a monster Special Summoned from the Extra Deck. You can only use each of the following effects of "Dogmatika Ecclesia, the Virtuous" once per turn. If a monster Special Summoned from the Extra Deck is on the field: You can Special Summon this card from your hand. If this card is Normal or Special Summoned: You can activate this effect; add 1 "Dogmatika" card from your Deck to your hand, except "Dogmatika Ecclesia, the Virtuous", also you cannot Special Summon monsters from the Extra Deck for the rest of this turn.',
      rarity: 'Ultimate Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Divine Arsenal AA-ZEUS - Sky Thunder',
      img: 'https://i.imgur.com/gWc8KEt.jpg',
      type: 'XYZ Monster',
      effect: `2 Level 12 monsters
      Once per turn, if an Xyz Monster battled this turn, you can also Xyz Summon "Divine Arsenal AA-ZEUS - Sky Thunder" by using 1 Xyz Monster you control as material. (Transfer its materials to this card.) (Quick Effect): You can detach 2 materials from this card; send all other cards from the field to the GY. Once per turn, if another card(s) you control is destroyed by battle or an opponent's card effect: You can attach 1 card from your hand, Deck, or Extra Deck to this card as material.`,
      rarity: 'Ultimate Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Fusion Destiny',
      img: 'https://i.imgur.com/bgfeX2r.jpg',
      type: 'Spell Card',
      effect: `Fusion Summon 1 Fusion Monster from your Extra Deck that lists a "Destiny HERO" monster as material, using monsters from your hand or Deck as Fusion Material, but destroy it during the End Phase of the next turn, also for the rest of this turn after this card resolves, you cannot Special Summon monsters, except DARK "HERO" monsters. You can only activate 1 "Fusion Destiny" per turn.`,
      rarity: 'Ultimate Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Destiny HERO - Dasher',
      img: 'https://i.imgur.com/CyE4ooL.jpg',
      type: 'Effect Monster',
      effect:
        'Once per turn: You can Tribute 1 other monster; this card gains 1000 ATK until the End Phase. If this card attacks, change it to Defense Position at the end of the Battle Phase. One time only, when you draw a Monster Card during your Draw Phase while this card is in your Graveyard: You can reveal it; Special Summon it. This card must be in the Graveyard to activate and to resolve this effect.',
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Babycerasaurus',
      img: 'https://i.imgur.com/dssdHN1.jpg',
      type: 'Effect Monster',
      effect:
        'If this card is destroyed by a card effect and sent to the Graveyard: Special Summon 1 Level 4 or lower Dinosaur-Type monster from your Deck.',
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Kagemucha Knight',
      img: 'https://i.imgur.com/ZhdfzC0.jpg',
      type: 'Effect Monster',
      effect:
        'When you Normal Summon a Level 3 monster: You can Special Summon this card from your hand. Cannot be used as Synchro Material.',
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Contact "C"',
      img: 'https://i.imgur.com/4oggdKl.jpg',
      type: 'Effect Monster',
      effect: `When your opponent Normal or Special Summons a monster(s) (except during the Damage Step): You can Special Summon this card from your hand to the opponent's field in Defense Position. This card's controller cannot Fusion, Synchro, Xyz, or Link Summon unless they use this card as material.`,
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Token Collector',
      img: 'https://i.imgur.com/2zEcIM3.jpg',
      type: 'Effect Monster',
      effect:
        'If a Token is Special Summoned (except during the Damage Step): You can Special Summon this card from the GY (if it was there when the Token was Special Summoned) or hand (even if not). You can only use this effect of "Token Collector" once per turn. If this card is Special Summoned: Destroy as many Tokens on the field as possible, and if you do, this card gains 400 ATK for each Token destroyed. Neither player can Special Summon Tokens.',
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Kwagar Hercules',
      img: 'https://i.imgur.com/6qO3ChU.jpg',
      type: 'Fusion Monster',
      effect: '"Kuwagata α" + "Hercules Beetle"',
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'The Phantom Knights of Break Sword',
      img: 'https://i.imgur.com/2lLHYTB.jpg',
      type: 'XYZ Monster',
      effect: `2 Level 3 monsters
      Once per turn: You can detach 1 material from this card, then target 1 card you control and 1 card your opponent controls; destroy them. If this Xyz Summoned card is destroyed: You can target 2 "The Phantom Knights" monsters with the same Level in your GY; Special Summon them and increase their Levels by 1, also you cannot Special Summon monsters for the rest of this turn, except DARK monsters.`,
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Inzektor Picofalena',
      img: 'https://ygoprodeck.com/pics/97273514.jpg',
      type: 'Link Monster',
      effect: `2 Insect monsters
      If this card is Link Summoned: You can discard 1 card, then target 1 other Insect monster you control; equip 1 Insect monster from your Deck to it as an Equip Spell that gains this effect.
      ● The equipped monster gains 500 ATK/DEF.
      You can target 3 Insect monsters in your GY; shuffle them into the Deck, then draw 1 card. You can only use each effect of "Inzektor Picofalena" once per turn.`,
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Monk of the Tenyi',
      img: 'https://ygoprodeck.com/pics/32519092.jpg',
      type: 'Link Monster',
      effect: '1 non-Link "Tenyi" monster',
      rarity: 'Super Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Manju of the Ten Thousand Hands',
      img: 'https://ygoprodeck.com/pics/95492061.jpg',
      type: 'Effect Monster',
      effect:
        'When this card is Normal or Flip Summoned: You can add 1 Ritual Monster or 1 Ritual Spell from your Deck to your hand.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Tanngnjostr of the Nordic Beasts',
      img: 'https://ygoprodeck.com/pics/14677495.jpg',
      type: 'Effect Monster',
      effect:
        'When a monster you control is destroyed by battle and sent to your GY: You can Special Summon this card from your hand. Once per turn, when this Defense Position card on the field is changed to face-up Attack Position: You can Special Summon 1 "Nordic Beast" monster from your Deck in Defense Position, except "Tanngnjostr of the Nordic Beasts".',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Dverg of the Nordic Alfar',
      img: 'https://ygoprodeck.com/pics/13455953.jpg',
      type: 'Effect Monster',
      effect:
        'After you Normal Summon this card, you can Normal Summon 1 "Nordic" monster during your Main Phase this turn, in addition to your Normal Summon/Set. (You can only gain this effect once per turn.) If this face-up card on the field is sent to the GY: Target 1 "Nordic Relic" card in your GY; add that target to your hand.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'The Phantom Knights of Silent Boots',
      img: 'https://ygoprodeck.com/pics/36426778.jpg',
      type: 'Effect Monster',
      effect:
        'If you control a "The Phantom Knights" monster, you can Special Summon this card (from your hand). You can only Special Summon "The Phantom Knights of Silent Boots" once per turn this way. You can banish this card from your GY; add 1 "Phantom Knights" Spell/Trap from your Deck to your hand. You can only use this effect of "The Phantom Knights of Silent Boots" once per turn.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Destiny HERO - Celestial',
      img: 'https://ygoprodeck.com/pics/63362460.jpg',
      type: 'Effect Monster',
      effect:
        'When this card declares an attack: You can target 1 face-up Spell your opponent controls; destroy it, and if you do, inflict 500 damage to your opponent. While you have no cards in your hand, except the turn this card was sent to the GY: You can banish this card and 1 "Destiny HERO" monster from your GY; draw 2 cards. You can only use this effect of "Destiny HERO - Celestial" once per turn.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Vampire Familiar',
      img: 'https://ygoprodeck.com/pics/34250214.jpg',
      type: 'Effect Monster',
      effect:
        'If this card is Special Summoned: You can pay 500 LP; add 1 "Vampire" monster from your Deck to your hand, except "Vampire Familiar". If this card is in your GY: You can send 1 "Vampire" card from your hand or face-up field to the GY; Special Summon this card, but banish it when it leaves the field. You can only use each effect of "Vampire Familiar" once per turn.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Vampire Retainer',
      img: 'https://ygoprodeck.com/pics/70645913.jpg',
      type: 'Effect Monster',
      effect:
        'If this card is Special Summoned: You can pay 500 LP; add 1 "Vampire" Spell/Trap from your Deck to your hand. If this card is in your GY: You can send 1 "Vampire" card from your hand or face-up field to the GY; Special Summon this card, but banish it when it leaves the field. You can only use each effect of "Vampire Retainer" once per turn.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Impcantation Talismandra',
      img: 'https://ygoprodeck.com/pics/80701178.jpg',
      type: 'Effect Monster',
      effect:
        'You can reveal 1 Ritual Monster in your hand; Special Summon both this card from your hand and 1 "Impcantation" monster from your Deck, except "Impcantation Talismandra". If this card is Special Summoned from the Deck: You can add 1 Ritual Monster from your Deck to your hand. You can only use 1 "Impcantation Talismandra" effect per turn, and only once that turn. You cannot Special Summon monsters from the Extra Deck.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Impcantation Penciplume',
      img: 'https://ygoprodeck.com/pics/82085295.jpg',
      type: 'Effect Monster',
      effect:
        'You can reveal 1 Ritual Monster in your hand; Special Summon both this card from your hand and 1 "Impcantation" monster from your Deck, except "Impcantation Penciplume". If this card is Special Summoned from the Deck: You can target 1 Ritual Monster in your GY; add it to your hand. You can only use 1 "Impcantation Penciplume" effect per turn, and only once that turn. You cannot Special Summon monsters from the Extra Deck.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Ghostrick Angel of Mischief',
      img: 'https://ygoprodeck.com/pics/53334641.jpg',
      type: 'XYZ Monster',
      effect: `2 Level 4 monsters
      You can also Xyz Summon this card by using a "Ghostrick" Xyz Monster you control as the Xyz Material, except "Ghostrick Angel of Mischief". (Xyz Materials attached to that monster also become Xyz Materials on this card.) When the number of Xyz Materials on this card becomes 10, you win the Duel. Once per turn: You can detach 1 Xyz Material from this card; add 1 "Ghostrick" Spell/Trap Card from your Deck to your hand. Once per turn: You can attach 1 "Ghostrick" card from your hand to this card as an Xyz Material.`,
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Gullveig of the Nordic Ascendant',
      img: 'https://ygoprodeck.com/pics/90207654.jpg',
      type: 'Link Monster',
      effect: `1 Level 5 or lower "Nordic" monster
      If this card is Link Summoned: You can banish up to 3 cards from your hand and/or field, and if you do, Special Summon that many "Nordic" monsters from your Deck in Defense Position, also, for the rest of this turn, you cannot Special Summon monsters, except "Aesir" monsters, nor Normal Summon/Set any monsters. You can only use this effect of "Gullveig of the Nordic Ascendant" once per turn. While this card points to an "Aesir" monster, your opponent cannot target that monster with card effects, also monsters your opponent controls cannot target this card for attacks.`,
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Dark Magical Circle',
      img: 'https://ygoprodeck.com/pics/47222536.jpg',
      type: 'Spell Card',
      effect:
        'When this card is activated: Look at the top 3 cards of your Deck, then you can reveal 1 "Dark Magician" or 1 Spell/Trap that specifically lists the card "Dark Magician" in its text, among them, and add it to your hand, also place the remaining cards on top of your Deck in any order. If "Dark Magician" is Normal or Special Summoned to your field (except during the Damage Step): You can target 1 card your opponent controls; banish it. You can only use each effect of "Dark Magical Circle" once per turn.',
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Ghostrick Break',
      img: 'https://ygoprodeck.com/pics/80802524.jpg',
      type: 'Trap Card',
      effect: `When exactly 1 face-up "Ghostrick" monster you control (and no other cards) is destroyed by battle or an opponent's card effect and sent to your Graveyard: Target 2 "Ghostrick" monsters in your Graveyard with different names from the destroyed monster; Special Summon them in face-down Defense Position.`,
      rarity: 'Common',
      set_id: op18[0]._id
    },
    {
      name: 'Sangan',
      img: 'https://ygoprodeck.com/pics/26202165.jpg',
      type: 'Effect Monster',
      effect: `If this card is sent from the field to the GY: Add 1 monster with 1500 or less ATK from your Deck to your hand, but you cannot activate cards, or the effects of cards, with that name for the rest of this turn. You can only use this effect of "Sangan" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Dark Necrofear',
      img: 'https://ygoprodeck.com/pics/31829185.jpg',
      type: 'Effect Monster',
      effect: `Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 3 Fiend monsters from your GY. During the End Phase, if this card is in your GY because it was destroyed in your Monster Zone by an opponent's card and sent there this turn: Target 1 face-up monster your opponent controls; equip this card to that target. While this card is equipped to a monster by this effect, take control of that monster.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Gernia',
      img: 'https://ygoprodeck.com/pics/77936940.jpg',
      type: 'Effect Monster',
      effect: `During your next Standby Phase, after this face-up card you control was destroyed and sent to your Graveyard by an opponent's card effect: Special Summon it.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Archfiend Empress',
      img: 'https://ygoprodeck.com/pics/31766317.jpg',
      type: 'Effect Monster',
      effect: `If (exactly) 1 face-up DARK Fiend-Type monster on the field, except this card, would be destroyed, you can remove from play 1 DARK Fiend-Type monster from your Graveyard, instead. When this card is destroyed and sent from the field to the Graveyard, you can select 1 Level 6 or higher DARK Fiend-Type monster in your Graveyard, except "Archfiend Empress", and Special Summon it.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Evil HERO Infernal Prodigy',
      img: 'https://ygoprodeck.com/pics/50304345.jpg',
      type: 'Effect Monster',
      effect: `If you control no monsters, you can Special Summon this card (from your hand) in Attack Position. Once per turn, during the End Phase, if this card was Tributed this turn to Tribute Summon a "HERO" monster: Draw 1 card.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Evil HERO Adusted Gold',
      img: 'https://ygoprodeck.com/pics/13650422.jpg',
      type: 'Effect Monster',
      effect: `You can discard this card; add 1 "Dark Fusion", or 1 card that specifically lists "Dark Fusion" in its text, from your Deck to your hand, except "Evil HERO Adusted Gold". You can only use this effect of "Evil HERO Adusted Gold" once per turn. Cannot attack unless you control a Fusion Monster.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Evil HERO Sinister Necrom',
      img: 'https://ygoprodeck.com/pics/45659520.jpg',
      type: 'Effect Monster',
      effect: `You can banish this card from your GY; Special Summon 1 "Evil HERO" monster from your hand or Deck, except "Evil HERO Sinister Necrom". You can only use this effect of "Evil HERO Sinister Necrom" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Evil HERO Inferno Wing',
      img: 'https://ygoprodeck.com/pics/22160245.jpg',
      type: 'Fusion Monster',
      effect: `"Elemental HERO Avian" + "Elemental HERO Burstinatrix"
      Must be Special Summoned with "Dark Fusion" and cannot be Special Summoned by other ways. If this card attacks a Defense Position monster, inflict piercing Battle Damage to your opponent. When this card destroys a monster by battle and sends it to the Graveyard: Inflict damage to your opponent equal to either the ATK or DEF (whichever is higher) of the destroyed monster in the Graveyard.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Evil HERO Malicious Bane',
      img: 'https://ygoprodeck.com/pics/86165817.jpg',
      type: 'Fusion Monster',
      effect: `1 "Evil HERO" monster + 1 Level 5 or higher monster
      Must be Special Summoned with "Dark Fusion". Cannot be destroyed by battle or card effects. During your Main Phase: You can destroy all monsters your opponent controls with ATK less than or equal to this card's, also this card gains 200 ATK for each monster destroyed this way, also you cannot declare an attack for the rest of this turn, except with "HERO" monsters. You can only use this effect of "Evil HERO Malicious Bane" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Evil HERO Lightning Golem',
      img: 'https://ygoprodeck.com/pics/21947653.jpg',
      type: 'Fusion Monster',
      effect: `"Elemental HERO Sparkman" + "Elemental HERO Clayman"
      Must be Special Summoned with "Dark Fusion" and cannot be Special Summoned by other ways. Once per turn: You can target 1 monster on the field; destroy that target.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Evil HERO Wild Cyclone',
      img: 'https://ygoprodeck.com/pics/13293158.jpg',
      type: 'Fusion Monster',
      effect: `"Elemental HERO Avian" + "Elemental HERO Wildheart"
      Must be Special Summoned with "Dark Fusion" and cannot be Special Summoned by other ways. If this card attacks, your opponent cannot activate any Spell/Trap Cards until the end of the Damage Step. When this card inflicts Battle Damage to your opponent: Destroy all face-down Spell and Trap Cards your opponent controls.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Earthbound Immortal Aslla piscu',
      img: 'https://ygoprodeck.com/pics/10875327.jpg',
      type: 'Effect Monster',
      effect: `There can only be 1 "Earthbound Immortal" monster on the field. If there is no face-up Field Spell Card on the field, destroy this card. Your opponent cannot target this card for attacks. This card can attack your opponent directly. When this face-up card leaves the field, except by its own effect: Destroy as many face-up monsters your opponent controls as possible, and if you do, inflict 800 damage to your opponent for each monster destroyed.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Abyss Playhouse - Fantastic Theater',
      img: 'https://ygoprodeck.com/pics/77297908.jpg',
      type: 'Spell Card',
      effect: `You can reveal 1 "Abyss Actor" Pendulum Monster and 1 "Abyss Script" Spell in your hand; add 1 "Abyss Script" Spell from your Deck to your hand, with a different name than that revealed Spell. While you control a Pendulum Summoned "Abyss Actor" Pendulum Monster, any monster effect activated by your opponent becomes "Destroy 1 Set Spell/Trap your opponent controls". You can only use each effect of "Abyss Playhouse - Fantastic Theater" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Ascator, Dawnwalker',
      img: 'https://ygoprodeck.com/pics/71821687.jpg',
      type: 'Effect Monster',
      effect: `You can discard 1 card; Special Summon this card from your hand in Defense Position, then you can Special Summon 1 "Fire Ant Ascator" from your hand or Deck. You cannot Special Summon monsters from the Extra Deck the turn you activate this effect, except Synchro Monsters. You can only use this effect of "Ascator, Dawnwalker" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Number C40: Gimmick Puppet of Dark Strings',
      img: 'https://ygoprodeck.com/pics/69170557.jpg',
      type: 'XYZ Monster',
      effect: `3 Level 9 monsters
      When this card is Special Summoned: Destroy the monsters with String Counters, and if you do, draw 1 card, then inflict damage to your opponent equal to the highest original ATK among those destroyed monsters in the Graveyard (your choice, if tied). Once per turn: You can detach 1 Xyz Material from this card; place 1 String Counter on each face-up monster your opponent controls.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Predaplant Chimerafflesia',
      img: 'https://ygoprodeck.com/pics/25586143.jpg',
      type: 'Fusion Monster',
      effect: `1 "Predaplant" monster + 1 DARK monster
      Once per turn: You can target 1 monster on the field with a Level less than or equal to this card's; banish it. When an attack is declared involving this card and an opponent's face-up monster: You can activate this effect; until the end of this turn, that opponent's monster loses 1000 ATK, and if it does, this card gains 1000 ATK. Once per turn, during the next Standby Phase after this card was sent to the Graveyard: You can add 1 "Polymerization" Spell Card or "Fusion" Spell Card from your Deck to your hand.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Predapractice',
      img: 'https://ygoprodeck.com/pics/31643613.jpg',
      type: 'Spell Card',
      effect: `Special Summon 1 "Predaplant" monster from your hand, then add 1 "Predap" card from your Deck to your hand, except "Predapractice", also for the rest of this turn after this card resolves, you cannot Special Summon monsters from the Extra Deck, except Fusion Monsters. You can only activate 1 "Predapractice" per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Dark Magician Girl',
      img: 'https://product-images.tcgplayer.com/fit-in/391x391/206967.jpg',
      type: 'Effect Monster',
      effect: `Gains 300 ATK for every "Dark Magician" or "Magician of Black Chaos" in the GY.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Chaos Command Magician',
      img: 'https://ygoprodeck.com/pics/72630549.jpg',
      type: 'Effect Monster',
      effect: `Negate the effect of a Monster Card that targets this 1 card.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Apprentice Illusion Magician',
      img: 'https://ygoprodeck.com/pics/30603688.jpg',
      type: 'Effect Monster',
      effect: `You can Special Summon this card (from your hand) by discarding 1 card. If this card is Normal or Special Summoned: You can add 1 "Dark Magician" from your Deck to your hand. During damage calculation, if your other DARK Spellcaster monster battles an opponent's monster (Quick Effect): You can send this card from your hand or face-up field to the GY; that monster you control gains 2000 ATK/DEF during that damage calculation only.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: `Magicians' Souls`,
      img: 'https://ygoprodeck.com/pics/97631303.jpg',
      type: 'Effect Monster',
      effect: `You can send up to 2 Spells/Traps from your hand and/or field to the GY; draw that many cards. If this card is in your hand: You can send 1 Level 6 or higher Spellcaster monster from your Deck to the GY, then activate 1 of these effects;
      ● Special Summon this card.
      ● Send this card to the GY, then, you can Special Summon 1 "Dark Magician" or 1 "Dark Magician Girl" from your GY.
      You can only use each effect of "Magicians' Souls" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Magician of Chaos',
      img: 'https://ygoprodeck.com/pics/47963370.jpg',
      type: 'Ritual Effect Monster',
      effect: `You can Ritual Summon this card with "Chaos Form". This card's name becomes "Dark Magician" while on the field or in the GY. Once per turn, when a Spell/Trap Card or effect is activated (Quick Effect): You can target 1 card on the field; destroy it. If this Ritual Summoned card is destroyed by battle or card effect: You can Special Summon 1 "Chaos" or "Black Luster Soldier" Ritual Monster from your hand, except "Magician of Chaos", ignoring its Summoning conditions.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Ebon Illusion Magician',
      img: 'https://ygoprodeck.com/pics/96471335.jpg',
      type: 'XYZ Monster',
      effect: `2 Level 7 monsters
      You can also Xyz Summon this card by using a Rank 6 Spellcaster-Type Xyz Monster you control as the Xyz Material. (Xyz Materials attached to that monster also become Xyz Materials on this card.) Once per turn: You can detach 1 Xyz Material from this card; Special Summon 1 Spellcaster-Type Normal Monster from your hand or Deck. When a Spellcaster-Type Normal Monster declares an attack: You can target 1 card your opponent controls; banish it. You can only use this effect of "Ebon Illusion Magician" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Dark Magical Circle',
      img: 'https://ygoprodeck.com/pics/47222536.jpg',
      type: 'Spell Card',
      effect: `When this card is activated: Look at the top 3 cards of your Deck, then you can reveal 1 "Dark Magician" or 1 Spell/Trap that specifically lists the card "Dark Magician" in its text, among them, and add it to your hand, also place the remaining cards on top of your Deck in any order. If "Dark Magician" is Normal or Special Summoned to your field (except during the Damage Step): You can target 1 card your opponent controls; banish it. You can only use each effect of "Dark Magical Circle" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: `Magicians' Combination`,
      img: 'https://ygoprodeck.com/pics/86509711.jpg',
      type: 'Trap Card',
      effect: `Once per turn, when a card or effect is activated (except during the Damage Step): You can Tribute 1 "Dark Magician" or 1 "Dark Magician Girl"; Special Summon 1 "Dark Magician" or 1 "Dark Magician Girl" from your hand or GY, with a different name from the Tributed monster, and if you do, negate that activated effect. If this face-up card is sent from the Spell & Trap Zone to the GY: You can destroy 1 card on the field.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Elemental HERO Honest Neos',
      img: 'https://ygoprodeck.com/pics/14124483.jpg',
      type: 'Effect Monster',
      effect: `(Quick Effect): You can discard this card, then target 1 "HERO" monster on the field; it gains 2500 ATK until the end of this turn. (Quick Effect): You can discard 1 "HERO" monster; this card gains ATK equal to the discarded monster's ATK until the end of this turn. You can only use each effect of "Elemental HERO Honest Neos" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Quickdraw Synchron',
      img: 'https://ygoprodeck.com/pics/20932152.jpg',
      type: 'Tuner Monster',
      effect: `You can Special Summon this card (from your hand) by sending 1 monster from your hand to the GY. For a Synchro Summon, you can substitute this card for any 1 "Synchron" Tuner. Cannot be used as a Synchro Material, except for the Synchro Summon of a monster that lists a "Synchron" Tuner as material.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: ``,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Junk Converter',
      img: 'https://ygoprodeck.com/pics/11069680.jpg',
      type: 'Effect Monster',
      effect: `You can discard this card and 1 Tuner; add 1 "Synchron" monster from your Deck to your hand. If this card is sent to the GY as Synchro Material: You can target 1 Tuner in your GY; Special Summon it in Defense Position, but it cannot activate its effects this turn. You can only use each effect of "Junk Converter" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Satellite Warrior',
      img: 'https://ygoprodeck.com/pics/84664085.jpg',
      type: 'Synchro Monster',
      effect: `1 Tuner + 1+ non-Tuner Synchro Monsters
      If this card is Synchro Summoned: You can target cards your opponent controls, up to the number of Synchro Monsters in your GY; destroy them, and if you do, this card gains 1000 ATK for each card destroyed. If this Synchro Summoned card is destroyed: You can Special Summon up to 3 Level 8 or lower "Warrior", "Synchron", and/or "Stardust" Synchro Monsters with different names from your GY. You can only use each effect of "Satellite Warrior" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Tuning',
      img: 'https://ygoprodeck.com/pics/96363153.jpg',
      type: 'Spell Card',
      effect: `Add 1 "Synchron" Tuner from your Deck to your hand, then send the top card of your Deck to the GY.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    },
    {
      name: 'Performapal Celestial Magician',
      img: 'https://ygoprodeck.com/pics/58092907.jpg',
      type: 'Pendulum Effect Monster',
      effect: `[ Pendulum Effect ] When exactly 1 face-up Fusion, Synchro, or Xyz Monster you control that was Special Summoned from the Extra Deck is destroyed by battle, or an opponent's card effect: You can Special Summon that destroyed monster, then destroy this card. You can only use this effect of "Performapal Celestial Magician" once per turn.
      [ Monster Effect ] During your Main Phase, if this card was Normal or Special Summoned this turn: You can apply the following effect(s) for the rest of this turn, based on the other monsters you currently control.
      ● Fusion: This card can attack directly. ● Synchro: Your opponent cannot activate monster effects. ● Xyz: This card's ATK becomes double its original ATK. ● Pendulum: During the End Phase, add 1 Pendulum Monster from your Deck to your hand.
      You can only use this effect of "Performapal Celestial Magician" once per turn.`,
      rarity: 'Ultra Rare',
      set_id: ldS3[0]._id
    }
  ]
  await Card.insertMany(cards)
}

const run = async () => {
  await main()
  db.close()
}
run()
