# HC-SR04

Kaluma library for HC-SR04 which is an ultrasonic distance measurement module.

# Wiring

Here is a wiring example with HC-SR04.

| Raspberry Pi Pico | HC-SR04 |
| ----------------- | ------- |
| VBUS              | VCC     |
| GND               | GND     |
| GP16              | ECHO    |
| GP17              | TRI     |

> HC-SR04 requires 5V input

![wiring](https://github.com/niklauslee/hc-sr04/blob/main/images/wiring.jpg?raw=true)

# Install

```sh
npm install https://github.com/niklauslee/hc-sr04
```

# Usage

```js
const {HCSR04} = require('hc-sr04');
const hcsr04 = new HCSR04(17, 16);
let dist = hcsr04.distance();
if (dist !== null) {
  console.log(`Distance is ${dist} mm.`);
} else {
  console.log('Failed to measure');
}
```

# API

## Class: HCSR04

### new HCSR04(trig, echo)

- **`trig`** `<number>` Trigger pin.
- **`echo`** `<number>` Echo pin.

Create an instance of `HCSR04` class.

### hcsr04.distance()

- **Return** `<number>`

Returns the measured distance in millimeter.
