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
var formated_address = HTMLcontactGeneric.replace("%contact%", "Address");
var formated_address = formated_address.replace("%data%", address);

var cell_phone = "+33 6 50 71 80 40";
var formated_cell_phone = HTMLmobile.replace("%data%", cell_phone);

var email = "b.candelon@gmail.com";
var formated_email = HTMLemail.replace("%data%", email);

var photo_url = "https://github.com/bcandelon/frontend-nanodegree-resume/blob/master/images/Ben_crop_small.jpg";

var contactinfo = [formated_address, formated_cell_phone, formated_email];

for (i = 0; i < contactinfo.length; i++) {
	$("#topContacts").append(contactinfo[i]);
}


var welcome = "Coucou";
var skills = ["Web", "Architecture", "Database", "Tools"];

var bio = {
	"name" : name,
	"role" : role,
	"contactinfo" : contactinfo,
	"photo_url" : photo_url,
	"welcome" : welcome,
	"skills" : skills
}

