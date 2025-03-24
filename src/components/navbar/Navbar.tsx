"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import CalendarSVG from '../../../public/svg/CalendarSVG';
import DangerSVG from '../../../public/svg/DangerSVG';
import InfoSVG from '../../../public/svg/InfoSVG';
import WrenchSVG from '../../../public/svg/WrenchSVG';
import useCurrentDate from '@/hooks/useCurrentDate';
import useTimeDifference from '@/hooks/useTimeDifference';
import ModalHelper from '../modal/modalHelper';


function Navbar(){

    const buttonsData = [
        {icon: <DangerSVG color='#000' width={32}/>, text: 'Bieżące awarie', url: '/current'},
        {icon: <WrenchSVG color='#000' width={35}/>, text: 'Ostatnie awarie', url: '/latest'},
        {icon: <CalendarSVG color='#000' width={32}/>, text: 'Serwisy i konserwacje', url: '/mantain'},
    ];

    const time = useTimeDifference();
    const today = useCurrentDate();

    const [showInfo, setShowInfo] = useState(false);

    const handleInfoToggle = () => {
        console.log('chuj')
        setShowInfo(!showInfo);
    }

    return(
        <>
        <nav className={styles.navWrapper}>
            <div className={styles.buttonsWrapper}>
                {buttonsData.map((button, index)=> (
                    <Link key={`nav_button_${index}`} className={styles.button} href={button.url}>
                        {button.icon}
                         <span>{button.text}</span>
                    </Link>
                ))}
                <button className={styles.button} onClick={handleInfoToggle}>
                    <InfoSVG color='#000' width={30}/>
                </button>
            </div>
            <div className={styles.clock}>
                <b>{time}</b>
                <b>{today.toLocaleDateString()}</b>
            </div>
        </nav>
        {showInfo && (
            <ModalHelper onClose={handleInfoToggle} />
        )}
        </>
    )
};

export default Navbar;