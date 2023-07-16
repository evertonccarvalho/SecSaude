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
                        >Email</label
                      >
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input
                        type="number"
                        id="form3Example4"
                        class="form-control"
                        v-model="role"
                      />
                      <label class="form-label" for="form3Example4"
                        >Cargo</label
                      >
                    </div>
                    <!-- Password input -->
                    <div class="col">
                      <select id="ubs" class="form-select" v-model="ubs">
                        <option>Sede I</option>
                        <option>Sede II</option>
                        <option>Batoque</option>
                        <option>Baixa da Umburana</option>
                        <option>Baixio Grande</option>
                        <option>Castanhão</option>
                        <option>Tibolo</option>
                      </select>
                      <label>UBS</label>
                    </div>

                    <!-- Checkbox -->
                    <br />
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn gradient-custom-2 w-100 my-4 mb-2"
                        @click="update"
                      >
                        Update
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
                  </form>

                  <!-- /////////////// -->
                </div>
              </div>
              <div
                class="col-lg-6 d-flex align-items-center bg-gradient-primary"
              >
                <div class="mx-left" style="width: 400px">
                  <img :src="getProfilePictureUrl()" alt="" />
                  <h6>Upload nova foto</h6>
                  <input type="file" @change="onProfilePictureChange" />
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
  created() {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get("http://localhost:8686/user/" + this.$route.params.id, req)
      .then((res) => {
        console.log(res);
        this.name = res.data.name;
        this.email = res.data.email;
        this.role = res.data.role;
        this.id = res.data.id;
      })
      .catch((err) => {
        console.log(err.response);
        this.$router.push({ name: "/" });
      });
  },
  data() {
    return {
      name: "",
      id: -1,
      email: "",
      role: 0,
      ubs: "",
      profilePicture: null, // Adicione esta propriedade
      error: undefined,
    };
  },
  methods: {
    onProfilePictureChange(event) {
      this.profilePicture = event.target.files[0];
    },

    getProfilePictureUrl() {
      if (this.profilePicture) {
        return "http://localhost:8686/" + this.profilePicture;
      } else {
        console.log("nao achou " + this.profilePicture);
      }
    },

    update() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("role", this.role);
      formData.append("id", this.id);
      formData.append("ubs", this.ubs);
      formData.append("profilePicture", this.profilePicture); // Adicione esta linha

      axios
        .put("http://localhost:8686/user", formData, req)

        .then((res) => {
          console.log(res);
          this.$router.push({ name: "adminpainel" });
        })
        .catch((err) => {
          if (err.response) {
            var msgErro = err.response.data.err;
            this.error = msgErro;
          } else {
            console.log(err);
            this.error = "Erro ao processar a solicitação";
          }
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
