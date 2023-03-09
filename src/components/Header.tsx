import { css } from '@emotion/css'
import React from 'react'
import GithubButton from './Buttons/GithubButton'
import LightmodeSwitch from './Buttons/LightmodeSwitch'
import LinkedinButton from './Buttons/LinkedinButton'
import '../assets/fonts/major-mono-display-regular/stylesheet.css'

const Header = () => {

    return (
        <div className={styles.root}>
            <a href='/'>
                <h1 className={styles.title}>Ferdo Van Balen</h1>
            </a>
            <div className={styles.iconBox}>
                <LinkedinButton url={'https://www.linkedin.com/in/ferdo-van-balen-441879241/'} />
                <GithubButton url={'https://github.com/Fredkr0ket'} />
                <LightmodeSwitch />
            </div>
        </div>
    )
}

const styles = {
    root: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height:100px;
        background-color: transparent;

    `,
    iconBox: css`
        display: flex;
        align-items: center;
        justify-content: space-around;
        width:140px;
    `,
    title: css`
        font-family: major_mono_displayregular;
        font-size: 30px;
    `
}

export default Header