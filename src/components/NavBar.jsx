import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import about from "../img/about.png";
import work from "../img/work.png";
import './NavBar.css'

export default function NavBar() {
    const links = [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'work',
            url: '/projects'
        },
        {
            name: 'about',
            url: '/contact'
        },
    ]
    return (
        <div className="wrapper">
            {/* <Link to="/projects"> <img className="work" src={work} /></Link>
            <Link to="/contact"><img className="about" src={about} /></Link> */}
            {links.map((item) => {
                return (
                    <Link className="navLink" to={item.url}>{item.name}</Link>

                )
            })}
        </div>
    )
}
