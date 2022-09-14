import App from "next/app";
import { Component } from "react";
import '../styles/appStyle.css'
import { MainLayout } from "../components/mainLayout";

export default function MyApp({ Component, pageProps}){

    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
    
}