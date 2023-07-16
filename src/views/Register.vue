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
                    <!-- 2 column grid layout with text inputs for the first and last names -->
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            class="form-control"
                            v-model="name"
                          />
                          <label class="form-label" for="form3Example1"
                            >Nome</label
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        class="form-control"
                        v-model="email"
                      />
                      <label class="form-label" for="form3Example3"
                        >Email address</label
                      >
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        class="form-control"
                        v-model="password"
                      />
                      <label class="form-label" for="form3Example4"
                        >Password</label
                      >
                    </div>

                    <!-- Checkbox -->

                    <div class="text-center">
                      <button
                        @click="register"
                        type="button"
                        class="btn gradient-custom-2 w-100 my-4 mb-2"
                      >
                        Registrar
                      </button>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">Já tem uma conta?</p>
                      <router-link to="login"
                        ><button type="button" class="btn btn-outline-danger">
                          Login
                        </button></router-link
                      >
                    </div>

                    <div v-if="error != undefined">
                      <div class="notification is-danger">
                        <p>{{ error }}</p>
                      </div>
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
      name: "",
      password: "",
      email: "",
      error: undefined,
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:8686/user", {
          name: this.name,
          password: this.password,
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          var msgErro = err.response.data.err;
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
