---
title: "Missile parameters"
description: "Guided flight, loss of control, and interception."
---

Use **Weapons > Stats > Guidance > Flies as a missile**. Engagement ranges remain in [Weapon parameters](/WGRD-Mod-Toolkit/parameters/weapons/). [Value controls](/WGRD-Mod-Toolkit/parameters/values-and-ownership/) explains conversions.

## Flight

| Control / tooltip | In-game meaning |
| --- | --- |
| Top speed (`Maxspeed`) | Guided-flight speed input, km/h |
| Acceleration (`MaxAcceleration`) | Acceleration input, km/h/s |
| Half-turn time (`TempsDemiTour`) | Turning input |
| Turn limit (`AutoGyr`) | Positive values cap a movement update at `value * 0.2` degrees |
| Chaos range (`RangeChaos`) | Controlled-flight random-correction amplitude |
| Chaos speed (`ChaosSpeed`) | Random speed |

## Loss of control

| Tooltip | Meaning |
| --- | --- |
| `AutoGyrWhenUncontrollable` | Lost-control turn limit, with the same `value * 0.2` degree cap per update |
| `RotationSpeedWhenUncontrollable` | Rotation-phase increment |
| `AngleMaxForRandomMouvUncontrollable` | Random direction-perturbation amplitude |
| `TimeMinBetweenRandomMoveWhenUncontrollable`, `TimeMaxBetweenRandomMoveWhenUncontrollable` | Random-move timer endpoints |

## Guidance and interception

- **Guidance** (`Guidance`) selects radar-guided or anti-radar behavior.
- **Fire and forget** (`IsFireAndForget`) selects that guidance behavior.
- **Can be shot down** makes the missile an interception target.
- **Health** (`MaxDamages`) controls damage capacity when durability is available.
- **Correction interval** (`MissileTimeBetweenCorrections`) has an unconfirmed scheduling effect and time unit.

## Propulsion effects

`FxStartPropulsionToken`, `FxPropulsionOnToken`, and `FxPropulsionOffToken` choose existing launch, motor-on, and motor-off visual actions.
