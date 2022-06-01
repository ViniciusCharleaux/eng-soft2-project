import React, { createContext, useCallback, useState, useContext, ReactNode } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore'

interface pedido{
    Guarnicao: string,
    Mistura: string,
    Salada: string,
    Tamanho: string,
    Valor: string
}


const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

const cadastraPedido = async (Data:pedido) => {
    const ref = collection(firestore, "pedidos");


    try {
        await setDoc(doc(ref, "Chave gerada por timestamp"),{
            guarnicao: Data.Guarnicao,
            mistura: Data.Mistura,
            salada: Data.Mistura,
            tamanho: Data.Tamanho,
            valor: Data.Valor
        })
        
        return 1
                
    } catch (err) {
        console.log(err)
    return 2
    }
}

const buscaPedido = async (Data:pedido) => {
    const ref = collection(firestore, "pedidos");

}