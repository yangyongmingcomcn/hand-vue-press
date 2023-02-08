<template>
  <div class="login-form">
    <div class="form-header">用户名</div>
    <div>
      <input type="text" class="form-control" v-model="username" />
    </div>
    <div class="form-header">密码</div>
    <div>
      <input type="password" class="form-control" v-model="password" />
    </div>

    <div class="btn-row">
      <button class="btn" @click="login">OK</button>
    </div>
  </div>
</template>

<script>
import allUserData from "./user";
import { STORAGE_KEY } from "./helper";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const userData = allUserData[this.username];

      if (
        this.username &&
        this.password &&
        userData?.password === this.password
      ) {
        const data = JSON.stringify({
          name: this.username,
          time: new Date().getTime(),
        });
        window.localStorage.setItem(STORAGE_KEY, data);
        this.$emit("close", true);
      } else {
        import("v-dialogs").then((resp) => {
          resp.DialogToast("用户名或密码不正确，请修改后再试！");
        });
      }
    },
  },
};
</script>

<style lang="stylus">
.login-form {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .btn-row {
    margin-top: 1rem;
  }

  .btn {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: #60C084;
    color: white;
    border: 0;
    cursor: pointer;
  }

  .form-header {
    color: #666;
    margin-bottom: 0.5rem;
  }

  .form-control {
    padding: 0.6rem;
    border: 2px solid #ddd;
    width: 100%;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    outline: none;
    transition: border 0.2s ease;

    &:focus {
      border: 2px solid #aaa;
    }
  }
}
</style>