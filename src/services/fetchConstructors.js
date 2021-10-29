export default function fetchConstructors() {
  return fetch('http://ergast.com/api/f1/current/constructorStandings.json')
    .then((response) => response.json())
    .then(({ MRData }) => {
      const result = Object.values(MRData)[Object.values(MRData).length - 1];
      const cleanResult =
        Object.values(result)[Object.values(result).length - 1];
      return cleanResult[0].ConstructorStandings;
    })
    .catch((error) => console.log('error', error));
}
