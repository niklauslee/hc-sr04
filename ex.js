const { HCSR04 } = require("./index");
const hcsr04 = new HCSR04(17, 16);
let dist = hcsr04.distance();
if (dist !== null) {
  console.log(`Distance is ${dist} mm.`);
} else {
  console.log("Failed to measure");
}
