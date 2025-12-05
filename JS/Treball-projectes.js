(() => {
  const REFRESH_INTERVAL = 60000;
  const AVERAGE_SPEED_KMH = 40;

  const statusEl = document.getElementById('status');
  const btnLocate = document.getElementById('btn-locate');
  const btnRefresh = document.getElementById('btn-refresh');
  const listEl = document.getElementById('list');
  const radiusEl = document.getElementById('radius');
  const radiusValueEl = document.getElementById('radius-value');
  const priorityEl = document.getElementById('priority');
  const minBedsEl = document.getElementById('min-beds');
  const commentsListEl = document.getElementById('comments-list');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');

  let userLocation = {lat:41.3879, lng:2.16992};
  let map = null;
  let markers = [];
  let comments = [];

  const MOCK_HOSPITALS = [
    {id:1,name:'Hospital Clínic de Barcelona',lat:41.3851,lng:2.1734, occupancy:0.72, beds_available:2, rating:4.2},
    {id:2,name:'Hospital Universitari Vall d’Hebron',lat:41.4029,lng:2.1910, occupancy:0.38, beds_available:8, rating:4.0},
    {id:3,name:'Hospital de Bellvitge',lat:41.3606,lng:2.1636, occupancy:0.91, beds_available:0, rating:3.6},
    {id:4,name:'Hospital Sant Pau',lat:41.4300,lng:2.2200, occupancy:0.12, beds_available:12, rating:4.6}
  ];

  const colorMap = { good:'#16a34a', warn:'#f59e0b', bad:'#dc2626' };

  function haversine(lat1, lon1, lat2, lon2) {
    const toRad = d => d * Math.PI / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    return 2 * R * Math.atan2(Math.sqrt(Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2), Math.sqrt(1-(Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2)));
  }

  function occupancyCategory(v){
    if(v<0.4) return 'good';
    if(v<0.75) return 'warn';
    return 'bad';
  }

  function computeScore(h, opts){
    const maxDistance = opts.radius || 50;
    const d = Math.min(h._distance, maxDistance);
    const distanceScore = 1 - (d / maxDistance);
    const occupancyScore = 1 - (h.occupancy ?? 1);
    const bedsScore = Math.tanh((h.beds_available ?? 0)/10);
    const ratingScore = (h.rating ?? 3)/5;
    let w = {distance:0.5, occupancy:0.4, beds:0.05, rating:0.05};
    if(opts.priority === 'distance') w = {distance:0.7, occupancy:0.2, beds:0.05, rating:0.05};
    if(opts.priority === 'occupancy') w = {distance:0.2, occupancy:0.7, beds:0.05, rating:0.05};
    return Math.round(100*(w.distance*distanceScore + w.occupancy*occupancyScore + w.beds*bedsScore + w.rating*ratingScore));
  }

  function renderList(items){
    listEl.innerHTML='';
    items.forEach(h=>{
      const li=document.createElement('li');
      li.className='card';
      li.innerHTML=`<div class="info"><h3>${h.name} (${h._distance.toFixed(1)} km)</h3>
        <div class="meta">Aforament: <strong>${Math.round(h.occupancy*100)}%</strong> — Lits lliures: <strong>${h.beds_available}</strong></div>
        <div class="meta">Temps estimat: <strong>${h._etaMin} min</strong></div></div>
        <div style="text-align:right"><div class="score">${h._score}</div></div>`;
      li.addEventListener('click',()=> map.setView([h.lat,h.lng],14));
      listEl.appendChild(li);
    });
  }

  function renderMarkers(items){
    markers.forEach(m=>map.removeLayer(m));
    markers = [];
    items.forEach(h=>{
      const category = occupancyCategory(h.occupancy);
      const marker = L.circleMarker([h.lat,h.lng],{
        radius:10, fillColor: colorMap[category], color:'#000', weight:1, fillOpacity:0.9
      }).addTo(map);
      marker.bindPopup(`<strong>${h.name}</strong><br>Aforament: ${Math.round(h.occupancy*100)}%<br>Lits: ${h.beds_available}<br>Puntuació: ${h._score}`);
      markers.push(marker);
    });

    const userMarker = L.circleMarker([userLocation.lat,userLocation.lng],{radius:8, color:'#1e40af', fill:false}).addTo(map);
    markers.push(userMarker);
    userMarker.bindPopup('La teva ubicació');
  }

  function renderComments(){
    commentsListEl.innerHTML='';
    comments.forEach(c=>{
      const li=document.createElement('li');
      li.className='card';
      li.textContent=c;
      commentsListEl.appendChild(li);
    });
  }

  function update(){
    const radiusKm=Number(radiusEl.value);
    const minBeds=Number(minBedsEl.value)||0;
    const priority=priorityEl.value;

    const processed = MOCK_HOSPITALS.map(h=>{
      const d = haversine(userLocation.lat,userLocation.lng,h.lat,h.lng);
      const etaMin = Math.round(d/AVERAGE_SPEED_KMH*60);
      const obj={...h,_distance:d,_etaMin:etaMin};
      obj._score = computeScore(obj,{radius:radiusKm,priority});
      return obj;
    }).filter(h=>h._distance<=radiusKm && h.beds_available>=minBeds)
      .sort((a,b)=>b._score-a._score);

    renderList(processed);
    renderMarkers(processed);
    statusEl.textContent=`Mostrant ${processed.length} hospitals (radi ${radiusKm} km)`;
  }

  function initMap(){
    map = L.map('map').setView([userLocation.lat,userLocation.lng],12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map);
    update();
  }

  btnLocate.addEventListener('click',()=>{
    if(!navigator.geolocation){ statusEl.textContent='Geolocalització no suportada.'; return; }
    navigator.geolocation.getCurrentPosition(pos=>{
      userLocation={lat:pos.coords.latitude,lng:pos.coords.longitude};
      map.setView([userLocation.lat,userLocation.lng],13);
      update();
    }, err=>{statusEl.textContent='Error: '+err.message;},{enableHighAccuracy:true,timeout:10000});
  });

  btnRefresh.addEventListener('click',update);
  radiusEl.addEventListener('input',()=>{ radiusValueEl.textContent = radiusEl.value+' km'; update(); });
  radiusEl.addEventListener('change',()=>{ radiusValueEl.textContent = radiusEl.value+' km'; update(); });
  priorityEl.addEventListener('change',update);
  minBedsEl.addEventListener('change',update);

  commentForm.addEventListener('submit', e=>{
    e.preventDefault();
    if(commentInput.value.trim()!==''){
      comments.unshift(commentInput.value.trim());
      commentInput.value='';
      renderComments();
    }
  });

  window.addEventListener('load',initMap);
})();
