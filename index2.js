const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index.js');

/* 
 * Input: None
 * Returns: Promise for fly over data for users location
 */
// const nextISSTimesForMyLocation = function() {
//   return fetchMyIP()
//     .then(fetchCoordsByIP)
//     .then(fetchISSFlyOverTimes)
//     .then((data) => {
//       const { response } = JSON.parse(data);
//       return response;
//     });
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  });
