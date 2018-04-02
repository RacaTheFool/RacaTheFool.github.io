function blogPost() {
    document.getElementById("blogSpace").innerHTML = document.getElementById("blogText").value + "<br>- " + document.getElementById("blogName").value;
}
//function blogPost() {
//    window.alert("Thank you for your submission! After it has been approved it will be posted. This may take a few days.");
//}

function specialRequest() {
    window.alert("Request Submitted!");
}

function purchase() {
    document.getElementById("thankYou").innerHTML = "Thank you for your purchase!";
}

function server() {
    window.alert("We're sorry, but the server is currently down.");
}