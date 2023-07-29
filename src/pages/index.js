import * as React from "react"
import { AboutUsSection, HeroSection, FeaturesSection, Layout} from "../components/index";

const IndexPage = () => {
  return (
	  <Layout>
		<HeroSection />
		<AboutUsSection />
		<FeaturesSection />
	  </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
