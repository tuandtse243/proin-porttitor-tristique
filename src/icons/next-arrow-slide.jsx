import React from 'react'

const NextArrowSlide = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_28_2)">
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
        d="M28.4375 20.2031L21.5625 26.7656C21.1719 27.1172 20.5859 27.1172 20.2344 26.7266C19.8828 26.3359 19.8828 25.75 20.2734 25.3984L25.4688 20.4375H12.1875C11.6406 20.4375 11.25 20.0469 11.25 19.5C11.25 18.9922 11.6406 18.5625 12.1875 18.5625H25.4688L20.2734 13.6406C19.8828 13.2891 19.8828 12.6641 20.2344 12.3125C20.5859 11.9219 21.2109 11.9219 21.5625 12.2734L28.4375 18.8359C28.6328 19.0312 28.75 19.2656 28.75 19.5C28.75 19.7734 28.6328 20.0078 28.4375 20.2031Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_28_2"
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
            result="effect1_backgroundBlur_28_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_28_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default NextArrowSlide