import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="current"
      strokeWidth={2}
      d="M34.642 5h-6.654l.834 8.333S30.488 15 32.988 15a5.384 5.384 0 0 0 3.565-1.343.838.838 0 0 0 .25-.775l-1.176-7.049A1 1 0 0 0 34.642 5Z"
    />
    <path
      stroke="current"
      strokeWidth={2}
      d="m27.988 5 .834 8.333S27.155 15 24.655 15s-4.167-1.667-4.167-1.667V5h7.5Z"
    />
    <path
      stroke="current"
      strokeWidth={2}
      d="M20.489 5v8.333S18.822 15 16.322 15s-4.167-1.667-4.167-1.667L12.99 5h7.5Z"
    />
    <path
      stroke="current"
      strokeWidth={2}
      d="M12.988 5H6.337a1 1 0 0 0-.987.835l-1.175 7.048a.84.84 0 0 0 .25.775 5.386 5.386 0 0 0 3.563 1.344c2.5 0 4.167-1.667 4.167-1.667l.833-8.333V5Z"
    />
    <path
      stroke="current"
      strokeWidth={2}
      d="M5.5 15v16.667A3.333 3.333 0 0 0 8.833 35h23.334a3.333 3.333 0 0 0 3.333-3.333V15"
    />
    <path
      stroke="current"
      strokeMiterlimit={16}
      strokeWidth={2}
      d="M25.222 35V25a3.334 3.334 0 0 0-3.334-3.333h-3.333A3.333 3.333 0 0 0 15.222 25v10"
    />
  </svg>
)
export default SvgComponent
