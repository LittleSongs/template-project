<template>
  <vHeaderView></vHeaderView>
  <vSideBar></vSideBar>
  <div class="content-box" :class="{ 'content-collapse': sidebar.fold }">
    <vTags></vTags>
    <router-view>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import vHeaderView from "@/components/header-view.vue";
import vSideBar from "@/components/side-bar.vue";
import vTags from "@/components/tags-view.vue";
import { useSidebarStore } from "@/stores/sidebar";
import { useTagsStore } from "@/stores/tags";
const sidebar = useSidebarStore();
const tags = useTagsStore();
</script>
