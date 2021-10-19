var map = L.map('mapid').setView([-6.9482061697098745, 107.6011037683509], 13);
  //L.esri.basemapLayer('Topographic').addTo(map);

  //googleStreets
  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
  }).addTo(map);