class HCSR04 {
  constructor(trig, echo) {
    this.trig = trig;
    this.echo = echo;
    pinMode(this.trig, OUTPUT);
    pinMode(this.echo, INPUT);
  }

  distance() {
    var pulse = pulseRead(this.echo, 1, {
      mode: INPUT,
      startState: HIGH,
      trigger: {
        pin: this.trig,
        startState: LOW,
        interval: [2, 10],
      },
    });
    if (pulse) {
      return ((pulse[0] * 0.34) / 2).toFixed(2);
    } else {
      return null;
    }
  }
}

exports.HCSR04 = HCSR04;
