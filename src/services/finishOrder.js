import axios from "axios";

export default async function FinishOrder(id) {
  await axios.get("https://recantocafeapp.herokuapp.com/orders/status/" + id);
}
