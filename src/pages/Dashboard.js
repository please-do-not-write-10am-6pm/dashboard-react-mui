import * as React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { Button, Divider, Grid } from '@mui/material'

const useStyles = makeStyles(() => ({
  greetings: {
    fontSize: '24px',
    color: 'text.primary',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: '700',
    textAlign: 'center',
    padding: '15px 30px',
  },
  cardBody: {
    padding: '20px',
  },
}))

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const Dashboard = () => {
  const classes = useStyles()
  let currentDate = new Date()
  let hours = currentDate.getHours()
  let message =
    hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening'
  const username = 'David'

  return (
    <>
      <div role='presentation' onClick={handleClick}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link underline='hover' color='inherit' href='/'>
            Panel
          </Link>
          <Link
            underline='hover'
            color='text.primary'
            href='/material-ui/react-breadcrumbs/'
            aria-current='page'>
            Dashboard
          </Link>
        </Breadcrumbs>
      </div>
      <div className={classes.greetings}>
        <span style={{ fontWeight: '600' }}>{message}</span>
        {', '}
        <span style={{ color: 'green' }}>{username}</span>
      </div>
      <div style={{ marginTop: '100px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid xs={5} sx={{ marginRight: '50px' }}>
              <div
                style={{
                  border: '2px solid rgba(200, 200, 200, 0.7)',
                  borderRadius: '25px',
                  backgroundColor: 'white',
                }}>
                <div className={classes.cardTitle}>Your balance</div>
                <Divider />
                <div className={classes.cardBody}>
                  <span style={{ fontSize: '40px' }}>$</span>
                  <span style={{ fontSize: '60px' }}>200.00</span>
                  <p style={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.6' }}>
                    Available
                  </p>
                  <Button
                    sx={{ borderRadius: '10px', textTransform: 'none' }}
                    variant='outlined'>
                    Withdraw
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid xs={5}>
              <div
                style={{
                  border: '1px solid rgba(200, 200, 200, 0.7)',
                  borderRadius: '30px',
                  backgroundColor: 'white',
                }}>
                <div className={classes.cardTitle}>Earnings</div>
                <Divider />
                <div className={classes.cardBody}>
                  <p>Available</p>
                </div>
              </div>
            </Grid>
            <Grid xs={5}>
              <div
                style={{
                  border: '1px solid rgba(200, 200, 200, 0.7)',
                  borderRadius: '30px',
                  backgroundColor: 'white',
                }}>
                xs=6
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Dashboard
