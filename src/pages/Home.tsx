import { navbarItemsData } from '../assets/navbar_items_data/navbar_items_data'
import { TCSearchbar } from '../components/atoms/TCSearchbar/TCSearchbar'
import { TCNavbar } from '../components/molecules/TCNavbar/TCNavbar'
import { TCTermsOfService } from '../components/molecules/TCTermsOfService/TCTermsOfService'
import { TCAddTweet } from '../components/organisms/TCAddTweet/TCAddTweet'
import { TCRecommendedTrendList } from '../components/organisms/TCRecommendedTrendsList/TCRecommendedTrendsList'
import { TCRecommendedUsersToFollowlist } from '../components/organisms/TCRecommendedUserToFollowList/TCRecommendedUserToFollowList'
import { TCTweetsList } from '../components/organisms/TCTweetsList/TCTweetsList'
import { recommendedTrends, recommendedUsers, tweets } from '../test_data/data'

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        width: '1250px',
        justifyContent: 'space-between',
        columnGap: '32px',
      }}
    >
      <div style={{ width: '20%' }}>
        <TCNavbar items={navbarItemsData} />
      </div>
      <div style={{ width: '50%', border: '1px solid lightgray' }}>
        <TCAddTweet />
        <TCTweetsList tweets={tweets} />
      </div>
      <div style={{ width: '30%' }}>
        <TCSearchbar />
        <TCRecommendedTrendList trends={recommendedTrends} />
        <TCRecommendedUsersToFollowlist users={recommendedUsers} />
        <TCTermsOfService />
      </div>
    </div>
  )
}
