import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons'
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
    fab: {
        position : 'fixed',
        bottom : 10,
        right : 20,
    },
    container: {
        width: 500,
        // height: 400,
        minHeight: 700,
        backgroundColor : "white",
        position : 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        borderRadius: ".5rem",
        [theme.breakpoints.down("sm")] : {
            width: "100vw",
            height: "100vh",
            borderRadius: 0
        }
    },
    item: {
        marginTop: ".5rem"
    },
    form:{
        padding: theme.spacing(3)
    }
}))

function Add() {
    const classes = useStyles();
    const [open,setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenAlert(false);
    };
    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                <AddIcon />
                </Fab>
            </Tooltip>

            <Modal open={open}>
                <Container className={classes.container}>
                    <form action="" className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="outlined-basic" size="small" label="First Name" variant="outlined" />
                        </div>
                        <div className={classes.item}>
                             <TextField id="filled-basic" label="Filled" variant="filled" />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="Select">
                                <MenuItem value="public" selected>Public</MenuItem>
                                <MenuItem value="private">Private</MenuItem>
                                <MenuItem value="Unknown">Unknown</MenuItem>
                            </TextField>
                        </div>

                        <div className={classes.item}>
                            <FormLabel component="legend">Comment Here</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                            </RadioGroup>
                        </div>

                         <div className={classes.item}>
                          <Button 
                          variant="outlined" 
                          color="primary" 
                          onClick={() => setOpenAlert(true)}
                          style={{ marginRight: "10px" }}
                          
                          >
                            Create
                          </Button>
                            <Button 
                            variant="outlined" 
                            color="secondary"
                            onClick={() => setOpen(false)}
                            >
                            Cancel
                            </Button>
                        </div>
                         
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="success">
                This is a success message!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Add
