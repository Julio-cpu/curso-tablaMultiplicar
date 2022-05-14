const fs = require('fs');

const crearArchivo = async (base=5,argvl,hasta ) =>{
    
    
        try {
            let salida='';

        if(argvl){

            console.log('============================');
            console.log(`      Tabla del: ${ base }`);
            console.log('============================');
            
            for(let i = 1 ;i <= hasta; i++) {
                salida +=`${ base } x ${ i } = ${ base * i}\n`;
            }

            console.log(salida);
    
            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida); //crea el archivo .txt

            return `tabla-${ base }.txt creado`;
        } else {
            throw 'Es necesario especificar -l para listar la tabla'
        }

        } catch (error) {
            throw error;
        }
   
    
}

module.exports = {
    crearArchivo
}