import { motion } from "framer-motion"
import Header from "../components/Header"
import OverView from "../components/HomeScreen/OverView"
import Categories from "../components/HomeScreen/Categories"
import Special from "../components/HomeScreen/Special"


const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      
      <div className="pt-20"> {/* Add this wrapper with padding-top */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <OverView />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Categories />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Special />
        </motion.div>
      </div>
    </div>
  );
};


export default Home
