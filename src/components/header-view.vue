<template>
  <div class="header">
    <!-- 折叠侧边导航栏按钮 -->
    <div class="collapse-button" @click="foldChange">
      <el-icon  v-if="sidebar.fold" :size="25">
        <Expand />
      </el-icon>
      <el-icon v-else :size="25">
        <Fold />
      </el-icon>
    </div>
    <!-- logo图标和网站名称 -->
    <div class="logo">Song UI</div>
    <!-- 右侧容器 -->
    <div class="header-right">
      <!-- 消息中心和用户信息 -->
      <div class="header-user-container">
        <!-- 消息中心 -->
        <div class="notification-button">
          <el-icon :size="25">
            <Bell />
          </el-icon>
          <span class="btn-bell-badge"></span>
        </div>
        <!-- 用户头像 -->
        <el-avatar
          class="user-avatar"
          :size="35"
          :src="`/src/assets/img/logo.png`"
        />
        <!-- 用户下拉菜单 -->
        <el-dropdown class="user-name">
          <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
  <div style="clear: both"></div>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebar";
const sidebar = useSidebarStore();//侧边栏折叠状态
const foldChange = ()=>{
  sidebar.handleFold();
}
</script>

<style scoped lang="less">
@headerHeight: 70px; //header高度
@itemPadding: 20px; //元素padding

.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 378px;
  height: @headerHeight;
  font-size: 35px;
  color: #fff;
  background-color: #242f42;

  .logo {
    line-height: @headerHeight;
    padding: 0;
    float: left;
  }

  .collapse-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    float: left;
    padding: 0 @itemPadding;
    cursor: pointer;
  }

  .header-right {
    float: right;
    padding-right: 20px;

    .header-user-container {
      display: flex;
      height: @headerHeight;
      align-items: center;
    }

    .notification-button {
      color: #fff;
      position: relative;
      cursor: pointer;
      .btn-bell-badge {
        position: absolute;
        right: -3px;
        top: 3px;
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background: #ff0000;
        color: #fff;
      }
    }

    .user-avatar {
      margin-left: 20px;
    }

    .user-name {
      margin-left: 10px;

      .el-dropdown-link {
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:focus {
          outline: 0;
        }

        font-size: 18px;
      }

      .el-dropdown-menu__item {
        text-align: center;
      }
    }
  }
}
</style>
