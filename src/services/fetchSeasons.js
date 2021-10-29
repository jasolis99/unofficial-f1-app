export default async function fetchSeasons(params) {
  return await fetch('http://ergast.com/api/f1/seasons.json?limit=100')
    .then((response) => response.json())
    .then(({ MRData }) => {
      const result = Object.values(MRData)[Object.values(MRData).length - 1];
      return result.Seasons;
    });
}
