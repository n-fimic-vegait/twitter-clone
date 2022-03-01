import './TCRecommendedTrend.scss'
import { FunctionComponent, useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import numbro from 'numbro'
import { TrendModel } from '../../../model/TrendModel'
import { Popover } from 'react-tiny-popover'
import { TCContextMenu } from '../TCContextMenu/TCContextMenu'
import { recommendedTrendsContextMenuItems } from '../../../assets/context_menus_data/context_menus_data'

interface TCRecommendedTrendProps {
  trend: TrendModel
}

export const TCRecommendedTrend: FunctionComponent<TCRecommendedTrendProps> = ({
  trend,
}) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)

  return (
    <>
      <div className='tc-trend'>
        <div className='tc-trend__content'>
          <p className='tc-trend__content__category'> {trend.category} </p>
          <p className='tc-trend__content__name'> {trend.name} </p>
          <p className='tc-trend__content__number-of-tweets'>
            {trend.numberOfTweets > 10000
              ? numbro(trend.numberOfTweets).format({
                  average: true,
                  totalLength: 2,
                })
              : numbro(trend.numberOfTweets).format({
                  thousandSeparated: true,
                })}{' '}
            Tweets
          </p>
        </div>

        <div className='tc-trend__options'>
          <Popover
            isOpen={isContextMenuOpen}
            positions={['bottom']}
            reposition={true}
            onClickOutside={() => setIsContextMenuOpen(false)}
            align={'end'}
            padding={-25}
            content={
              <TCContextMenu items={recommendedTrendsContextMenuItems} />
            }
          >
            <div>
              <HiDotsHorizontal
                className='tc-trend__options__more'
                onClick={() => setIsContextMenuOpen(!isContextMenuOpen)}
              />
            </div>
          </Popover>
        </div>
      </div>
    </>
  )
}
