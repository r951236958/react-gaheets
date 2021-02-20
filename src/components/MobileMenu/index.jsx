import React, { useState, useEffect, useRef } from 'react'

import { DropdownMenu, MenuItem, MenuItemLink } from '@react-md/menu'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Badge from '@material-ui/core/Badge'

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)
  const mobileMenuId = 'mobile-menu'

  const handleMobileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  return (
    <Menu
      anchorEl={mobileMenuOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Icon>email</Icon>
          </Badge>
        </IconButton>
        <p>Mobile_mail</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <Icon>notifications</Icon>
          </Badge>
        </IconButton>
        <p>Mobile_notice</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="user-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Icon>account_circle</Icon>
        </IconButton>
        <p>Mobile_profile</p>
      </MenuItem>
    </Menu>
  )
}
