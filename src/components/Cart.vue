<template>
  <div>
    <button :style="{ background: color }">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    text: String,
    color: Sting,
  },
};
</script>

<style scoped></style>
