let Canvas = require('../');

const W = process.stdout.columns * 2;
const H = (process.stdout.rows - 2) * 4;
let c = new Canvas(W,H);

c.style(c.chalk.red);
for (let i=0; i<W; i++) {
  let x = (Math.PI / W) * i;
  let h = H - Math.sin(x) * H;
  c.style(c.chalk.hex('#997700'));
  c.set(i,h+4); c.set(i,h+5); c.set(i,h+6); c.set(i,h+7);
  c.style(c.chalk.red);
  c.set(i,h+0); c.set(i,h+1); c.set(i,h+2); c.set(i,h+3);
  c.style(c.chalk.magenta);
  c.set(i,h+20); c.set(i,h+21); c.set(i,h+22); c.set(i,h+23);
  c.style(c.chalk.yellow);
  c.set(i,h+8); c.set(i,h+9); c.set(i,h+10); c.set(i,h+11);
  c.style(c.chalk.blue);
  c.set(i,h+16); c.set(i,h+17); c.set(i,h+18); c.set(i,h+19);
  c.style(c.chalk.green);
  c.set(i,h+12); c.set(i,h+13); c.set(i,h+14); c.set(i,h+15);
  c.styleEnd();
}
c.styleEnd();
process.stdout.write(c.frame());

