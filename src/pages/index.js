import * as React from "react"
import { AboutUsSection, HeroSection, FeaturesSection } from "../components/index";

const IndexPage = () => {
  return (
	  <span>
		<HeroSection />
		<AboutUsSection />
		<FeaturesSection />
	  </span>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
