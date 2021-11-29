import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Posts from './Posts';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop : theme.spacing(10),
    },
}))

function Feeds() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Posts />
        </Container>
    )
}

export default Feeds
