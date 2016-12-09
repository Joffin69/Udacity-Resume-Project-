var bio = {
    "name": "Joffin John",
    "role": "FEWD Student",
    "welcomeMessage": "Hi there,welcome to my Resume Page",
    "biopic": "images/me.jpg",
    "contacts" : {
        "mobile": "9400255538",
        "skype": "joffin.john",
        "location": "Kerala,India",
        "email": "joffinjohn694@gmail.com",
        "github": "Joffin69"
    },
    "skills": ["playing guitar", "programming", "webdesigning", "hard working"]
};

var work = {
    "jobs": [{
        "title": "Systems Enginner",
        "employer": "Infosys",
        "location": "Karnataka",
        "description": "Put another way, winning at Go is a kind of Holy Grail for those who strive to create machines that can “think” on their own, because success at this uniquely complex game seems to require something more than just skill, knowledge, and experience. It requires intuition. Feel. Style. Characteristics we associate with humans, not with machines",
        "dates": "2016 onwards"
    }]
};



var projects = {
    "projects": [{
        "title": "Creating a Portfolio",
        "dates": "oct 7th",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
        "images": ["images/portfolio.jpg", "images/port2.jpg"]

    }, {
        "title": "online resume",
        "dates": "oct 18th",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
        "images": ["images/p.jpg", "images/p1.jpg"]

    }]
};

var education = {
    "schools": [{
        "name": "RSET",
        "location": "ernakulam,Kerala,India",
        "degree": "bachelor",
        "majors": ["Information Technology"],
        "dates": "2012 - 2016",
        "url": "www.rajagiritech.ac.in"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "dates": "Aug27th onwards",
        "school": "udacity",
        "url": "www.udacity.com"
    }]
};

bio.display = function() {

    var formattedname = HTMLheaderName.replace("%data%", bio.name);
    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedmessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedimage = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedrole).prepend(formattedname).append(formattedimage, formattedmessage);
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {

        var formattedskills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedskills);
    });

     var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
     var formattedskype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts.skype);      
     var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
     $("#footerContacts").append(formattedmobile, formattedemail, formattedskype, formattedgithub);
     $("#topContacts").append(formattedmobile, formattedemail, formattedskype, formattedgithub);
};

work.display = function() {

    work.jobs.forEach(function(wr) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", wr.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", wr.title);
        var formatteddates = HTMLworkDates.replace("%data%", wr.dates);
        var formattedlocation = HTMLworkLocation.replace("%data%", wr.location);
        var formatteddescription = HTMLworkDescription.replace("%data%", wr.description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formatteddates, formattedlocation, formatteddescription);
    });
};

projects.display = function() {

    projects.projects.forEach(function(pr) {

        $("#projects").append(HTMLprojectStart);

        var formattedptitle = HTMLprojectTitle.replace("%data%", pr.title);
        var formattedpdate = HTMLprojectDates.replace("%data%", pr.dates);
        var formattedpdescription = HTMLprojectDescription.replace("%data%", pr.description);

        $(".project-entry:last").append(formattedptitle, formattedpdate, formattedpdescription);
        pr.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

education.display = function() {

    education.schools.forEach(function(ed) {

        $("#education").append(HTMLschoolStart);

        var formattedename = HTMLschoolName.replace("%data%", ed.name);
        var formattedurl = HTMLschoolName.replace("#",ed.url);
        var formattededegree = HTMLschoolDegree.replace("%data%", ed.degree);
        var formattededate = HTMLschoolDates.replace("%data%", ed.dates);
        var formattedelocation = HTMLschoolLocation.replace("%data%", ed.location);

        $(".education-entry:last").append(formattedename + formattededegree, formattededate, formattedelocation);
        ed.majors.forEach(function(major){
        	var formattedemajor = HTMLschoolMajor.replace("%data%",major);
            $(".education-entry:last").append(formattedemajor);
        });
    });

    education.onlineCourses.forEach(function(online){
    	
    	$(".education-entry:last").append(HTMLonlineClasses);

    	var formattedotitle = HTMLonlineTitle.replace("%data%",online.title);
    	var formattedoschool = HTMLonlineSchool.replace("%data%",online.school);
    	var formattedodates = HTMLonlineDates.replace("%data%",online.dates);
    	var formattedourl = HTMLonlineURL.replace("%data%",online.url);
    	var formattedurl = HTMLonlineURL.replace("#",online.url);

    	 $(".education-entry:last").append(formattedotitle + formattedoschool, formattedodates, formattedourl);
    });

};

bio.display();
work.display();
projects.display();
education.display();


function inName(name) {
    console.log(name);
    var newName = name.split(" ");
    newName = newName[0].slice(0, 1).toUpperCase() + newName[0].slice(1).toLowerCase() + " " + newName[1].toUpperCase();
    console.log(newName);
    return newName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);