import './TCNavbarItem.scss'
import { Link } from 'react-router-dom'
import { Icons } from '../../../assets/icons/Icons'
import { FunctionComponent, useState } from 'react'
import { Popover } from 'react-tiny-popover'
import { TCContextMenu } from '../../molecules/TCContextMenu/TCContextMenu'
import { navbarMoreOptionsContextMenuItems } from '../../../assets/context_menus_data/context_menus_data'

interface TCNavbarItemProps {
  iconName: string
  text: string
  onClick: (itemIndex: number) => void
  index: number
  isSelected: boolean
}

export const TCNavbarItem: FunctionComponent<TCNavbarItemProps> = ({
  iconName,
  text,
  onClick,
  index,
  isSelected,
}) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)

  return (
    <Popover
      isOpen={isContextMenuOpen}
      positions={['top']}
      reposition={true}
      onClickOutside={() => setIsContextMenuOpen(false)}
      align={'end'}
      padding={-80}
      content={<TCContextMenu items={navbarMoreOptionsContextMenuItems} />}
    >
      <Link
        to='/home'
        className='tc-navbar-item'
        onClick={() => {
          onClick(index)
          if (index === 7) {
            setIsContextMenuOpen(!isContextMenuOpen)
          }
        }}
      >
        <span
          className={
            'tc-navbar-item__content' +
            (isSelected && index !== 7
              ? ' tc-navbar-item__content--selected'
              : '')
          }
        >
          <img
            src={
              Icons[
                (iconName +
                  (isSelected && index !== 7
                    ? '_selected'
                    : '')) as keyof typeof Icons
              ]
            }
            className='tc-navbar-item__content__icon'
            alt='navbar_icon'
          />
          <span className='tc-navbar-item__content__name'> {text} </span>
        </span>
      </Link>
    </Popover>
  )
}
