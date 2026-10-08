---
title: "Weapons guide"
description: "Edit weapon stats, models, and displayed names."
---

Weapons edits weapon definitions. Use a unit's **Mounts** inspector to assign them to that unit.

For individual fields, see [weapon parameters](/WGRD-Mod-Toolkit/parameters/weapons/), [missile parameters](/WGRD-Mod-Toolkit/parameters/missiles/), and [effect parameters](/WGRD-Mod-Toolkit/parameters/effects/).

## Inspector tabs

1. Use **Stats** for damage, accuracy, range, and firing settings.
2. Use **Material** for the weapon model and textures.
3. Use **Translations** for displayed text.
4. Use **NDF** for objects, references, and diagnostics.

A unit's carried ammunition count and the ammunition's behavior can belong to different objects.

## Weapon variants

Use **Clone** to create an independent weapon, then assign it through the intended unit's **Mounts** inspector. Editing a shared weapon also changes it for its other users.

## Broken definitions

Use the broken-only view to find weapons with unresolved data. Select one and read the affected reference in its inspector.
