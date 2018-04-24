
<template>
  <div class="container">
    <div class="quote" id="original">
       Just a quote to start with something!
    </div>

    <div class="quote" v-for="(aQuote, index) in arrayAddedQuotes" @click="deleteQuote(index)">
      {{ aQuote }}
    </div>

  </div>
</template>

<script>
import { theEventBus } from '../main';

export default{
  data: function(){
    return{
      arrayAddedQuotes: [],
    }
  },
  methods:{
    deleteQuote(theIndex)
    {
      this.arrayAddedQuotes.splice(theIndex,1);
      this.$emit('quoteWasDeleted', 1);
    }
  },
  created()
  {
    //Add listener for events through event bus
    theEventBus.$on('quoteWasAdded-Text', (theQuote) =>{
      this.arrayAddedQuotes.push(theQuote);
    });
  }
}
</script>

<style scoped>
div.container
{
  display:flex;
  flex-wrap:wrap;
  align-items:flex-start;
  max-width:100%;
}

div.quote
{
  border:1px solid black;
  font-family:Verdana;
  padding:1em;
  margin:0.5em;
  font-size:1.5em;
  border-radius:4px;
  flex:0 1 30%;
  cursor:pointer;
  word-break: break-all;

}

div.quote#original
{
  cursor:default;
}
</style>
