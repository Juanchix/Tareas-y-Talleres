import { series } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var tabla = document.getElementById('tablaSeries');
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a href='").concat(serie.link, "'>").concat(serie.name, "</a></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var avg = getAvgSeasons(series);
    var msg = '<p>&nbsp;&nbsp;Seasons average: ' + avg + '</p>';
    tabla.insertAdjacentHTML('afterend', msg);
}
function getAvgSeasons(series) {
    var total = 0;
    series.forEach(function (serie) {
        total = total + serie.seasons;
    });
    var avg = total / series.length;
    return avg;
}
renderSeriesInTable(series);
