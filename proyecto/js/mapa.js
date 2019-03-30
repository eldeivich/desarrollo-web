

  var mapa = document.getElementById('mapa');
  if(mapa) {
    var map = L.map('mapa').setView([40.324676, -3.783841], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.324676, -3.783841]).addTo(map)
        .bindPopup('El evento del año.<br> No te quedes sin tu entrada!!.')
        .openPopup()
        .bindTooltip('Un Tooltip')
        .openTooltip();
      }
