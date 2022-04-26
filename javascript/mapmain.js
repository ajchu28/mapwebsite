mapboxgl.accessToken = 'pk.eyJ1IjoiYWpjaHUyOCIsImEiOiJja3o2M3MzMWswd200MnZwNGdieTNlaHRjIn0.BePZiTybP8rLoo6yQKon_w';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ajchu28/cl02pt6kd000714l36asbutmv',
    zoom: 11,
    center: [-87.623177, 41.881832]
});

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

// Adding Sources
function load_layers() {

    // Find the placeholder layer
    let placeholder = 'placeholder';


    // const layers = map.getStyle().layers;
    
    // for (const layer of layers) {
    //     if (layer.id === 'placeholder') {
    //         placeholder = layer.id;
    //         break;
    //     }
    // }


    // Community Districs
    // map.addLayer({
    //     id:'comm_district',
    //     type:'line',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.7ykn4fj2'
    //     },
    //     'source-layer': 'chicago-community-areas-1yb9r7',
    // })

    // Results
    // blkgrp_exp
    map.addLayer({
        id:'blkgrp_exp_results_1',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_0'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                ["get", "blkgrp_exp"],
                "#fcfdbf",
                0.14,
                "#fe9f6d",
                0.27,
                "#de4968",
                0.41,
                "#8c2981",
                0.54,
                "#3b0f70",
                0.68,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })
    map.addLayer({
        id:'blkgrp_exp_results_2',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_1_n'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                ["get", "blkgrp_exp"],
                "#fcfdbf",
                0.14,
                "#fe9f6d",
                0.27,
                "#de4968",
                0.41,
                "#8c2981",
                0.54,
                "#3b0f70",
                0.68,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })
    map.addLayer({
        id:'blkgrp_exp_results_3',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_2'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                ["get", "blkgrp_exp"],
                "#fcfdbf",
                0.14,
                "#fe9f6d",
                0.27,
                "#de4968",
                0.41,
                "#8c2981",
                0.54,
                "#3b0f70",
                0.68,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })
    // cell_exp
    map.addLayer({
        id:'cell_exp_results_1',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_0'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                ["get", "cell_exp"],
                "#fcfdbf",
                0.15,
                "#fe9f6d",
                0.28,
                "#de4968",
                0.41,
                "#8c2981",
                0.55,
                "#3b0f70",
                0.68,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })
    map.addLayer({
        id:'cell_exp_results_2',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_1_n'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                ["get", "cell_exp"],
                "#fcfdbf",
                0.15,
                "#fe9f6d",
                0.28,
                "#de4968",
                0.41,
                "#8c2981",
                0.55,
                "#3b0f70",
                0.68,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })
    map.addLayer({
        id:'cell_exp_results_3',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_2'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                ["get", "cell_exp"],
                "#fcfdbf",
                0.15,
                "#fe9f6d",
                0.28,
                "#de4968",
                0.41,
                "#8c2981",
                0.55,
                "#3b0f70",
                0.68,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })
    // weighted_interaction_exposure
    map.addLayer({
        id:'wei_results_1',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_0'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                [
                  "get",
                  "weighted_interaction_exposure"
                ],
                "#fcfdbf",
                0.13,
                "#fe9f6d",
                0.27,
                "#de4968",
                0.4,
                "#8c2981",
                0.53,
                "#3b0f70",
                0.66,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })
    map.addLayer({
        id:'wei_results_2',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_1_n'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                [
                  "get",
                  "weighted_interaction_exposure"
                ],
                "#fcfdbf",
                0.13,
                "#fe9f6d",
                0.27,
                "#de4968",
                0.4,
                "#8c2981",
                0.53,
                "#3b0f70",
                0.66,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })
    map.addLayer({
        id:'wei_results_3',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_2'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                [
                  "get",
                  "weighted_interaction_exposure"
                ],
                "#fcfdbf",
                0.13,
                "#fe9f6d",
                0.27,
                "#de4968",
                0.4,
                "#8c2981",
                0.53,
                "#3b0f70",
                0.66,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        },
        placeholder
    })

    // // Land Use
    // map.addLayer({
    //     id:'landuse_0',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_0'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_1',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_1'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_2',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_2'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_3',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_3'
    //     },
    //     'source-layer': 'data',
    // })

    // // map.addLayer({
    // //     id:'landuse_4',
    // //     type:'fill',
    // //     source:{
    // //         'type':'vector',
    // //         'url':'mapbox://iamwfx.landuse_4'
    // //     },
    // //     'source-layer': 'data',
    // // })

    // map.addLayer({
    //     id:'landuse_5',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_5'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_6',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_6'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_7',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_7'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_8',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_8'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_9',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_9'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_10',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_10'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_11',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_11'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_12',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_12'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_13',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_13'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_14',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_14'
    //     },
    //     'source-layer': 'data',
    // })

    // map.addLayer({
    //     id:'landuse_15',
    //     type:'fill',
    //     source:{
    //         'type':'vector',
    //         'url':'mapbox://iamwfx.landuse_15'
    //     },
    //     'source-layer': 'data',
    // })
}

