<template>
  <div class="tags" v-if="tags.show">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tags.list"
        :key="index"
        :class="{ 'active-li': item.path === route.fullPath }"
      >
        <router-link :to="item.path">{{ item.title }}</router-link>
        <el-icon @click="closeTags(index)">
          <Close />
        </el-icon>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { useTagsStore } from "@/stores/tags";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

const tags = useTagsStore();
const route = useRoute();

//根据路由设置tags标签
const setTags = (route: any) => {
  //判断当前路由对应的tag标签是否存在
  const isExist = tags.list.some((item) => {
    return item.path === route.fullPath;
  });
  //如果标签不存在，则创建tag标签
  if (!isExist) {
    tags.setTagsItem({
      name: route.name,
      title: route.meta.title,
      path: route.fullPath,
    });
  }
};
setTags(route); //设置tags标签
//路由更新之后，更新tags
onBeforeRouteUpdate((to: any) => {
  console.log("===to:", to);
  setTags(to);
});

//关闭tag
const closeTags = (index: number) => {
  const delItem = tags.list[index];
  tags.delTagsItem(index);
  //删除tag后，获取相同下标的tag信息
  const item = tags.list[index] ? tags.list[index] : tags.list[index-1];
  console.log("item:",item);
  //如果删除的tag是当前路由的tag，则更新为item的路由，否则不更新路由
  delItem.path === route.fullPath && router.push(item.path);
};
</script>

<style>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  /* background: #ff0000; */
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  display: flex;
  align-items: center;
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li > a {
  color: #666;
}

.active-li {
  background-color: #409eff;
  color: #fff;
}

.active-li > a {
  color: #fff;
}
</style>
