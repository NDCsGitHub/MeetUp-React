import React from 'react'
import { Link } from 'react-router-dom'



export default function MainNavigation() {
    return (

        <header>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Create New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>


                </ul>
            </nav>


        </header>

    )
}
