// Jacob Brady
var projHashes = ['#time', '#worldtrends', '#sketches', '#spacecat', '#survivors', '#observatory', '#bctc-tas'];
var navHashes = ['#projects', '#about', '#photo'];
var validHashes = projHashes.concat(navHashes);
var defaultHash = '#projects';

var currentHash = '#projects';

$(document).ready(function(){
  currentHash = checkValid($(location).attr('hash'));
  displayContent(currentHash);
  setHighlight(currentHash);

  $(window).on('hashchange', function() {
    var newHash = checkValid($(location).attr('hash'));
    switchHighlight(newHash);
    displayContent(newHash);
    currentHash = newHash;
  });
});

function hashToPath(hash) {
  return 'pages/_' + hash.substring(1) + '.html'; // prefix partials w/ underscore
}

function checkValid(hash) {
  var isValid = $.inArray(hash, validHashes) != -1;
  if (isValid) return hash;
  window.location.hash = defaultHash;
  return defaultHash;
}

function displayContent(hash) {
  var path = hashToPath(hash);
  $('#home-content').load(path, function() {
    if (hash === '#projects') loadProj();
    else if (hash === '#observatory') loadObsvImgs();
  });
}

// changes the menu highlight to match the given hash
function switchHighlight(hash) {
  if (hash !== currentHash) setHighlight(hash);
}

// highlights only navbar item corresponding to the given hash
function setHighlight(hash) {
  $('.nav-a').removeClass('nav-active');
  if ($.inArray(hash, projHashes) !== -1) hash = '#projects';
  $('a[href="' + hash + '"]').addClass('nav-active');
}

function loadProj() {
  $.getJSON('data/projects.json', function(context) {
    var templateScript = Handlebars.templates.projects(context);
    $('#projects').html(templateScript);

    $('a[href="files/astro_proc_guide_nov2016.pdf"]').hover(
      function() {
        var currHeight = $('.project', 'a[href="files/astro_proc_guide_nov2016.pdf"]').height();
        $('.project', 'a[href="files/astro_proc_guide_nov2016.pdf"]').height(currHeight);
        $('.proj-desc', this).html('<div class="text-center pt-3"><p class="font-lg pb-0 mb-0"><i class="fas fa-file-pdf"></i></p><p>Click to view PDF<p></div>');
        window.location.hash = '#projects';
      },
      function() {
        $('.project', 'a[href="files/astro_proc_guide_nov2016.pdf"]').css('height', 'auto');
        $('.proj-desc', this).html('Reference manual for astronomical image processing workflow using SAOImage DS9 and Adobe Lightroom');
      }
    );
  });
}

function loadObsvImgs() {
  $.getJSON('data/obsv-imgs.json', function(context) {
    var templateScr = Handlebars.templates.obsv(context);
    $('#obsv-imgs').html(templateScr);
    $('.obsv-img').on('click', function() {
      window.location = 'obsv_imgs.html';
    });
  });
}
