export default function Layout({ children } : { childen : React.ReactNode }){
    
    return(
        <main>
            <nav>Navegacion de las categorias </nav>
            {children}
        </main>
    )

}