const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) =>  {return journey.startLocation });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) =>  {return journey.endLocation });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
 return this.journeys.reduce((runningTotal, journey) =>
   runningTotal + journey.distance, 0)
 };

Traveller.prototype.getUniqueModesOfTransport = function () {
   let onlyUnique = function (value, index, self) {
     return self.indexOf(value) === index;
   };
   transportArray = this.journeys.map((journey) => journey.transport)
   return transportArray.filter(onlyUnique)
};

module.exports = Traveller;
