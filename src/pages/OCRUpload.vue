<template>
  <div class="upload">
    <el-upload
      class="upload-demo"
      drag
      action="string"
      multiple
      :http-request="upload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  methods: {
    async upload(item) {
      try {
        const formData = new FormData();
        formData.append('image', item.file);
        const config = {
          headers: { 'content-type': 'multipart/form-data' },
        };
        const response = await this.$http.post('/api/no-auth/orcupload', formData, config);
        const { data } = response;
        if (data.code === 1) {
          this.$message({
            type: 'success',
            message: data.message,
          });
        } else {
          this.$message.error(data.message);
        }
      } catch (error) {
        this.$message.error(error);
      }
    },
  },
};
</script>
