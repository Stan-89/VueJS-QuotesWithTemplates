<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3"></div>
      <form class="form-inline col-sm-6">
        <div class="form-group">
          <label for="theQuote">Quote:</label><br/>
          <textarea name="theQuote" class="form-control" rows="5" cols="40" v-model="theQuote"></textarea>
        </div><br/>
        <div class="form-group" style="margin-top:10px; text-align:center; width:100%">
          <button type="button" class="btn btn-primary" @click="addQuote">Add Quote</button>
        </div>
      </form>
        <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
import { theEventBus } from '../main';

export default{
  props:{
    totalNumberQuotes:{
      type: Number,
      required: true
    },
    maxQuotes:{
      type: Number,
      required: true
    }
  },
  data: function(){
    return{
      theQuote: "",
    }
  },
  methods: {
    addQuote()
    {
      if(this.theQuote == ""){
        alert('Please entera valid quote!');
      }
      else{
        if(this.totalNumberQuotes >= this.maxQuotes)
        {
          alert("We can only have a total of "+ this.maxQuotes +" quotes max!");
        }
        else{
          //Notify parent to ++
          this.$emit('quoteWasAdded', 1);

          //Notify sibling to add one as well (with text)
          theEventBus.$emit('quoteWasAdded-Text', this.theQuote);
        }
      }

      //In any event
      this.theQuote = "";
    }
  }
}
</script>
