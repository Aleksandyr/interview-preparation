import React from 'react'
import Icon from './Icon'

const NavItem = (props) => {
    return (
        <div>
            <a className="smoothScroll" href={props.navItemHref} title={props.navItemTitle}><Icon className={props.iconClassName} /></a>
        </div>
    )
}

export default NavItem;