---
title: "Effect parameters"
description: "Particle emission, motion, fading, and visual firing overrides."
---

Shared [Value controls](/WGRD-Mod-Toolkit/parameters/values-and-ownership/) and [weapon settings](/WGRD-Mod-Toolkit/parameters/weapons/) apply where relevant.

## Emission and lifetime

| Control / tooltip | Visible effect |
| --- | --- |
| Burst count (`Count`) | Particles emitted together |
| Spray rate / duration | Particles per second and emission time in seconds |
| Trail spacing | Distance between spawns |
| Lifetime minimum / maximum | Particle lifetime in seconds. Equal endpoints give fixed lifetime |

## Motion

| Control / tooltip | Visible effect |
| --- | --- |
| Initial speed | Launch-speed magnitude. Physical unit unconfirmed |
| Shape / cluster size | Direction distribution and grouping |
| Gravity | Signed vertical acceleration input |
| Drag (`FluidFriction`) | Friction input |
| Collisions / restitution | Collision and bounce behavior where offered |

## Appearance and fading

| Control / tooltip | Visible effect |
| --- | --- |
| Sprite | Static image or a catalogue flipbook |
| Start / end size and color | Appearance over particle lifetime |
| Attack / sustain | Fade-in and full-opacity fractions of the particle's life |
| Layer (`RenderLayerName`) | Drawing order and destination |
| Material (`MaterialType`) | Particle, distortion, decal/sticker, or standard surface |
| Depth test (`ZTest`, `NoZTest`) | Whether scene depth hides the particle |
| Depth write (`ZWrite`, `NoZWrite`) | Whether it writes depth for later drawing |
| Size mode | World-relative or screen-relative size |

```text
decayFraction = 1 - attackFraction - sustainFraction
attackFraction + sustainFraction <= 1
```

Flipbooks play once over the particle's lifetime or at fixed FPS:

```text
animationProgress = clamp(elapsedTime * FPS / frameCount, 0, 1)
```

Distortion and sticker materials require compatible layers.

## Weapon firing-effect overrides

| Tooltip | Meaning |
| --- | --- |
| `parPower` | Effect-specific visual power |
| `parShotCount` | Shot-count input to the effect |
| `parWaitBetweenShot`, `parInitialShotDelay` | Effect timing inputs |
| `parFluidFriction` | Effect-motion friction |
| `parTirPhysic`, `parTirTendu` | Physical/flat trajectory choices for the effect |
