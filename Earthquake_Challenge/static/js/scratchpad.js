// Adding plates for the challenge

// 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
let tectonicplates = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

d3.json(tectonicplates).then(function(data) {
  console.log(data);

    function styleInfo(feature) {
        return {
            color: "#"

        };
    }


  // create the GeoJSON layer
  L.geoJSON(data, {

  }).addTo(allPlates);

});