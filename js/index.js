function moveToUrl(){
    window.open("./coding-bootcamp/pricing/index.html?utm_source=homepage", "_blank");
}

function codingBootcamp(){
    document.writeln("Loading...");
    moveToUrl();
    window.location.reload();
}

function joinTheTeam() {
    window.open('./fullstack-developer-join-the-team/index.html#join-team', '_blank');
}

function loadUrl() {
    // window.open('/community/sign-in/index.html', '_blank');
}

export { codingBootcamp, joinTheTeam, loadUrl }