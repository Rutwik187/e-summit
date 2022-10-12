import styles from "./style";
import {
  // Billing,
  AboutUs,
  // CardDeal,
  // Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Speakers,
  Hero,
  Events,
  Sponsors,
  WhatWeProvide,
} from "./components";
import CountDown from "./components/CountDown";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <AboutUs />
        {/* <Billing />
          <CardDeal /> */}
        {/* <Speakers /> */}
        <WhatWeProvide />
        <Events />
        <CountDown />
        {/* <Sponsors /> */}
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
