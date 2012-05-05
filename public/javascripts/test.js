(function() {
  var p;

  p = document.createElement("p");

  p.innerHTML = '<p>Hello from JavaScript!</p>';

  document.getElementsByTagName('header')[0].appendChild(p);

}).call(this);
