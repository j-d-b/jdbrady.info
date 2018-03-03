// Jacob Brady


var pageHashes = ['#home', '#products', '#contact'];
var currentHash = '#home';
var defaultHash = '#home'; // could link to page not found, etc.
var currPage = 'projects';

// $(document).ready(function(){
//   currentHash = checkHash( $(location).attr('hash') );
//   displayContent(currentHash);
//   setHighlight(currentHash);
//
//   $(window).on('hashchange', function() {
//     var newHash = checkHash( $(location).attr('hash') );
//     switchHighlight(newHash);
//     displayContent(newHash);
//     currentHash = newHash;
//   });
// });


$(document).ready(function() {
  $('#home-content').load('projects.html', function() {
    loadProj();
  });

  $('.nav-a').on('click', function() {
    var page = $(this).attr('data-target');
    if(page != currPage){
      currPage = page;
      var path = page + '.html';
      $('#home-content').load(path, function() {
        if(page == 'projects') {
          loadProj();
        }
      });

      if ($(this).hasClass('nav-active')){
        return;
      }
      else {
        $('.nav-a').removeClass('nav-active');
        $(this).addClass('nav-active');
      }
    }
  });

});

// changes the menu highlight to match the given view
function switchHighlight(hash) {
  if (hash != currentHash) {
    setHighlight(hash);
  }
}

// highlights only navbar item corresponding to the given hash
function setHighlight(hash) {
  $('.nav-item').removeClass('nav-active');
  $('a[href="' + hash + '"]').addClass('nav-active');
}

function loadProj() {
  $.getJSON('projects.json', function(context) {
    var templateScript = Handlebars.templates.projects(context);
    $('#projects').html(templateScript);

    $('.card').on('click', function(){
      var href = $(this).attr('data-target');
      window.location = href;
    });
  });
}
