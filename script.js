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


$(document).ready(function(){
    $("header h1 a").click(function() {
        showAllCards();
        currentNav = null;
    });
    
    $("div.nav-link a.edu").click(function() {
        if(currentNav != "education") {
            hideCardsExcept("education");
            currentNav = "education";
        }
        else {
            showAllCards();
            currentNav = null;
        }     
    });
    
    $("div.nav-link a.work").click(function() {
        if(currentNav != "work") {
            hideCardsExcept("work");
            currentNav = "work";
        }
        else {
            showAllCards();
            currentNav = null;
        } 
    });
    
    $("div.nav-link a.skills").click(function() {
        if(currentNav != "skills") {
            hideCardsExcept("skills");
            currentNav = "skills";
        }
        else {
            showAllCards();
            currentNav = null;
        } 
    });
    
    $("div.nav-link a.extracurricular").click(function() {
        if(currentNav != "extracurricular") {
            hideCardsExcept("extracurricular");
            currentNav = "extracurricular";
        }
        else {
            showAllCards;
            currentNav = null;
        } 
    });
});