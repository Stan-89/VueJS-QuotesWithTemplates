<template>
  <div id="app">

    <app-header></app-header>

    <div class="container">

      <progress-bar :totalNumberQuotes="numberQuotes" :maxQuotes="maxQuotes"></progress-bar>

      <app-form :totalNumberQuotes="numberQuotes" :maxQuotes="maxQuotes" @quoteWasAdded="numberQuotes +=$event"></app-form>

      <app-quotes @quoteWasDeleted="numberQuotes -= $event"></app-quotes>

      <div class="alert alert-info" style="margin-top:2em">
        <strong>Info:</strong> Click on a quote and delete it
      </div>

    </div>

  </div>
</template>

<script>
import theHeader from './components/Header.vue';
import theProgressBar from './components/ProgressBar.vue';
import theAddingForm from './components/AddingForm.vue';
import theQuotes from './components/Quotes.vue';

export default {
  name: 'app',
  components:{
    'app-header': theHeader,
    'progress-bar': theProgressBar,
    'app-form': theAddingForm,
    'app-quotes': theQuotes
  },
  data: function(){
    return{
      numberQuotes: 1,
      maxQuotes: 12,
    }
  }
}
</script>

<style>

</style>
