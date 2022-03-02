import { FunctionComponent, useState } from 'react'
import { NavbarItemModel } from '../../../model/NavbarItemModel'
import { TCNavbarItem } from '../../atoms/TCNavbarItem/TCNavbarItem'

interface TCNavbarProps {
  items: NavbarItemModel[]
}

export const TCNavbar: FunctionComponent<TCNavbarProps> = ({ items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)

  const handleOnClick = (itemIndex: number) => {
    setSelectedItemIndex(itemIndex)
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <TCNavbarItem
            isSelected={selectedItemIndex === index ? true : false}
            iconName={item.iconName}
            text={item.name}
            index={index}
            onClick={handleOnClick}
          />
        </li>
      ))}
    </ul>
  )
}
