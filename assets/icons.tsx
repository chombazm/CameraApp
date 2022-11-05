import * as React from "react"
import Svg, { SvgProps, Path, ClipPath, Defs, Circle, G  } from "react-native-svg"

type Props = {
  color?: string
  size?: number
} & SvgProps

export const CameraIcon = (props: Props) => (
  <Svg
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <Circle cx={35} cy={35} r={29.615} fill="#fff" />
    <Circle cx={35} cy={35} r={33.5} stroke="#fff" strokeWidth={3} />
  </Svg>
)
export const CrossIcon = (props: Props) => (
  <Svg
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <Path
      d="m19.636 32.364 12.728-12.728M32.364 32.364 19.636 19.636"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export const FlashIcon = (props: Props) => (
  <Svg
  width={32}
  height={32}
  fill="none"
  {...props}
>
  <Path
    d="M12.24 24.053v3.254c0 2.24 1.213 2.693 2.693 1.013l10.094-11.467c1.24-1.4.72-2.56-1.16-2.56h-1.24M13.307 7.947 6.96 15.16c-1.24 1.4-.72 2.56 1.16 2.56h4.12v1.573M19.76 11.787V4.693c0-2.24-1.213-2.693-2.693-1.013"
    stroke="#fff"
    strokeWidth={1.5}
    strokeMiterlimit={10}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <Path
    d="M29.333 2.667 2.667 29.333"
    stroke="#fff"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</Svg>
)
export const SwitchCameraType = (props: Props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M.007 2.089a.967.967 0 0 1 .841-1.084.967.967 0 0 1 1.084.841l.582 4.512a11.995 11.995 0 0 1 9.928-5.288c5.11 0 9.654 3.25 11.32 8.069a.969.969 0 0 1-.599 1.229.994.994 0 0 1-1.245-.598 10.03 10.03 0 0 0-9.476-6.76 10.084 10.084 0 0 0-8.554 4.787l4.851-.55a.955.955 0 0 1 1.067.857c.049.534-.323 1.019-.857 1.067l-6.985.793H1.85a.948.948 0 0 1-.954-.841l-.89-7.034Zm24.03 12.984-6.986.793a.964.964 0 0 0-.857 1.067.964.964 0 0 0 1.067.857l4.22-.469a10.017 10.017 0 0 1-9.055 5.724c-4.382 0-8.328-2.926-9.589-7.115a.965.965 0 0 0-1.213-.646.965.965 0 0 0-.647 1.212 12.123 12.123 0 0 0 4.253 6.097 11.896 11.896 0 0 0 7.196 2.409c4.786 0 9.071-2.846 10.963-7.163l.68 5.384c.064.485.485.841.954.841h.129a.967.967 0 0 0 .84-1.083l-.905-7.034a.953.953 0 0 0-1.05-.874Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="matrix(1 0 0 -1 0 26)" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
