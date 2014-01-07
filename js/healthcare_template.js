window.onload = function() {


  GSpreadsheet.load("0ArtYn0CJ_Ik8dDFjMGdsUThPTzBTQlFsWVhwSnh5M0E", { index: 'element' }, function(gs) {

    var row = gs.select('header');
    document.getElementById("logo").innerHTML = row.one;

  });
}

function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);",timeoutPeriod);
}
