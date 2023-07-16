<template>
  
    <div class="container"> 
      <div class="main">
        <div class="my-auto">
          <div class="row">
              <div class="col-lg-4 col-md-8 col-12 mx-auto">
                  <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                          <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">SSA2</h4>
                      </div>           
                  </div>
              </div>
          </div>
        </div>   

      <form id="formulario" class="row g-3">
        <div class="col tex">
          <input type="text" class="form-control" placeholder="Responsavel" aria-label="Responsavel" v-model="nome">
        </div>
        <div class="col">          
          <select id="ubs" class="form-select" v-model="ubs">
            <option selected>UBS</option>
            <option>Sede I</option>
            <option>Sede II</option>
            <option>Batoque</option>
            <option>Baixa da Umburana</option>
            <option>Baixio Grande</option>
            <option>Castanhão</option>
            <option>Tibolo</option>
          </select>
        </div>
        <div class="row g-3">
          <div class="col">
            <label>Crianças até 6 meses</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="criancasMenor6Meses">
          </div>

          <div class="col">
            <label>Crianças em AME</label>
            <input class="form-control" type="number" placeholder="Crianças em AME" v-model="criancaAme">
          </div>

          <div class="col">
            <label>Crianças até 2 Anos</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="criancas2Anos">
          </div>
        </div>
        <div class="row g-3">
          <div class="col"> 
            <label>Gestantes</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="gestantes">
          </div>

          <div class="col"> 
            <label>Gestante Menor de 20 Anos</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="gestantesAte20Anos">
          </div>
        </div>
        <div class="row g-3">

          <div class="col">
            <label>Total de Familias Acompanhadas</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="familias">
          </div>

          <div class="col">  
            <label>Visitas Domiciliar ACS / Outros Profissionais</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="familiasAcompanhada">
          </div>
          
        </div>
          
      </form> 
      <br>

      <div class="col-lg-4 col-md-8 col-12 mx-auto">
        <div class="text-center">
          <div v-if="error != undefined">
                <div class="notification is-danger">
                    <p>{{ error }}</p>  
                </div>
              </div>
              <div v-if="deucerto != undefined">
                <div class="notification is-primary">
                    <p>{{ msgDeucerto }}</p>  
                </div>
              </div>
            <button @click="cadastrarssa2" type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Cadastrar</button>
           
        </div>
      </div>
 
    </div>     
    </div>
  
     <!-- <small id="nome-erro" v-show="deuErro"> Nome invalido tente novamente</small> -->

</template>

<script>
import axios from 'axios';
export default 

{ 

    data(){
        return{
            ubs:"",
            nome:"",
            criancasMenor6Meses:0,
            criancaAme:0,
            criancas2Anos:0,
            gestantes: 0,
            gestantesAte20Anos:0,
            familias:0,
            familiasAcompanhada:0,
            error: undefined,
            deucerto: undefined,
            
        }
    },
    methods:{
        
      cadastrarssa2(){
        axios.post("http://localhost:8686/ssa2",{
            ubs: this.ubs,
            nome: this.nome,
            criancasMenor6Meses: this.criancasMenor6Meses,
            criancaAme: this.criancaAme,
            criancas2Anos:this.criancas2Anos,
            gestantes: this.gestantes,
            gestantesAte20Anos:this.gestantesAte20Anos,
            familias:this.familias,
            familiasAcompanhada:this.familiasAcompanhada,
          }).then(res =>{
            var msgDeucerto = res.data;
            this.deucerto = msgDeucerto;
        }).catch(err =>{
          console.log(err.response);
            var msgErro = err.response.data.err;
            this.error = msgErro;
        })
    }
}

}

</script>

<style >





</style>
