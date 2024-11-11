import { RiHomeSmile2Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";

export const routes = [
    {
        title: "Home",
        route: "/",
        icon: RiHomeSmile2Fill,
        color: "#3498db",
        id: 1
    },
    { 
        title: "Skills",
        route: "/skills",
        icon: FaAward,
        color: "#e74c3c",
        id: 2
    },
    {
        title: "About",
        route: "/about",
        icon: FaUserPen,
        color: "#9b59b6",
        id: 3
    },
    {
        title: "Experience",
        route: "/experience",
        icon: MdWorkHistory,
        color: "#2ecc71",
        id: 4
    },
    {
        title: "Services",
        route: "/services",
        icon: RiServiceFill,
        color: "#f1c40f",
        id: 5
    },
    {
        title: "Contact",
        route: "/contact",
        icon: RiContactsBook3Fill,
        color: "#e67e22",
        id: 6
    },
    {
        title: "Projects",
        route: "/projects",
        icon: FaProjectDiagram,
        color: "#1abc9c",
        id: 7
    }
];
