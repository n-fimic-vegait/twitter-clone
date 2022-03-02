import './TCTweet.scss'
import { AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { BsUpload } from 'react-icons/bs'
import { TweetModel } from '../../../model/TweetModel'
import { FunctionComponent, useState } from 'react'
import { Popover } from 'react-tiny-popover'
import { TCContextMenu } from '../TCContextMenu/TCContextMenu'
import {
  retweetContextMenuItems,
  tweetContextMenuItems,
} from '../../../assets/context_menus_data/context_menus_data'

interface TCTweetProps {
  tweet: TweetModel
}

export const TCTweet: FunctionComponent<TCTweetProps> = ({ tweet }) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
  const [isRetweetContextMenuOpen, setIsRetweetContextMenuOpen] =
    useState(false)

  return (
    <div className='tc-tweet'>
      <div className='tc-tweet__category'>
        <AiFillMessage className='tc-tweet__category__icon' />
        <span className='tc-tweet__category__name'> {tweet.categoryName} </span>
        {` · `}
        <Link to='/home' className='tc-tweet__category__see-more-link'>
          See more
        </Link>
      </div>
      <div className='tc-tweet__data'>
        <div>
          <img
            className='tc-tweet__data__user-profile-image'
            src={tweet.userProfileImageUrl}
            alt='user_profile_image'
          />
        </div>
        <div className='tc-tweet__data__user-data-and-tweet-text'>
          <div className='tc-tweet__data__user-data'>
            <div>
              <span className='tc-tweet__data__user-data__name'>
                {tweet.userFullName}
              </span>
              <span className='tc-tweet__data__user-data__username'>
                {tweet.userUsername} ·
              </span>
              <span className='tc-tweet__data__user-data__time'>
                {' '}
                {tweet.time}h
              </span>
            </div>
            <Popover
              isOpen={isContextMenuOpen}
              positions={['bottom', 'top']}
              reposition={true}
              onClickOutside={() => setIsContextMenuOpen(false)}
              align={'end'}
              padding={-25}
              content={<TCContextMenu items={tweetContextMenuItems} />}
            >
              <div>
                <HiDotsHorizontal
                  className='tc-tweet__data-user-data__options-icon'
                  onClick={() => setIsContextMenuOpen(!isContextMenuOpen)}
                />
              </div>
            </Popover>
          </div>
          <div className='tc-tweet__data__user-data-and-tweet-text__tweet-text'>
            <p>{tweet.content}</p>
          </div>
        </div>
      </div>
      <div className='tc-tweet__bottom-icons'>
        <div className='tc-tweet__bottom-icons__icon-wrapper tc-tweet__bottom-icons__icon-and-num-reply'>
          <BiMessageRounded className='tc-tweet__bottom-icons__icon-and-num-reply__reply-icon' />
          <span className='tc-tweet__bottom-icons__icon-wrapper__number'>
            {tweet.replyNumber}
          </span>
        </div>
        <Popover
          isOpen={isRetweetContextMenuOpen}
          positions={['bottom', 'top']}
          reposition={true}
          onClickOutside={() => setIsRetweetContextMenuOpen(false)}
          align={'end'}
          padding={-30}
          content={<TCContextMenu items={retweetContextMenuItems} />}
        >
          <div
            onClick={() =>
              setIsRetweetContextMenuOpen(!isRetweetContextMenuOpen)
            }
            className='tc-tweet__bottom-icons__icon-wrapper tc-tweet__bottom-icons__icon-and-num-retweet'
          >
            <AiOutlineRetweet className='tc-tweet__bottom-icons__icon-and-num-reply__retweet-icon' />
            <span className='tc-tweet__bottom-icons__icon-wrapper__number'>
              {tweet.retweetNumber}
            </span>
          </div>
        </Popover>
        <div className='tc-tweet__bottom-icons__icon-wrapper tc-tweet__bottom-icons__icon-and-num-like'>
          <AiOutlineHeart className='tc-tweet__bottom-icons__icon-and-num-reply__like-icon' />
          <span className='tc-tweet__bottom-icons__icon-wrapper__number'>
            {tweet.likeNumber}
          </span>
        </div>
        <div className='tc-tweet__bottom-icons__icon-wrapper-share'>
          <BsUpload className='tc-tweet__bottom-icons__icon-and-num-reply__share-icon' />
        </div>
      </div>
    </div>
  )
}
