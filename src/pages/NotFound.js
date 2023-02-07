import React from 'react'
import { useNavigate } from 'react-router-dom'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(() => ({
  notFoundCont: {
    position: 'fixed',
    color: '#92a4ad',
    height: '100%',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    margin: '30px 15px',
  },
  zoomArea: {
    maxWidth: '490px',
    margin: '30px auto 30px',
    fontSize: '20px',
    textAlign: 'center',
  },
  error: {
    textAlign: 'center',
    fontSize: '100px',
    fontWeight: '800',
    margin: '20px 15px',
  },
  linkContainer: {
    textAlign: 'center',
  },
  moreLink: {
    textTransform: 'uppercase',
    fontSize: '14px',
    backgroundColor: '#92a4ad',
    padding: '10px 15px',
    borderRadius: '0',
    color: '#416475',
    display: 'inline-block',
    marginRight: '5px',
    marginBottom: '5px',
    lineHeight: '1.5',
    textDecoration: 'none',
    marginTop: '50px',
    letterSpacking: '1px',
    cursor: 'pointer',
  },
}))

const NotFound = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.notFoundCont}>
      <h1 className={classes.header}>PAGE</h1>
      <p className={classes.zoomArea}></p>
      <section className={classes.error}>
        <span>NotFound</span>
      </section>
      <div className={classes.linkContainer}>
        <div
          href='/'
          className={classes.moreLink}
          onClick={() => navigate('/')}>
          Go Back
        </div>
      </div>
    </div>
  )
}

export default NotFound
