import { Container, Grid, List, makeStyles, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        height : "100vh",
        color: "white",
        paddingTop : theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position : 'sticky',
        top : 0,
        [theme.breakpoints.up("sm")] : {
            backgroundColor : "white",
            color : "#555",
            border : "1px solid #ece7e7"
        }
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        gap : '10px',
        marginBottom: theme.spacing(3),
        '&:hover' : {
            // backgroundColor : 'lightblue',
            cursor : 'pointer'
        },
        [theme.breakpoints.up("sm")] : {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
            
        },
    },
    icon : {
        marginRight : theme.spacing(1),
        [theme.breakpoints.up("sm")] : {
            fontSize : "18px"
        }
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")] : {
            display: "none"
        }
    }
}))

function LeftBar() {
    const classes = useStyles()
    return <Container className={classes.container}>
       <div className={classes.item}>
           <Home className={classes.icon} />
           <Typography className={classes.text}>Homepage</Typography>
       </div>
       <div className={classes.item}>
           <PersonIcon className={classes.icon} />
           <Typography className={classes.text}>Friends</Typography>
       </div>
       <div className={classes.item}>
           <ListIcon className={classes.icon} />
           <Typography className={classes.text}>Lists</Typography>
       </div>
       <div className={classes.item}>
            <CameraAltIcon className={classes.icon} />
            <Typography className={classes.text}>Camera</Typography>
       </div>
       <div className={classes.item}>
           <PlayCircleOutlineIcon className={classes.icon} />
           <Typography className={classes.text}>Video</Typography>
       </div>
       <div className={classes.item}>
           <TabletMacIcon className={classes.icon} />
           <Typography className={classes.text}>App</Typography>
       </div>
       <div className={classes.item}>
           <BookmarkIcon className={classes.icon} />
           <Typography className={classes.text}>Collections</Typography>
       </div>
       <div className={classes.item}>
           <StorefrontIcon className={classes.icon} />
           <Typography className={classes.text}>Market </Typography>
       </div>
       <div className={classes.item}>
           <SettingsIcon className={classes.icon} />
           <Typography className={classes.text}>Settings</Typography>
       </div>
       <div className={classes.item}>
           <ExitToAppIcon className={classes.icon} />
           <Typography className={classes.text}>Logout</Typography>
       </div>
    </Container>
}

export default LeftBar
