---
title: "Models, materials and animation"
description: "How material, texture, model, and animation controls look in game."
---

## Materials

| Control / tooltip | Visible effect |
| --- | --- |
| Material type | Standard, glass, or mirrored-glass rendering |
| Two-sided (`twoSided`) | Draws both sides of a surface |
| Transparency (`transparency`) | Alpha-blended rendering |
| Tracks (`IndexedChenilles`) | Track-texture scrolling |
| `selfIllumPower` | Self-illumination input |
| `specularPower` | Specular-highlight input |
| `opacityPower`, `opacityPowerMax` | Opacity-response inputs. Exact formula unconfirmed |

An unset material value can render differently from zero.

## Texture alpha

The texture slot determines what alpha means.

| Slot | Alpha use |
| --- | --- |
| `diffuseTextureNoAlpha` | No material alpha payload |
| `CombinedDSTexture` | Specular mask |
| `CombinedDATexture` | Opacity mask |
| `CombinedDASTexture` | Combined opacity/specular data |

Texture placement must match the model's UV layout.

## Models and LODs

The active model selects the part being edited. Importing on a LOD row replaces that LOD.

## Animation

Animation binding (`FileName`) selects the clip asset for that entry.

**Play**, **Pause**, **Rewind**, the time slider, and playback speed are preview controls. **Skin weights** shows bone influences.