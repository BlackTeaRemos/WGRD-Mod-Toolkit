---
title: "Value controls"
description: "Displayed units, conversions, and unset values."
---

Use the units shown by the control. The conversions below apply to controls that use that conversion, rather than every similarly named field.

## Display units versus stored units

| Control kind | Conversion |
| --- | --- |
| Converted distance | `metres = raw / 74.2857142857` |
| Converted speed | `km/h = raw / 52` |
| Acceleration or braking | `km/h/s = raw / 52` |
| Dedicated turret angles and angular speeds | `degrees = radians * 180 / pi` |
| Connector position | Centimetres relative to the parent bone |
| Connector rotation | Degrees |

Stored range `156000` displays as about **2100 m** in a converted range control.

### Road speed is a compound value

The road-speed control shows total road speed. For positive base speed, using displayed km/h:

```text
roadSpeed = baseSpeed * (1 + roadBonus)
roadBonus = roadSpeed / baseSpeed - 1
```

## Types and absent values

Checkboxes are yes/no values. Number, text, color, and vector controls retain their own kind.

**Unset** removes an explicit value. It is different from zero, false, or empty text. The game's fallback depends on the field. Required values cannot be cleared.
