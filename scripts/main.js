var canvas = document.getElementById('canv');

if (canvas.getContext('2d')){
  c = canvas.getContext('2d');
  
  //ukuran wf
  h = 588;
  w = 300;
  tw = 12;
  tf = 20;
  r = 28;
  
  canvas.width = 600;
  canvas.height = 600;
  
  var margin = 100;
  
  var clrWidth = canvas.width - 2*margin;
  var clrHeight = canvas.height - 2*margin;
  
  var scale = 1;
  scale = Math.min(clrWidth/w, clrHeight/h);
  
  h *= scale;
  w *= scale;
  tw *= scale;
  tf *= scale;
  r *= scale;
  
  // koordinat
  var x1 = 0.5*canvas.width - 0.5*w;
  var x2 = x1 + 0.5*w - 0.5*tw - r;
  var x3 = x2 + r;
  var x4 = x3 + tw;
  var x5 = x4 + r;
  var x6 = x1 + w;
  
  var y1 = 0.5*canvas.height - 0.5*h;
  var y2 = y1 + tf;
  var y3 = y2 + r;
  var y6 = y1 + h;
  var y5 = y6 - tf;
  var y4 = y5 - r;
  
  // gambar grid dulu
  c.lineWidth = 1;
  c.strokeStyle = 'rgba(126, 126, 255, 0.6)';
  
  var gridSpacing = 50;
  let x = 0;
  do {
    x += gridSpacing;
    c.beginPath();
    c.moveTo(x, 0);
    c.lineTo(x, canvas.height);
    c.stroke();
  } while (x < canvas.width)
  
  let y = 0;
  do {
    y += gridSpacing;
    c.beginPath();
    c.moveTo(0, y);
    c.lineTo(canvas.width, y);
    c.stroke();
  } while (y < canvas.height)
  
  
  // menggambar wf
  c.lineWidth = 4;
  c.strokeStyle = 'black';
  c.fillStyle = 'rgba(126, 126, 126, 1)'
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x1, y2);
  c.lineTo(x2, y2);
  c.arc(x2, y3, r, Math.PI*1.5, 0, false);
  c.lineTo(x3, y4);
  c.arc(x2, y4, r, 0, Math.PI*0.5, false);
  c.lineTo(x1, y5);
  c.lineTo(x1, y6);
  c.lineTo(x6, y6);
  c.lineTo(x6, y5);
  c.lineTo(x5, y5);
  c.arc(x5, y4, r, Math.PI*0.5, Math.PI, false);
  c.lineTo(x4, y3);
  c.arc(x5, y3, r, Math.PI, Math.PI*1.5, false);
  c.lineTo(x6, y2);
  c.lineTo(x6, y1);
  c.closePath();
  c.stroke();
  c.fill();
  
  // membuat dimensi
  c.lineWidth = 2;
  c.strokeStyle = 'red';
  c.fillStyle = 'red';
  var gap = 10;
  var ext = 10;
  var dist = 20;
  var arrRad = 4;
  
  c.beginPath();
  c.moveTo(x1, y1-gap);
  c.lineTo(x1, y1-gap-dist-ext);
  c.moveTo(x6, y1-gap);
  c.lineTo(x6, y1-gap-dist-ext);
  c.moveTo(x1, y1-gap-dist);
  c.lineTo(x6, y1-gap-dist);
  c.stroke();
  c.beginPath();
  c.arc(x1, y1-gap-dist, arrRad, 0, Math.PI*2);
  c.fill();
  c.beginPath();
  c.arc(x6, y1-gap-dist, arrRad, 0, Math.PI*2);
  c.fill();
  
  
  
  
  console.log('scale = ' + scale);
}
