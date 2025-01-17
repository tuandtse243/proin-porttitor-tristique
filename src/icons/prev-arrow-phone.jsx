import React from 'react'

const PrevArrowPhone = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_66_81)">
        <circle
          cx="30"
          cy="30"
          r="30"
          transform="matrix(1 0 0 -1 0 60)"
          fill="black"
          fill-opacity="0.3"
        />
      </g>
      <path
        d="M17.2852 30.8047C16.9922 30.5117 16.875 30.1602 16.875 29.75C16.875 29.3984 16.9922 29.0469 17.2852 28.7539L27.5977 18.9102C28.1836 18.3828 29.0625 18.3828 29.5898 18.9688C30.1172 19.4961 30.1172 20.4336 29.5312 20.9609L21.7383 28.3438H41.7188C42.4805 28.3438 43.125 28.9883 43.125 29.75C43.125 30.5703 42.4805 31.1562 41.7188 31.1562H21.7383L29.5312 38.5977C30.1172 39.125 30.1172 40.0039 29.5898 40.5898C29.0625 41.1758 28.1836 41.1758 27.5977 40.6484L17.2852 30.8047Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_66_81"
          x="-101"
          y="-101"
          width="262"
          height="262"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="50.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_66_81"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_66_81"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default PrevArrowPhone
