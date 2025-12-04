import HomeAgeRange from '../../components/homeAgeRange/HomeAgeRange'
import HomePanels from '../../components/homePanels/HomePanels'
import HomeDelivery from '../../components/homeDelivery/HomeDelivery'
import HomeHeroCard from '../../components/homeHeroCard/HomeHeroCard'
import HomePods from '../../components/homePods/HomePods'
import HomeTopPicksArrows from '../../components/homeTopPicks/HomeTopPicksArrows'
import StackedCarouselProducts from '../../components/stackedCarouselProducts/StackedCarouselProducts'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <HomeAgeRange />
      <HomePanels />
      <HomeTopPicksArrows /> 
      <HomePods />
      <HomeDelivery />
    </div>
  )
}

export default Home