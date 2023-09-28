import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import 'styles/css/generalColors.css'
import 'styles/css/settings.css'


function SettingsPage() {

    const { t, i18n } = useTranslation()

    function changeLanguage() {
        console.log('i18n :', i18n);
        const currentLanguage = i18n.language
        const language = currentLanguage === 'ru' ? 'en' : 'ru'
        localStorage.setItem('language', language)
        i18n.changeLanguage(language)
    }

    const buttonRef = useRef(null)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        document.documentElement.dataset.theme = theme
    }, [])


    function changeTheme() {
        const currentTheme = document.documentElement.dataset.theme
        const theme = currentTheme === 'light' ? 'dark' : 'light'
        console.log('currentTheme :', currentTheme);
        buttonRef.current.classList.toggle('active')
        localStorage.setItem('theme', theme)
    }


    return (
        <div className="settingsContainer">
            <h1>{t('settingsPage.title')}</h1>
            <p>{t('settingsPage.text')}</p>
            <div onClick={changeLanguage}>Изменить язык страницы</div>

            <div ref={buttonRef} onClick={changeTheme} className="changeTheme" />
        </div>
    );
}

export default SettingsPage;