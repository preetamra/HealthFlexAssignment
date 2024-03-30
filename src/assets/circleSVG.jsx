import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const CircleSvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={300}
    viewBox="0 0 72 72"
    {...props}
  >
    <Circle cx={36} cy={36} r={28} fill="#f1b31c" />
    <Circle
      cx={36}
      cy={36}
      r={28}
      fill="none"
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
)

export default CircleSvgComponent