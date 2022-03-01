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
    <div>
      {items.map((item, index) => (
        <TCNavbarItem
          item={item}
          index={index}
          key={index}
          onClick={handleOnClick}
          selectedItemIndex={selectedItemIndex}
        />
      ))}
    </div>
  )
}
