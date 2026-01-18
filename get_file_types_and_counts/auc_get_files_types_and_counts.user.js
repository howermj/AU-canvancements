// ==UserScript==
// @name         Canvas-Files-Get_Files
// @namespace    http://www.dartmouth.edu/~breid/userscripts
// @version      0.3
// @description  Get data for files in a Canvas course (and try to take over the world, one file at a time!)
// @author       brian.p.reid@dartmouth.edu, based on work by Jing Qi (jing.qi@dartmouth.edu) and James Jones (james@richland.edu)
// @include     /\S+\/courses\/\d+\/files/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
 	var course_id = getCourseId(); // getCourseID gets the ID from the current page URL
    var file_results = [];
 	var pending = -1;  // used for pagination
	// the "url" is the Canvas endpoint; no need for tokens since this will be used when logged into Canvas
	var url = "/api/v1/courses/"+course_id+"/files?per_page=50";

    if ($('#br_button').length === 0) {   // Check to see if br_button is already created
        setTimeout(add_button,500);  // Wait half a sec to let Canvas load the page before adding a button
    }

    function add_button(){
        $('#content').append('<a id="br_button" class="btn button-sidebar-wide"><i>Userscript</i>: Get File Data</a>');  // append new button to the element with id=content
        $('#br_button').bind('click', function() {getFiles(url, files_retrieved);});
        // clicking the button will start the process of getting the file data and calls the function "files_retrieved" when done
        $('#br_button').css("margin","1em");
    }

	// files_retrieved is called after the file have been obtained; it processes the file data
	function files_retrieved(){
        var file_type_counts = {};
        $.each(file_results, function(index, file){ //count the number of each type of file
           if (file["content-type"] in file_type_counts){
                file_type_counts[file["content-type"]]++;
            } else {
                file_type_counts[file["content-type"]] = 1;
            }
        });
        var report = "<b>This course has these file counts:</b><table>";
        console.log("This course has these file counts:");
        $.each(file_type_counts, function(type,count){
            report += "<tr><td>" + count+" </td><td>&nbsp;"+type+"</td></tr>";
            console.log(count+"  "+type);
        });
        report += "</table>";
        display_report(report);
    }

    // display_report will pop up a dialog with the file counts
    function display_report(report_text){
        $("head").append (
            '<link href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.min.css" rel="stylesheet" type="text/css">'
        );
        //--- Add our custom dialog using jQuery.
        $("body").append ('<div id="gmOverlayDialog"><p>'+report_text+'</p></div>');
        //--- Activate the dialog.
        $("#gmOverlayDialog").dialog ( {
            modal:      false,
            title:      "Course File Report",
            position:   { my: "top", at: "top", of: document, collision: "none" },
            width:      "auto", minWidth:   400, minHeight:  200, zIndex:     3666
        } )
            .dialog ("widget").draggable ("option", "containment", "none");
        //-- Fix crazy bug in FF! ...
        $("#gmOverlayDialog").parent ().css ( {
            position:   "fixed", top:        "2em",  left:       "6em", width:      "75ex"
        } );
    }

    // Implement API call with jQuery to get tabs from Canvas
	function getFiles(api_url, return_function) {
        console.log("Starting data collection in Canvas-Files_Get_Files script...");
		try {
			pending++;
 			$.getJSON(api_url, function (the_data, status, jqXHR) {
                $.each(the_data, function(index, value){ file_results.push(value);});
                api_url = nextURL(jqXHR.getResponseHeader('Link')); // make sure we get all pages of data
				if (api_url) getFiles(api_url, return_function);  // if there is a link in the header, call this routine recursively
				pending--;
				if (pending < 0) return_function();
			}).fail(function () {
				pending--;
				return_function();
				throw new Error('Failed to get File data '+api_url);
			});
		}
    	catch (e) { console.log(e); alert(e); }
	}

    // See if there is paginated data - https://github.com/jamesjonesmath/canvancement
    function nextURL(linkTxt) {
        var n_url = null;
        if (linkTxt) {
            var links = linkTxt.split(',');
            var nextRegEx = new RegExp('^<(.*)>; rel="next"$');
            for (var i = 0; i < links.length; i++) {
                var matches = nextRegEx.exec(links[i]);
                if (matches) { n_url = matches[1]; }
            }
        }
        return n_url;
    }

	// Get course ID from current URL - https://github.com/jamesjonesmath/canvancement
    function getCourseId() {
        var courseId = null;
        try {
            var courseRegex = new RegExp('/courses/([0-9]+)');
            var matches = courseRegex.exec(window.location.href);
            if (matches) { courseId = matches[1]; }
            else { throw new Error('Unable to detect Course ID'); }
        }
        catch (e) { errorHandler(e); }
        return courseId;
    }
})();
