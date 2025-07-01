import axios from 'axios';
import cheerio from 'cheerio';

let cache = null;
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; // 1 minuto

export async function fetchBacBoResults() {
  const now = Date.now();

  if (cache && (now - lastFetchTime < CACHE_DURATION)) {
    return cache;
  }

  try {
    const url = 'https://www.tipminer.com/br/historico/jonbet/bac-bo';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const results = [];

    $('table tbody tr').each((_, row) => {
      const tds = $(row).find('td');
      const score = $(tds[0]).text().trim();
      const time = $(tds[1]).text().trim();
      const winner = $(tds[2]).text().trim();

      results.push({ score, time, winner });
    });

    cache = results;
    lastFetchTime = now;

    return results;
  } catch (error) {
    console.error('Erro ao buscar resultados do BacBo:', error);
    return cache || [];
  }
}
