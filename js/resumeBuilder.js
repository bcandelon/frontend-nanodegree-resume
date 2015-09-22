/*
This is empty on purpose! Your code to build the resume will go here.
*/
var name = "Benjamin CANDELON, <i>Ph. D.</i>";
var formated_name = HTMLheaderName.replace("%data%", name);

var role = "IT Project Manager";
var formated_role = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formated_role);
$("#header").prepend(formated_name);

var address = " 78 rue de Mulhouse - 68300 SAINT-LOUIS - FRANCE"
var cell_phone = "+33 6 50 71 80 40";
var email = "b.candelon@gmail.com";

var contactinfo = [address, cell_phone, email];
var skills = ["Web", "Architecture", "Database", "Tools"];

var bio = {
	name,
	role,
	contactinfo	
}