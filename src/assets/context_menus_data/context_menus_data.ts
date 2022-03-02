import { ContextMenuItemModel } from '../../model/ContextMenuItemModel'

export const recommendedTrendsContextMenuItems: ContextMenuItemModel[] = [
  { iconName: 'BsEmojiFrown', text: 'Not interested in this' },
  { iconName: 'BsEmojiFrown', text: 'This trend is harmful or spammy' },
]

export const navbarMoreOptionsContextMenuItems: ContextMenuItemModel[] = [
  { iconName: 'BiMessageRoundedDetail', text: 'Topics' },
  { iconName: 'BsLightning', text: 'Moments' },
  { iconName: 'IoNewspaperOutline', text: 'Newsletters' },
  { iconName: 'IoRocketOutline', text: 'Twitter for Professionals' },
  { iconName: 'BsArrowUpRightSquare', text: 'Twitter Ads' },
  { iconName: 'MdOutlineStackedBarChart', text: 'Analytics' },
  { iconName: 'IoSettingsOutline', text: 'Settings and privacy' },
  { iconName: 'IoHelpCircleOutline', text: 'Help Center' },
  { iconName: 'MdOutlineBrush', text: 'Display' },
  { iconName: 'IoMan', text: 'Keyboard shortcuts' },
]

export const tweetContextMenuItems: ContextMenuItemModel[] = [
  { iconName: 'BiMessageRoundedX', text: 'Unfollow Computer programming' },
  { iconName: 'BsEmojiFrown', text: 'Not interested in this Tweet' },
  { iconName: 'HiOutlineUserAdd', text: 'Follow @csaba_kissi' },
  {
    iconName: 'BiMessageRoundedAdd',
    text: 'Add/remove @csaba_kissi from Lists',
  },
  { iconName: 'IoVolumeMuteOutline', text: 'Mute @csaba_kissi' },
  { iconName: 'MdOutlineBlock', text: 'Block @csaba_kissi' },
  { iconName: 'ImEmbed2', text: 'Embed Tweet' },
  { iconName: 'BsFlag', text: 'Report Tweet' },
]

export const retweetContextMenuItems: ContextMenuItemModel[] = [
  { iconName: 'AiOutlineRetweet', text: 'Retweet' },
  { iconName: 'BsPencil', text: 'Quote Tweet' },
]

export const shareContextMenuItems: ContextMenuItemModel[] = [
  { iconName: 'FaRegEnvelope', text: 'Send via Direct Message' },
  { iconName: 'MdOutlineBookmarkAdd', text: 'Bookmarks' },
  { iconName: 'BsLink45Deg', text: 'Copy link to Tweet' },
  { iconName: 'BsUpload', text: 'Share Tweet via ...' },
]
