export default async function fetchIndividualRaceResult(params) {
  return await fetch(
    `http://ergast.com/api/f1/${params.season}/${params.round}/results.json`
  )
    .then((response) => response.json())
    .then(({ MRData }) => {
      const result = Object.values(MRData)[Object.values(MRData).length - 1];
      const cleanResult =
        Object.values(result)[Object.values(result).length - 1];
      const { Results } = cleanResult[0];
      return Results;
    })
    .catch((error) => console.log('Fetch finished'));
}
