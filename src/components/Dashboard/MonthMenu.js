import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IconButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { currentMonth } from '../../utils/general'

export default function MonthMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [month, setMonth] = React.useState(currentMonth)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMonth = (e) => {
    setMonth(e.target.outerText)
    handleClose()
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        float: 'right',
      }}>
      <div>{month}</div>
      <IconButton
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {months.map((month, index) => {
          return (
            <MenuItem onClick={(e) => handleMonth(e)} key={index}>
              {month}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
