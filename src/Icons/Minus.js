import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className={props.className}
    {...props}
  >
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M20 12H4" />
  </svg>
)
export default SvgComponent
