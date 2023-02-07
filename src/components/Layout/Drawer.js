import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { Box } from '@mui/system'
import { Drawer } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SidebarDrawer = () => {
  const drawerWidth = 240
  const navigator = useNavigate()

  const drawer = (
    <>
      <List>
        {[
          {
            itemText: 'Dashboard',
            itemIcon: <DashboardOutlinedIcon />,
            to: '/dashboard',
          },
          {
            itemText: 'Customize',
            itemIcon: <CreateOutlinedIcon />,
            to: '/customize',
          },
          { itemText: 'Tools', itemIcon: <BuildOutlinedIcon />, to: '/tools' },
          {
            itemText: 'Account',
            itemIcon: <PersonOutlineOutlinedIcon />,
            to: '/account',
          },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => navigator(item.to)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgb(241, 245, 254)',
                },
              }}>
              <ListItemIcon sx={{ minWidth: '40px' }}>
                {item.itemIcon}
              </ListItemIcon>
              <ListItemText primary={item.itemText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )

  return (
    <>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              position: 'relative !important',
              minHeight: 'calc(100vh - 64px)',
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default SidebarDrawer
