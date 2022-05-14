const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ('./yargs/yargs-confid');

console.clear();


//console.log( argv );
//console.log( argv.l );




//const base=3;

 crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch( err => console.log(err));
