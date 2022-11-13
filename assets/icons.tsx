import React, { PropsWithChildren } from 'react';
import Svg, {
  SvgProps,
  Path,
  ClipPath,
  Defs,
  Circle,
  G,
  Mask,
} from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
} & SvgProps;

export const CameraIcon = (props: Props) => (
  <Svg width={70} height={70} fill="none" {...props}>
    <Circle cx={35} cy={35} r={29.615} fill="#fff" />
    <Circle cx={35} cy={35} r={33.5} stroke="#fff" strokeWidth={3} />
  </Svg>
);
export const CrossIcon = (props: Props) => (
  <Svg width={52} height={52} fill="none" {...props}>
    <Path
      d="m19.636 32.364 12.728-12.728M32.364 32.364 19.636 19.636"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const FlashIcon = (props: Props) => (
  <Svg width={32} height={32} fill="none" {...props}>
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
);
export const SwitchCameraType = (props: Props) => (
  <Svg width={26} height={26} fill="none" {...props}>
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
);
export const BookmarkIcon = (props: Props) => (
  <Svg width={18} height={22} fill="none" {...props}>
    <Path
      d="m10.489 18.878-.004-.003c-.459-.274-.997-.383-1.485-.383-.488 0-1.026.11-1.485.383l-.004.003-2.373 1.433-.002.001c-1.385.83-2.402.8-2.999.475C1.55 20.467 1 19.655 1 18.083V5.367c.009-1.629.422-2.672 1.069-3.315C2.716 1.41 3.764 1 5.4 1h7.2c1.628 0 2.674.405 3.322 1.042.646.636 1.06 1.666 1.078 3.273v12.768c0 1.572-.55 2.383-1.137 2.704-.597.325-1.614.354-3-.475h-.001l-2.373-1.434Z"
      stroke="#fff"
      strokeWidth={2}
    />
  </Svg>
);
export const DropIcon = (props: Props) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      d="M15.737 3.17a1.197 1.197 0 0 0-1.474 0c-2.296 1.752-9.075 7.468-9.038 14.126 0 5.389 4.386 9.787 9.787 9.787 5.401 0 9.787-4.386 9.787-9.775.013-6.561-6.778-12.373-9.062-14.138Z"
      stroke="#5676DC"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </Svg>
);
export const TemperetureIcon = (props: Props) => (
  <Svg width={15} height={30} fill="none" {...props}>
    <Path
      d="M.75 22.43c0 2.004.855 3.922 2.346 5.262A6.98 6.98 0 0 0 7.803 29.5c.26 0 .524-.014.788-.043 3.171-.339 5.788-2.876 6.222-6.031.43-3.161-1.244-6.16-4.103-7.442V3.391c0-.779-.302-1.505-.848-2.043A2.87 2.87 0 0 0 7.818.5a2.895 2.895 0 0 0-2.891 2.891v12.594C2.412 17.117.75 19.655.75 22.43Zm4.995-5.477a.604.604 0 0 0 .39-.565v-1.514h.757a.604.604 0 0 0 0-1.208h-.757v-1.103h1.36a.604.604 0 0 0 0-1.208h-1.36v-1.103h.757a.604.604 0 0 0 0-1.208h-.757V7.94h1.36a.604.604 0 0 0 0-1.208h-1.36V5.63h.757a.604.604 0 0 0 0-1.209h-.757v-1.03c0-.928.755-1.683 1.683-1.683.449 0 .87.176 1.193.498.316.312.49.733.49 1.185v12.997c0 .251.156.476.39.565 2.567.974 4.098 3.568 3.725 6.308-.36 2.613-2.527 4.714-5.153 4.995-1.69.178-3.308-.338-4.56-1.463a5.874 5.874 0 0 1-1.945-4.363 5.891 5.891 0 0 1 3.787-5.477Z"
      fill="#A559DA"
    />
    <Path
      d="M4.257 25.422a4.634 4.634 0 0 0 3.554 1.66.604.604 0 0 0 0-1.207 3.427 3.427 0 0 1-2.629-1.23 3.464 3.464 0 0 1-.751-2.835.604.604 0 1 0-1.19-.208 4.67 4.67 0 0 0 1.016 3.82Z"
      fill="#A559DA"
    />
  </Svg>
);
export const RulerIcon = (props: Props) => (
  <Svg width={42} height={42} fill="none" {...props}>
    <Path
      d="M31.894 19.932 19.932 31.894c-2.068 2.068-4.34 2.068-6.408 0l-3.418-3.418c-2.067-2.068-2.067-4.34 0-6.408l11.962-11.962c2.068-2.068 4.34-2.068 6.408 0l3.418 3.418c2.068 2.067 2.068 4.34 0 6.408ZM11.388 23.35c-1.35 1.35-1.35 2.494 0 3.845l3.418 3.417c1.35 1.35 2.495 1.35 3.845 0L30.611 18.65c1.35-1.35 1.35-2.495 0-3.845l-3.417-3.417c-1.35-1.35-2.495-1.35-3.845 0L11.388 23.35Z"
      fill="#4B8364"
    />
    <Path
      d="M26.767 16.514a.913.913 0 0 1-1.281 0l-4.272-4.272a.913.913 0 0 1 0-1.282.913.913 0 0 1 1.281 0l4.272 4.273c.35.35.35.93 0 1.281ZM15.66 25.913a.913.913 0 0 1-1.282 0l-3.417-3.418a.913.913 0 0 1 0-1.281.913.913 0 0 1 1.281 0l3.418 3.417c.35.35.35.932 0 1.282ZM19.932 23.35a.908.908 0 0 1-1.29-.009l-4.23-4.315a.903.903 0 0 1 .01-1.273l.008-.008a.898.898 0 0 1 1.281.017l4.23 4.315c.35.35.341.922-.009 1.273ZM21.641 18.223a.913.913 0 0 1-1.282 0l-2.563-2.563a.913.913 0 0 1 0-1.282.913.913 0 0 1 1.282 0l2.563 2.563c.35.35.35.932 0 1.282Z"
      fill="#4B8364"
    />
  </Svg>
);
export const SunIcon = (props: Props) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      d="M15 23.76c-4.833 0-8.76-3.927-8.76-8.76S10.167 6.24 15 6.24s8.76 3.927 8.76 8.76-3.927 8.76-8.76 8.76Zm0-15.708c-3.83 0-6.948 3.118-6.948 6.948 0 3.83 3.118 6.948 6.948 6.948 3.83 0 6.948-3.118 6.948-6.948 0-3.83-3.118-6.948-6.948-6.948ZM15 28.243c-.665 0-1.208-.495-1.208-1.16v-.096c0-.665.543-1.209 1.208-1.209.665 0 1.208.544 1.208 1.209 0 .664-.543 1.256-1.208 1.256Zm8.628-3.407c-.315 0-.617-.121-.858-.35l-.157-.158a1.203 1.203 0 0 1 0-1.703 1.203 1.203 0 0 1 1.703 0l.157.157a1.203 1.203 0 0 1-.845 2.054Zm-17.255 0c-.315 0-.617-.121-.858-.35a1.203 1.203 0 0 1 0-1.704l.157-.157a1.203 1.203 0 0 1 1.703 0 1.203 1.203 0 0 1 0 1.703l-.157.157c-.23.23-.543.35-.845.35Zm20.71-8.628h-.096A1.212 1.212 0 0 1 25.778 15c0-.665.544-1.208 1.209-1.208.664 0 1.256.543 1.256 1.208 0 .665-.495 1.208-1.16 1.208Zm-24.07 0h-.096A1.212 1.212 0 0 1 1.708 15c0-.665.544-1.208 1.209-1.208.664 0 1.256.543 1.256 1.208 0 .665-.495 1.208-1.16 1.208Zm20.457-8.47c-.314 0-.616-.12-.857-.35a1.203 1.203 0 0 1 0-1.704l.157-.157a1.203 1.203 0 0 1 1.703 0 1.203 1.203 0 0 1 0 1.703l-.157.158c-.23.23-.531.35-.846.35Zm-16.94 0c-.315 0-.617-.12-.858-.35l-.157-.17a1.203 1.203 0 0 1 0-1.703 1.203 1.203 0 0 1 1.703 0l.157.157a1.203 1.203 0 0 1 0 1.703c-.23.242-.543.363-.845.363ZM15 4.173c-.665 0-1.208-.495-1.208-1.16v-.096c0-.665.543-1.209 1.208-1.209.665 0 1.208.544 1.208 1.209 0 .664-.543 1.256-1.208 1.256Z"
      fill="#E6B44C"
    />
  </Svg>
);
export const TickIcon = (props: Props) => (
  <Svg width={12} height={9} fill="none" {...props}>
    <Path
      d="M1 5.458 5 8l6-7"
      stroke="#61AF2B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const AddIcon = (props: Props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill="#333"
    />
    <Path
      d="M12 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .41-.34.75-.75.75Z"
      fill="#333"
    />
    <Path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill="#333"
    />
  </Svg>
);
export const SearchIcon = (props: Props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const ScanIcon = (props: Props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M2.77 10C2.34 10 2 9.66 2 9.23V6.92A4.93 4.93 0 0 1 6.92 2h2.31c.43 0 .77.34.77.77s-.34.77-.77.77H6.92c-1.87 0-3.38 1.52-3.38 3.38v2.31c0 .43-.35.77-.77.77ZM21.23 10a.77.77 0 0 1-.77-.77V6.92c0-1.87-1.52-3.38-3.38-3.38h-2.31a.77.77 0 0 1 0-1.54h2.31A4.93 4.93 0 0 1 22 6.92v2.31c0 .43-.34.77-.77.77ZM17.08 22h-1.39a.77.77 0 0 1 0-1.54h1.39c1.87 0 3.38-1.52 3.38-3.38V15.7a.77.77 0 0 1 1.54 0v1.38A4.93 4.93 0 0 1 17.08 22ZM9.23 22H6.92A4.93 4.93 0 0 1 2 17.08v-2.31c0-.43.34-.77.77-.77s.77.34.77.77v2.31c0 1.87 1.52 3.38 3.38 3.38h2.31a.77.77 0 0 1 0 1.54ZM18.46 11.23H5.54a.77.77 0 0 0 0 1.54H18.46a.77.77 0 0 0 0-1.54ZM6.9 13.94v.33c0 1.66 1.34 3 3 3h4.2c1.66 0 3-1.34 3-3v-.33c0-.12-.09-.21-.21-.21H7.11c-.12 0-.21.09-.21.21ZM6.9 10.06v-.33c0-1.66 1.34-3 3-3h4.2c1.66 0 3 1.34 3 3v.33c0 .12-.09.21-.21.21H7.11c-.12 0-.21-.09-.21-.21Z"
      fill="#61AF2B"
    />
  </Svg>
);

export const KitchenIcon = (props: Props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M14.825 8.725v6.1a3.508 3.508 0 0 1-3.508 3.508H5.175a3.514 3.514 0 0 1-3.508-3.508v-6.1a3.508 3.508 0 0 1 3.508-3.508h6.142a3.514 3.514 0 0 1 3.508 3.508ZM4.583 3.333V1.875M7.917 3.333V1.875M11.25 3.333V1.875M18.333 10.967a3.514 3.514 0 0 1-3.508 3.508V7.458a3.508 3.508 0 0 1 3.508 3.509ZM1.667 10h12.925"
      stroke="#5676DC"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const LivingRoomIcon = (props: Props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Mask
      id="a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
      fill="#000">
      <Path fill="#fff" d="M0 0h20v20H0z" />
      <Path d="M18.449 8.297a1.9 1.9 0 0 0-.949-.51V5.125A4.125 4.125 0 0 0 13.375 1h-6.75A4.125 4.125 0 0 0 2.5 5.125v2.662A1.875 1.875 0 0 0 1 9.625v6.75a1.125 1.125 0 0 0 .75 1.058v1.192a.375.375 0 0 0 .375.375h1.5A.375.375 0 0 0 4 18.625V17.5h12v1.125a.375.375 0 0 0 .375.375h1.5a.375.375 0 0 0 .375-.375v-1.192a1.125 1.125 0 0 0 .75-1.058v-6.75a1.876 1.876 0 0 0-.551-1.328ZM3.25 5.125A3.375 3.375 0 0 1 6.625 1.75h6.75a3.375 3.375 0 0 1 3.375 3.375v2.662a1.802 1.802 0 0 0-.315.098l-.101.049c-.07.031-.138.068-.203.109L16 8.125a2.75 2.75 0 0 0-.161.131l-.094.098c-.047.05-.09.105-.131.161a1.432 1.432 0 0 0-.18.296l-.056.12c-.029.072-.051.146-.068.222 0 .037-.023.074-.03.112a1.85 1.85 0 0 0-.03.36v2.25a1.845 1.845 0 0 0-1.125-.375h-8.25a1.845 1.845 0 0 0-1.125.375v-2.25a1.875 1.875 0 0 0-.551-1.328 1.714 1.714 0 0 0-.341-.262 1.692 1.692 0 0 0-.214-.116l-.087-.038a2.25 2.25 0 0 0-.307-.094V5.125Zm1.5 8.25a1.125 1.125 0 0 1 1.125-1.125h8.25a1.125 1.125 0 0 1 1.125 1.125v.375H4.75v-.375Zm-1.5 4.875H2.5v-.75h.75v.75Zm14.25 0h-.75v-.75h.75v.75Zm.75-1.875a.375.375 0 0 1-.375.375H2.125a.375.375 0 0 1-.375-.375v-6.75a1.125 1.125 0 0 1 2.25 0v4.5a.375.375 0 0 0 .375.375h11.25a.375.375 0 0 0 .375-.375v-4.5a1.125 1.125 0 1 1 2.25 0v6.75Z" />
    </Mask>
    <Path
      d="M18.449 8.297a1.9 1.9 0 0 0-.949-.51V5.125A4.125 4.125 0 0 0 13.375 1h-6.75A4.125 4.125 0 0 0 2.5 5.125v2.662A1.875 1.875 0 0 0 1 9.625v6.75a1.125 1.125 0 0 0 .75 1.058v1.192a.375.375 0 0 0 .375.375h1.5A.375.375 0 0 0 4 18.625V17.5h12v1.125a.375.375 0 0 0 .375.375h1.5a.375.375 0 0 0 .375-.375v-1.192a1.125 1.125 0 0 0 .75-1.058v-6.75a1.876 1.876 0 0 0-.551-1.328ZM3.25 5.125A3.375 3.375 0 0 1 6.625 1.75h6.75a3.375 3.375 0 0 1 3.375 3.375v2.662a1.802 1.802 0 0 0-.315.098l-.101.049c-.07.031-.138.068-.203.109L16 8.125a2.75 2.75 0 0 0-.161.131l-.094.098c-.047.05-.09.105-.131.161a1.432 1.432 0 0 0-.18.296l-.056.12c-.029.072-.051.146-.068.222 0 .037-.023.074-.03.112a1.85 1.85 0 0 0-.03.36v2.25a1.845 1.845 0 0 0-1.125-.375h-8.25a1.845 1.845 0 0 0-1.125.375v-2.25a1.875 1.875 0 0 0-.551-1.328 1.714 1.714 0 0 0-.341-.262 1.692 1.692 0 0 0-.214-.116l-.087-.038a2.25 2.25 0 0 0-.307-.094V5.125Zm1.5 8.25a1.125 1.125 0 0 1 1.125-1.125h8.25a1.125 1.125 0 0 1 1.125 1.125v.375H4.75v-.375Zm-1.5 4.875H2.5v-.75h.75v.75Zm14.25 0h-.75v-.75h.75v.75Zm.75-1.875a.375.375 0 0 1-.375.375H2.125a.375.375 0 0 1-.375-.375v-6.75a1.125 1.125 0 0 1 2.25 0v4.5a.375.375 0 0 0 .375.375h11.25a.375.375 0 0 0 .375-.375v-4.5a1.125 1.125 0 1 1 2.25 0v6.75Z"
      fill="#E6B44C"
    />
    <Path
      d="M18.449 8.297a1.9 1.9 0 0 0-.949-.51V5.125A4.125 4.125 0 0 0 13.375 1h-6.75A4.125 4.125 0 0 0 2.5 5.125v2.662A1.875 1.875 0 0 0 1 9.625v6.75a1.125 1.125 0 0 0 .75 1.058v1.192a.375.375 0 0 0 .375.375h1.5A.375.375 0 0 0 4 18.625V17.5h12v1.125a.375.375 0 0 0 .375.375h1.5a.375.375 0 0 0 .375-.375v-1.192a1.125 1.125 0 0 0 .75-1.058v-6.75a1.876 1.876 0 0 0-.551-1.328ZM3.25 5.125A3.375 3.375 0 0 1 6.625 1.75h6.75a3.375 3.375 0 0 1 3.375 3.375v2.662a1.802 1.802 0 0 0-.315.098l-.101.049c-.07.031-.138.068-.203.109L16 8.125a2.75 2.75 0 0 0-.161.131l-.094.098c-.047.05-.09.105-.131.161a1.432 1.432 0 0 0-.18.296l-.056.12c-.029.072-.051.146-.068.222 0 .037-.023.074-.03.112a1.85 1.85 0 0 0-.03.36v2.25a1.845 1.845 0 0 0-1.125-.375h-8.25a1.845 1.845 0 0 0-1.125.375v-2.25a1.875 1.875 0 0 0-.551-1.328 1.714 1.714 0 0 0-.341-.262 1.692 1.692 0 0 0-.214-.116l-.087-.038a2.25 2.25 0 0 0-.307-.094V5.125Zm1.5 8.25a1.125 1.125 0 0 1 1.125-1.125h8.25a1.125 1.125 0 0 1 1.125 1.125v.375H4.75v-.375Zm-1.5 4.875H2.5v-.75h.75v.75Zm14.25 0h-.75v-.75h.75v.75Zm.75-1.875a.375.375 0 0 1-.375.375H2.125a.375.375 0 0 1-.375-.375v-6.75a1.125 1.125 0 0 1 2.25 0v4.5a.375.375 0 0 0 .375.375h11.25a.375.375 0 0 0 .375-.375v-4.5a1.125 1.125 0 1 1 2.25 0v6.75Z"
      stroke="#E6B44C"
      strokeWidth={0.4}
      mask="url(#a)"
    />
  </Svg>
);
export const DrawingRoomIcon = (props: Props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M3.455 7.545H5.09c1.636 0 2.454-.818 2.454-2.454V3.455C7.545 1.818 6.727 1 5.091 1H3.455C1.818 1 1 1.818 1 3.455V5.09c0 1.636.818 2.454 2.455 2.454ZM14.91 7.545h1.636c1.636 0 2.454-.818 2.454-2.454V3.455C19 1.818 18.182 1 16.546 1h-1.637c-1.636 0-2.454.818-2.454 2.455V5.09c0 1.636.818 2.454 2.454 2.454ZM14.91 19h1.636C18.181 19 19 18.182 19 16.545V14.91c0-1.636-.818-2.455-2.454-2.455h-1.637c-1.636 0-2.454.819-2.454 2.455v1.636c0 1.637.818 2.455 2.454 2.455ZM3.455 19H5.09c1.636 0 2.454-.818 2.454-2.455V14.91c0-1.636-.818-2.455-2.454-2.455H3.455C1.818 12.454 1 13.273 1 14.91v1.636C1 18.182 1.818 19 3.455 19Z"
      stroke="#4B8364"
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={9.877}
      cy={9.876}
      r={1.227}
      transform="rotate(-60 9.877 9.876)"
      fill="#4B8364"
    />
  </Svg>
);
export const BackYardIcon = (props: Props) => (
  <Svg width={22} height={24} fill="none" {...props}>
    <Path
      d="m3.16 22.243-.002.002c-.153.256-.11.58.156.746.115.11.235.109.322.109h.004c.086 0 .18-.028.26-.074a.414.414 0 0 0 .182-.202l2.033-3.244h4.246l2.038 3.253.002.003c.1.15.259.264.435.264h.005c.04 0 .097 0 .149-.015a.242.242 0 0 0 .14-.102c.255-.169.295-.486.144-.739l-1.667-2.708h1.265a.462.462 0 0 0 .395-.11.517.517 0 0 0 .153-.386.54.54 0 0 0-.15-.39.54.54 0 0 0-.39-.15H6.814l.709-1.12H8.92a.54.54 0 0 0 .39-.15.54.54 0 0 0 .15-.39.54.54 0 0 0-.15-.39.54.54 0 0 0-.39-.15H7.204a.533.533 0 0 0-.26.074.414.414 0 0 0-.182.202l-1.027 1.601-3.916-3.916a.525.525 0 0 0-.758 0 .525.525 0 0 0 0 .758l4.08 4.08-1.982 3.144ZM21.34 9.184c0-1.208-.703-2.28-1.76-2.833V4.08A3.161 3.161 0 0 0 16.4.9a3.161 3.161 0 0 0-3.18 3.18v2.269a3.173 3.173 0 0 0-1.76 2.835 3.161 3.161 0 0 0 3.18 3.18h1.22V22.56a.54.54 0 0 0 .15.39.54.54 0 0 0 .39.15.54.54 0 0 0 .39-.15.54.54 0 0 0 .15-.39V12.364h1.22a3.161 3.161 0 0 0 3.18-3.18Zm-3.18 2.1h-1.22V8.521l1.159-1.158a.525.525 0 0 0 0-.758.525.525 0 0 0-.758 0l-.401.402v-.023a.54.54 0 0 0-.15-.39.54.54 0 0 0-.39-.15.54.54 0 0 0-.39.15.54.54 0 0 0-.15.39v2.267l-.841-.842a.525.525 0 0 0-.758 0 .525.525 0 0 0 0 .758l1.599 1.598v.519h-1.22c-1.177 0-2.1-.923-2.1-2.1 0-.881.545-1.678 1.381-1.972a.523.523 0 0 0 .379-.492V4.08c0-1.177.923-2.1 2.1-2.1s2.1.923 2.1 2.1v2.64c0 .22.16.434.379.492a2.083 2.083 0 0 1 1.381 1.972c0 1.177-.923 2.1-2.1 2.1Z"
      fill="#A559DA"
      stroke="#A559D9"
      strokeWidth={0.2}
    />
  </Svg>
);
export const ArrowIcon = (props: Props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"
      fill="#011928"
      opacity={0.5}
    />
  </Svg>
);
