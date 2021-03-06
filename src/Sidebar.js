import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = ({sidebar}) => {

    return (
        <div className={sidebar? "sidebar open" : "sidebar"}>
            {sidebar ? <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" className="sidebar__logo_mobile" /> : null}
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Subscription"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Trending"/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            <hr />
        </div>
    )
}

export default Sidebar

