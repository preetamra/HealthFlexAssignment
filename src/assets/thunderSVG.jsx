import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const ThunderSvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Uploaded to svgrepo.com"
    width={300}
    height={300}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M12.738 25.5H9.809l2.5-5h7.484l-3 3h2.669l-8.354 6.076z"
      style={{
        fill: "#ead13f",
      }}
    />
    <Path
      d="M9 20.5A6.508 6.508 0 0 1 2.5 14a6.483 6.483 0 0 1 5.804-6.462l.347-.037.085-.338A7.485 7.485 0 0 1 16 1.5c4.136 0 7.5 3.364 7.5 7.5v.5h.5c3.033 0 5.5 2.468 5.5 5.5s-2.467 5.5-5.5 5.5H9z"
      style={{
        fill: "#788287",
      }}
    />
    <Path
      d="M24 9a8 8 0 0 0-8-8c-3.741 0-6.873 2.572-7.748 6.041A7 7 0 0 0 9 21h2.5L9 26h3l-2 5 11-8h-3l2-2h4a6 6 0 1 0 0-12zm-8.414 15h2.339l-5.708 4.151L13.477 25h-2.859l2-4h5.968l-3 3zM24 20H9c-3.308 0-6-2.692-6-6a5.982 5.982 0 0 1 5.357-5.964l.693-.074.171-.676A6.987 6.987 0 0 1 16 2c3.86 0 7 3.14 7 7v1h1c2.757 0 5 2.243 5 5s-2.243 5-5 5z"
      style={{
        fill: "#231f20",
      }}
    />
  </Svg>
)
export default ThunderSvgComponent
