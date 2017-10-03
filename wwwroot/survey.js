function init() {

    Survey.dxSurveyService.serviceUrl = "http://localhost:5000/api/Service";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
    Survey.Survey.cssType = "bootstrap";

    var url = new URL(document.URL);
    var surveyId = url.searchParams.get("id");        
    var model = new Survey.Model({ surveyId: surveyId, surveyPostId: surveyId });
    window.survey = model;
    model.render("surveyElement");
    
    // // Load survey by id from url
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', "http://localhost:8000" + '/survey?surveyId=' + surveyId);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.onload = function () {
    //     var result = JSON.parse(xhr.response);
    //     if(!!result) {
    //         var surveyModel = new Survey.Model(result);
    //         window.survey = surveyModel;
    //         ko.cleanNode(document.getElementById("surveyElement"));
    //         document.getElementById("surveyElement").innerText = "";
    //         surveyModel.render("surveyElement");
    //     }
    // };
    // xhr.send();
}

init();
