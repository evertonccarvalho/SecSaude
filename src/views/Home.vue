<template>
  <div>{{ sideBar }}</div>
  <section>
    <div class="container-sm">
      <div class="main">
        <div class="card text-center">
          <div class="card-header">Primeiro Acesso</div>
          <div class="card-body">
            <h5 class="card-title">Contate o Administrador do Sistema</h5>
            <p class="card-text">Seu acesso será liberado em breve</p>
            <a href="#" class="btn btn-primary">88 9 9999-9999</a>
          </div>

          <div class="d-flex align-items-center justify-content-center pb-4">
            <router-link to="login">
              <div class="text-center">
                <button type="button" class="gradient-custom-2 btn w-100 mb-4">
                  Logar
                </button>
              </div>
            </router-link>
            <router-link to="register">
              <div class="text-center">
                <button type="button" class="gradient-custom-2 btn w-100 mb-4">
                  Registrar
                </button>
              </div>
            </router-link>
          </div>

          <div class="card-footer text-body-secondary">
            Retorno em até 2 dias uteis
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import sideBar from "@/components/sideBar.vue";

export default {
  data() {
    return {
      sideBar: sideBar,
    };
  },
};
</script>

<style scoped>
.main {
  padding-top: 25%;
}
</style>
