<template>
  <div>
    <!-- <img src="../../public/example" alt=""> -->
    <!-- <input v-model="sourceFolder" placeholder="Source Folder Path" />
    <input v-model="destinationFolder" placeholder="Destination Folder Path" /> -->
    <button @click="copyFolder">Copy Folder</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      sourceFolder: '/home/lighto/hello-world/public',
      destinationFolder: '/home/lighto/hello-world',
    };
  },
  methods: {
    copyFolder() {
      // Send the source and destination folder paths to the server.
      axios.get('http://localhost:3000/api/copy-folder', {
        params: {
          sourceFolder: this.sourceFolder,
          destinationFolder: this.destinationFolder,
        },
      })
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
