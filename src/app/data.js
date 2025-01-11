//icons
import { FaXTwitter, FaFacebook , FaHandHoldingDollar , FaRegStar } from 'react-icons/fa6'
import { RiTelegram2Fill } from "react-icons/ri";
import { TbHeartRateMonitor } from "react-icons/tb";
import { MdSpeed } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";

export const links=[
 {
  text:'home',
  link:'/'
 },
 {
  text:'about us',
  link:'#about-us'
 },
 {
  text:'why us',
  link:'#why-us'
 },
 {
  text:'roadmap',
  link:'#roadmap'
 },
]
export const contactLinks=[
 {
  text:'contact us',
  link:'/contact-us'
 },
 {
  text:'privacy policy',
  link:'/privacy-policy'
 },
 {
  text:'terms of use',
  link:'/term-of-use'
 },
]
export const socialLinks=[
 {
  icon:<RiTelegram2Fill />,
  text:'@RiskMitigateAI',
  link:'www.telegram.com'
 },
 {
  icon:<FaFacebook />,
  text:'@RiskMitigateAI',
  link:'www.facebook.com'
 },
 {
  icon:<FaXTwitter />,
  text:'@RiskMitigateAI',
  link:'www.x.com'
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