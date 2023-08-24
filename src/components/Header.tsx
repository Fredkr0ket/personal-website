import { css, keyframes } from '@emotion/css';
import React, { useState, useEffect } from 'react';
import GithubButton from './Buttons/GithubButton';
import LightmodeSwitch from './Buttons/LightmodeSwitch';
import LinkedinButton from './Buttons/LinkedinButton';
import '../assets/fonts/major-mono-display-regular/stylesheet.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 0) {
                setIsScrolled(true);
                setIsAtTop(false);
            } else {
                setIsScrolled(false);
                setIsAtTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.root}>
            <a href="/">
                <h1 className={`${styles.title} ${isScrolled && styles.fadeOutText} ${isAtTop && styles.fadeInText}`}>
                    Ferdo Van Balen
                </h1>
            </a>
            <div className={styles.iconBox}>
                <LinkedinButton url={'https://www.linkedin.com/in/ferdo-van-balen-441879241/'} />
                <GithubButton url={'https://github.com/Fredkr0ket'} />
                <LightmodeSwitch />
            </div>
        </div>
    );
};

const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const styles = {
    root: css`
        position: sticky;
        top: 0;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: transparent;
        z-index: 1;
        @media (max-width: 718px) {
            flex-direction: column;
            margin-top: 20px;
            text-align: center;
        }
    `,
    fadeOutText: css`
        animation: ${fadeOutAnimation} 1s forwards;
    `,
    fadeInText: css`
        animation: ${fadeInAnimation} 1s forwards;
    `,
    iconBox: css`
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 170px;
    `,
    title: css`
        font-family: major_mono_displayregular;
        font-size: 30px;
    `,
};

export default Header;