<template>
  <div class="foto" style="width: 400px">
    <img
      src="https://bootdey.com/img/Content/avatar/avatar7.png"
      class="avatar img-circle img-thumbnail"
      alt="avatar"
    />
    <h6>Upload nova foto</h6>
    <input type="file" @change="handleFileChange" class="form-control" />
    <button @click="update">Salvar</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      id: -1,
      email: "",
      role: 0,
      ubs: "",
      error: undefined,
      profilePicture: null,
    };
  },

  methods: {
    update() {
      const req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const formData = new FormData();
      formData.append("profilePicture", this.profilePicture);

      axios
        .put("http://localhost:8686/user", formData, req)
        .then((response) => {
          // Process successful response
          console.log("Success: " + response.data);
        })
        .catch((err) => {
          if (err.response) {
            const msgErro = err.response.data.err;
            this.error = msgErro;
          } else {
            console.log(err);
            this.error = "Error processing the request";
          }
        });
    },

    handleFileChange(event) {
      this.profilePicture = event.target.files[0];
    },
  },
};
</script>
