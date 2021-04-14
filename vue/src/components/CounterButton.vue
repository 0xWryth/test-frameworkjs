<template>
  <button @click="callParentAction">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    label: String,
    action: Function
  },
  methods: {
    callParentAction: function() {
      this.$emit('action')
    } 
  }
}
</script>