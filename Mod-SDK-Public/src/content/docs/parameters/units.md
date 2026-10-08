---
title: "Unit parameters"
description: "Health, experience, morale, transport, and supply in game."
---

## Identity, allegiance and presentation

| Control / tooltip | In-game meaning |
| --- | --- |
| General name | Stable identifier of an authored unit |
| Displayed name (`NameInMenu`, `NameInMenuToken`) | Translated name shown to players |
| Country / side (`MotherCountry`, `Nationalite`) | Nationality and side used by the unit |
| Deck tab (`Factory`) | Logistic, Infantry, Support, Tank, Recon, Vehicle, Helo, Plane, or Naval category |
| Production year (`ProductionYear`) | Compared with the selected era's year limit |
| Unit type / training (`TypeUnitValue`, `Training`) | Card labels. Experience settings control veterancy |
| Tactical icon (`IconeType`) | Standard, artillery, or anti-air icon |

## Health and armor

| Control / tooltip | In-game meaning |
| --- | --- |
| Health (`MaxDamages`) | Physical damage capacity |
| Armor (`BaseBlindage`) | Protection rating for the selected facing |
| HUD health (`MaxHPForHUD`) | Display-health setting |
| Damage bands (`PaliersPhysicalDamages`, `PhysicalDamagesEffects`) | Select penalties from the fraction of health lost |
| Boat target (`IsTargetableAsBoat`) | Boat-target treatment in damage rules |

## Experience and hit/visibility modifiers

| Control / tooltip | In-game meaning |
| --- | --- |
| Gain experience (`CanWinExperience`) | Allows normal XP gain below the maximum level |
| Passive gain (`ExperienceGainBySecond`) | Adds `value * 0.2` per qualifying update |
| Kill bonus (`KillExperienceBonus`) | Additional fraction of the target's XP value on a kill |
| Size modifier (`HitRollSizeModifier`) | Target-size contribution to hit calculation |
| ECM modifier (`HitRollECMModifier`) | ECM contribution to hit calculation |
| Stealth (`UnitStealthBonus`) | Higher positive values make optical detection harder. Zero uses one |

### Damage awards and promotion

For positive target health:

```text
acceptedDamage = min(incomingDamage, remainingHealth)
damageXP = targetXPValue * acceptedDamage / targetHealth
killXP = targetXPValue * KillExperienceBonus
promotionThreshold(n) = firstProductionPrice * n * (n + 1)
```

Damage XP can be earned without a kill. Promotion occurs when accumulated XP reaches the next threshold.

## Suppression and stun on the receiving unit

| Control / tooltip | In-game meaning |
| --- | --- |
| Suppression capacity (`MaxSuppressionDamages`) | Suppression the unit can absorb, adjusted by veterancy |
| Suppression bands (`PaliersSuppressDamages`, `SuppressDamagesEffects`) | Choose penalties from suppression divided by effective capacity |
| Recovery curve (`SuppressDamagesRegenRatio`) | Time since the last suppression hit selects a recovery factor |
| Stun threshold (`StunDamagesToGetStunned`) | Accumulation needed to trigger stun |
| Stun recovery (`StunDamagesRegen`) | Reduces accumulation while not actively stunned |
| Freeze while stunned (`StunFreezesUnits`) | Stops applicable movement during stun |

```text
effectiveCapacity = floor(MaxSuppressionDamages * MaxSuppressionDamagesMultiplier)
newSuppression = max(0, oldSuppression
    - updateDelta * recoveryFactor * Suppression_Regeneration)
```

### Applied effect fields

Firing-rate multipliers (`InfFiringRateMultiplier`, `CanonFiringRateMultiplier`, `VehiculeFiringRateMultiplier`) select the relevant weapon category's firing factor.

```text
firingDelay = baseDelay / (suppressionFiringFactor * damageFiringFactor)
```

### Actual morale calculation

Health damage, previous test attempts, and weapons that are not ready reduce morale-test success. Qualifying nearby units add a bonus. Current veterancy supplies `ChanceReussite_TestMoral`.

```text
score = ChanceReussite_TestMoral
      - floor(damageTaken) * MalusPhysicalDamage
      - previousAttempts * MalusTestsSuccessifs
      - unreadyWeapons * MalusArmeVide
      + nearbyQualifyingUnits * BonusUniteCommandement
chance = max(ChanceReussite_Min, score)
success = chance >= randomDraw
```

There is no upper clamp. The group test stops at the first successful member. For nonnegative `FrequenceTestMoral`, the delay is `floor(value * 5)` game ticks.

## Command and company

| Control / tooltip | In-game meaning |
| --- | --- |
| Command unit (`IsCommandementUnit`) | Command-unit capability |
| Deploy / withdraw (`DeploymentDuration`, `WithdrawalDuration`) | Timing inputs for the selected behavior |
| Maximum / spawned members (`NbUniteInCompagnieMax`, `NbUniteInCompagnieToSpawn`) | Allowed and initial company size |
| Merge radius (`CompanyMergeRadius`) | Company-merging distance |
| Spacing (`EspaceEntreMembreCompany`) | Distance between company members |

## Transport and supply-related effects

| Control / tooltip | In-game meaning |
| --- | --- |
| Allowed transports (`TransportListAvailableForSpawn`) | Transport choices offered at deployment |
| Compatibility (`Categories`) | Transport size or compatibility categories |
| Load / capture radius (`LoadRadius`, `RadiusCapture`) | Interaction distance |
| Carrier-destruction bonuses (`WreckUnloadPhysicalDamageBonus`, `WreckUnloadStunDamageBonus`, `WreckUnloadSuppressDamageBonus`) | Extra passenger damage when the carrier is destroyed |

See [deck availability](/WGRD-Mod-Toolkit/parameters/decks/) and [mount ammunition pools](/WGRD-Mod-Toolkit/parameters/mounts-loadouts/) for those settings.

## Supply capacity and supply rules

| Control / tooltip | In-game meaning |
| --- | --- |
| Capacity (`SupplyCapacity`) | Initial and maximum supply stock |
| Range (`SupplyRange`, `DefaultSupplyRange`) | Positive unit range overrides the default |
| Priority (`SupplyPriority`) | Supply-to-supply transfer requires supplier priority below recipient priority |
| Delivery / cost rates (`FuelSupplyBySecond`, `HealthSupplyBySecond`, `SupplySupplyBySecond` and their cost fields) | Resource delivered and supply spent |

For positive maximum delivery in the fuel, repair, and supply channels:

```text
maximum = deliveryRate * 0.2 * gameMultiplier
delivered = min(maximum, recipientDeficit)
cost = costRate * 0.2 * gameMultiplier * delivered / maximum
```