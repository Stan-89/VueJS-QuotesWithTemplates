<template>
<div>
    <h2>Quotes Added</h2>

  <div class="progress">
    <div class="progress-bar" role="progressbar"
    aria-valuemin="0" aria-valuemax="100" :style="{'width': Math.floor(totalNumberQuotes/maxQuotes*100)+'%'}">
      {{totalNumberQuotes}} / {{maxQuotes}}
    </div>
  </div>
</div>
</template>

<script>
export default{
  props:{
    totalNumberQuotes:{
      type: Number,
      required:true
    },
    maxQuotes:{
      type: Number,
      required:true
    }
  },
}
</script>
