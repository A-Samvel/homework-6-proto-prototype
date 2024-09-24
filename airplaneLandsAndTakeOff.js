function Airplane(name) {
  const flightStatus = {
    takeOff: function () {
      this.isFlying = true;
    },
    land: function () {
      this.isFlying = false;
    },
  };
  const airplane = Object.create(flightStatus);
  airplane.name = this.name;
  airplane.isFlying = false;

  return airplane;
}

const firstAirplane = Airplane("AF 1060");
firstAirplane.takeOff();
console.log(firstAirplane.isFlying);
firstAirplane.land();
console.log(firstAirplane.isFlying);
