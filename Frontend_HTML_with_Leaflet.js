<!DOCTYPE html>
<html>
<head>
    <title>Drone Tracker</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <style>
        #map { height: 400px; }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script>
        var map = L.map('map').setView([40.0, -74.0], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        var marker = L.marker([40.0, -74.0]).addTo(map);

        function updateLocation() {
            $.getJSON('/location', function(data) {
                var latlng = [data.latitude, data.longitude];
                marker.setLatLng(latlng);
                map.panTo(latlng);
            });
        }

        setInterval(updateLocation, 2000); // Update the location every 2 seconds
    </script>
</body>
</html>
