import React from 'react';
import {v4 as uuid} from 'uuid';
import "./style.scss";
import {NavLink} from "react-router-dom";

class Footer extends React.Component {
    mobileNavItems = [{
        title: "Serien",
        icon: "fas fa-tv",
        href: "/series"
    },{
        title: "Filme",
        icon: "fas fa-tape",
        href: "/movies"
    },{
        title: "Home",
        icon: "fas fa-home",
        href: "/home"
    },{
        title: "Suche",
        icon: "fas fa-search",
        href: "/search"
    },{
        title: "Party",
        icon: "fas fa-users",
        href: "/party"
    }];
    render() {
        return (
            <div id={"footer-container"}>
                <ul id={"foot-nav"}>
                    {this.mobileNavItems.map(item => (
                        <li key={uuid()} className={"nav-item"}>
                            <NavLink className={"nav-link"} exact to={item.href}>
                                <i className={item.icon} />
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Footer;