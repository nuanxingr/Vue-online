import { v4 as uuidv4 } from "uuid";

/* export default function getUid() {
  //读取localStorage上的userTempId  （uuid）
  let uid = localStorage.getItem("userTempId");
  //判断有没有uid如果没有就从新创建一个
  if (!uid) {
    uid = uuidv4();
    localStorage.setItem("userTempId", uid);
  }
  return uid;
} */

// 第二种写法（性能较好）

//读取localStorage上的userTempId  （uuid）
let uid = localStorage.getItem("userTempId"); //先读取
export default function getUid() {
  //判断有没有uid如果没有就从新创建一个
  if (!uid) {
    uid = uuidv4();
    localStorage.setItem("userTempId", uid);
  }
  return uid;
}
