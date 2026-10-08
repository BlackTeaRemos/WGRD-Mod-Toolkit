---
title: "When source and the game disagree"
description: "Locate the boundary between saved authoring, preview, repack, and installed output."
---

## Four different questions

| Stage | Question |
| --- | --- |
| Source | Did the intended value, identity, or asset assignment save? |
| Preview | Could the editor resolve and display that source? |
| Repack | Did the declared inputs produce a complete output? |
| Game | Did the game load that output and show the intended behavior? |

## Work forward from the first disagreement

If the value disappears after reopening, start with the save report. If source is correct but preview is absent, inspect the asset or reference used by the preview. If repack fails, resolve its concrete source or output error.

If repack succeeds but the game differs, confirm the installed mod, the output destination, and the relevant deck or gameplay conditions.

## Avoid an ambiguous repair

Do not modify generated packs to make them resemble the preview. Return to source, make the necessary correction, and create a new output.

Likewise, repeatedly cloning an entry does not resolve a preview failure on the first saved clone.