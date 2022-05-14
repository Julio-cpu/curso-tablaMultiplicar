const argv = require('yargs')
               .option('b', {
                  alias: 'base',
                  type: 'number',
                  demandOption: true,
                  describe: 'Es la base de la tabla de multiplicar'
               })
               .option('l', {
                  alias:'listar',
                  type:'boolean',
                  default:false,
                  demandOption: true,
                  describe: 'parametro necesario para que se muestre y guarde la tabla'
                  
               })
               .option('h', {
                  alias: 'hasta',
                  type: 'number',
                  describe: 'Es el numero hasta donde se hara la multiplicacion',
                  default: 10
               })
               .check( (argv, options) =>{
                  if( isNaN(argv.b)){
                     throw 'la base tiene que ser un numero';
                  }
                  return true;
               })
               .argv;


module.exports = argv;