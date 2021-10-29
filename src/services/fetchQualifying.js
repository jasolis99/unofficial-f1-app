export default async function fetchQualifying(params) {
  return await fetch(
    `http://ergast.com/api/f1/${params.season}/${params.round}/qualifying.json`
  )
    .then((response) => response.json())
    .then(({ MRData }) => {
      const result = Object.values(MRData)[Object.values(MRData).length - 1];
      const cleanResult =
        Object.values(result)[Object.values(result).length - 1];
      const { QualifyingResults } = cleanResult[0];
      return QualifyingResults;
    })
    .catch((error) => console.log('Fetch finished'));
}
