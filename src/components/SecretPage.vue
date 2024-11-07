<template>
  <h1>Secret</h1>
  <p>Information confidentiel</p>
  <p class="text-container">TWFsaGV1cmVzZW1lbnQgY2Ugbidlc3QgcGFzIGxlIGZsYWc=</p>
</template>

<script>
export default {
  name: 'SecretPAge',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1, p {
  text-align:center
}
.text-container {
  margin: auto;
  width: 500px; 
  overflow: auto;
  overflow-y: visible; 
  word-break: break-word;

}
.scrollable-container {
  max-height: 80vh; 
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
