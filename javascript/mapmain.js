mapboxgl.accessToken = 'pk.eyJ1IjoiYWpjaHUyOCIsImEiOiJja3o2M3MzMWswd200MnZwNGdieTNlaHRjIn0.BePZiTybP8rLoo6yQKon_w';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ajchu28/cl02pt6kd000714l36asbutmv',
    zoom: 11,
    center: [-87.623177, 41.881832]
});

// Wait until the map has finished loading.
map.on('load', () => {
    
    // Load layers of data
    const bge_data = map.getLayer('bge_data');
    map.setLayoutProperty('bge_data', 'visibility', 'none');

    const ce_data = map.getLayer('ce_data');
    map.setLayoutProperty('ce_data', 'visibility', 'none');

    const wei_data = map.getLayer('wei_data');
    map.setLayoutProperty('wei_data', 'visibility', 'none');

    // build legend
    const layers = [
    '0-0.14',
    '0.14-0.27',
    '0.27-0.41',
    '0.41-0.54',
    '0.54-0.68',
    '0.68+'
    ];
    const colors = [
    '#f2f9ea',
    'hsl(156, 35%, 74%)',
    'hsl(200, 46%, 58%)',
    'hsl(209, 50%, 46%)',
    'hsl(221, 49%, 35%)',
    'hsl(222, 62%, 25%)'
    ];

    // create a legend
    const legend = document.getElementById('legend');
    layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        const value = document.createElement('span');
        value.innerHTML = `${layer}`;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    });

    map.getCanvas().style.cursor = 'default';
});

// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
    // If these two layers were not added to the map, abort
    if (!map.getLayer('ce_data') || !map.getLayer('wei_data') || !map.getLayer('bge_data')) {
        return;
    }

    // Enumerate ids of the layers.
    const toggleableLayerIds = ['wei_data', 'ce_data', 'bge_data'];

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = '';

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
            const clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            // Toggle layer visibility by changing the layout object's visibility property.
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(
                    clickedLayer,
                    'visibility',
                    'visible'
                );
                console.log("clicked layer is %s", clickedLayer);
                for (const layer of toggleableLayerIds) {
                    if (layer != clickedLayer) { 
                        console.log("iterate layer is %s", layer);
                        const element = document.getElementById(layer);
                        element.className = '';
                        // this.className = 'active';
                        map.setLayoutProperty(
                            layer,
                            'visibility',
                            'none'
                        )
                    }
                }

                // // Turn off layers that aren't selected
                // // Add in communities/land use layers
                // for (const layer of toggleableLayerIds) {
                //     if (map.getLayoutProperty(layer, 'visibility') === 'visible') {
                //         map.moveLayer(layer, clickedLayer);
                //     }
                // }

                // change active layer to cursor boundaries
                map.on('mousemove', (event) => {
                const boundaries = map.queryRenderedFeatures(event.point, {
                layers: [clickedLayer]
                });

                // console.log("clicked layer is %s", clickedLayer);

                var property_type = 'none';
                if (clickedLayer === 'wei_data') {
                    property_type = 'weighted_interaction_exposure';
                } else if (clickedLayer === 'ce_data') {
                    property_type = 'cell_exp';
                } else if (clickedLayer === "bge_data") {
                    property_type = 'blkgrp_exp';
                } else {
                    property_type = 'none';
                }

                // switch(String(clickedLayer)) {
                //     case 'wei_data':
                //         console.log("clicked layer is %s", clickedLayer);
                //         property_type = 'weighted_interaction_exposure';
                //     case 'ce_data':
                //         console.log("clicked layer is %s", clickedLayer);
                //         property_type = 'cell_exp';
                //     case 'bge_data':
                //         console.log("clicked layer is %s", clickedLayer);
                //         property_type = 'blkgrp_exp';
                //     default:
                //         break;
                // }

                // console.log("property type is %s", property_type);

                document.getElementById('pd').innerHTML = boundaries.length
                ? `<p><strong><em>${boundaries[0].properties.property_type}</strong> units</em></p>`
                : `<p>Hover over an area!</p>`;
                });
            }
        };

        const layers = document.getElementById('menu');
        layers.appendChild(link);
    }
});