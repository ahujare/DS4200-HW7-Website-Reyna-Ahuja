const data = [30, 50, 75];

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", 350)
    .attr("height", 200);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 100 + 30)
    .attr("y", d => 160 - d * 2)
    .attr("width", 60)
    .attr("height", d => d * 2)
    .attr("fill", "#233d91");

svg.append("text")
    .attr("x", 30)
    .attr("y", 180)
    .text("Naloxone");

svg.append("text")
    .attr("x", 130)
    .attr("y", 180)
    .text("Syringes");

svg.append("text")
    .attr("x", 230)
    .attr("y", 180)
    .text("Education");