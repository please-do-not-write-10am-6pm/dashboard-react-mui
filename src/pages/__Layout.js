import React, { useState } from 'react'
import Box from '@mui/material/Box'

import Topbar from '../components/Layout/Topbar'
import SidebarDrawer from '../components/Layout/Drawer'

const drawerWidth = 240

const BasicLayout = ({ children }) => {
  console.log('children', children)
  return (
    <>
      <Topbar />
      <Box sx={{ display: 'flex' }}>
        <SidebarDrawer />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default BasicLayout
