export default function getNextRaceDate() {
  return fetch('https://api.formula1.com/v1/event-tracker', {
    headers: {
      apiKey: 'qPgPPRJyGCIPxFT3el4MF7thXHyJCzAP',
      locale: 'en',
    },
  }).then((response) => response.json());
}
