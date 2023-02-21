<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :collapse="sidebar.fold"
      unique-opened
      @select="selected"
      :default-active="onRoutes"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { useSidebarStore } from "@/stores/sidebar";
const sidebar = useSidebarStore();
const items = reactive([
  {
    icon: "Odometer",
    index: "/dashboard",
    title: "系统首页",
    permiss: "1",
  },
  {
    icon: "Calendar",
    index: "1",
    title: "表格相关",
    permiss: "2",
    subs: [
      {
        index: "/table",
        title: "常用表格",
        permiss: "2",
      },
      {
        index: "/import",
        title: "导入Excel",
        permiss: "2",
      },
      {
        index: "/export",
        title: "导出Excel",
        permiss: "2",
      },
    ],
  },
  {
    icon: "DocumentCopy",
    index: "/tabs",
    title: "tab选项卡",
    permiss: "3",
  },
  {
    icon: "Edit",
    index: "3",
    title: "表单相关",
    permiss: "4",
    subs: [
      {
        index: "/form",
        title: "基本表单",
        permiss: "5",
      },
      {
        index: "/upload",
        title: "文件上传",
        permiss: "6",
      },
      {
        index: "4",
        title: "三级菜单",
        permiss: "7",
        subs: [
          {
            index: "/editor",
            title: "富文本编辑器",
            permiss: "8",
          },
          {
            index: "/markdown",
            title: "markdown编辑器",
            permiss: "9",
          },
        ],
      },
    ],
  },
  {
    icon: "Setting",
    index: "/icon",
    title: "自定义图标",
    permiss: "10",
  },
  {
    icon: "PieChart",
    index: "/charts",
    title: "schart图表",
    permiss: "11",
  },
  {
    icon: "Warning",
    index: "/permission",
    title: "权限管理",
    permiss: "13",
  },
  {
    icon: "CoffeeCup",
    index: "/donate",
    title: "支持作者",
    permiss: "14",
  },
]);
const selected = (value: string) => {
  //选中侧边菜单选项回调函数
  console.log("value:", value);
};

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
});
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  border-right: solid 1px var(--el-menu-border-color);
}
.el-menu {
  border: 0;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}
</style>
