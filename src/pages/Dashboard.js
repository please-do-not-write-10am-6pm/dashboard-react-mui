import * as React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Button, Divider, Grid } from '@mui/material'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'

import 'react-circular-progressbar/dist/styles.css'
import MonthMenu from '../components/Dashboard/MonthMenu'

import { currentMonth, greetingMessage } from '../utils/general'

const useStyles = makeStyles(() => ({
  greetings: {
    fontSize: '24px',
    color: 'text.primary',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: '700',
    textAlign: 'center',
    padding: '20px 30px',
  },
  cardBody: {
    padding: '20px',
  },
}))

const Dashboard = () => {
  const classes = useStyles()
  const username = 'David'
  const percentage = 80

  function handleClick(event) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

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
        <span style={{ fontWeight: '600' }}>{greetingMessage}</span>
        {', '}
        <span style={{ color: 'green' }}>{username}</span>
      </div>
      <div style={{ marginTop: '100px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid
              xs={5}
              item={true}
              sx={{ marginRight: '50px', marginBottom: '50px' }}>
              <div
                style={{
                  border: '2px solid rgba(200, 200, 200, 0.7)',
                  borderRadius: '25px',
                  backgroundColor: 'white',
                }}>
                <div className={classes.cardTitle}>Your balance</div>
                <Divider />
                <div className={classes.cardBody}>
                  <span style={{ fontSize: '35px' }}>$</span>
                  <span style={{ fontSize: '50px' }}>200.00</span>
                  <p
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgba(0, 0, 0, 0.4',
                    }}>
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
            <Grid xs={5} item={true}>
              <div
                style={{
                  border: '1px solid rgba(200, 200, 200, 0.7)',
                  borderRadius: '30px',
                  backgroundColor: 'white',
                }}>
                <div className={classes.cardTitle}>Earnings</div>
                <Divider />
                <div className={classes.cardBody}>
                  <Grid container>
                    <Grid
                      item={true}
                      xs={3}
                      sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        textAlign: 'center',
                        marginRight: '50px',
                      }}>
                      <div
                        style={{ borderBottom: '5px solid rgb(64, 144, 247' }}>
                        <span style={{ fontSize: '28px' }}>$</span>
                        <span style={{ fontSize: '32px' }}>100.00</span>
                      </div>
                      <div
                        style={{
                          fontSize: '28px',
                          color: 'rgba(0, 0, 0, 0.4)',
                          fontWeight: '600',
                        }}>
                        {currentMonth}
                      </div>
                    </Grid>
                    <Grid
                      item={true}
                      xs={3}
                      sx={{ textAlign: 'center', marginRight: '50px' }}>
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={buildStyles({
                          strokeLinecap: 'round',
                          textSize: '16px',
                          pathTransitionDuration: 0.5,
                          pathColor: `rgba(64, 144, 257, ${percentage / 100})`,
                          textColor: 'rgba(0, 0, 0, 0.4)',
                          trailColor: '#d6d6d6',
                          backgroundColor: '#3e98c7',
                        })}>
                        <div
                          style={{
                            textAlign: 'center',
                          }}>
                          <span
                            style={{
                              display: 'block',
                              fontSize: '20px',
                              fontWeight: '600',
                              color: 'rgba(0, 0, 0, 0.7)',
                            }}>
                            Expected
                          </span>
                          <span
                            style={{
                              display: 'block',
                              fontSize: '16px',
                              color: 'rgba(0, 0, 0, 0.4)',
                            }}>
                            $125
                          </span>
                        </div>
                      </CircularProgressbarWithChildren>
                    </Grid>
                    <Grid
                      item={true}
                      xs={3}
                      sx={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}>
                      <div
                        style={{ borderBottom: '5px solid rgb(64, 144, 247' }}>
                        <span style={{ fontSize: '28px' }}>$</span>
                        <span style={{ fontSize: '32px' }}>5.00</span>
                      </div>
                      <div
                        style={{
                          fontSize: '28px',
                          color: 'rgba(0, 0, 0, 0.4)',
                          fontWeight: '600',
                        }}>
                        Today
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid xs={5} item={true}>
              <div
                style={{
                  border: '1px solid rgba(200, 200, 200, 0.7)',
                  borderRadius: '30px',
                  backgroundColor: 'white',
                }}>
                <div className={classes.cardTitle}>
                  <span>Status</span>
                  <MonthMenu />
                </div>
                <Divider />
                <div className={classes.cardBody}>
                  <Grid container sx={{ justifyContent: 'space-evenly' }}>
                    <Grid
                      item={true}
                      xs={3}
                      sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        textAlign: 'center',
                      }}>
                      <span
                        style={{
                          color: 'rgba(0, 0, 0, 0.4)',
                          fontSize: '12px',
                        }}>
                        Avg. in-game players
                      </span>
                      <div style={{ marginTop: '20px' }}>
                        <ArrowDropUpIcon />{' '}
                        <span style={{ fontSize: '30px' }}>20</span>
                      </div>
                    </Grid>
                    <Grid
                      item={true}
                      xs={3}
                      sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        textAlign: 'center',
                      }}>
                      <span
                        style={{
                          color: 'rgba(0, 0, 0, 0.4)',
                          fontSize: '12px',
                        }}>
                        New players
                      </span>
                      <div style={{ marginTop: '20px' }}>
                        <ArrowDropDownIcon />{' '}
                        <span style={{ fontSize: '30px' }}>10</span>
                      </div>
                    </Grid>
                    <Grid
                      item={true}
                      xs={3}
                      sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        textAlign: 'center',
                        marginRight: '50px',
                      }}>
                      <span
                        style={{
                          color: 'rgba(0, 0, 0, 0.4)',
                          fontSize: '12px',
                        }}>
                        Avg. play time
                      </span>
                      <div style={{ marginTop: '20px' }}>
                        <ArrowDropUpIcon />{' '}
                        <span style={{ fontSize: '30px' }}>6h</span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Dashboard
