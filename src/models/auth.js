import axios from "axios";

export function fetchLoggedInUser() {
  const email = localStorage.getItem("email");
  if (email) {
    const req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    return axios.get("http://localhost:8686/user", req).then((res) => {
      console.log(res);
      const user = res.data.find((user) => user.email === email);
      if (user) {
        user.profilePictureUrl = "http://localhost:8686/" + user.profilePicture;
        return user;
      } else {
        throw new Error("Usuário não encontrado");
      }
    });
  } else {
    throw new Error("Email não encontrado no localStorage");
  }
}
