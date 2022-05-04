// Constants for zone colors
const zone_1 = '#a6cee3'
const zone_2 = '#1f78b4'
const zone_3 = '#b2df8a'
const zone_4 = '#33a02c'
const zone_5 = '#fb9a99'
const zone_6 = '#e31a1c'
const zone_7 = '#fdbf6f'
const zone_8 = '#ff7f00'
const zone_9 = '#cab2d6'
const zone_10 = '#6a3d9a'
const zone_11 = '#ffff99'
const zone_12 = '#b15928'



// Adding Sources
function load_layers() {
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    })

    // Land Use
    map.addLayer({
        id:'landuse_0',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_0'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_1',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_1'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_2',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_2'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_3',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_3'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_5',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_5'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_6',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_6'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_7',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_7'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_8',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_8'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_9',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_9'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_10',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_10'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_11',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_11'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_12',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_12'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_13',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_13'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_14',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_14'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })

    map.addLayer({
        id:'landuse_15',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.landuse_15'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "match",
                ["get", "zone_type"],
                [1],
                zone_1,
                [2],
                zone_2,
                [3],
                zone_3,
                [4],
                zone_4,
                [5],
                zone_5,
                [6],
                zone_6,
                [7],
                zone_7,
                [8],
                zone_8,
                [9],
                zone_9,
                [10],
                zone_10,
                [11],
                zone_11,
                [12],
                zone_12,
                '#ffffff'
              ],
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    })
}