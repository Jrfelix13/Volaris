var svgWidth = 960;
var svgHeight = 500;
var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var tweenDuration = 400;	
	
var pieData = [];    
var oldpieData = [];    

var svg = d3.select("#myPie")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

var	radius = d3.scale.linear().range([0, svgWidth/2]);
	
var color = d3.scale.ordinal().domain(["3","4","5"]).range(["red", "green", "blue"]);
							     
	
d3.json("department.json", function(ingelezen) {

	filterData = ingelezen.scores.filter(function(d) { return d.comp==currentComp; });

	
	preppedData = filterData[currentStep].parts, function(d) { return d; };
//	preppedData = filterData, function(d) { return d.parts, function(e) { return e; }};

console.log(preppedData);	
	
	donut = d3.layout.pie().value(function(d) { return d.score; });	
//	donut = d3.layout.pie().value(function(d, i) { return d3.values(d.parts[i]); });
				
				
	pieData = donut(preppedData);
//	pieData = donut(filterData, function(d, i) { return d3.values(d.parts[i]); });
//	pieData = donut(filterData, function(d, i) { return d.parts[i]; });
//	pieData = donut(filterData, function(d, i) { return d3.values(d.parts[i]); });

		
	
    maX = d3.max(filterData, function(d) { return d.thingy; } );

	radius.domain([0, maX]);
			
	arc	= d3.svg.arc()
                .startAngle(function(d) { return d.startAngle; })
                .endAngle(function(d) { return d.endAngle; })
                .innerRadius(ir)
                .outerRadius(radius(filterData[currentStep].thingy)); 
 //               .outerRadius(function(d) { return radius(d.thingy); });
 //               .outerRadius(r);
				

 vis = d3.select("#tjaart")
	.data(filterData)
//	.data(filterData, function(d) { return d; })
	.append("svg:svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("transform", function(d,i) { return "translate(" + 20 + "," + (i*60) + ")"; });
	
arc_group = vis.append("svg:g")
  .attr("class", "arc")
  .attr("transform", "translate(" + (svgWidth/2) + "," + (svgHeight/2) + ")");

 paths = arc_group.selectAll("path")
	.data(pieData)
//	.data(donut(preppedData))
//	.data(donut(filterData, function(d) { return d.parts; }));
//	.data(donut(filterData, function(d) { return d3.values(d.parts); }));
	
    paths.enter().append("svg:path")
      .style("fill", function(d) { return color(d.data.test); })
	  .style("stroke", function(d, i) { return d.data.score > 0 ? d3.rgb(color(i)).darker() : null; }) 
      .transition()
        .duration(tweenDuration)
	    .ease("bounce")
        .attrTween("d", pieTween);

		

// Interpolate the arcs in data space.
function pieTween(d, i) {
  var s0;
  var e0;
  if(oldpieData[i]){
    s0 = oldpieData[i].startAngle;
    e0 = oldpieData[i].endAngle;
  } else if (!(oldpieData[i]) && oldpieData[i-1]) {
    s0 = oldpieData[i-1].endAngle;
    e0 = oldpieData[i-1].endAngle;
  } else if(!(oldpieData[i-1]) && oldpieData.length > 0){
    s0 = oldpieData[oldpieData.length-1].endAngle;
    e0 = oldpieData[oldpieData.length-1].endAngle;
  } else {
    s0 = 0;
    e0 = 0;
  }
  var i = d3.interpolate({startAngle: s0, endAngle: e0}, {startAngle: d.startAngle, endAngle: d.endAngle});
  return function(t) {
    var b = i(t);
    return arc(b);
  };

 };



});