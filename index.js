//PokeApi
//https://pokeapi.co/

//Endpoints
//https://pokeapi.co/api/v2/pokemon/25

//1.- treaernos a request

const request=require('request')

//2.- declaro mi uri de mi api
const URI= "https://pokeapi.co/api/v2/pokemon/"

//funcion que pida pokemon y me devuelva sus tipos
function getPokemonByName(name){
//es buena practica si la api a consumir es sensible a mayus y minus, la pokeapi no lo es 
request.get(URI+name, function(error,response,body){
    //si la peticion es exitosa devolvemos la data 
    if(response.statusCode===200){
        const bodyEnFormatoJs= JSON.parse(body) //Parse convierte un objeto Json en uno JavaScript
        const typePokemon=bodyEnFormatoJs.types.map((objeto)=>objeto.type.name)
        console.log(`El tipo de ${name} es: ${typePokemon}`)

    }else{
        //Si el código de estado es cualquier otro, muestra un msj de error 
        console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
                                               //404             //NotFound
    }
})
}

getPokemonByName('pikachu')