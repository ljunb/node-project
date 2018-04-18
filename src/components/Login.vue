<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       欢迎登录
      </span>
      <el-row>
        <el-input
          v-model="account"
          placeholder="账号"
          type="text">
        </el-input>
        <el-input
          v-model="password"
          placeholder="密码"
          type="password">
        </el-input>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="register">注册</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods: {
    async login() {
      if (!this.account) {
        this.$message.error('用户名不能为空！');
        return;
      }
      if (!this.password) {
        this.$message.error('密码不能为空！');
        return;
      }

      try {
        const params = {
          name: this.account,
          password: this.password,
        };
        const { data } = await this.$http.post('/api/login', params);
        if (data.code === 1) {
          this.$router.push('/todoList');
        } else {
          this.$message.error(data.message);
        }
      } catch (error) {
        this.$message.error(error);
      }
    },
    async register() {
      if (!this.account) {
        this.$message.error('用户名不能为空！');
        return;
      }
      if (!this.password) {
        this.$message.error('密码不能为空！');
        return;
      }

      try {
        const params = {
          name: this.account,
          password: this.password,
        };
        const { data } = await this.$http.post('/api/register', params);
        if (data.code === 1) {
          this.$message({
            type: 'success',
            message: '注册成功！',
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

<style lang="stylus" scoped>
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .el-input
    margin 12px 0
  .el-button
    width 100%
    margin-top 12px
</style>
