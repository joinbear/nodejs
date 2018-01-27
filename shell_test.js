const { exec } = require('child_process');
exec('convert bigWiz.png \\( +clone -alpha transparent -draw "circle 539,539 539,0" \\) -compose copy_opacity -composite output_circ.png', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});