import { Series } from './series.js';
import { series } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

renderCoursesInTable(series);

function renderCoursesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.link}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function insertSeasonAVG(series:Series[]):void{
    let suma: number = 0;
    series.map(serie => {suma += serie.seasons});
    let avg: number = suma / series.length;
    let table: HTMLElement = document.getElementById('tabla-series')!;
    const html: string = '<p> &nbsp; Seasons average: '+avg+'</p>'
    table.insertAdjacentHTML('afterend', html)
}
