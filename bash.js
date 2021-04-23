process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
const pwd = data.toString().trim(); 
if (pwd === 'pwd') {
    
    process.stdout.write(__dirname);
    process.stdout.write('\nprompt > ');
  } else {
  const cmd = data.toString().trim();
  process.stdout.write('you typed: ' + cmd);
  process.stdout.write('\nprompt > ');
}

})