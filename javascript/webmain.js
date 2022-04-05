$('body').modal({
    title: 'Important Notice',
    class: 'mini',
    closeIcon: true,
    content: 'You will be logged out in 5 Minutes',
    actions: [{
      text: 'Alright, got it',
      class: 'green'
    }]
}).modal('show');

//build histogram
// data for histogram
const data = [
    {start:0.67,count:5,bucket:'bucket0'},
    {start:0.6921597,count:13,bucket:'bucket1'},
    {start:0.7143194,count:33,bucket:'bucket2'},
    {start:0.7364791,count:133,bucket:'bucket3'},
    {start:0.7586388,count:547,bucket:'bucket4'},
    {start:0.7807985,count:1699,bucket:'bucket5'},
    {start:0.8029582,count:3545,bucket:'bucket6'},
    {start:0.8251179,count:5697,bucket:'bucket7'},
    {start:0.8472776,count:7944,bucket:'bucket8'},
    {start:0.8694373,count:10062,bucket:'bucket9'},
    {start:0.891597,count:11148,bucket:'bucket10'},
    {start:0.9137567,count:10328,bucket:'bucket11'},
    {start:0.9359164,count:8163,bucket:'bucket12'},
    {start:0.9580761,count:5862,bucket:'bucket13'},
    {start:0.9802358,count:3748,bucket:'bucket14'},
    {start:1.0023955,count:2099,bucket:'bucket15'},
    {start:1.0245552,count:883,bucket:'bucket16'},
    {start:1.0467149,count:344,bucket:'bucket17'},
    {start:1.0688746,count:84,bucket:'bucket18'},
    {start:1.0910343,count:22,bucket:'bucket19'}
];

let width = 190, height = 112;

let x = d3.scaleBand().range([0, width]).round(.05);
let y = d3.scaleLinear().range([height, 0]);

let svg = d3.select("#histogram-placeholder")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

x.domain(data.map(d => d.start));
y.domain([0, d3.max(data, d => d.count)]);

svg.selectAll("bar")
  .data(data)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", d => x(d.start))
  .attr("width", x.bandwidth())
  .attr("y", d => y(d.count))
  .attr("height", d => height - y(d.count))
  .attr("fill", d => hditoColor(d.start))
  .attr("id", d => d.bucket);