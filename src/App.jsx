import { useState } from 'react';
import MainPage from './pages/MainPage';
import TwitterPage from './pages/TwitterPage';
import VkPage from './pages/VkPage';
import GithubPage from './pages/GithubPage';
import FacebookPage from './pages/FacebookPage';
import AppRouter from 'components/appRouter/AppRouter';
import SettingsPage from 'pages/SettingsPage';
import i18n from 'i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Color, ColorContext } from 'context';

const App = () => {

  // const [page, setPage] = useState('main')

  // function getPage() {
  //   if (page === 'main') {
  //     return <MainPage setPage={setPage} />
  //   }
  //   else if (page === 'twitter') {
  //     return <TwitterPage />
  //   } else if (page === 'vk') {
  //     return <VkPage />
  //   }
  //   else if (page === 'facebook') {
  //     return <FacebookPage />
  //   }
  //   else if (page === 'github') {
  //     return <GithubPage />
  //   }
  // }

  const [color, setColor] = useState('red')

  return (
    <I18nextProvider i18n={i18n}>
      <ColorContext.Provider value={{
        color,
        setColor
      }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ColorContext.Provider>
    </I18nextProvider>
  )
}



export default App;

{/* <SettingsPage /> */ }
{/* <MainPage /> */ }
// getPage()
// <AppRouter />