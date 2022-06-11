import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" width={80} height={60} alt="logo"/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/tasks"><a>Tasks</a></Link>
        </nav>
     );
}
 
export default Navbar;