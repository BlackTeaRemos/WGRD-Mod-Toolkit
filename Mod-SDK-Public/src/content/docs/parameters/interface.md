---
title: "Interface parameters"
description: "Game interface size, position, colors, and text."
---

## Frame layout

| Control / tooltip | Meaning |
| --- | --- |
| Scaled size (`MagnifiableWidthHeight`) | Size multiplied by interface magnification |
| Scaled offset (`MagnifiableOffset`) | X/Y offset multiplied by magnification |
| Relative size (`RelativeWidthHeight`) | Fraction of the parent's size |
| Parent anchor (`AlignementToFather`) | Point on the parent used for placement |
| Component anchor (`AlignementToAnchor`) | Point on this component placed at the parent anchor |

For each axis, including constant/relative offsets where offered:

```text
size = constantSize + scaledSize * magnification + relativeSize * parentSize
position = parentPosition + parentAnchor * parentSize - componentAnchor * size
         + constantOffset + scaledOffset * magnification
         + relativeOffset * parentSize
```

Coordinates start at the top left, with Y downward. Relative size `1` contributes the parent's full size. Anchor `0.5` is its center.

## Colors, sizes, and text

| Control / tooltip | Meaning |
| --- | --- |
| Color / alpha | Tint and opacity |
| Shared palettes (`TextColorList`, `BlockColorList`, `LineColorList`) | Colors used by every widget referencing that entry |
| Shared sizes (`TextSizeList`, `LineSizeList`, `LineHeightList`) | Text and line dimensions |
| Style indexes (`TextColorIndexInDeskStyle`, `TextSizeIndexInDeskStyle`) | Select a palette or size entry |
| Translation | Displayed wording in the chosen language |
| Hotkey / button order / visibility | Command binding and when a control appears |

[Deck image controls](/WGRD-Mod-Toolkit/parameters/decks/) handle flags, bonus images, and emoji. `SymetrieX` mirrors an emoji. `UseTextColor` applies text-color tinting.