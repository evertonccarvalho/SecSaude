<template>
  <div class="container">
    <div class="main">
      <div class="my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Editando Óbitos
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <form id="formulario" class="row g-3">
        <div class="row g-3">
          <div class="col">
            <label>Nome</label>
            <input
              class="form-control"
              type="text"
              placeholder="Nome"
              maxlength="150"
              v-model="nome"
            />
          </div>
          <div class="col">
            <label>Nome da Mãe</label>
            <input
              class="form-control"
              type="text"
              placeholder="Nome da Mãe"
              maxlength="150"
              v-model="nomedamae"
            />
          </div>
          <div class="col">
            <label>Endereço</label>
            <input
              class="form-control"
              type="text"
              placeholder="Endereço"
              maxlength="150"
              v-model="endereco"
            />
          </div>

          <div class="col">
            <label>Municipio de Residência</label>
            <input
              class="form-control"
              type="text"
              placeholder="Municipio de Residência"
              maxlength="50"
              v-model="municipioderesidencia"
            />
          </div>
        </div>
        <div class="row g-3">
          <div class="col">
            <label>Idade</label>
            <input
              class="form-control"
              type="number"
              placeholder="Idade"
              maxlength="2"
              v-model="idade"
            />
          </div>

          <div class="col">
            <label>Nº do Prontuario</label>
            <input
              class="form-control"
              type="number"
              placeholder="Pronturario"
              maxlength="50"
              step="0.01"
              v-model="prontuario"
            />
          </div>

          <div class="col">
            <label>Data do Óbito</label>
            <input
              class="form-control"
              type="date"
              placeholder="Data do Óbito"
              v-model="datadoobito"
            />
          </div>
        </div>

        <div class="row g-3">
          <div class="col">
            <label>Sexo</label>
            <select
              class="form-select"
              size="1"
              aria-label="size 1 select example"
              v-model="sexo"
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>

          <div class="col">
            <label>Local do Óbito</label>
            <select
              class="form-select"
              size="1"
              aria-label="size 2 select example"
              v-model="localdoobito"
            >
              <option selected value="Hospitalar">Hospitalar</option>
              <option value="Domiciliar">Domiciliar</option>
            </select>
          </div>
        </div>
        <div class="row g-3">
          <div class="col">
            <label>Causa Referida</label>
            <input
              class="form-control"
              type="text"
              placeholder="Causa"
              maxlength="2000"
              v-model="causa"
            />
          </div>
        </div>
      </form>
      <br />

      <div class="col-lg-4 col-md-8 col-12 mx-auto">
        <div class="text-center">
          <div v-if="error != undefined">
            <div class="notification is-danger">
              <p>{{ error }}</p>
            </div>
          </div>
          <div v-if="deucerto != undefined">
            <div class="notification is-primary">
              <p>{{ deucerto }}</p>
            </div>
          </div>

          <div class="text-center">
            <button
              @click="update"
              type="button"
              class="btn gradient-custom-2 w-40 my-4 mb-2"
            >
              Atualizar Obito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      .get("http://localhost:8686/formularios/" + this.$route.params.id, req)
      .then((res) => {
        console.log(res);
        this.nome = res.data.nome;
        this.ubs = res.data.ubs;
        this.nomedamae = res.data.nomedamae;
        this.idade = res.data.idade;
        this.endereco = res.data.endereco;
        this.municipioderesidencia = res.data.municipioderesidencia;
        this.sexo = res.data.sexo;
        this.prontuario = res.data.prontuario;
        this.datadoobito = res.data.datadoobito;
        this.localdoobito = res.data.localdoobito;
        this.causa = res.data.causa;
        this.id = res.data.id;
      })
      .catch((err) => {
        console.log(err.response);
        this.$router.push({ name: "Users" });
      });
  },
  data() {
    return {
      ubs: "",
      nome: "",
      nomedamae: "",
      idade: 0,
      endereco: "",
      municipioderesidencia: "",
      sexo: "",
      prontuario: 0,
      datadoobito: 0,
      localdoobito: "",
      causa: "",
      error: undefined,
      deucerto: undefined,
      id: -1,
    };
  },
  methods: {
    update() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .put(
          "http://localhost:8686/formularios",
          {
            ubs: this.ubs,
            nome: this.nome,
            nomedamae: this.nomedamae,
            idade: this.idade,
            endereco: this.endereco,
            municipioderesidencia: this.municipioderesidencia,
            sexo: this.sexo,
            prontuario: this.prontuario,
            datadoobito: this.datadoobito,
            localdoobito: this.localdoobito,
            causa: this.causa,
            id: this.id,
          },
          req
        )
        .then((res) => {
          console.log(res);
          var msgDeucerto = res.request.responseText;
          this.deucerto = msgDeucerto;
          this.$router.push({ name: "ListaObitos" });
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
  color: #fff;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(195deg, #101cc2 0%, #d81b60 100%);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(195deg, #101cc2 0%, #d81b60 100%);
}
</style>
