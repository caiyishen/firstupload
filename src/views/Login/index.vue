<template>
  <div class="login-wrapper">
    <div class="login-box">
      <a-form-model ref="form"
                    :rules="rules"
                    :model="form"
                    @keyup.enter.native="handleLogin">
        <a-form-model-item label="账号"
                           prop="username">
          <a-input v-model="form.username" />
        </a-form-model-item>
        <a-form-model-item label="密码"
                           prop="password">
          <a-input-password v-model="form.password" />
        </a-form-model-item>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="验证码">
              <a-input v-model="inputCode" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="图片">
              <img v-if="randCodeImage"
                   :src="randCodeImage"
                   alt=""
                   style="width:60%;height:30px"
                   @click="getCodeImage">
              <span v-else
                    @click="getCodeImage">请刷新图片</span>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-form-model-item>
          <a-button type="default"
                    :loading="loading"
                    style="width:100%"
                    @click="handleLogin">
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script>
import { getLoginCode } from '@/api/login/index.js'
import { mapActions } from 'vuex'
import { Encrypt } from '@/utils/secret.js'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      rules: {
        username: {
          required: true, message: '必填', trigger: 'blur'
        },
        password: {
          required: true, message: '必填', trigger: 'blur'
        }
      },
      form: {
        username: 'admin',
        password: 'YN@ALYAWK123'
      },
      inputCode: '',
      randCodeImage: '',//验证码图片
      requestCodeSuccess: false,
      loading: false,
      currdatetime: null
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapActions('user', ['Login']),
    init () {
      this.getCodeImage()
    },
    //获取验证码
    getCodeImage () {
      this.currdatetime = new Date().getTime()
      getLoginCode(this.currdatetime).then(res => {
        this.randCodeImage = res.result
      })
    },
    //登录
    handleLogin () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.loading = true
          let params = {
            ...this.form
          }
          //加密
          params.password = Encrypt(this.form.password)
          params.checkKey = this.currdatetime
          params.captcha = this.inputCode
          this.Login(params).then(() => {
            this.$notification.success({
              message: '欢迎',
              description: `欢迎回来`
            })
          }).finally(() => {
            this.loading = false
          }).catch(() => {
            this.getCodeImage()
          })
        }
      })

    }
  },
}
</script>
<style lang="less" scoped>
.login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: skyblue;
  background: url("@/assets/logo.png") no-repeat;
  background-size: 100% 100%;
  .login-box {
    width: 600px;
    height: 600px;
  }
}
</style>