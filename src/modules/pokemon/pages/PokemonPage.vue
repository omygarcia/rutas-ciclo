<template>
  <h1>Pokemon Page <span>#{{id}}</span></h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type:Number,
      required:true
    }
  },
  data(){
    return{
      //id:null
      pokemon:null
    }
  },
  created(){
    //console.log(this.$route)
    //const {id} = this.$route.params;
    //this.id = id;
    this.getPokemon();
  },
  methods:{
    async getPokemon(){
      try{
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        .then(r=>r.json());
        //console.log(pokemon)
        this.pokemon = pokemon;
      }
      catch(error){
        this.$router.push('/');
        console.log(error)
      }
    }
  },
  watch:{
    id(){
      //console.log(this.id)
      this.getPokemon();
    }
  }
}
</script>

<style>

</style>