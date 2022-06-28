import axios from "axios";

export const HandleSignIn = async (email, password) => {
  const user = {
    email: email,
    password: password,
  };

  const result = await axios.post(
    `https://recantocafeapp.herokuapp.com/login/`,
    user
  );
  return result.data;
};
