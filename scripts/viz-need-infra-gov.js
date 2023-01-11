let svgSchools = d3.select("body")
    .select("#school-status") //selecting the id 
    .append("g")

let margin = {top: 60, right: 230, bottom: 50, left: 50};
let width = 850 - margin.left - margin.right;
let height = 500 - margin.top - margin.bottom;

svgSchools
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

svgSchools.append("text")
    .attr("text-anchor", "end")
    .attr("x", 0)
    .attr("y", -20 )
    .text("Percentage of schools not connected to the internet")
    .attr("text-anchor", "start")
    
const need = [
    {group: "Sudan", value: 1},
    {group: "South Sudan", value: 2},
    {group: "Sierra Leone", value: 3},
    {group: "Niger", value: 4},
    {group: "Honduras", value: 5},
    {group: "El Salvador", value: 6},
    {group: "Zimbabwe", value: 7},
    {group: "Phillipines", value: 8}
    {group: "Colombia", value: 9} ];
         
const infra = [
    {group: "Sudan", value: 1},
    {group: "South Sudan", value: 2},
    {group: "Sierra Leone", value: 4},
    {group: "Niger", value: 3},
    {group: "Honduras", value: 6},
    {group: "El Salvador", value: 7},
    {group: "Zimbabwe", value: 5},
    {group: "Phillipines", value: 8}
    {group: "Colombia", value: 9} ];

const govt = [
    {group: "Sudan", value: 2},
    {group: "South Sudan", value: 1},
    {group: "Sierra Leone", value: 8},
    {group: "Niger", value: 5},
    {group: "Honduras", value: 4},
    {group: "El Salvador", value: 8},
    {group: "Zimbabwe", value: 4},
    {group: "Phillipines", value: 6}
    {group: "Colombia", value: 9} ];

let x = d3.scaleBand()
    .range([ 0, width ])
    .domain(co2.map(d => d.group))
    .padding(0.2);
    
svgSchools.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))

/* let y = d3.scaleLinear()
    .domain([0, 180])
    .range([ height, 0]);

let yAxisSettings = d3.axisLeft(y)
    .tickValues([20, 40, 60, 80, 100])

    svgSchools.append("g")
    .attr("class", "yaxis")
    .call(yAxisSettings); */

let baseline = svgSchools.append("line")
    .attr("x1", margin)
    .attr("x2", width)
    /*.attr("y1", y(0))
    .attr("y2", y(0))*/
    .style("stroke", "black")
    .style("stroke-width", "1px")
      
function update(data) {
        
    var u = svgSchools.selectAll("rect")
        .data(data)
      
    u.join("rect")
        .transition()
        .duration(1000)
        .attr("x", d => x(d.group))
     /*   .attr("y", d => y(d.value)) */
        .attr("width", x.bandwidth())
     /*   .attr("height", d => height - y(d.value)) */
        .attr("fill", "#5499C7")
      }
    
function functionName(data){
    update(data);
    };

update(need)