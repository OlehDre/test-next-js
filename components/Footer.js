import Link from "next/link"

export function Footer(){

    return(
        <>
            <footer>
                <Link href={'/'}><a className='logo'>LOGO</a></Link>
                <nav>
                    <Link href={'/'}><a>Main</a></Link>
                    <Link href={'/blog'}><a>Blog</a></Link>
                    <Link href={'/contacts'}><a>Contacts</a></Link>
                    <Link href={'/logIn'}><a>LogIn</a></Link>
                </nav>
            </footer>
            <style jsx>{`
                footer{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 160px;
                    background: #000;
                }
                .logo{
                    color: #fff;
                    font-size: 2em;
                }

                a{
                    color: #fff;
                    text-decoration: none;
                }

                nav a{
                    margin: 0 30px;
                    font-size: 1.1em;
                    transition: all .2s ease;
                }

                nav a:hover{
                    color: #d1ffc7;
                }

            `}</style>
        </>
    )
}