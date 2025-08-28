function moveToUrl(){
    window.open("./coding-bootcamp/pricing/index.html", "_blank");
}

function codingBootcamp(){
    document.writeln("Loading...");
    moveToUrl();
}

function joinTheTeam() {
    document.writeln("Loading...");
    window.open('./fullstack-developer-join-the-team/index.html#join-team', '_blank');
}

export { codingBootcamp, joinTheTeam }