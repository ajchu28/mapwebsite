mapboxgl.accessToken = 'pk.eyJ1IjoiYWpjaHUyOCIsImEiOiJja3o2M3MzMWswd200MnZwNGdieTNlaHRjIn0.BePZiTybP8rLoo6yQKon_w';

const map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/ajchu28/cl02pt6kd000714l36asbutmv',
    style: 'mapbox://styles/iamwfx/cj84yjo8702b82smocliue4pn',
    zoom: 11,
    center: [-87.623177, 41.881832]
});
// Enumerate ids of the layers.
const blk_group = ['blkgrp_exp_results_1','blkgrp_exp_results_2','blkgrp_exp_results_3'];
const wei_group = ['wei_results_1', 'wei_results_2', 'wei_results_3'];
const ce_group = ['cell_exp_results_1','cell_exp_results_2','cell_exp_results_3'];
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
    'wei_group': wei_group,
    'ce_group': ce_group,
    'blk_group': blk_group,
};
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

// get the visibility of the given layer
function get_vis(clickedLayer, disappearing_layers) {
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

    return visibility;
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

// Checks to see if the layers in the array were properly loaded on the map
function layers_exist(layer_list) {
    for (i = 0; i < layer_list.length; i++) {
        if (!map.getLayer(layer_list[i])) {
            console.log(layer);
            return false;
        }
    }

    return true;
}

// given a group, makes that group visible and the others invisible
function make_visible(group, checked_layer) {

    let to_remove = []

    for (let i = 0; i < group.length; i++) {
        map.setLayoutProperty(
            group[i],
            'visibility',
            'visible'
        );
        console.log(group[i]);
        //
        // let layer = group[i];
        //
        // to_remove.push(layer);
    }

    // for(layer in checked_layer) {
    //     const index = result_layers.indexOf(layer);
    //
    //     if (index >= 0) {
    //         result_layers.splice(index, 1);
    //     };
    // }

    make_invisible(checked_layer);
    var checked_layer = layer_mapping[$('input[type=radio]:checked').attr('id')];
}

// given a group, makes that group invisible
function make_invisible(group) {
    for (let i = 0; i < group.length; i++) {
        map.setLayoutProperty(
            group[i],
            'visibility',
            'none'
        );
    }
}

// Wait until the map has finished loading.
map.on('load', () => {

    const layers = map.getStyle().layers;
    // Find the index of the first symbol layer in the map style.
    let firstSymbolId;
    for (const layer of layers) {
      console.log(layer.id)
      if (layer.id =='landcover_crop') {
        console.log(layer.id)
        firstSymbolId = layer.id;
      break;
      }
    }

    load_layers(firstSymbolId);


    // Load layers of data
    map.setLayoutProperty('bge_data', 'visibility', 'visible');
    map.setLayoutProperty('ce_data', 'visibility', 'none');
    map.setLayoutProperty('wei_data', 'visibility', 'none');
    map.setLayoutProperty('comm_area', 'visibility', 'visible');

    map.getCanvas().style.cursor = 'default';
});

// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
    // // Enumerate ids of the layers.
    // const blk_group = ['blkgrp_exp_results_1','blkgrp_exp_results_2','blkgrp_exp_results_3'];
    // const wei_group = ['wei_results_1', 'wei_results_2', 'wei_results_3'];
    // const ce_group = ['cell_exp_results_1','cell_exp_results_2','cell_exp_results_3'];
    // const results_layers = [].concat(blk_group, wei_group, ce_group);
    //
    // const toggleableLayerIds = ['wei_data', 'ce_data', 'bge_data', 'comm_area'];
    // const disappearing_layers = ['wei_data', 'ce_data', 'bge_data'];
    //
    // const property_types = {
    //     'wei_data': 'weighted_interaction_exposure',
    //     'ce_data': 'cell_exp',
    //     'bge_data': 'blkgrp_exp',
    //     'comm_area': 'id',
    // };
    //
    // const layer_mapping = {
    //     'wei_group': wei_group,
    //     'ce_group': ce_group,
    //     'blk_group': blk_group,
    // };

    // If these layers were not added to the map, abort
    if (!layers_exist(blk_group) || !layers_exist(wei_group) || !layers_exist(ce_group)) {
        console.log("aborting");
        return;
    }

    $(document).ready(function(){
      // Add in an object will just return layer names of the current checked radio button ;

        var checked_layer = layer_mapping[$('input[type=radio]:checked').attr('id')];

        $('input[type="radio"]').click(function(){
            let group = layer_mapping[$(this).attr('id')];
            make_visible(group,checked_layer);

            // if($(this).is(":checked")){
            //     console.log("unchecking");
            //     let name = this.getAttribute("id");
            //     console.log(name);
            //     let group = layer_mapping[name];
            //     make_visible(group);
            // }
            // else if($(this).is(":not(:checked)")){
            //     console.log("checking");
            //     let name = this.getAttribute("id");
            // }
        });
    });

    // // Set up the corresponding toggle button for each layer.
    // for (const id of toggleableLayerIds) {
    //     // Skip layers that already have a button set up.

    //     if (document.getElementById(id)) {
    //         continue;
    //     }

    //     link = layer_toggle(id);

    //     // Show or hide layer when the toggle is clicked.
    //     link.onclick = function (e) {
    //         const clickedLayer = this.textContent;
    //         const layer_group = layer_mapping[clickedLayer];
    //         e.preventDefault();
    //         e.stopPropagation();

    //         let visibility = get_vis(clickedLayer, disappearing_layers);

    //         if (visibility === 'visible') {
    //             // if already visible, turn visibility off
    //             this.className = '';

    //             if (disappearing_layers.includes(clickedLayer)) {
    //                 for (let i = 0; i < layer_mapping[clickedLayer].length; i++) {
    //                     map.setLayoutProperty(layer_mapping[clickedLayer][i], 'visibility', 'none');
    //                 }
    //             } else {
    //                 map.setLayoutProperty(clickedLayer, 'visibility', 'none');
    //             }

    //         } else {
    //             // change visible layer
    //             // toggle_vis(clickedLayer, disappearing_layers);

    //             this.className = 'active';
    //             if (disappearing_layers.includes(clickedLayer)) {

    //                 for (let i = 0; i < layer_mapping[clickedLayer].length; i++) {
    //                     map.setLayoutProperty(
    //                         layer_mapping[clickedLayer][i],
    //                         'visibility',
    //                         'visible'
    //                     );
    //                 }
    //             } else {
    //                 this.className = 'active';

    //                 map.setLayoutProperty(
    //                     clickedLayer,
    //                     'visibility',
    //                     'visible'
    //                 );
    //             }

    //             element = document.getElementById(clickedLayer);
    //             element.className = '';

    //             if (disappearing_layers.includes(clickedLayer)) {
    //                 for (let i = 0; i < results_layers.length; i++) {
    //                     // console.log(results_layers[i]);
    //                     if (!layer_mapping[clickedLayer].includes(results_layers[i])) {
    //                         map.setLayoutProperty(
    //                             results_layers[i],
    //                             'visibility',
    //                             'none'
    //                         )
    //                     }
    //                 }
    //             } else {
    //                 for (let i = 0; i < disappearing_layers.length; i++) {
    //                     // console.log(disappearing_layers[i]);
    //                     if (disappearing_layers[i] != clickedLayer) {
    //                         map.setLayoutProperty(
    //                             disappearing_layers[i],
    //                             'visibility',
    //                             'none'
    //                         )
    //                     }
    //                 }
    //             }


    //             // adjust cursor boundaries
    //             // adjust_active_layer(clickedLayer, property_types);
    //         }
    //     };
    // }
});
