import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader className="pizza-block"
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="270" rx="5" ry="5" width="260" height="30" /> 
    <rect x="0" y="311" rx="5" ry="5" width="260" height="77" /> 
    <rect x="3" y="408" rx="10" ry="10" width="90" height="31" /> 
    <rect x="129" y="397" rx="20" ry="20" width="127" height="50" />
  </ContentLoader>
)

export default Loader;