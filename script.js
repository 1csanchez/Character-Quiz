var diet;
var number;

$("button").click(function(){
    diet=$(".af").val();
    number=$(".aw").val();
    
    if (diet === "yes"  && number === "10") {
        $("p").html("Thanos");
        $("div").html("<img src='http://www.fhfff.com/img56/jyvlhvljaxcccksigmzr.jpg' >");
        $(".ds").show();
    
    }else if (diet === "no" && number === "10") {
        $("p").html("Spider Man");
        $("div").html("<img src='http://images.pushsquare.com/ae6426104b07b/spider-man-ps4-poll.original.jpg' >");
        $(".sx").show();
        
    }else if (diet === "yes" && number === "7") {
        $("p").html("Doctor Strange");
        $("div").html("<img src='https://nerdist.com/wp-content/uploads/2015/12/Doctor-Strange-EW-featured.jpg' >");
        $(".kj").show();
        
    }else if (diet === "no" && number === "7") {
        $("p").html("Black Panther");
        $("div").html("<img src='https://planetamarvel.net/wp-content/uploads/2018/01/Black-Panther-Wakanda.jpg' >");
        $(".hg").show();
        
    }else{
        $("p").html("Opps you did it wrong!");
    }
});
