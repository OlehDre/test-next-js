import Link from "next/link"

export function Header(){

    return(
        <>
            <header>
                <Link href={'/'}><a className='logo'>LOGO</a></Link>
                <nav>
                    <Link href={'/'}><a>Main</a></Link>
                    <Link href={'/blog'}><a>Blog</a></Link>
                    <Link href={'/contacts'}><a>Contacts</a></Link>
                    <Link href={'/logIn'}><a>LogIn</a></Link>
                </nav>
            </header>
            <style jsx>{`
                header{
                    background: #000;
                    position: fixed;
                    height: 60px;
                    top: 0;
                    right: 0;
                    left: 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
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