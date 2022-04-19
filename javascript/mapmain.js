mapboxgl.accessToken = 'pk.eyJ1IjoiYWpjaHUyOCIsImEiOiJja3o2M3MzMWswd200MnZwNGdieTNlaHRjIn0.BePZiTybP8rLoo6yQKon_w';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ajchu28/cl02pt6kd000714l36asbutmv',
    zoom: 11,
    center: [-87.623177, 41.881832]
});

// Adding Sources
// map.addSource('community_districts', {
//     type: 'geojson',
//     data: 'mapbox://iamwfx.results1_2'
// })

// Creates links for the toggle menu
function layer_toggle(id) {
    // Create a link.
    const link = document.createElement('a');
    link.id = id;
    link.href = '#';
    link.textContent = id;
    link.className = '';

    const layers = document.getElementById('menu');
    layers.appendChild(link);

    return link;
}

// Adjusts the borders of the active layer when it is clicked
function adjust_active_layer(clickedLayer, property_types) {

    map.on('mousemove', (event) => {
        const boundaries = map.queryRenderedFeatures(event.point, {
        layers: [clickedLayer]
        });
        document.getElementById('pd').innerHTML = boundaries.length
        ? `<p><strong><em>${boundaries[0].properties[property_types[clickedLayer]]}</strong> units</em></p>`
        : `<p>Hover over an area!</p>`;
        });
}

// Adjusts visibility of layers when a link is clicked
function toggle_vis(clickedLayer, layers) {

    map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'visible'
    );

    for (const layer of layers) {
        if (layer != clickedLayer) { 
            const element = document.getElementById(layer);
            element.className = '';
            map.setLayoutProperty(
                layer,
                'visibility',
                'none'
            )
        }
    }
}

// var $cont = $(".ui.checkbox");
// var $checkbox = $(".ui.checkbox input");

// $cont.checkbox({
//   onEnable: function() {
//     console.log("onEnable!" + $checkbox.prop("checked"));
//   },
//   onDisable: function() {
//     console.log("onDisable!" + $checkbox.prop("checked"));
//   },
//   onChange: function(x) {
//     console.log("onChange!" + $checkbox.prop("checked"));
//   }
// });

// $(document).ready(
//     function () {
//         $('.ui.checkbox').checkbox(
//             'toggle'
//         );
//     });

// Wait until the map has finished loading.
map.on('load', () => {
    
    // Load layers of data
    map.setLayoutProperty('bge_data', 'visibility', 'none')
    map.setLayoutProperty('ce_data', 'visibility', 'none');
    map.setLayoutProperty('wei_data', 'visibility', 'none');

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

    const property_types = {
        'wei_data': 'weighted_interaction_exposure',
        'ce_data': 'cell_exp',
        'bge_data': 'blkgrp_exp'
    };

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        link = layer_toggle(id);

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
            const clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            if (visibility === 'visible') {
                // if already visible, turn visibility off
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else {
                // change visible layer
                this.className = 'active';
                toggle_vis(clickedLayer, toggleableLayerIds);
            
                // adjust cursor boundaries
                // adjust_active_layer(clickedLayer, property_types);
            }
        };
    }
});
