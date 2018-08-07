<template>
    <div class="hello">
        <button @click="throwError">Throw Error</button>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    throwError() {
      throw new Error("This is a fatal error!!!");
    }
  }
};
</script>
