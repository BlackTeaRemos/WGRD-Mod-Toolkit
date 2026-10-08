---
title: "Movement and sensors"
description: "Speed, fuel, spotting, and identification formulas."
---

## Ground movement

| Control / tooltip | In-game meaning |
| --- | --- |
| Base speed (`Maxspeed`, `MaxSpeed`) | Nominal movement speed, displayed in km/h where converted |
| Combat speed (`VitesseCombat`) | Combat/off-road speed on movement types that use it |
| Road speed (`SpeedBonusOnRoad`) | Total road speed shown by the control |
| Acceleration / braking (`MaxAcceleration`, `MaxDeceleration`) | Speed gain/loss inputs, displayed in km/h/s where converted |
| Half-turn time (`TempsDemiTour`) | Turning-time input |
| Movement category (`UnitMovingType`) | Infantry, wheeled, tracked, amphibious, air, or naval category |

`roadSpeed = baseSpeed * (1 + roadBonus)` before other caps and modifiers.

## Aircraft and helicopters

| Tooltip | Meaning |
| --- | --- |
| `UpwardSpeed` | Climb speed. Registered controls use km/h |
| `LateralSpeed` | Lateral-motion input. No km/h conversion is established |
| `CyclicManoeuvrability`, `TorqueManoeuvrability` | Pitch/cyclic and yaw response inputs |
| `GFactorLimit`, `MaxInclination` | Aircraft turning and bank constraints |
| `LowAltitudeFlyingAltitude`, `NearGroundFlyingAltitude`, `MinAltitudeWhileMovingTowardTarget` | Flight-height inputs |

See [Missiles](/WGRD-Mod-Toolkit/parameters/missiles/) for guided flight.

## Fuel

`FuelCapacity` is tank capacity. `FuelMoveDuration` controls endurance. For positive capacity and duration:

```text
baseFuelUsePerUpdate = FuelCapacity / FuelMoveDuration * 0.2
```

Activity multipliers and leaks also affect consumption. Group fuel is pooled and divided across members.

Critical fuel effects use `LossRatio` and `TimeOut`:

- Zero timeout sets remaining fuel to `capacity * LossRatio`.
- A timed effect adds a leak rate of `capacity * LossRatio / TimeOut`.

## Scanner configuration

| Control / tooltip | In-game meaning |
| --- | --- |
| Normal / low-altitude vision (`PorteeVision`, `PorteeVisionTBA`) | Range inputs for the applicable target and altitude |
| Low-altitude detection (`DetectionTBA`) | Detection-range input |
| Identification range (`PorteeIdentification`) | Range input to the candidate search |
| Optical strength (`OpticalStrength`, `OpticalStrengthAltitude`) | Higher strength helps pass the optical detection check |
| Anti-radar optics (`OpticalStrengthAntiradar`) | Specialized detection strength for eligible radar-guided targets |
| Specialized ranges (`SpecializedDetections`) | Per-target-type overrides. Zero can override normal range |
| Specialized optics (`SpecializedOpticalStrengths`) | Per-target-type optical strengths |
| Stealth (`UnitStealthBonus`) | Higher positive values make optical detection harder. Zero uses one |

## Identification rule and band tables

| Tooltip | Meaning |
| --- | --- |
| `IdentifyBaseProbability` | Base identification term |
| `TimeBetweenEachIdentifyRoll` | Retry interval. Randomized retries require more than about `0.0001` |
| `MovingTargetModifier` | Added when the target's movement test passes |
| `SeveralIdentifyModifier` | Added per previous identification attempt |
| `ShortDistancePercent`, `MediumDistancePercent` | Distance-band boundaries as fractions of effective range |

```text
chance = (base + distanceTerm + experienceTerm + movingTerm
        + previousAttempts * SeveralIdentifyModifier + recentSightTerm)
         * gameMultiplier
success = clamp(chance, 0, 1) > randomDraw
```

Exactly zero `IdentifyBaseProbability` bypasses the identification roll.

## Flares

| Tooltip | Meaning |
| --- | --- |
| `DistanceActivation` | Positive 3D activation radius around tracked objects |
| `TimeBetweenFlare`, `MinimalTimeBetweenFlare` | Base and minimum interval sent to the flare effect |
| `BonusTimeBetweenFlareByProjectile` | Interval reduction per additional activation |
| `ProjectileSpeed`, `SweepAngle` | Visual launch-vector and sweep inputs |

For positive activation count `N`:

```text
interval = max(TimeBetweenFlare
    - (N - 1) * BonusTimeBetweenFlareByProjectile,
    MinimalTimeBetweenFlare)
```