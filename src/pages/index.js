import * as React from "react"
import { AboutUsSection, FeaturesSection } from "../components/index";

const IndexPage = () => {
  return (
	  <span>
		<AboutUsSection />
		<FeaturesSection />
	  </span>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
