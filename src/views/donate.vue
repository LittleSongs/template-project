<template>
  <div>
    <span>donate.vue</span>
    <br>
    <span>{{ msg.num }}</span>
    <br>
    <button @click="add">add</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated
} from "vue";

onBeforeMount(() => {
  console.log("onBeforeMount");
});

onMounted(() => {
  console.log("onMounted");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});

onUnmounted(() => {
  console.log("onUnmounted");
});


let msg = reactive({
  num: 0,
});
const add = () => {
  console.log("add,", ++msg.num);
}

</script>


<style></style>