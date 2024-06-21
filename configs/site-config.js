import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Nikolay Benlioglu. All Rights Reserved.`,
  author: {
    name: "Nikolay Benlioglu",
    accounts: [
      {
        url: "https://github.com/nbenliogludev",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://x.com/nbenlioglu_",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://www.linkedin.com/in/nikolay-benlioglu",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:nikbenlioglu@gmail.com",
        label: "Mail nikolay",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
