import axios from "axios";

export default async function DeleteOrder(id) {
  await axios.get(
    "https://recantocafeapp.herokuapp.com/orders/deleteoff/" + id
  );
}
