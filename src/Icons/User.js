import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    className={props.className}
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M24 27v-2.667c0-1.414-.478-2.77-1.328-3.77C21.822 19.561 20.67 19 19.467 19h-7.934c-1.202 0-2.355.562-3.205 1.562-.85 1-1.328 2.357-1.328 3.771V27M16.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
  </svg>
)
export default SvgComponent
