// Story
var pageNum = 1;
var backButton = d3.select("#story-back");
var forwardButton = d3.select("#story-forward");
var pageNumbers = d3.select("#storymode-controls-numbers");
var storyHeader = d3.select("#story-header");
var storyContent = d3.select("#story-text");

var stories = [

    { title: "A New Picture of Segregation",
      description: "How do we understand racial segregation? Traditionally, we think about racial segregation in terms of neighborhoods - where people live.\
      A New Picture of Segregation describes a different way of thinking about segregation.\
      We account for the other spaces and opportunities that make up our daily social exposures.",
      layer: "blk_group",
      flyTo: {
        zoom: 11,
        center: [-87.623177, 41.881832]
      },
    },
    { title: "Beverly vs. Washington Heights",
      description: "South Beverly Boulevard is a dividing line between the community districts of Beverly to the west and Washington Heights to the east. While Beverly is considered to be one of the more racially diverse neighborhoods in the city, Washington Heights saw substantial racial turnover during the 1970s and has been a majority Black neighborhood since, with 96.1% of area's residents identifying as Black, according to the 2015-2019 American Census Survey.",
      layer: "blk_group",
      flyTo: {
        zoom: 13,
        center: [-87.662654,41.720481]
      },
    },
    {
      description: "However, when we look at the overall experienced racial exposure of people moving throughout these neighborhoods over time, we can see that Washington Heights is more diverse in its activity than what the residential diversity of the areas might suggest.",
      layer: "ce_group",
      flyTo: {
        zoom: 13,
        center: [-87.662654,41.720481]
      },
    },
    {
      description: "And when we look at the interaction exposure, which measures the diversity of the potential interactions in the areas, it seems that, actually, both neighborhoods are equally diverse in this respect. Moreover, the higher diversity areas are along 95th street, which is a major commerical street in the area. ",
      layer: "wei_group",
      flyTo: {
        zoom: 13,
        center: [-87.662654,41.720481]
      },
    },
]

// Function to update the active layer

// Update Story.
function updateStory(storyObj) {

    const blk_group = ['blkgrp_exp_results_1','blkgrp_exp_results_2','blkgrp_exp_results_3'];
    const wei_group = ['wei_results_1', 'wei_results_2', 'wei_results_3'];
    const ce_group = ['cell_exp_results_1','cell_exp_results_2','cell_exp_results_3'];

    const layer_mapping = {
      'wei_group': wei_group,
      'ce_group': ce_group,
      'blk_group': blk_group,
  };
  
    // Story vars.
    var title = storyObj['title'];
    var description = storyObj['description'];
    var cameraSettings = storyObj['flyTo'];
    var layer = storyObj['layer'];
    var array = []

    // Update the Storymode content.
    storyHeader.text(title);
    storyContent.text(description);
    map.flyTo(cameraSettings);

    // call to update to active layer
    make_visible(layer_mapping[layer], array);
    $("#"+layer).prop("checked", true);
};

// Callbacks
// Story mode click through FORWARD.
backButton.on("click", function () {
  
    // Update the Navigation bottom panel.
    pageNum = pageNum - 1;
    pageNumbers.text(pageNum + " of " + stories.length);
    backButton.style( "visibility", (pageNum == 1) ? "hidden" : "visible" );
    forwardButton.style( "visibility", (pageNum == stories.length) ? "hidden" : "visible" );
  
    // Update the story.
    updateStory(stories[pageNum-1]);
});
  
  // Story mode click through BACKWARD.
forwardButton.on("click", function () {
    
    // Update the Navigation bottom panel.
    pageNum = pageNum + 1;
    pageNumbers.text(pageNum + " of " + stories.length);
    backButton.style( "visibility", (pageNum == 1) ? "hidden" : "visible" );
    forwardButton.style( "visibility", (pageNum == stories.length) ? "hidden" : "visible" );
  
    // Update the story.
    updateStory(stories[pageNum-1]);
});
  