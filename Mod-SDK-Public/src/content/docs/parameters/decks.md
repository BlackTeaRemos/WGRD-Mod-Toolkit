---
title: "Deck parameters"
description: "Card limits, deck bonuses, and availability formulas."
---

## The unit's offer

| Control / tooltip | In-game meaning |
| --- | --- |
| Card limit (`MaxPacks`) | Maximum cards of this unit |
| Availability (`MaxDeployableAmount`) | Units per card at Rookie, Trained, Hardened, Veteran, and Elite |
| Visible levels (`ShowInMenu`) | Which veterancy choices are offered |
| Price (`ProductionPrice`) | First entry is the armory price |
| Production time (`ProductionTime`) | Reinforcement/production timing |
| Specialization tags (`UnitTypeTokens`) | Deck-type eligibility |
| Production year (`ProductionYear`) | Compared with the era cutoff. See [Units](/WGRD-Mod-Toolkit/parameters/units/) |

## Baseline and modifiers

| Tooltip | Meaning |
| --- | --- |
| `DefaultActivationPoints` | Starting activation budget |
| `DefaultCostMatrix` | Activation cost of each category's card slots |
| `DefaultSlotMatrix` | Starting slots by category |
| `ActivationPoints` | Budget adjustment |
| `ActivationCost` | Per-category card-cost adjustment |
| `SlotsAvailable` | Per-category slot adjustment |
| `ExperienceBonus` | Available veterancy adjustment |
| `Availability` | Percentage availability adjustment |

For ordinary modifiers:

```text
budget = baseBudget + sum(pointAdjustments)
cardCost = max(minimumCost, baseCost + sum(costAdjustments))
availabilityFactor = product(1 + availabilityAdjustment / 100)
```

Minimum cost is one for non-naval categories and zero for Naval. Two +20% availability adjustments give `1.2 * 1.2 = 1.44` before later rounding or caps.

Slot bonuses expose existing cost-list entries. They do not create more entries.

**Naval deck** (`IsNavalDeck`) resets the running budget to zero and applies naval slots.

## Selection and deck codes

- **Listed in deck selector** controls visibility.
- **Members** selects a coalition's countries.
- **Combinations** permits country/coalition, specialization, and era selections.
- **Deck-code slot** registers a specialization or era for codes. Reassigning a slot changes existing codes.
- `MaxNbTransports` and `MaxNbSuperTransports` limit decoded transported/nested-transport cards.

Unrestricted eras ignore year limits and bonuses. Unrestricted specializations ignore bonuses. Side selection remains BLUFOR/REDFOR.

## Artwork and emoji

**Appearance** changes specialization/era bonus images. **Flags** changes normal and long political flags. Neither changes numerical bonuses.

`SymetrieX` mirrors an emoji horizontally. `UseTextColor` tints it with the surrounding text color.
