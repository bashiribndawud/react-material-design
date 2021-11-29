import { AppBar, Toolbar, Typography, makeStyles, InputBase, alpha, Badge, Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import React, { useState } from 'react'
import { Cancel, Notifications } from '@material-ui/icons';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) =>({
    toolbars: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lgLogo : {
        display: 'none',
        [theme.breakpoints.up('sm')] : {
            display: "block"
        }
    },

    smLogo : {
        display: "block",
        [theme.breakpoints.up('sm')] : {
            display: 'none'
        }
    },
    search : {
        display: 'flex',
        alignItems: 'center',
        marginLeft : '1em',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width : "50%",
        [theme.breakpoints.down('sm')]: {
            display : (props)=>(props.open? "flex" : "none"),
            width: "70%"
        }
    },
    input : {
        color: "white",
        marginLeft: "10px"
    },
    icons: {
        display : "flex",
        alignItems: "center",
        display: (props) => (props.open? "none" : "flex")
    },
    badges : {
        marginRight: theme.spacing(2)
    },
    searchBtn: {
      [theme.breakpoints.up('sm')]: {
          display: "none"
      }
    },
    cancel: {
        [theme.breakpoints.up("sm")] : {
            display : 'none'
        }
    }
}))

function NavBar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open})
    const handleClick = (e) => {
        e.preventDefault();
        console.log('hello World')
    }
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.toolbars}>
                    <Typography variant="h6" className={classes.lgLogo}>
                        Lama Dev
                    </Typography>

                    <Typography variant="h6" className={classes.smLogo}>
                        Lama Dev
                    </Typography>

                    <div className={classes.search}>
                        <SearchIcon />
                        <InputBase 
                        placeholder="Search..."
                        className={classes.input}
                        />
                        <Cancel className={classes.cancel} 
                        onClick={() => setOpen(false)}/>
                    </div>
                
                    <div className={classes.icons}>
                        <Search onClick={handleClick} className={classes.searchBtn} />
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon /> 
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badges}>
                            <Notifications />
                        </Badge>
                        <Badge color="secondary" className={classes.badges}>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Badge>
                        
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
