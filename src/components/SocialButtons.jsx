import Instagram from "../assets/icons/Instagram.png";
import Linkedin from "../assets/icons/Linkedin.png";
import Facebook from "../assets/icons/Facebook.png";
import Youtube from "../assets/icons/Youtube.png";

const SocialButton = () => {
  const btns = [
    {
      id: 1,
      icon: Instagram,
      link: "https://www.instagram.com/",
      alt: "Link Instagram",
    },
    {
      id: 2,
      icon: Linkedin,
      link: "https://www.linkedin.com",
      alt: "Link Linkedin",
    },
    {
      id: 3,
      icon: Facebook,
      link: "https://www.facebook.com/",
      alt: "Link Facebook",
    },
    {
      id: 4,
      icon: Youtube,
      link: "https://www.youtube.com/",
      alt: "Link Youtube",
    },
  ];

  const btnStyle = "w-8 h-8 flex justify-center items-center bg-orange-500 rounded-full m-1 text-white";

  return (
    <div className="flex flex-row items-center">
      {btns.map((btn) => (
        <a
          key={btn.id}
          href={btn.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={btn.alt}
          className={btnStyle}
        >
          <img src={btn.icon} className="w-4 h-4"></img>
        </a>
      ))}
    </div>
  );
};

export default SocialButton;
