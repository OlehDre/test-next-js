import Head from "next/head"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function MainLayout({ children }){

    return(
        <>
            <Head>
                <title>Some page</title>
            </Head>
            <Header></Header>
            <main>
                { children }
            </main>
            <Footer></Footer>

            <style jsx>{`
                main{
                    margin-top: 60px;
                    min-height: 1000px;
                }
            `}</style>
        </>
    )
}