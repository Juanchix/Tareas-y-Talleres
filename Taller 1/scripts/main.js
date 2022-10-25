import { series } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
renderCoursesInTable(series);
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.link, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function insertSeasonAVG(series) {
    var suma = 0;
    series.map(function (serie) { suma += serie.seasons; });
    var avg = suma / series.length;
    var table = document.getElementById('tabla-series');
    var html = '<p> &nbsp; Seasons average: ' + avg + '</p>';
    table.insertAdjacentHTML('afterend', html);
}
