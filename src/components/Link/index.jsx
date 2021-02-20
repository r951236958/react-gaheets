import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as MuiLink } from '@material-ui/core/Link'

export default function Link(props) {
  const { startIcon, endIcon, to, color } = props

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <RouterLink ref={ref} to={to} {...linkProps} />
      )),
    [to]
  )
  return (
    <MuiLink
      component={CustomLink}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    />
  )
}
