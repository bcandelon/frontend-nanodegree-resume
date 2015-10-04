/*
This is empty on purpose! Your code to build the resume will go here.
*/

function inName(aName) {
	var name_array = aName.split(" ");
	var CapitalizedName = name_array[0] + " " + name_array[1].toUpperCase();
	return CapitalizedName;
}

console.log(inName("Benjamin Candelon"));

var name = "Benjamin Candelon";
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


var bio = {
	"name" : "Benjamin CANDELON, <i>Ph. D.</i>",
	"role" : "IT Project Manager",
	"contactinfo" : {
		"address" : "78 rue de Mulhouse - 68300 SAINT-LOUIS - FRANCE",
		"cell_phone" : "+33 6 50 71 80 40",
		"email" : "b.candelon@gmail.com"
	},	
	"photo_url" : "https://github.com/bcandelon/frontend-nanodegree-resume/blob/master/images/Ben_crop_small.jpg",
	"skills" : [
		"Translating business stakes of projects into concrete and measurable objectives",
		"Tackling complex issues to help clients to make better decisions",
		"Modeling and harmonizing data models and business processes",
		"Leading the involvement of every stakeholder for the success of projects"
	]
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		formated_skills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formated_skills);	
	}}

var work = [
	{
		"title": "Digital Project Manager and Organizational Change Manager",
		"employer": "AXA France Services",
		"dates" : "March 2015 - July 2015 (5 months)",
		"location" :"Paris area",
		"description" : "Led the creation of the new version of the Intranet site used by AXA to share regulatory and administrative documents with insurance advisors",
		"results" : [
			"Refined the goals of the project",
			"Elicited, modeled and documented the business requirements and the target processes",
			"Carried out the preliminary review and the feasibility study of business processes improvements",
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
		"description" : "Led the creation of a Store Locator website for AXA insurance advisors",
		"results" : [
			"Refined the stakes and goals of the project",
			"Elicited, modeled and documented the data model of the web site and the business requirements",
			"Managed the contribution of internal services (security, infrastructure, development and validation",
			"Implemented th use of Agile methodologies within the team"
		],
		"methodology" : "Scrum",
		"specified_requirements" : 450,
		"managed_days" : 900
	},
	{
		"title": "Business Analyst",
		"employer": "AXA France Services",
		"dates" : "November 2012 - April 2014",
		"location" :"Paris area",
		"description" : "Specified the requirements for the Application Programming Interface (API) to be used by the mobile application  \"Mon AXA\"",
		"results" : [
			"Elicitied, modeled and documented requirements for the new features",
			"Specified the data model, the standardized service contracts and the business rules to be implemented in the API",
			"Specified and supervised the modification of web service contracts"
		],
		"methodology" : "Scrum / Kanban",
		"specified_requirements" : 1200,
		"managed_days" : 800
	},
	{
		"title": "Test and Validation Manager",
		"employer": "Novartis Pharma",
		"dates" : "August 2012 - October 2012 (3 months)",
		"location" :"Paris area",
		"description" : "Led the validation of the Intranet application tracking documents exchanged between Novartis and French health authorities",
		"results" : [
			"Designed Test strategy and Test plan",
			"Coordinated validation with the development team based in India (5 people) and the end users"
		],
		"methodology" : "V-Model",
		"managed_days" : 90
	}
];

if (work.length > 0) {
	for (experience in work) {		
		$("#workExperience").append(HTMLworkStart);
		var formated_employer = HTMLworkEmployer.replace("%data%",work[experience].employer);
		$(".work-entry:last").append(formated_employer);
		var formated_title = HTMLworkTitle.replace("%data%",work[experience].title);
		$(".work-entry:last").append(formated_title);
		var formated_dates = HTMLworkDates.replace("%data%",work[experience].dates);
		$(".work-entry:last").append(formated_dates);
		var formated_location = HTMLworkLocation.replace("%data%",work[experience].location);
		$(".work-entry:last").append(formated_location);
		var formated_description = HTMLworkDescription.replace("%data%",work[experience].description);
		$(".work-entry:last").append(formated_description);				
	}
}

var education = [
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
];

var projects = {
	"work_projects"	: [
		{
			"title"  :"Creation of an Application Programming Interface (API)",
			"dates" : "November 2012 - May 2014",
			"description" : "Specified the requirements for the creation of an Application Programming Interface (API) to be used by the mobile app \"Mon AXA\" and by the new version of the AXA.fr website.",
			"images" : [
				"https://github.com/bcandelon/frontend-nanodegree-resume/blob/master/images/axa_screen568x568.jpeg",
				"https://github.com/bcandelon/frontend-nanodegree-resume/blob/master/images/axa_screen_2_568x568.jpeg"
			]
		},
		{
			"title" : "",
			"dates" : "",
			"description" : "",
			"images" : ""
		}
	]
	
};

console.log("Fini");