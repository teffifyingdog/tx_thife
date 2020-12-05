<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="选择类型">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="教程" value="shanghai"></el-option>
          <el-option label="视频" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="网盘链接">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>



<script>
export default {
  data() {
    return {
      form: {
        name: "",
        desc: "",
        region: []
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
