import { useState, useEffect } from 'react'
import { useDebounce } from './hooks/debounceHook.jsx';
import { useTranslation } from 'react-i18next';

import './App.css'

function App() {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  // This value only updates 500ms after the user stops typing
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    
  }

  useEffect(() => {
    const isArabic = i18n.language === "ar";
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [i18n.language]); // Only runs when the language changes

  useEffect(() => {
 
    if (debouncedSearchTerm) {
      console.log("Fetching API for:", debouncedSearchTerm);
      // performAPISearch(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm]); // Only runs when the debounced value changes

  const [count, setCount] = useState(0)

  return (
    <>
      <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} // Updates instantly
    />
      <h1 style={{marginTop: '10rem'}}>Code step by step Devops for frontend</h1>
      <h2>{t('welcome_message')}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={()=> setCount(count + 1)}>Count: {count}</button>
         <button onClick={()=> changeLanguage('en')}>English</button>
         <button onClick={()=> changeLanguage('ar')}>العربية</button>
      </div>
      <p>This is a simple counter app.</p>
    </>
  )
}

export default App
