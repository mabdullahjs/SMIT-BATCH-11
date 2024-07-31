import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./config.js";

const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
const ul = document.querySelector("#ul");
const select = document.querySelector("#select");

const arr = [];

async function getData() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    arr.push({ ...doc.data(), id: doc.id });
  });
  console.log(arr);
  renderTodo();
}

getData();

function renderTodo() {
  ul.innerHTML = "";
  if (arr.length === 0) {
    ul.innerHTML = "no data found";
    return;
  }
  arr.map((item) => {
    ul.innerHTML += `
        <li>${item.todo}
        <button class="deleteBtn">Delete</button>
        <button class="editBtn">Edit</button>
        </li>
        `;
  });

  const deleteBtn = document.querySelectorAll(".deleteBtn");
  const editBtn = document.querySelectorAll(".editBtn");

  deleteBtn.forEach((btn, index) => {
    btn.addEventListener("click", async () => {
      console.log(arr[index]);
      await deleteDoc(doc(db, "todos", arr[index].id));
      console.log("Data deleted");
      arr.splice(index, 1);
      renderTodo();
    });
  });
  editBtn.forEach((btn, index) => {
    btn.addEventListener("click", async () => {
      const updatedNewValue = prompt("enter new value");
      const todoUpdate = doc(db, "todos", arr[index].id);
      await updateDoc(todoUpdate, {
        todo: updatedNewValue,
      });
      console.log("Data updated");
      arr[index].todo = updatedNewValue;
      renderTodo();
    });
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo: todo.value,
      city: select.value,
      time: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
    arr.push({
      todo: todo.value,
      id: docRef.id,
      city: select.value,
    });
    renderTodo();
    todo.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
