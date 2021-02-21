import React from 'react'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import { Sheet } from '@react-md/sheet'
import { List, ListItem } from '@react-md/list'
import { useToggle } from '@react-md/utils'

export default function DrawerSheet() {
  const [visible, show, hide] = useToggle(false)

  return (
    <div>
      <Button color="inherit" onClock={show}>
        <Icon>menu</Icon>
      </Button>
      <Sheet
        id="example-sheet-1"
        aria-label="Example Sheet"
        visible={visible}
        onRequestClose={hide}
        position="left"
      >
        <List onClick={hide}>
          <ListItem id="example-sheet-item-1">Item 1</ListItem>
          <ListItem id="example-sheet-item-2">Item 2</ListItem>
          <ListItem id="example-sheet-item-3">Item 3</ListItem>
          <ListItem id="example-sheet-item-4">Item 4</ListItem>
          <ListItem id="example-sheet-item-5">Item 5</ListItem>
        </List>
      </Sheet>
    </div>
  )
}
