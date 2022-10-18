const map = L.map('map-template').setView([14.601193176769522, -90.65501422035939], 15);
const titleUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';//'https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
L.tileLayer(titleUrl).addTo(map);
map.locate({enableHighAccuracy:true});

L.marker([14.600833087033658, -90.6547411110539]).bindPopup('Estoy Aquí Henry!!!').addTo(map);
