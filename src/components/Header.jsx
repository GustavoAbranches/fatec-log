import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";

export default function Header() {

    const btns = [
        {
            id: 1,
            img: instagram,
            link: "https://www.instagram.com/",
            alt: "Link Instagram",
        },

        {
            id: 2,
            img: linkedin,
            link: "https://www.linkedin.com",
            alt: "Link Linkedin",
        },

        {
            id: 3,
            img: facebook,
            link: "https://www.facebook.com/",
            alt: "Link Instagram",
        },

        {
            id: 4,
            img: youtube,
            link: "https://www.youtube.com/",
            alt: "Link Youtube",
        }
    ];

    const btnStyle = "w-6 h-6 flex justify-center items-center bg-red-600 rounded-full m-1";
    const imgStyle = "w-4 h-4";

    return(
        <div className="w-auto h-10 flex justify-end bg-slate-400">
            <div className="flex flex-row items-center mr-8">
                {btns.map((btn) => (
                    <div key={btn.id} className={btnStyle}>
                        <a href={btn.link} >
                            <img src={btn.img} alt={btn.alt} className={imgStyle} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}