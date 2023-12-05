import { FaHome, FaUser, FaDumbbell, FaCalendar, FaCog } from "react-icons/fa";


export const IconMappings = {
    home: <FaHome color="white"/>,
    user: <FaUser color="white" />,
    info: <FaDumbbell color="white" size={18} />,
    events: <FaCalendar color="white"/>,
    cog: <FaCog color="white"/>,
};

const SidebarItems = [
    {
        name: "Dashboard",
        route: '/',
        icon: 'home'
    },
    {
        name: "Profile",
        route: '/profile',
        icon: 'user'
    },
    {
        name: "Training",
        route: '/training',
        icon: 'info'
    },
    {
        name: "Events",
        route: '/events',
        icon: 'events'
    },
    {
        name: "Settings",
        route: '/settings',
        icon: 'cog'
    },
];

export default SidebarItems;






