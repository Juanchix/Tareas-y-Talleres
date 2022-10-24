import { dataSeries } from './dataSeries.js';
function insertSeries(dataSeries) {
    var tbody = document.getElementById('dataSeries');
    console.log('Desplegando dataSeries.');
    dataSeries.map(function (s) {
        var tr = document.createElement('tr');
        var html = "<td> <b>".concat(s.id, "</b> </td>\n                              <td> <a href=").concat(s.link, " target=\"_blank\">").concat(s.name, "</a> </td>\n                              <td> ").concat(s.channel, " </td>\n                              <td> ").concat(s.seasons, " </td>");
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}
function insertSeasonsAvrg(dataSeries) {
    console.log('Calculando promedio.');
    var sum = 0;
    dataSeries.map(function (s) { sum += s.seasons; });
    var avrg = sum / dataSeries.length;
    console.log('Desplegando promedio.');
    var table = document.getElementById('tabla-dataSeries');
    var html = '<p> &nbsp; Seasons average: ' + avrg + '</p>';
    table.insertAdjacentHTML('afterend', html);
}
insertSeries(dataSeries);
insertSeasonsAvrg(dataSeries);
