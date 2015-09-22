/*
This is empty on purpose! Your code to build the resume will go here.
*/
var name = "Benjamin CANDELON, <i>Ph. D.</i>";
var formatedname = HTMLheaderName.replace("%data%", name);

var role = "IT Project Manager";
var formatedrole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formatedrole);
$("#header").prepend(formatedname);

var email = "b.candelon@gmail.com";

var skills = ["Web", "Architecture", "Database", "Tools"];
$("#main").append(skills);