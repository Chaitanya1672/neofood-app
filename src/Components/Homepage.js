import React from 'react';
import Styles from './Homepage.module.css'
import chefhat from '../static/images/chefhat.png'
import Search from '../static/images/Search.png'

const Homepage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className={`row mt-4 ${Styles.navbar}`}>
                    <span className={`col-md-4 ${Styles.title}`}>
                        <span><img src={chefhat} /></span>
                        <span >NeoFood</span>
                    </span>
                    <span className={`col ${Styles.nav_menu}`}><a>Home</a></span>
                    <span className={`col ${Styles.nav_menu}`}><a>Menu</a></span>
                    <span className={`col ${Styles.nav_menu}`}><a>Contact</a></span>
                    <span className={`col ${Styles.nav_menu}`}><a>Shop</a></span>
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