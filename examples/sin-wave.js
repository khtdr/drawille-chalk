let Canvas = require('../');
let blessed = require('blessed');

const W = (process.stdout.columns-1) * 2;
const H = (process.stdout.rows - 3) * 4;
let c = new Canvas(W,H);

// Create a screen object.
var screen = blessed.screen({
  smartCSR: true
});

screen.title = 'Moving SIN Wave';

// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({});

// Append our box to the screen.
screen.append(box);

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();

let N=0;
setInterval(() => {
  if (++N >= W) process.exit(0);
  c.clear();
  for (let i=0; i<W; i++) {
    if (i<N) c.style(c.chalk.red.bold);
    else if (i==N) c.style(c.chalk.white.bold);
    else c.style(c.chalk.dim);
    let x = (Math.PI*2 / W) * i;
    let h = ((H-2)/2 - Math.sin(x) * ((H-2)/2)) + 1;
    c.set(i,h);
    if (i==N) {
      c.set(i+1,h); c.set(i-1,h);
      c.set(i+2,h); c.set(i-2,h);
      c.set(i,h+1); c.set(i,h-1);
      c.set(i,h+2); c.set(i,h-2);
    }
    c.styleEnd();
  }
  //  process.stdout.write(c.frame());
  box.setContent(c.frame());
  screen.render();
}, 2000/W);