// Wait until the map has finished loading.
map.on('load', () => {

    load_layers();
    
    // Load layers of data
    map.setLayoutProperty('bge_data', 'visibility', 'none');
    map.setLayoutProperty('ce_data', 'visibility', 'none');
    map.setLayoutProperty('wei_data', 'visibility', 'none');
    map.setLayoutProperty('comm_area', 'visibility', 'none');

    map.getCanvas().style.cursor = 'default';
});

// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
    // If these layers were not added to the map, abort
    if (!map.getLayer('ce_data') || !map.getLayer('wei_data') || !map.getLayer('bge_data')) {
        return;
    }

    // Enumerate ids of the layers.
    const blk_group = ['blkgrp_exp_results_1','blkgrp_exp_results_2','blkgrp_exp_results_3'];
    const wei_group = ['wei_results_1', 'wei_results_2', 'wei_results_3'];
    const ce_group = ['cell_exp_results_1','cell_exp_results_2','cell_exp_results_3'];
    // const non_disappearing = ['comm_area'];

    const results_layers = [].concat(blk_group, wei_group, ce_group);

    const toggleableLayerIds = ['wei_data', 'ce_data', 'bge_data', 'comm_area'];
    const disappearing_layers = ['wei_data', 'ce_data', 'bge_data'];

    const property_types = {
        'wei_data': 'weighted_interaction_exposure',
        'ce_data': 'cell_exp',
        'bge_data': 'blkgrp_exp',
        'comm_area': 'id',
    };

    const layer_mapping = {
        'wei_data': wei_group,
        'ce_data': ce_group,
        'bge_data': blk_group,
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
            const layer_group = layer_mapping[clickedLayer];
            e.preventDefault();
            e.stopPropagation();

            let visibility = 'none';
            if (disappearing_layers.includes(clickedLayer)) {
                visibility = map.getLayoutProperty(
                    layer_mapping[clickedLayer][0],
                    'visibility'
                );
            } else {
                visibility = map.getLayoutProperty(
                    clickedLayer,
                    'visibility'
                );
            }
            
            if (visibility === 'visible') {
                // if already visible, turn visibility off
                this.className = '';

                if (disappearing_layers.includes(clickedLayer)) {
                    for (let i = 0; i < layer_mapping[clickedLayer].length; i++) {
                        map.setLayoutProperty(layer_mapping[clickedLayer][i], 'visibility', 'none');
                    }
                } else {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                }

            } else {
                // change visible layer
                // toggle_vis(clickedLayer, disappearing_layers);
                                    this.className = 'active';
                    console.log(this);

                if (disappearing_layers.includes(clickedLayer)) {

                    for (let i = 0; i < layer_mapping[clickedLayer].length; i++) {
                        map.setLayoutProperty(
                            layer_mapping[clickedLayer][i],
                            'visibility',
                            'visible'
                        );
                    }
                } else {
                    this.className = 'active';

                    map.setLayoutProperty(
                        clickedLayer,
                        'visibility',
                        'visible'
                    );
                }
            
                element = document.getElementById(clickedLayer);
                element.className = '';

                if (disappearing_layers.includes(clickedLayer)) {
                    for (let i = 0; i < results_layers.length; i++) {
                        console.log(results_layers[i]);
                        if (!layer_mapping[clickedLayer].includes(results_layers[i])) {
                            map.setLayoutProperty(
                                results_layers[i],
                                'visibility',
                                'none'
                            )
                        }
                    }
                } else {
                    for (let i = 0; i < disappearing_layers.length; i++) {
                        console.log(disappearing_layers[i]);
                        if (disappearing_layers[i] != clickedLayer) { 
                            map.setLayoutProperty(
                                disappearing_layers[i],
                                'visibility',
                                'none'
                            )
                        }
                    }
                }

            
                // adjust cursor boundaries
                // adjust_active_layer(clickedLayer, property_types);
            }
        };
    }
});
