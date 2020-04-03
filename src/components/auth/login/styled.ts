import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    loginWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        background: '#f8e3ff'
    },
    login: {
        width: '400px',
        margin: 'auto',
        background: '#fff',
        padding: '20px'
    },
    loginInput: {
        width: '100%',
        margin: '10px 0'
    },
    title: {
        textAlign: 'center'
    }
}));
