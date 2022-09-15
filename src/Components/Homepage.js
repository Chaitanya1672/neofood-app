import React from 'react';
import Styles from './Homepage.module.css'
import chefhat from '../static/images/chefhat.png'
import Search from '../static/images/Search.png'
import { homepage } from '../utils/data';


const Homepage = () => {
    return (
        <>
            <div className="container">
                <div className={`row mt-4 ${Styles.navbar}`}>
                    <span className={`col-md-4 ${Styles.title}`}>
                        <span><img src={chefhat} /></span>
                        <span>{homepage?.nav?.title}</span>
                    </span>
                    <span className={`col ${Styles.nav_menu}`}><a>{homepage?.nav?.home}</a></span>
                    <span className={`col ${Styles.nav_menu}`}><a>{homepage?.nav?.menu}</a></span>
                    <span className={`col ${Styles.nav_menu}`}><a>{homepage?.nav?.contact}</a></span>
                    <span className={`col ${Styles.nav_menu}`}><a>{homepage?.nav?.shop}</a></span>
                    <span className='col-md-4 '>
                        <img src={Search} />
                        <input
                            className={`${Styles.search_input}`}
                            type='text'
                            placeholder='Search'
                        ></input>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Homepage;