import * as React from "react"
import Svg, { Path } from "react-native-svg"
const UVSvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M13 30H9a2.003 2.003 0 0 1-2-2v-8h2v8h4v-8h2v8a2.003 2.003 0 0 1-2 2ZM25 20h-1.75L21 29.031 18.792 20H17l2.5 10h3L25 20zM15 2h2v5h-2zM21.687 8.9l3.506-3.507 1.414 1.415-3.506 3.506zM25 15h5v2h-5zM2 15h5v2H2zM5.394 6.808l1.414-1.415L10.314 8.9 8.9 10.314zM22 17h-2v-1a4 4 0 0 0-8 0v1h-2v-1a6 6 0 0 1 12 0Z" />
    <Path
      d="M0 0h32v32H0z"
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
    />
  </Svg>
)
export default UVSvgComponent