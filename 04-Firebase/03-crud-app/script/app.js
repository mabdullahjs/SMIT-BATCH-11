import { signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth, checkUserStatus, db } from "./config.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const logoutUser = document.querySelector("#logout-user");

// check user status

// checkUserStatus()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);

// })

let userData = null;

async function userDataObject() {
  const obj = await checkUserStatus();
  userData = obj;
}

userDataObject();
// logout user

logoutUser.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location = "login.html";
    })
    .catch((error) => {
      alert(error);
    });
});

// get all products and render

const allProducts = document.querySelector("#products");

let allPost = [];

async function getAllAds() {
  const querySnapshot = await getDocs(collection(db, "postAd"));
  querySnapshot.forEach((doc) => {
    allPost.push(doc.data());
  });
  console.log(allPost);
  renderAds();
}

getAllAds();

function renderAds() {
  allPost.map((item, index) => {
    console.log(item);
    allProducts.innerHTML += `
     <div>
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src="${item.adImage}" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${item.title}</h2>
              <p>${item.description}</p>
              <div class="card-actions justify-start">
                <h2 class="relative top-[45px] font-bold text-lg">Rs ${item.price}</h2>
              </div>
              <div class="card-actions justify-end">
                <button class="text-white btn bg-[#F000B8]"><a href="./postdetail.html">MORE INFO</a></button>
              </div>
            </div>
          </div>
        </div>
    `;
  });
}
