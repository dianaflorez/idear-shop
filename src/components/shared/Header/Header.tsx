import Link from "next/link";

export const Header = () => {
    console.log('Header');
    return (
        <nav>
            <ul>
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/store">
                <li>Store</li>
                </Link>
                <Link href="/storebefore">
                <li>Store Before</li>
                </Link>
            </ul>
        </nav>
    );    
}