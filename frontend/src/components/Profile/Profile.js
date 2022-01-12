import Styles from "./Profile.module.css";
import Lottie from "react-lottie";
import studentImage from "../../Animation/Login.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./Items.js";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    isClickToPauseDisabled: true,
    animationData: studentImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={Styles.profile}>
      <div className={Styles.first}>
        <div className={Styles.left}>
          <img src="https://acharya.ac.in/img/acharya-logo.png" alt="" />
          <div className={Styles.studentname}>
            <h1>Praveen Kumar Singh</h1>
            <h3>BCA-BCA</h3>
          </div>
        </div>
        <div className={Styles.right}>
          <Lottie
            isClickToPauseDisabled
            options={defaultOptions}
            width={200}
            height={200}
            //   height={Styles.lottie}
          />
        </div>
      </div>
      <div className={Styles.menu}>
        <h2>This is menu card</h2>
        <div className={Styles.header}>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? `${Styles.selected}` : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div
                    className={Styles.underline}
                    layoutId={Styles.underline}
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <main>
          {" "}
          <AnimatePresence exitBeforeEnter>
            //{" "}
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Profile;

// import { initialTabs as tabs } from "./Items.js";

// export default function App() {
//   const [selectedTab, setSelectedTab] = useState(tabs[0]);

//   return (
//     <div className={Styles.window}>
//       <nav>
//         <ul>
//           {tabs.map((item) => (
//             <li
//               key={item.label}
//               className={item === selectedTab ? `${Styles.selected}` : ""}
//               onClick={() => setSelectedTab(item)}
//             >
//               {`${item.icon} ${item.label}`}
//               {item === selectedTab ? (
//                 <motion.div className={Styles.underline} layoutId="underline" />
//               ) : null}
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <main>
//         <AnimatePresence exitBeforeEnter>
//           <motion.div
//             key={selectedTab ? selectedTab.label : "empty"}
//             animate={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 20 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.15 }}
//           >
//             {selectedTab ? selectedTab.icon : "😋"}
//           </motion.div>
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// }
