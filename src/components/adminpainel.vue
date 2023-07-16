<template>
  <div>
    <h3 class="text-2xl font-bold text-left py-2">Paindel Administrativo</h3>
    <div class="overflow-x-auto relative sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">id</th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Nome
                <a href="#"></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                E-mail
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 w-3 h-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                    ></path></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Cargo
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 w-3 h-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                    ></path></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                UBS
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 w-3 h-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                    ></path></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ user.id }}
            </th>

            <td class="py-4 px-6">
              <img
                class="w-10 h-10 rounded-full border-2 border-gray-50"
                :src="user.profilePictureUrl"
                alt=""
              />
              {{ user.name }}
            </td>
            <td class="py-4 px-6">
              {{ user.email }}
            </td>
            <td class="py-4 px-6">
              {{ user.role }}
            </td>
            <td class="py-4 px-6">
              {{ user.ubs }}
            </td>
            <td class="py-4 px-6 text-right">
              <router-link :to="{ name: 'UserEdit', params: { id: user.id } }">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  @click="update"
                  >Edit</a
                ></router-link
              >
              /
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                @click="showModaluser(user.id)"
                >Deletar</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ////modal/// -->
    <div
      class="form-outline mb-4"
      :class="{ modal: true, 'is-active': showModal }"
    >
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Você quer realmente delete ese usuário?
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Essa operação não pode ser reversivel!</p>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item" @click="deleteUser"
              >Sim, quero deletar!</a
            >
            <a href="#" class="card-footer-item" @click="hideModal()"
              >Cancelar</a
            >
          </footer>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="hideModal()"
      ></button>
    </div>

    <!-- //// modal fim/// -->
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
      .get("http://localhost:8686/user", req)
      .then((res) => {
        console.log(res);
        this.users = res.data;
        this.users.forEach((user) => {
          user.profilePictureUrl =
            "http://localhost:8686/" + user.profilePicture;
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("ola");
  },
  data() {
    return {
      users: [],
      showModal: false,
      deleteUserId: -1,
    };
  },

  methods: {
    hideModal() {
      this.showModal = false;
    },
    showModaluser(id) {
      this.deleteUserId = id;
      this.showModal = true;
    },
    deleteUser() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .delete("http://localhost:8686/user/" + this.deleteUserId, req)
        .then((res) => {
          console.log(res);
          this.showModal = false;
          this.users = this.users.filter((u) => u.id != this.deleteUserId);
          ///
        })
        .catch((err) => {
          console.log(err);
          this.showModal = false;
        });
    },
  },

  computed: {
    processRole() {
      return "Usuário Comun";
    },
  },
};
</script>

<style></style>
