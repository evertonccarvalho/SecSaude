<template>
  <section class="h-100 gradient-form" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style="width: 185px"
                      alt="logo"
                    />
                    <h4 class="mt-1 mb-5 pb-2">Sistema de Formulários</h4>
                  </div>

                  <!-- /////////////// -->

                  <form>
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input
                        v-model="email"
                        type="email"
                        id="form2Example1"
                        class="form-control"
                      />
                      <label class="form-label" for="form2Example1"
                        >Email address</label
                      >
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input
                        v-model="password"
                        type="password"
                        id="form2Example2"
                        class="form-control"
                      />
                      <label class="form-label" for="form2Example2"
                        >Password</label
                      >
                    </div>

                    <!-- 2 column grid layout for inline styling -->
                    <div class="row mb-4">
                      <div class="col d-flex justify-content-center">
                        <!-- Checkbox -->
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example34"
                            checked
                          />
                          <label class="form-check-label" for="form2Example34">
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div class="col">
                        <!-- Simple link -->
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    <!-- Submit button -->

                    <div class="text-center">
                      <button
                        @click="login"
                        type="button"
                        class="gradient-custom-2 btn w-100 mb-4"
                      >
                        Logar
                      </button>
                    </div>

                    <div class="row mb-4">
                      <div class="col d-flex justify-content-center">
                        <div v-if="error != undefined">
                          <div class="notification is-danger">
                            <p>{{ error }}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">Não tem uma conta?</p>
                      <router-link to="register"
                        ><button type="button" class="btn btn-outline-danger">
                          Criar Conta
                        </button></router-link
                      >
                    </div>
                  </form>

                  <!-- /////////////// -->
                </div>
              </div>
              <div
                class="col-lg-6 d-flex align-items-center bg-gradient-primary"
              >
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      password: "",
      email: "",
      error: undefined,
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8686/login", {
          password: this.password,
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", this.email); // Armazena o email no localStorage
          this.$router.push({ name: "obitos" });
        })
        .catch((err) => {
          const msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },
  },
};
</script>
<style scoped>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(195deg, #101cc2 0%, #d81b60 100%);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(195deg, #101cc2 0%, #d81b60 100%);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>
