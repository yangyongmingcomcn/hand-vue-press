import { checkAuth } from "./login/helper";
import Login from "./login/Login";

export default ({ Vue, options, router, siteData }) => {
  Vue.mixin({
    mounted() {
      const doCheck = () => {
        if (!checkAuth()) {
          this.$dlg.modal(Login, {
            width: 300,
            height: 350,
            title: "登录(用户名:工号,密码:handhand)",
            singletonKey: "employee-login",
            maxButton: false,
            closeButton: false,
            callback: (data) => {
              if (data === true) {
                // do some stuff after login
              }
            },
          });
        }
      };

      if (this.$dlg) {
        doCheck();
      } else {
        import("v-dialogs").then((resp) => {
          Vue.use(resp.default);
          this.$nextTick(() => {
            doCheck();
          });
        });
      }
    },
  });
};
