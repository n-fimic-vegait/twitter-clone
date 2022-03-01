import './TCNavbarItem.scss'
import { Link } from 'react-router-dom'
import { NavbarItemModel } from '../../../model/NavbarItemModel'
import { Icons } from '../../../assets/icons/Icons'
import { FunctionComponent } from 'react'

interface TCNavbarItemProps {
  item: NavbarItemModel
  onClick: (itemIndex: number) => void
  selectedItemIndex: number
  index: number
}

export const TCNavbarItem: FunctionComponent<TCNavbarItemProps> = ({
  item,
  onClick,
  selectedItemIndex,
  index,
}) => {
  return (
    <Link
      to='/home'
      className='tc-navbar-item'
      onClick={() => {
        onClick(index)
      }}
    >
      <span
        className={
          'tc-navbar-item__content' +
          (selectedItemIndex === index
            ? ' tc-navbar-item__content--selected'
            : '')
        }
      >
        <img
          src={
            Icons[
              (item.iconName +
                (selectedItemIndex === index
                  ? '_selected'
                  : '')) as keyof typeof Icons
            ]
          }
          className='tc-navbar-item__content__icon'
          alt='navbar_icon'
        />
        <span className='tc-navbar-item__content__name'> {item.name} </span>
      </span>
    </Link>
  )
}
