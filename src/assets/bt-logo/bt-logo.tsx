import * as React from 'react';
import { Link } from 'react-router-dom';
// const BTLogo: React.FunctionComponent = () => {

//     return (
//         <svg id="BT_Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
//         viewBox="0 0 521.6 521.6" xml:space="preserve">
//         <path className="st0" d="M273.6,171.9h129.9V210h-43.6v139.3h-42.8V210h-43.5L273.6,171.9L273.6,171.9z M260.8,489.5
//         C134.6,489.5,32.1,387,32.1,260.8S134.6,32.1,260.8,32.1s228.7,102.5,228.7,228.7S387,489.5,260.8,489.5 M260.8,521.6
//         c144,0,260.8-116.8,260.8-260.8S404.8,0,260.8,0C116.9,0,0,116.8,0,260.8S116.9,521.6,260.8,521.6 M216.7,295c0-11.2-7-18.8-19-18.8
//         H169v37h28.7C209.7,313.2,216.7,305.7,216.7,295 M211.5,223.8c0-9.4-6-15.9-16.2-15.9H169v32.3h26.3
//         C205.5,240.2,211.5,233.7,211.5,223.8 M260,297.1c0,33.6-23.7,52.2-57.6,52.2h-75.6V171.9h70.6c34.2,0,57.4,17.5,57.4,49.5
//         c0,14.6-6.5,27.6-17,35.5C249.8,264,260,277.5,260,297.1"/>
//     </svg>
    
//     )

// }
import './bt-logo.css';

interface IProps {
    focusable?: boolean;
    altName: string;
    className?: string;
    size?: string;
    noDefaultClass?: boolean;
    contentId?: string;
    pageLink?: string;
}

const BTLogo = ({
    focusable = false,
    className,
    noDefaultClass,
    size,
    contentId,
    altName, pageLink
  }: IProps) => (

    <Link aria-label={altName} to={pageLink}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" focusable={focusable}
      className={`icon-svg--${size} bt-navbar__bt-logo`
      }
      data-content-id={contentId}>
        <path className={`bt-navbar__bt-logo + ${className} + ${noDefaultClass}`} fillRule="evenodd" clipRule="evenodd" d="M59.8202 68.3399C59.8202 76.08 54.3602 80.3401 46.5602 80.3401H29.1704V39.5399H45.4202C53.2802 39.5399 58.6202 43.5599 58.6202 50.94C58.6202 54.3002 57.1203 57.3001 54.7202 59.1C57.4802 60.7201 59.8202 63.8399 59.8202 68.3399M48.6601 51.48C48.6601 49.32 47.2801 47.8202 44.9402 47.8202H38.8801V55.2598H44.9402C47.2801 55.2598 48.6601 53.76 48.6601 51.48M49.8601 67.86C49.8601 65.2799 48.2402 63.5401 45.4802 63.5401H38.8801V72.06H45.4802C48.2402 72.06 49.8601 70.3199 49.8601 67.86M60 120C93.1201 120 120 93.1201 120 60C120 26.8799 93.1201 0 60 0C26.8801 0 0 26.8799 0 60C0 93.1201 26.8801 120 60 120M60.0001 112.62C30.9601 112.62 7.38013 89.04 7.38013 60C7.38013 30.96 30.9601 7.3798 60.0001 7.3798C89.0401 7.3798 112.62 30.96 112.62 60C112.62 89.04 89.0401 112.62 60.0001 112.62M62.9402 39.5399H92.82V48.2999H82.8001V80.3401H72.9599V48.2999H62.9402V39.5399" fill="white"/>
      </svg>
    </Link>


  );

export default BTLogo;

