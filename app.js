import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebase.mjs";


const btn = document.getElementById("btn")
btn.addEventListener('click', async () => {

    const text = document.getElementById("text").value

    try {
        const docRef = await addDoc(collection(db, "mubashir"), {
            text: text


        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})



const querySnapshot = await getDocs(collection(db, "mubashir"));
querySnapshot.forEach((doc) => {

    const div = document.getElementById("show")
    div.innerHTML += `

    <p>${doc.data().text}</p>
    <br>
    <button onclick="edit('${doc.id}')">edit</button>
    <button onclick="dlete('${doc.id}')">delete</button>
    `
    console.log(doc.data().text)
});

const dlete = async (id) => {
    await deleteDoc(doc(db, "mubashir", "id"));
    location.reload()

}


const edit = async(id)=>{
    const arr = prompt("Enter Your Value")
    const washingtonRef = doc(db, "mubashir", id);

    await updateDoc(washingtonRef, {
        text: arr ,

    });
    location.reload();
}
window.edit = edit
window.dlete = dlete



