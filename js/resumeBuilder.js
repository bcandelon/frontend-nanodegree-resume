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
};


var welcome = "Coucou";
var skills = ["Web", "Architecture", "Database", "Tools"];

var bio = {
	"name" : name,
	"role" : role,
	"contactinfo" : contactinfo,
	"photo_url" : photo_url,
	"welcome" : welcome,
	"skills" : skills
};

var work = {
	"experiences" : [
		{
			"title": "Digital Project Manager and Organizational Change Manager",
			"employer": "AXA France Services",
			"dates" : "March 2015 - July 2015 (5 months)",
			"location" :"Paris area",
			"description" : "Led the creation of the new version of the Intranet site used by AXA to share regulatory and administrative documents with insurance advisors",
			"results" : [
				"Refined the goals of the project",
				"Elicited, modeled and documented the business requirements and the target processes",
				"Carried out the preliminary review and the feasibility study to improve business processes",
				"Managed the contribution of internal services (security, infrastructure, development, validatio and change management"
			],
			"methodology" : "Scrum",
			"specified_requirements" : 50,
			"managed_days" : 400
		},
		{
			"title": "Digital Project Manager",
			"employer": "AXA France",
			"dates" : "May 2014 - February 2015 (10 months)",
			"location" :"Paris area",
			"description" : "Led the creation of a Store Locator website for AXA insurance advisors"
		},
		{
			"title": "Business Analyst",
			"employer": "AXA France Services",
			"dates" : "November 2012 - April 2014",
			"location" :"Paris area",
			"description" : "Specified the requirements for the Application Programming Interface (API) to be used by the mobile application  \"Mon AXA\""
		},
		{
			"title": "Test and Validation Manager",
			"employer": "Novartis Pharma",
			"dates" : "August 2012 - October 2012 (3 months)",
			"location" :"Paris area",
			"description" : "Led the validation of the Intranet application tracking documents exchanged between Novartis and French health authorities"
		},
		{
			"title": "",
			"employer": "",
			"dates" : "",
			"location" :"",
			"description" : ""
		}
	]
};

console.log(work.experiences[0].title);

work.role = "Digital Project Manager & Organizational Change Manager";
work.start_date = new Date(2015,03);
work.end_date = new Date(2015,07);
work.duration = new Date(work.end_date - work.start_date).getMonth() + 1;
work.employer = "AXA France Services";
work.city = "Paris";

var education = {
	"schools": [
		{
			"name" : "French Ministry of higher education",			
			"degree" : "Lecturer qualification in Biochemistry and Molecular Biology",
			"year" : 2008
		},
		{
			"name" : "Paris Sud XI University",
			"degree" : "Doctoral degree in Functional Genomics",
			"year" : 2004
		},
		{
			"name" : "Henri Poincaré University, Nancy",	
			"degree" : "Master's degree in Science",
			"year" : 2001
		}
	]
};



var formated_employer = HTMLworkEmployer.replace("%data%", work.employer);
var formated_title = HTMLworkTitle.replace("%data%", work.role);

console.log("Fini");