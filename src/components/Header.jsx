import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Header() {
    const btns = [
        {
            id: 1,
            Icon: Instagram,
            link: "https://www.instagram.com/",
            alt: "Link Instagram",
        },
        {
            id: 2,
            Icon: Linkedin,
            link: "https://www.linkedin.com",
            alt: "Link Linkedin",
        },
        {
            id: 3,
            Icon: Facebook,
            link: "https://www.facebook.com/",
            alt: "Link Facebook",
        },
        {
            id: 4,
            Icon: Youtube,
            link: "https://www.youtube.com/",
            alt: "Link Youtube",
        }
    ];

    const btnStyle = "w-8 h-8 flex justify-center items-center bg-red-600 rounded-full m-1 text-white";

    return (
        <div className="w-auto h-10 flex justify-end bg-slate-400">
            <div className="flex flex-row items-center mr-8">
                {btns.map((btn) => (
                    <a key={btn.id} href={btn.link} target="_blank" rel="noopener noreferrer" aria-label={btn.alt} className={btnStyle}>
                        <btn.Icon className="w-4 h-4" />
                    </a>
                ))}
            </div>
        </div>
    );
}
