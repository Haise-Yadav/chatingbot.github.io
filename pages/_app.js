import { useRouter } from "next/router";
import {motion, AnimatePresence} from "framer-motion"
import './global.css'

const App = ({ Component, pageProps}) => {

    const router = useRouter();

    return(
        <AnimatePresence mode="wait">
        <motion.div key={router.pathname}> 
       

        <motion.div className="absolute t-0 l-0 w-full h-full bg-black origin-bottom z-90"
         initial={{scaleY:0}}
         animate={{scaleY:0}}
         exit={{scaleY:1}}
         transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
         >

        </motion.div>
        <motion.div className="absolute t-0 l-0 w-full h-full bg-black origin-top z-90"
         initial={{scaleY:1}}
         animate={{scaleY:0}}
         exit={{scaleY:0}}
         transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
         >

        </motion.div>
        <Component {...pageProps}/>

        </motion.div>
        </AnimatePresence>
    )

};

export default App;