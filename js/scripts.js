let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    {name: 'Ivysaur', height: 1, type: ['grass', 'poison']},
    {name: 'Venusaur', height: 2, type: ['grass', 'poison']},
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Charmeleon', height: 1.1, type: 'fire'},
    {name: 'Charizard', height: 1.7, type: ['fire', 'flying']},
    {name: 'Squirtle', height: 0.5, type: 'water'},
    {name: 'Wartortle', height: 1, type: 'water'},
    {name: 'Blastoise', height: 1.6, type: 'water'},
]

pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 1.7) { //highlighting large pokemon
        document.write('<p class="large">' + '<strong>' + pokemon.name + '</strong>' +  ', (height: ' + pokemon.height + ')-Wow, that\’s big!</p>')
    } else if (pokemon.height < 0.6) { //highlighting small pokemon
        document.write('<p class="small">' + '<strong>' + pokemon.name + '</strong>' + ', (height: ' + pokemon.height + ')-Wow, that\'s tiny!</p>')
    } else{
        document.write('<p>' + '<strong>' + pokemon.name + '</strong>' + ', (height: ' + pokemon.height + ')</p>')
    }
});

let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
        {name: 'Ivysaur', height: 1, type: ['grass', 'poison']},
        {name: 'Venusaur', height: 2, type: ['grass', 'poison']},
        {name: 'Charmander', height: 0.6, type: 'fire'},
        {name: 'Charmeleon', height: 1.1, type: 'fire'},
        {name: 'Charizard', height: 1.7, type: ['fire', 'flying']},
        {name: 'Squirtle', height: 0.5, type: 'water'},
        {name: 'Wartortle', height: 1, type: 'water'},
        {name: 'Blastoise', height: 1.6, type: 'water'},
    ]

    return {
        add: function (pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function () {
            return pokemonList;
        }
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({
    name: 'Caterpie', height: 0.3, type: 'bug'});
    console.log(pokemonRepository.getAll());









function divide(dividend, divisor){
    if(divisor === 0){
        return "You're trying to divide by zero."
    }else{
        let result = dividend / divisor;
        return result;
    }
}