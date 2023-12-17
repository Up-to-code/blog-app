import Grid_posts from "../components/layout/Grid_posts"
import Ads from "../components/ui/Ads"
import Hero from "../components/ui/Hero/Hero"
import Footer from "../components/ui/Footer/Footer"
function Home() {
  return (
    <div>
      <Hero />
      <Ads />
      <Grid_posts />
      <Ads />
      <Footer />
    </div>
  )
}

export default Home