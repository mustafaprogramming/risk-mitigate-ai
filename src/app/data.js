//icons
import { FaXTwitter, FaFacebook , FaHandHoldingDollar , FaRegStar } from 'react-icons/fa6'
import { RiTelegram2Fill } from "react-icons/ri";
import { TbHeartRateMonitor } from "react-icons/tb";
import { MdSpeed ,MdFolderOpen,MdMonitor ,MdOutlinedFlag } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { SiThealgorithms } from "react-icons/si";


export const links=[
 {
  text:'home',
  link:'/'
 },
 {
  text:'about us',
  link:'/about-us'
 },
 {
  text:'why us',
  link:'/why-us'
 },
 {
  text:'roadmap',
  link:'/roadmap'
 },
]
export const usefulLinks=[
 {
  text:'privacy policy',
  link:'/privacy-policy'
 },
 {
  text:'terms of use',
  link:'/terms-of-use'
 },
]
export const socialLinks=[
 {
  icon:<RiTelegram2Fill />,
  text:'@RiskMitigateAI',
  link:'https://www.telegram.com'
 },
 {
  icon:<FaFacebook />,
  text:'@RiskMitigateAI',
  link:'https://www.facebook.com'
 },
 {
  icon:<FaXTwitter />,
  text:'@RiskMitigateAI',
  link:'https://www.x.com'
 }
]
export const aboutUsCards=[
  {
    icon:<FaHandHoldingDollar />,
    id:'721709',
    title:'Predicting Borrower Defaults',
    text:'Uses AI to calculate the likelihood of loan defaults based on market trends and user history.'
  },
  {
    icon:<TbHeartRateMonitor />,
    id:'721719',
    title:'Monitoring Collateral Health',
    text:'Tracks the value of collateral in real-time and sends alerts when it approaches liquidation thresholds.'
  },
  {
    icon:<MdSpeed />,
    id:'721718',
    title:'Optimizing Interest Rates',
    text:'Dynamically adjusts lending and borrowing rates to ensure stable and efficient liquidity pools.'
  },
  {
    icon:<AiOutlineStock />,
    id:'738918',
    title:'Provide actionable insights',
    text:'Empower lending platform with actionable insights, enabling smarter decisions & proactive risk management. '
  },
]
export const coreValues=[
  {
    id:'0127282',
    stepNo:'01',
    title:'Innovation',
    text:'We push the boundaries of AI and blockchain integration to deliver state-of-the-art solutions.'
  },
  {
    id:'0237282',
    stepNo:'02',
    title:'Transparency',
    text:'We believe in open communication and building trust with our users and partners.'
  },
  {
    id:'0327282',
    stepNo:'03',
    title:'User-Centric Design',
    text:'Our tools are designed with simplicity and effectiveness in mind to meet the needs of DeFi users.'
  },
  {
    id:'0427282',
    stepNo:'04',
    title:'Collaboration',
    text:'We work closely with blockchain platforms and developers to create a more robust DeFi ecosystem.'
  },
]
export const aiLeverage=[
  {
    icon:<SiThealgorithms />,
    id:'8018',
    title:'Artificial Intelligence',
    text:'Advanced algorithms to predict risks, optimize decisions, and provide real-time insights. '
  },
  {
    icon:<MdMonitor />,
    id:'7918',
    title:'Blockchain Integration',
    text:'Deep integration with Solana protocols to ensure secure and seamless operations.'
  },
  {
    icon:<MdFolderOpen />,
    id:'7762',
    title:'Real-Time Analytics',
    text:'Instant access to data, empowering users to act before risks materialize.'
  },
]
export const whyUSArray=[
 {
  id:'782178',
  icon:<FaRegStar />,
  title:'Seamless Integration',
  text:'Effortlessly integrate RiskMitigateAI with your existing Solana-based lending platforms without disrupting your operations.',
 },
 {
  id:'782118',
  icon:<CiLock />,
  title:'Real-Time Insights',
  text:'Leverage AI-powered analytics to gain instant updates on borrower behavior, market trends, and collateral value.',
 },
 {
  id:'752178',
  icon:<IoIosLogIn />,
  title:'Enhanced Security',
  text:'Safeguard your assets with cutting-edge encryption and robust data protection protocols tailored to the financial sector.',
 },
 {
  id:'782298',
  icon:<FaRegStar />,
  title:'Tailored for Solana',
  text:'Purpose-built for the Solana blockchain, ensuring seamless compatibility and efficiency.',
 },
 {
  id:'787918',
  icon:<CiLock />,
  title:'Proactive Risk Management',
  text:'Stay ahead of market volatility with predictive AI tools.',
 },
 {
  id:'717678',
  icon:<IoIosLogIn />,
  title:'Trusted Solutions',
  text:'Designed to help users maximize safety and returns in decentralized lending.',
 },
]
export const howToUse=[
  {
    id:'91738793',
    stepNo:'step 1',
    title:'Access Your Dashboard',
    steps:['Log in and connect your Solana wallet.','Instantly see an overview of your active loans, collateral value, and Borrower Default Risk Scores.']
  },
  {
    id:'93223393',
    stepNo:'step 2',
    title:'Monitor Risks',
    steps:['Track real-time updates on collateral health and liquidation thresholds','Check risk scores for each loan to identify potential problems early.']
  },
  {
    id:'917387278',
    stepNo:'step 3',
    title:'Access Your Dashboard',
    subtitle:'Follow AI-generated recommendations to manage risks',
    steps:['Add collateral to secure your position.','Adjust interest rates or close risky positions for stability.']
  },
  {
    id:'917111193',
    stepNo:'step 4',
    title:'Stay Informed',
    steps:['Set up personalized alerts for key events like collateral drops or market changes.','Receive updates via email, SMS, or directly in the app.']
  },
]
export const roadmapArray = [
  {
    id: '783209710',
    date: 'Q1 2025',
    name:'Beta Launch',
    goal: 'Deliver a functional beta version of RiskMitigateAI.',
    keyPoints:[
      "Launch borrower default prediction and collateral monitoring features.",
      "Integrate Solana wallet support (e.g., Phantom, Solflare) for user authentication.",
      "Provide real-time alerts for collateral health and liquidation risks.",
      "Open beta access to a limited group of users for testing and feedback.",
      "Optimize platform responsiveness for desktop and mobile users."
    ],
  },
  {
    id: '802909710',
    date: 'Q2 2025',
    name:'Platform Expansion',
    goal: ' Extend functionality and enhance user experience.',
    keyPoints:[
      "Integrate with Solend for seamless risk management on lending and borrowing positions.",
      "Add dynamic interest rate optimization to maximize returns and reduce costs for users.",
      "Launch an advanced analytics dashboard for personalized risk insights.",
      "Onboard 500+ beta testers and incorporate feedback to refine the platform.",
      "Strengthen data security and encryption for sensitive user information."
    ],
  },
  {
    id: '883209710',
    date: 'Q3 2025',
    name:'Feature Rollout',
    goal: 'Expand RiskMitigateAI’s capabilities and reach.',
    keyPoints:[
      "Add support for multiple Solana-based DeFi protocols beyond Solend (e.g., Mango Markets, Serum).",
      "Introduce auto-rebalancing features to manage collateral across different platforms.",
      "Launch customizable alerts, allowing users to set their own risk thresholds.",
      "Begin integration of governance tools for Solana-based DAOs, enabling proposal analysis and voting recommendations.",
      "Scale platform infrastructure to handle increased user traffic."
    ]
  },
  {
    id: '673209710',
    date: 'Q4 2025',
    name:'Full Platform Release',
    goal: 'Full version release with multi-protocol support.',
    keyPoints:[
      "Launch the complete version of RiskMitigateAI with all core features operational.",
      "Provide multi-protocol support for Solana-based DeFi applications.",
      "Roll out advanced reporting and analytics tools, including ROI tracking and portfolio management.",
      "Begin global marketing efforts to drive adoption among retail and institutional users.",
      "Partner with additional Solana-based platforms to expand reach and utility."
    ]
  },
]
export const futureGoal=[
  {
    id:'271893092',
    icon:<MdOutlinedFlag />,
    title:'Cross-Chain Compatibility: ',
    desc:'Expand RiskMitigateAI to support other blockchains like Ethereum and Binance Smart Chain.',
  },
  {
    id:'271768092',
    icon:<MdOutlinedFlag />,
    title:'Machine Learning Enhancements',
    desc:'Continuously improve risk prediction algorithms with user data (while maintaining privacy).',
  },
  {
    id:'212789092',
    icon:<MdOutlinedFlag />,
    title:'AI Governance Tools',
    desc:'Offer automated governance proposal analysis and real-time voting tools for DAOs.',
  },
  {
    id:'212078762',
    icon:<MdOutlinedFlag />,
    title:'Institutional Partnerships',
    desc:'Collaborate with DeFi protocols and financial institutions to standardize risk management practices in DeFi.',
  },
]