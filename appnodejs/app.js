process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log('quel est votre âge entre 0 et 100 : ');

process.stdin.on('data', (text) => {

    const age = parseInt(text.trim(),10);
  
  if (isNaN(age) || age < 0 || age > 100) {
    console.log('Veuillez entrer un nombre valide entre 0 et 100.');
  } else {
    const anneeNaissance = new Date().getFullYear() - age;
    console.log(`your year of birth is  ` + anneeNaissance);
  }
  process.exit();
});
