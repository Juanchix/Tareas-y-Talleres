import { Series } from './series.js';
import { series } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let tabla: HTMLElement = document.getElementById('tablaSeries')!;

function renderSeriesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a href='${serie.link}'>${serie.name}</a></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
  let avg:number = getAvgSeasons(series);
  const msg: string = '<p>&nbsp;&nbsp;Seasons average: ' +avg+ '</p>'
  tabla.insertAdjacentHTML('afterend', msg)
}

function getAvgSeasons(series: Series[]): number {
  let total: number = 0;
  series.forEach((serie) => {
      total = total + serie.seasons;
  });
  let avg : number = total/series.length;
  return avg;
}

renderSeriesInTable(series);
