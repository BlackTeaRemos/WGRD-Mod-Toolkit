---
title: "Weapon parameters"
description: "Damage, accuracy, ranges, and firing formulas."
---

These values describe ammunition and firing behavior. See [Value controls](/WGRD-Mod-Toolkit/parameters/values-and-ownership/) for units and [Missiles](/WGRD-Mod-Toolkit/parameters/missiles/) for guided flight.

## Accuracy and firing

| Control / tooltip | In-game meaning |
| --- | --- |
| Accuracy (`HitProbability`) | Base hit probability. `0.5` means 50% |
| Moving accuracy (`HitProbabilityWhileMoving`) | Base probability while the shooter moves |
| Minimum hit / critical chance (`MinimalHitProbability`, `MinimalCritProbability`) | Separate minimum probabilities |
| Aim time (`TempsDeVisee`) | Aiming delay in seconds |
| Fire while moving | Mount capability. See [Mounts](/WGRD-Mod-Toolkit/parameters/mounts-loadouts/) |
| Indirect fire (`TirIndirect`) | Fire at map positions |
| Projectile type (`ProjectileType`) | Ballistic, arcing, or missile flight path |
| Cursor type (`WeaponCursorType`) | Command/UI classification |

## Damage and suppression

| Control / tooltip | In-game meaning |
| --- | --- |
| Damage family (`Arme`) | Small-arms/HE damage fields or AP/HEAT armor-table strength |
| Physical damage (`PhysicalDamages`) | Damage magnitude before falloff, armor, and other factors |
| Damage radius (`RadiusSplashPhysicalDamages`) | Physical splash radius in metres |
| Suppression (`SuppressDamages`) | Suppression magnitude |
| Suppression radius (`RadiusSplashSuppressDamages`) | Suppression splash radius in metres |
| Range effectiveness (`EfficaciteSelonPortee`) | Can increase eligible AP/HEAT strength at shorter shot ranges |
| Power / pinning radius (`Puissance`, `RayonPinned`) | Pinning animation radius |

AP/HEAT strength rung `n` has displayed peak `2 * n`. Final damage also depends on the armor table and other factors. `TypeArme` is displayed weapon-type text.

Splash distance is measured to the nearest point on the target's bounds. See [receiving-unit suppression and stun](/WGRD-Mod-Toolkit/parameters/units/#suppression-and-stun-on-the-receiving-unit) for the resulting unit state.

## Target ranges

| Target | Tooltips |
| --- | --- |
| Ground | `PorteeMinimale` / `PorteeMaximale` |
| Helicopters | `PorteeMinimaleTBA` / `PorteeMaximaleTBA` |
| Aircraft | `PorteeMinimaleHA` / `PorteeMaximaleHA` |
| Naval | `PorteeMinimaleBateaux` / `PorteeMaximaleBateaux` |
| In-flight projectiles | `PorteeMinimaleProjectile` / `PorteeMaximaleProjectile` |

## Dispersion

| Tooltip | Meaning |
| --- | --- |
| `DispersionAtMinRange`, `DispersionAtMaxRange`, `RandomDispersion` | Spread settings in metres |
| `AngleDispersion` | Angular spread setting |
| `CorrectedShotDispersionMultiplier` | Corrected-fire adjustment |

## Salvos, timing, and supply

| Tooltip | Meaning |
| --- | --- |
| `NbTirParSalves` | Shots per salvo |
| `NbrProjectilesSimultanes` | Projectiles emitted by one shot |
| `TempsEntreDeuxTirs` | Delay between shots, seconds |
| `TempsEntreDeuxSalves` | Delay between salvos, seconds |
| `AffichageMunitionParSalve` | Displayed rounds per salvo and RPM numerator |
| `SupplyCost` | Resupply cost |

### Displayed rate of fire

For a positive salvo period:

```text
salvoPeriod = (NbTirParSalves - 1) * TempsEntreDeuxTirs
            + TempsEntreDeuxSalves
displayedRPM = truncate(AffichageMunitionParSalve * 60 / salvoPeriod)
```

Aim, animation, and FX timing are separate. Actual delay also uses [damage and suppression firing factors](/WGRD-Mod-Toolkit/parameters/units/#applied-effect-fields).

With health-count scaling (`AffecteParNombre`) enabled and a positive count:

```text
count = int(healthCapacity) - int(damageTaken)
salvoDelay = baseSalvoDelay * 10 / count
```

## Other behaviors

**Flies as a missile** enables missile flight settings. **Fire and forget** selects that guidance behavior. **Sets fires** and **Lays smoke** select gameplay fire/smoke effects. **Submunition** (`IsSubAmmunition`) marks ammunition CLUSTER.

`FireTriggeringProbability` is a fire-chance input. `NoiseDissimulationMalus` is a firing-concealment input.

`FX_vitesse_de_depart`, `FX_frottement`, `FX_tir_tendu`, and `FX_tir_sans_physic` control visual projectile motion, drag, and trajectory options.
