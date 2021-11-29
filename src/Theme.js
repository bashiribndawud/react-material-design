import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500]
        }
    },
    myButton : {
        color : 'white',
        backgroundColor: 'blue',
        border: '1px solid black'
    },
    myHeader: {
        textAlign: 'center',
        fontSize: '2.5rem',
        color: 'blue',
        background : 'lightgreen'
    }
})  