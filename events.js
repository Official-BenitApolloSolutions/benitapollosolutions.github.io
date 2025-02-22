const LoadPage = function(){
  document.writeln("Joining cohort 2025 bootcamp");
  let response = confirm("Join cohort");
  if(response){
    window.location.assign("https://forms.gle/Yps4mKcrfk3TZzam9");
}
  else{
    document.writeln("Visiting Benit Apollo Solutions online");
    window.location.assign("https://bit.ly/basonlinegh");
  }
  
}
