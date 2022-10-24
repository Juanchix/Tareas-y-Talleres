import { Series } from './series.js';
import { dataSeries } from './dataSeries.js';

function insertSeries(dataSeries: Series[]): void {
    let tbody: HTMLElement = document.getElementById('dataSeries')!;
    console.log('Desplegando dataSeries.');
    dataSeries.map(s => {
        let tr: HTMLElement = document.createElement('tr');
        let html: string = `<td> <b>${s.id}</b> </td>
                              <td> <a href=${s.link} target="_blank">${s.name}</a> </td>
                              <td> ${s.channel} </td>
                              <td> ${s.seasons} </td>`;
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}

function insertSeasonsAvrg(dataSeries: Series[]): void {
    console.log('Calculando promedio.')
    let sum: number = 0;
    dataSeries.map(s => {sum += s.seasons});
    const avrg: number = sum / dataSeries.length;
    console.log('Desplegando promedio.')
    let table: HTMLElement = document.getElementById('tabla-dataSeries')!;
    const html: string = '<p> &nbsp; Seasons average: '+avrg+'</p>'
    table.insertAdjacentHTML('afterend', html)
}

insertSeries(dataSeries);
insertSeasonsAvrg(dataSeries);