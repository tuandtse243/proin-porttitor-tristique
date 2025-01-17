import React from 'react'

const PrevArrowSlide = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_28_6)">
        <circle
          cx="20"
          cy="20"
          r="20"
          transform="matrix(1 0 0 -1 0 40)"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <path
        d="M11.5234 20.2031C11.3281 20.0078 11.25 19.7734 11.25 19.5C11.25 19.2656 11.3281 19.0312 11.5234 18.8359L18.3984 12.2734C18.7891 11.9219 19.375 11.9219 19.7266 12.3125C20.0781 12.6641 20.0781 13.2891 19.6875 13.6406L14.4922 18.5625H27.8125C28.3203 18.5625 28.75 18.9922 28.75 19.5C28.75 20.0469 28.3203 20.4375 27.8125 20.4375H14.4922L19.6875 25.3984C20.0781 25.75 20.0781 26.3359 19.7266 26.7266C19.375 27.1172 18.7891 27.1172 18.3984 26.7656L11.5234 20.2031Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_28_6"
          x="-54"
          y="-54"
          width="148"
          height="148"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="27" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_28_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_28_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default PrevArrowSlide