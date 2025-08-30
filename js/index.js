function moveToUrl(){
    window.open("./coding-bootcamp/pricing/index.html?utm_source=homepage", "_blank");
}

function codingBootcamp(){
    document.writeln("Loading...");
    moveToUrl();
}

function joinTheTeam() {
    window.open('./fullstack-developer-join-the-team/index.html#join-team', '_blank');
}

export { codingBootcamp, joinTheTeam }