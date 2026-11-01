---
title: "Use the weapon editor"
description: "Edit weapon stats, firing sounds, and effects in the two-panel Weapons editor."
---

The **Weapons** editor separates gameplay from firing presentation:

- **Happening Composite (left):** sounds and visual effects triggered when the weapon fires.
- **Weapon properties (right):** the ammunition's gameplay settings and its **STATS**, **NDF**, **MATERIAL**, **TRANSLATE**, and (when available) **SOUND** tabs.

You can resize the right panel by dragging its divider. For example, an **AGM-65G Maverick** has missile settings, while other weapons may show different fields.

## 1. Open the right weapon

1. In **Showroom**, select a unit, open its **Mounts** inspector, and follow the mounted weapon into **Weapons**.
2. Check the weapon name at the top of the editor.
3. If the change must apply to only one unit or variant, **Clone** the weapon first and later assign the clone to that unit's mount. A shared weapon edit also affects other units that use it.

## 2. Set gameplay values on the right

1. Select **STATS**.
2. Under **TYPE**, choose the **Projectile behaviour** and **Targeting cursor** appropriate to the weapon. **Show on unit card** controls its UI display.
3. Open **GUIDANCE** for options such as **Flies as a missile**, **Fire and forget**, and **Fires indirectly**. Missile-specific controls depend on an available `MissileDescriptor`; the editor reports when that referenced source cannot be resolved.
4. In **GUIDANCE**, expand the hit-roll rule for accuracy fields. Open **DAMAGE** for damage, **RANGE** for target distances, and **RATE OF FIRE** for shots and salvos. The **HEAT** selector, for example, chooses a damage family and strength, not a generic damage-number box. `HitProbability` is a fraction: `0.6` means 60% base hit probability.

Change one value at a time. For typed numbers, finish the edit by leaving the field; check for an error before making the next change. Hover a control for its field name or hint. See [Weapon parameters](/WGRD-Mod-Toolkit/parameters/weapons/) and [Missile parameters](/WGRD-Mod-Toolkit/parameters/missiles/) for individual fields and units.

## 3. Choose the firing sound on the left

1. In **Happening Composite**, find a **Firing sound** card. If there is none, choose **+ Add happening → Firing sound**. You can also add a **Group** to organize multiple happenings.
2. Under **Normal sounds**, click **Add sound**, search the available sound library, and select a sound. If the library is still loading, let its spinner finish.
3. Repeat under **Long-range sounds** if the weapon needs a separate distant sound. These are independent game-data channels, so they may reference the same audio or different audio. Some original game weapons leave one or both channels unset.
4. To replace an existing entry, click **Change sound**. This changes its audio while retaining its playback settings.

The name and path shown under a sound (for example, `SFX_Tir_Missile_Medium.wav`) identify the selected game audio resource. **Add sound** chooses an existing library entry; it is not a file-import button. The original game sometimes uses the **same audio in both channels**, with different distance-fade settings. Adding another entry to an occupied channel creates a sound collection with **Play in random order** enabled by default.

| Action | What it changes |
| --- | --- |
| **Add sound** | Adds an entry to that channel (or creates its first entry) |
| **Change sound** | Replaces the selected entry's audio, keeping its playback settings |
| **Remove sound** | Removes that entry from its channel |
| **Clear** | Removes all sounds from that channel, without clearing the other channel |
| **Remove** on the **Firing sound** card | Removes the entire firing-sound happening |

## 4. Adjust sound playback, if necessary

Within each sound entry, use its **Playback settings**. Existing settings are shown; **Add property** exposes additional supported native properties when available.

- **3D** (`Use_3D`) positions playback at the sound emitter.
- **Loop** (`UseLoopMarker`) uses loop markers in the audio file. This is **not** the same as the separate numeric **Looping** field.
- **Micro** (`UseMicroCanon`) is the game's micro-cannon mode; its precise playback behavior is not confirmed by the available game source.
- **Fade in / Fade out** use start and end distance thresholds in the source's **native distance units**. Do not assume these values are metres.
- **Pitch**, **Reference volume**, and **Random pitch variation** adjust the entry's native playback values. The numeric **Looping** field has no confirmed per-value interpretation.

Only change the properties you need. The normal and long-range entries each retain their own settings.

## 5. Add a visual firing effect

Use **+ Add happening → Firing effect** on the left. For an effect action, **Choose effect** offers compatible effects from the workspace. **Group** and the card order controls let you organize these happenings. For effect details, see [Effect parameters](/WGRD-Mod-Toolkit/parameters/effects/).

## 6. Finish and check the result

The right-hand tabs serve different purposes: **NDF** exposes the underlying definition, **MATERIAL** handles the weapon's model/materials, **TRANSLATE** handles displayed text, and **SOUND** (if present) provides another view of firing-sound properties. Use **STATS** for ordinary gameplay edits.

After the editor finishes saving, leave the weapon and reopen it to confirm the changed values and sound references. If you cloned the weapon, assign the new variant through the unit's **Mounts** inspector. Finally, **repack** your mod and check the weapon in game: a saved source edit is not the same as an updated game pack.
