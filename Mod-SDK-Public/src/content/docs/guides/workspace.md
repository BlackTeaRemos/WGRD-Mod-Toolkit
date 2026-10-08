---
title: "Workspace guide"
description: "Select a mod, read its status, and build its output."
---

Workspace selects the mod you are editing. See [workspace controls](/WGRD-Mod-Toolkit/start/controls/) for folder setup and the main buttons.

## Mod controls

1. Select a **mod name** to open its editable source.
2. Use **Unpack** to create editable source from installed packs.
3. Use **Repack** to build and install the selected mod.
4. Use **Refresh** to reload the mod list and recheck its output.
5. Use **Git** to manage the selected mod's repository.

## Status

| Column | Meaning |
| --- | --- |
| **Source** | **Editable** means source is available. **Packs only** means it needs unpacking. |
| **Build** | Shows whether output is present, missing, incomplete, or needs repacking. |
| **On** | Shows whether the installed mod is enabled. |

**Checking** means the status is loading. **Check failed** means you should read the reported error. **Save blocked** means a source save needs attention before repacking.

Finish pending **Apply** or **Save** actions before switching mods.
