export default function fetchDrivers(season = 'current') {
  return fetch(`http://ergast.com/api/f1/${season}/driverStandings.json`)
    .then((response) => response.json())
    .then(({ MRData }) => {
      const result = Object.values(MRData)[Object.values(MRData).length - 1];
      const cleanResult =
        Object.values(result)[Object.values(result).length - 1];
      return cleanResult[0].DriverStandings;
    })
    .catch((error) => console.log('error', error));
}
