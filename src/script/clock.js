function clock() {
  var svgdocument = document.getElementById('svgdoc').getSVGDocument();
  var svgNS = "http://www.w3.org/2000/svg";

  var cx = 150;
  var cy = 150;
  var r = 140;


  var now = new Date();

  var hou = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var h_line = svgdocument.getElementById('h_line');
  var m_line = svgdocument.getElementById('m_line');
  var s_line = svgdocument.getElementById('s_line');

  h_rad = 2 * Math.PI * (hou/12);
  h_line.x2.baseVal.value =  cx + 0.8 * r * Math.sin(h_rad);
  h_line.y2.baseVal.value = cy - 0.8 * r * Math.cos(h_rad);

  m_rad = 2 * Math.PI * (min/60);
  m_line.x2.baseVal.value =  cx + r * Math.sin(m_rad);
  m_line.y2.baseVal.value = cy - r * Math.cos(m_rad);

  s_rad = 2 * Math.PI * (sec/60);
  s_line.x2.baseVal.value =  cx + r * Math.sin(s_rad);
  s_line.y2.baseVal.value = cy - r * Math.cos(s_rad);

  setTimeout(clock, 1000);
}

window.addEventListener('load',
                         function(e){ clock();},
                         false);
