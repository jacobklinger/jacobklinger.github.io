var currentNav = null;

function hideCardsExcept(except) {
    $("div.objective").hide();
    
    if(except !== ("education")) {
        $("div.education").hide();
    }
    else {
        $("div.education").show();
    }
    
    if(except !== ("work")) {
        $("div.work").hide();
    }
    else {
        $("div.work").show();
    }
    
    if(except !== ("skills")) {
        $("div.skills").hide();
    }
    else {
        $("div.skills").show();
    }
    
    if(except !== ("extracurricular")) {
        $("div.extracurricular").hide();
    }
    else {
        $("div.extracurricular").show();
    }
}

function showAllCards(except) {
    $("div.objective").show();
    $("div.education").show();
    $("div.work").show();
    $("div.skills").show();
    $("div.extracurricular").show();
}

function clearNavHighlights() {
    $("div.nav-link a.edu").attr("currentNav", "false");
    $("div.nav-link a.work").attr("currentNav", "false");
    $("div.nav-link a.skills").attr("currentNav", "false");
    $("div.nav-link a.extracurricular").attr("currentNav", "false");
}


$(document).ready(function(){
    $("header h1 a").click(function() {
        showAllCards();
        clearNavHighlights();
        currentNav = null;
    });
    
    /*
        On click functions
        
        for each navigation link:
            when clicked:
                if not already the current filter:
                    hide all cards except category clicked
                    set currentnav attribute to true (so navigation is highlighted)
                if already the current filter:
                    show all cards
    */
    
    $("div.nav-link a.edu").click(function() {
        if(currentNav != "education") {
            hideCardsExcept("education");
            currentNav = "education";
            clearNavHighlights();
            $("div.nav-link a.edu").attr("currentNav", "true");
        }   
    });
    
    $("div.nav-link a.work").click(function() {
        if(currentNav != "work") {
            hideCardsExcept("work");
            currentNav = "work";
            clearNavHighlights();
            $("div.nav-link a.work").attr("currentNav", "true");
        }
    });
    
    $("div.nav-link a.skills").click(function() {
        if(currentNav != "skills") {
            hideCardsExcept("skills");
            currentNav = "skills";
            clearNavHighlights();
            $("div.nav-link a.skills").attr("currentNav", "true");
        }
    });
    
    $("div.nav-link a.extracurricular").click(function() {
        if(currentNav != "extracurricular") {
            hideCardsExcept("extracurricular");
            currentNav = "extracurricular";
            clearNavHighlights();
            $("div.nav-link a.extracurricular").attr("currentNav", "true");
        }
    });
});


