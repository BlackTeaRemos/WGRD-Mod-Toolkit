---
title: "Mounts, loadouts, and connectors"
description: "Assign weapons, choose loadout assets, and place connectors."
---

Use the selected unit's **Mounts** inspector for weapons, turrets, and loadouts.

For individual fields, see [mount and loadout parameters](/WGRD-Mod-Toolkit/parameters/mounts-loadouts/).

## Controls

1. Use **Mounts** to edit weapon assignments and turret relationships.
2. Use the loadout picker to choose payload or carriage assets.
3. Use **Connectors** to edit permanent pylon geometry on the unit model.

## Pylon behavior

- **Normal** uses the game's carriage and pylon relationships for placement.
- **Mesh** converts supported rocket positions into positions on the host mesh.

## Connector placement

Choose the **host model** and **parent bone**, then edit position, rotation, and scale.

Position is in centimeters and rotation is in degrees, relative to the parent bone. The axes are **X forward, Y right, Z up**.

Use **Apply** to save the connector draft or **Discard draft** to abandon it.
