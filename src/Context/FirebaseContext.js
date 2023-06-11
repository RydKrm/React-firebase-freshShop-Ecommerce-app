import { addDoc, 
  collection, 
  deleteDoc, 
  deleteField, 
  doc, 
  getDoc, 
  getDocs, 
  getFirestore, 
  setDoc, 
  updateDoc } from 'firebase/firestore';
 import {
   ref,
   uploadBytes,
   getDownloadURL,
   getStorage,
 } from "firebase/storage";
// import React, { useState } from 'react';
import app from '../fireBase/firebase.init';
import { v4 } from "uuid";

const db = getFirestore(app);

export  const AddDoc = (ref,data)=>{
  const colRef = collection(db,ref);
  addDoc(colRef, data)
    .then((docRef) => {
      console.log(" Add Document successfully");
    })
    .catch((error) => {
      console.log(error);
    });
    
};
export const AddDocWithId =async (ref,data)=>{

  const colRef = collection(db, ref);
   return await addDoc(colRef, data)
    .then((docRef) => {
      console.log("Add document with Id",docRef.id); 
      return docRef.id;
    })
    .catch((error) => {
      console.log(error);
    });
}

export const SetDocWithCustomId = (ref,data,id) =>{
    const docRef = doc(db, ref, id);
    setDoc(docRef, data)
        .then(() => {
            console.log("Document added with custom Id");
        })
        .catch(error => {
            console.log(error);
        })
}

export const UpdateDoc = (ref,data,id)=>{
    const docRef = doc(db,ref,id);
    UpdateDoc(docRef,data)
    .then(()=>{
        console.log("Field Update successfully");
    })
    .catch((err)=>{
        console.log("Error ",err);
    })
}

export const DeleteField = (ref,field,id) =>{
    const docRef = doc(db,ref,id);
    const data = {
      field: deleteField(),
    };
    updateDoc(docRef, data)
      .then(() => {
        console.log("Code Field has been deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
}

export const DeleteDoc = (ref,id) =>{
    const docRef = doc(db,ref,id);

    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
}

export const GetAllDoc = async (ref) => {
  const colRef = collection(db, ref);
  const documentData = [];

  const querySnapshot = await getDocs(colRef);
  querySnapshot.forEach((doc) => {
    const documentWithId = {
      id: doc.id,
      ...doc.data(),
    };
    documentData.push(documentWithId);
  });

  return documentData;
};

export const GetADoc = async(ref,id)=>{
    const docRef = doc(db,ref,id);
    const docSnap = await getDoc(docRef);
       return docSnap.data();
}

export const ImageUpload = async (imgRef,img)=>{
  const storage = getStorage(app);
  const imageRef = ref(storage,`images/${imgRef}/${img.name+v4()}`)
  await uploadBytes(imageRef,img);
  const url = await getDownloadURL(imageRef);
  console.log("Firebase Image upload successfully ");
 return url;
}


//  const Module = {
//      AddDoc,
//     AddDocWithId,
//     FirebaseContext
//  }
// export default Module;

