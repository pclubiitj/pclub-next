import Link from 'next/link';
import Logo from './Logo';

const links = [
    {
        to: '/',
        text: 'Home',
        privateRoute: false
    },
    {
        to: '/About',
        text: 'About Us',
        privateRoute: false
    }
];

export default function Nav() {
    return (
        <div className="container mx-auto p-5">
            <nav className="flex justify-between items-center">
                <div>
                    <Logo />
                </div>
                <ul className="flex flex-row">
                    {links.map(({ to, text, privateRoute }) => {
                        if (!privateRoute) {
                            return (
                                <li key={`${text}`} className="pr-5">
                                    <Link href={to} className="no-underline btn-blue ">
                                        <button className="no-underline btn-blue">{text}</button>
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>
            </nav>
        </div>
    );
}
