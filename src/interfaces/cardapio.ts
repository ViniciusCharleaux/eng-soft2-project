import React, { createContext, useCallback, useState, useContext, ReactNode } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, setDoc, Timestamp, where } from 'firebase/firestore'
import { async } from "@firebase/util";

export interface Cardapio{
    Guarnicao: string,
    Mistura: string,
    Salada: string
}

interface Cardapios{
    Guarnicao: string,
    Mistura: string,
    Salada: string,
    Data: Date
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export const cadastraCardapio = async (Data:Cardapio) => {
    const ref = collection(firestore, "cardapios");


    try {
        await setDoc(doc(ref),{
            guarnicao: Data.Guarnicao,
            mistura: Data.Mistura,
            salada: Data.Salada,
            data: Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"})
        })
        
        return 1
                
    } catch (err) {
        console.log(err)
    return 2
    }
}

export const buscaCardapio = async (): Promise<Cardapios[]> => {

    const C: Cardapios[] = [];

    const ref = collection(firestore, "cardapios");

    const tempo =  Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"});

    const q = query(ref, where("data", "==", tempo));
      
    const querySnapshot = await getDocs(q); 

    //querySnapshot.forEach(QueryDocumentSnapshot=> console.log(QueryDocumentSnapshot.data()));

    querySnapshot.forEach(QueryDocumentSnapshot=>{
        
        //console.log(QueryDocumentSnapshot.data());
        
        const docC:Cardapios = {
            Guarnicao: QueryDocumentSnapshot.get("guarnicao"),
            Mistura: QueryDocumentSnapshot.get("mistura"),
            Salada: QueryDocumentSnapshot.get("salada"),
            Data: QueryDocumentSnapshot.get("data")         
        };

        //console.log(docC);

        C.push(docC);
    });

    return C;
}

export const apagaCardapio = async () => {
    
    const ref = collection(firestore, "cardapios");

    const tempo =  Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"});

    const q = query(ref, where("data", "==", tempo));
      
    const querySnapshot = await getDocs(q); 

    const referencia = querySnapshot.docs[0].id;

    await deleteDoc(doc(ref, referencia));
}
