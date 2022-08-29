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

    function add(pokemon) {
        if (
          typeof pokemon === 'object' &&
          'name' in pokemon &&
          'height' in pokemon &&
          'types' in pokemon
        ) {
          pokemonList.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
      }
      function getAll() {
        return pokemonList;
      }
      function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
      }
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
      };
    })();


pokemonRepository.add({
    name: 'Caterpie', height: 0.3, type: 'bug'});
pokemonRepository.add({name: 'Metapod', height: 0.7, type: 'bug'});
    pokemonRepository.add({name: 'Butterfree', height: 1.1, type: ['bug', 'flying']});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});



