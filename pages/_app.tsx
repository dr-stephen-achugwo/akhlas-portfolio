import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from 'framer-motion'
import countapi from 'countapi-js';
import router from 'next/router';

function MyApp({ Component, pageProps }) {
countapi.visits().then((result) => {
    console.log("This page was visited " + result.value);
});
  return (
   <ThemeProvider attribute="class">
  <div className = 'grid grid-cols-12 gap-6 my-14 lg:px-20 px-5 sm:px- md:px-20'>
      <div className = 'lg:col-span-3 bg-white dark:bg-dark-500 rounded-2xl col-span-12 p-4 text-center shadow-custom-light dark:shadow-custom-dark'>
        <Sidebar/>
        </div>
      <div className = 'overflow-hidden lg:col-span-9 bg-white dark:bg-dark-500 dark:text-white rounded-2xl col-span-12 flex flex-col shadow-custom-light dark:shadow-custom-dark'>
        <Navbar/>
        <AnimatePresence exitBeforeEnter>
                  <Component {...pageProps} key={router} />
               </AnimatePresence>
      </div>
  </div>
 </ThemeProvider>
  )
}

export default MyApp
