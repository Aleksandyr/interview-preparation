import React from 'react'
import NavItem from './NavItem'

const NavItems = (props) => (
    <ul id="nav" className="nav">
        <li className="menu-item">
            <NavItem navItemHref={props.navitem.firstNavItemHref} navItemTitle={props.navitem.firstNavItemTitle} iconClassName={props.icon.firstIconClass} />
        </li>
        <li className="menu-item">
            <NavItem navItemHref={props.navitem.secondNavItemHref} navItemTitle={props.navitem.secondNavItemTitle}  iconClassName={props.icon.secondIconClass} />
        </li>
        <li className="menu-item">
            <NavItem navItemHref={props.navitem.thirdNavItemHref} navItemTitle={props.navitem.thirdNavItemTitle}  iconClassName={props.icon.thirdIconClass} />
        </li>
        <li className="menu-item">
            <NavItem navItemHref={props.navitem.fourthNavItemHref} navItemTitle={props.navitem.fourthNavItemTitle}  iconClassName={props.icon.fourthIconClass} /> 
        </li>
    </ul>
)

export default NavItems