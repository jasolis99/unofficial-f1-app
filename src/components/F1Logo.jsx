import React from "react"
import Svg, { SvgProps, Defs, Path, Use } from "react-native-svg"

function F1Logo(props) {
  return (
    <Svg
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Defs>
        <Path
          id="prefix__a"
          d="M101.09 30h.625v-2.893h.01l1.04 2.893h.54l1.04-2.893h.01V30h.626v-3.749h-.914l-1.008 2.935h-.01l-1.035-2.935h-.924V30zm-3.46-3.182h1.187V30h.656v-3.182h1.192v-.567h-3.034v.567zM90.004 30l30-30h-18.056L71.948 30h18.056zm-4.301-16.935H49.385c-11.068 0-13.005.587-17.746 5.328C27.205 22.826 20.003 30 20.003 30h15.732l3.753-3.754c2.468-2.467 3.74-2.723 8.921-2.723h26.834l10.458-10.459zm-54.547 3.188c-3.274 3.09-10.4 10.01-14.24 13.747H.004S13.555 16.487 21.088 9.072C28.848 1.685 32.717 0 46.952 0h51.816l-11.22 11.219H48.006c-10.002 0-12.25.693-16.85 5.034z"
        />
      </Defs>
      <Use fill="#FFF" xlinkHref="#prefix__a" fillRule="evenodd" />
    </Svg>
  )
}

export default F1Logo
