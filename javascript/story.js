// Story
var pageNum = 1;
var backButton = d3.select("#story-back");
var forwardButton = d3.select("#story-forward");
var pageNumbers = d3.select("#storymode-controls-numbers");
var storyHeader = d3.select("#story-header");
var storyContent = d3.select("#story-text");

var stories = [

    // layers: ['wei_data', 'ce_data', 'bge_data', 'comm_area', 'landuse', 'gentrification'];

    { title: "A New Picture of Segregation",
      description: "How do we understand racial segregation? Traditionally, we think about racial segregation in terms of neighborhoods - where people live.\
      A New Picture of Segregation describes a different way of thinking about segregation.\
      We account for the other spaces and opportunities that make up our daily social exposures.",
    //   layer: "wei_data",
    //   flyTo: {
    //     zoom: 0,
    //     center: [0, 0]
    //   },
    },
    { title: "Story 2",
      description: "South Beverly Boulevard is a dividing line between the community districts of Beverly to the west and Washington Heights to the east. Beverly is considered to  ",
      layer: "blk_group",
      flyTo: {
        zoom: 13,
        center: [-87.662654,41.720481]
      },
    },
    { title: "Story 3",
      description: "Text text text.",
      layer: "ce_data",
      flyTo: {
        zoom: 13,
        center: [-87.662654,41.720481]
      },
    },
]

// Function to update the active layer

// Update Story.
function updateStory(storyObj) {

    // Story vars.
    var title = storyObj['title'];
    var description = storyObj['description'];
    var cameraSettings = storyObj['flyTo'];
    var layer = storyObj['layer'];

    // Update the Storymode content.
    storyHeader.text(title);
    storyContent.text(description);
    map.flyTo(cameraSettings);

    // call to update to active layer
    make_visible(layer_mapping[layer], results_layers);
    $("#"+layer).prop("checked", true);
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
