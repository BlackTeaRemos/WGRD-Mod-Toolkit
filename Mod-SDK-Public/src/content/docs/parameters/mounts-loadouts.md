---
title: "Mounts and loadouts"
description: "Weapons, ammunition pools, turret angles, and connectors."
---

## Mounted-weapon fields

| Control / tooltip | In-game meaning |
| --- | --- |
| Ammunition (`Ammunition`) | Weapon/ammunition definition used by the mount |
| Ammo pool (`SalvoStockIndex`) | Selects shared salvo stock. Mounts using the same pool consume it together |
| Display counter (`SalvoStockIndex_ForInterface`) | Counter alias. `-1` hides it |
| Fire while moving (`TirEnMouvement`) | Mount's moving-fire capability |
| Continuous fire (`TirContinu`) | Firing behavior across salvo boundaries |
| Single-soldier animation (`AnimateOnlyOneSoldier`) | Restricts the firing animation to one soldier |
| Pool stock (`Salves`) | Stock for each pool. Zero is empty and `-1` uses unstocked behavior |

Displayed carried rounds also depend on [ammunition settings](/WGRD-Mod-Toolkit/parameters/weapons/).

## Turret gameplay limits

| Tooltip | Meaning |
| --- | --- |
| `AngleRotationMax` | Total gameplay traverse arc |
| `AngleRotationBase` | Traverse center |
| `AngleRotationMinPitch`, `AngleRotationMaxPitch` | Lower/upper pitch limits |
| `AngleRotationBasePitch` | Pitch center |
| `VitesseRotation` | Angular rate, displayed in degrees/s |
| `NbFX` | Number of existing muzzle/effect positions used |
| `OwnerTurnHisChassisVerticallyToAttack` | Requests chassis-based vertical aiming for the fixed-turret behavior |

For ordinary restricted two-axis turrets:

```text
eligible = abs(1.1 * wrappedBearingFromBase) < AngleRotationMax / 2
```

## Cosmetic rotation

Visual traverse is a per-side bound, while gameplay traverse above is a total arc.

`ZAxisNode` and `YAxisNode` choose yaw/elevation bones.

## Connectors and pylon behavior

| Control | Meaning |
| --- | --- |
| Normal | Native automatic rack/rocket placement |
| Mesh | Converts supported rocket positions onto the host mesh |
| Host model / parent bone | Model and bone carrying the connector |
| Position | Bone-relative centimetres: X forward, Y right, Z up |
| Rotation | Bone-relative XYZ degrees |
| Scale | Per-axis size. Negative components mirror geometry |
| Recalculate native positions | Updates conversion from the current loadout |