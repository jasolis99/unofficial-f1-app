export default async function fetchRaceResults(index, year = '2021') {
  return await fetch(`http://ergast.com/api/f1/${year}/${index}/results.json`)
    .then((response) => response.json())
    .then(({ MRData }) => {
      const result = Object.values(MRData)[Object.values(MRData).length - 1];
      const { season, round } = result;
      const cleanResult =
        Object.values(result)[Object.values(result).length - 1];
      const { Circuit, date, Results } = cleanResult[0];
      const podium = Results.slice(0, 3);
      Circuit['season'] = season;
      Circuit['round'] = round;
      Circuit['date'] = date;
      Circuit['podium'] = podium;
      Circuit['date'] = date;
      Circuit['podium'] = podium;
      return Circuit;
    })
    .catch((error) => console.log('Fetch finished'));
}
