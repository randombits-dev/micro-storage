<script setup lang="ts">

import {TEST_FILE_DATA} from "../data/mockData.ts";
import {ref} from "vue";

const files = ref(TEST_FILE_DATA);

fetch(`http://10.2.0.2:8787`, {
  method: 'GET',
  headers: {
    'X-User-Id': 'user1'
  }
}).then((response) => {
  response.json().then((data) => {
    console.log(data);
    files.value = data?.files || [];
  });
}).catch((error) => {
  console.log(error);
});

const draggedOver = ref(false);

function setActive() {
  draggedOver.value = true
}
function setInactive() {
  draggedOver.value = false
}

// file drop handler
const dropHandler = (event: DragEvent) => {
  event.preventDefault();
  console.log("File(s) dropped");
  // Prevent default behavior (Prevent file from being opened)
  event.preventDefault();

  if (event.dataTransfer?.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (let i = 0; i < event.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (event.dataTransfer.items[i].kind === "file") {
        const file = event.dataTransfer.items[i].getAsFile();
        file!.text().then((text) => {
          fetch(`http://10.2.0.2:8787`, {
            method: 'PUT',
            body: text,
            headers: {
              'Content-Type': 'text/plain',
              'Access-Control-Request-Headers': '*',
              'X-User-Id': 'user1',
              'X-File-Name': file!.name
            }
          }).then((response) => {
            console.log(response);
          }).catch((error) => {
            console.log(error);
          })
        });
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    // Hans was here :)
    for (let i = 0; i < event.dataTransfer?.files.length; i++) {
      console.log(
        "0 ... file[" + i + "].name = " + event.dataTransfer?.files[i].name
      );
    }
  }
};
</script>

<template>
  <div class="file-container" @drop.prevent="dropHandler"
       @dragenter.prevent="setActive"
       @dragover.prevent="setActive"
       @click="setActive"
       @dragleave.prevent="setInactive" :class="{ draggedOver }">

  <div v-for="file in files" :key="file.id" class="file-row">
    <div>{{ file.name }}</div>
    <div>{{ file.size }}KB</div>
  </div>
  </div>

</template>

<style scoped>
  .file-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
  }

  .draggedOver {
    border: 2px dashed #ccc;
  }
</style>
