<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16">
        <el-container>
          <el-header>
            <!-- <div class="line"></div> -->
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
              <el-menu-item index="1" class="left_50">
                <router-link to="/"> 首页 </router-link>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">教程</template>
                <router-link to="/BigCategory">
                  <el-menu-item index="2-1"> 新增大类 </el-menu-item>
                </router-link>
                <router-link to="/UpdateResources">
                  <el-menu-item index="2-2"> 上传资源 </el-menu-item>
                </router-link>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">软件</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>软件</el-menu-item>
              <el-menu-item index="4"
              ><a target="_blank">订单管理</a></el-menu-item
              >
            </el-menu></el-header
          >
          <el-main>
            <router-view />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style>
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
