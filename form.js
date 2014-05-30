
var points=[];
var height = 400;
var width = 400;

var createGraph = function(){
d3.json("data.json", function(data){

	var svg = d3.select("#plotA").append("svg").attr("id","svgplotA")
.attr("height", height)
.attr("width", width);

	points = data;
	var xScale = d3.scale.linear().domain([0, 24]).range([20, width-20]);
	var yScale = d3.scale.linear().domain([0, 24]).range([height-20, 30]);
	// points.forEach(function(e){

	// 	// console.log(e);
	// })
	var circles = svg.selectAll("circle").data(points);

	circles.enter().append("circle").style("fill", "#ff7777").attr("r", 4);
	



	circles
	.attr("cx", function (point) { return xScale(point.it); })
	.attr("cy", function (point) { return yScale(point.outdoor); });

	var xAxis = d3.svg.axis()
                  .scale(xScale);

   	var yAxis = d3.svg.axis()
                  .scale(yScale).orient("left");

     var axisGroupX = svg.append("g").call(xAxis).attr("transform", "translate(0," + (height - 19) + ")").attr("class", "axis");
     var axisGroupY = svg.append("g").call(yAxis).attr("transform", "translate(" +20 + ",0)").attr("class", "axis");

   svg.append("text")
    .attr("x", 200 )
    .attr("y", 15).attr("id","titleofgraph")
    .style("text-anchor", "middle")
    .text("Scatterplot: Time on Internet(x) v. Time Outdoors(y)");
});
};

$(document).ready(function () {


createGraph();



$('#simpleform').submit(function(){
		ln=$(input[name="lastname"]).val();
		fn=$(input[name="firstname"]).val();


		var firstname =$(input[name="firstname"]).val();
		var lastname =$(input[name="lastname"]).val();
		var email = $(input[name="email"]).val();
		var dob = $(input[name="dob"]).val();
		var color = $(input[name="color"]).val();
		var internet =$(input[name="internet"]).val();

		
		var medium = $("#mediumuse").val();
		var addiction =$("#internetaddiction").val();
		var outdoor =$(input[name="outdoors"]).val();

		var objcontainer = [];
		var obj = new Object();
		obj.fn = firstname;
		obj.ln = lastname;
		obj.email = email;
		obj.dob = dob;
		obj.color = color;
		obj.it = internet;
		obj.medium = medium;
		obj.addiction = addiction;
		obj.outdoor = outdoor;
		objcontainer.push(obj);
		//alert(objcontainer);
		
//note that the url is specific to how your testing. this is from playing on xampp
	 $.ajax({
	 	// or post
	 	type: 'GET',
	 	async : false, 
	 	dataType: 'json',
	 	url: 'http://localhost/inputOutputGraph/writefile.php',
	 	data: { data : objcontainer },
	 	success: function(){
	 		alert("Thank you for filling this simple form out");
	 	},
	 	failure : function(){
	 		alert("it was a failure");
	 	}

	 });



	$('#plotA').each(function(){
		this.remove();
	});
	$("#graphhere").append("<div id=\"plotA\"></div>");
	createGraph(); 
	});



});





