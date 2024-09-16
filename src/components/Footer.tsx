import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const footerLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
  {
    title: "News",
    href: "#news",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/sathyadevlab/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/SathyaDevLab",
    label: "GitHub",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    action: true,
  },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "shanthisathya1@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <footer className="bg-slate-800 text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="font-bold text-2xl mb-6 md:mb-0">YourIdealHaven</div>

        <div className="flex flex-col md:flex-row md:gap-12">
          <ul className="flex flex-col">
            {footerLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.href} className="hover:text-purple-400">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col relative">
          {copied && (
            <div className="text-center text-green-400 mt-4 absolute top-3">
              Email copied to clipboard!
            </div>
          )}
          <div className="flex gap-6 mt-6 md:mt-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href || "#href"}
                onClick={social.action ? copyToClipboard : undefined}
                className="hover:text-purple-400 text-gray-200"
                aria-label={social.label}
                target={social.action ? undefined : "_blank"}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
