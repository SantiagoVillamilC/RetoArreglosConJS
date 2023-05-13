// El array debe ser modificado para poder explorar todas las opciones del codigo
const numerosEnteros = [85, 96, 150, 22, 1, 44];

// Utilizamos condicionales para dar respuestas distintas segun el caso que se presente
if (numerosEnteros == 0){
    mayorArray(numerosEnteros);
}
else if (numerosEnteros.length == 1){
    console.log("El array contiene un unico elemento que es: " + mayorArray(numerosEnteros));
}
else{
    console.log("El numero mayor del array es: " + mayorArray(numerosEnteros));
}


function mayorArray(numerosEnteros) {
    // Primero se condiciona el codigo para saber que debe ejecutar y devolver el programa
    if (numerosEnteros.length == 0){
        // Si no hay elementos en el array devolvera null y un mensaje de null
        console.log(null);
        return null;
    }
    else if (numerosEnteros.length == 1){
        // Si solamente tiene un numero el array devolvera ese mismo valor
        return numerosEnteros;
    }
    else{
        // Generamos un ciclo for para que busque y contenga el numero mayor del array
        let mayor = numerosEnteros[0];

        for (let i = 0; i < numerosEnteros.length; i++) {
          if (mayor < numerosEnteros[i]) {
            mayor = numerosEnteros[i];
          }
        }
        // Utilizamos un ciclo while para mostrar todos los elementos que tiene el array
        let j = 0;
        while (j < numerosEnteros.length) {
          console.log("Elemento del array: " + numerosEnteros[j]);
          j++;
        }
        // Para contar la cantidad de impares utilizamos un ciclo do-while y el operador %
        let impares = 0;
        let k = 0;
        do {
          if (numerosEnteros[k] % 2 != 0) {
              impares++;
          }
          k++;
        } while (k < numerosEnteros.length);
      
        console.log("Hay " + impares +" numeros impares en el array.")
        
        // La funcion devuelve el numero mayor que se encontro en el ciclo for
        return mayor;
    }
}
