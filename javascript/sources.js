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