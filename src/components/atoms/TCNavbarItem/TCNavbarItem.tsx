import './TCNavbarItem.scss'
import { Link } from 'react-router-dom'
import { Icons } from '../../../assets/icons/Icons'
import { FunctionComponent } from 'react'

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
          (isSelected ? ' tc-navbar-item__content--selected' : '')
        }
      >
        <img
          src={
            Icons[
              (iconName + (isSelected ? '_selected' : '')) as keyof typeof Icons
            ]
          }
          className='tc-navbar-item__content__icon'
          alt='navbar_icon'
        />
        <span className='tc-navbar-item__content__name'> {text} </span>
      </span>
    </Link>
  )
}
