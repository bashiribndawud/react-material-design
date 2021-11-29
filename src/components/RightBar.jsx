import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop : theme.spacing(10),
        position : 'sticky',
        top : 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "grey"
    },
    img : {
        marginBottom: ".2rem",
        '&:hover' : {
            transform : "scale(1.1)",
            transition : ".4s ease",
            overFlowX: "hidden",
            overFlowY: "hidden",
            cursor: "pointer"
        } 
    },
    link: {
        color: "#555",
        fontSize: 15,
        marginRight: ".5rem"
    }
}))

function RightBar() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Online Friends</Typography>
            <AvatarGroup max={6}>
                <Avatar alt="Remy Sharp" src="https://t3.ftcdn.net/jpg/02/10/30/32/240_F_210303223_Crl9YiE0AjsL3v49mGe360eAhJNIlSun.jpg" />
                <Avatar alt="Travis Howard" src="https://t3.ftcdn.net/jpg/02/10/30/32/240_F_210303223_Crl9YiE0AjsL3v49mGe360eAhJNIlSun.jpg" />
                <Avatar alt="Cindy Baker" src="https://t3.ftcdn.net/jpg/02/10/30/32/240_F_210303223_Crl9YiE0AjsL3v49mGe360eAhJNIlSun.jpg" />
                <Avatar alt="Agnes Walker" src="https://t4.ftcdn.net/jpg/01/84/95/59/240_F_184955963_vkYpFRSgChtesIR0TpsqVbpbCGySXQOI.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>Gallery</Typography>
            <ImageList rowHeight={100} className={classes.imageList} cols={3}>
                <ImageListItem className={classes.img}>
                    <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="" />
                </ImageListItem>
                <ImageListItem className={classes.img}>
                    <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="" />
                </ImageListItem>
                <ImageListItem className={classes.img}>
                    <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="" />
                </ImageListItem>
                 <ImageListItem className={classes.img}>
                    <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="" />
                </ImageListItem>
                 <ImageListItem className={classes.img}>
                    <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt="" />
                </ImageListItem>
                 <ImageListItem className={classes.img}>
                    <img src="https://v4.mui.com/static/images/image-list/bike.jpg" alt="" />
                </ImageListItem>
            </ImageList>

            <Typography className={classes.title} gutterBottom>
                Categories
            </Typography>
            <Link href="#" className={classes.link} variant="body2">
                Sport
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Foodies
            </Link>
            <Divider flexItem />
            <Link href="#" className={classes.link} variant="body2">
                Movies
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Science
            </Link>
        </Container>
    )
}

export default RightBar
