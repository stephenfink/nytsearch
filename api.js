

// one possible URL
//to pull from the article API
//will need to input var
var startYear = 0
var endYear = 0
var nResults = 0


$(document).ready(function(){


    // this is for one and we will want the 1, 5, 10 parts of each

    $("#submit-button").on("click", function(){
   

    var searchTerm = $("#search").val();
    console.log(searchTerm)
    nResults = $("#recordsRetrieve").val();
    console.log(nResults)
    

    startYear = $("#exampleFormControlInput2").val();
    console.log(startYear)
    endYear = $("endOfYear").val();
    console.log(endYear)
        var userInput = $("#search").val();

        var aprURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+userInput+"&api-key=bzJBGJ1qzXWWNGDcjmsCtJ5D7xZOU0o1";
       
        
        $.ajax({
            url : aprURL,
            method :"GET"
        })
        .then(function(response){
            var results = response.data
            var headLine = response.headline
            var summaryTxt = response.abstract
            console.log(response)
            console.log(headLine)
            console.log(hsummaryTxt)
            //this will pull info for each part of
            for(var i = 0; i< nResults; i++){
            var artBase = $("<div>")//this is for the first part of api 

            var para =$("<h1>").text(headLine)//this is for the headline of the art

            var summary = $("<p>").text(summaryTxt)
                artBase.prepend(summary)
                artBase.prepend(para)

                $("#art1").append(artBase)
            //option 1 through 5 needs an possible input






            artBase.prepend(para)
            artBase.prepend(summary)
            $("#where our output on HTML").prepend(artBase)
            }
        })
    })

})