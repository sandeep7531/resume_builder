import { createTheme } from '@mui/material/styles';

const PRIMARY = '#313c4e';
const WHITE = '#ffffff';
const SECONDARY = '#449399';

export const theme = createTheme({
    palette: {
        background: {
            paper: PRIMARY
        },
        primary: {
            main: PRIMARY
        },
        secondary: {
            main: SECONDARY
        }
    },
    typography: {
        fontFamily: 'Roboto'
    },
    components: {
        MuiCard: {
            defaultProps: {
                style: {
                    backgroundColor: PRIMARY,
                    color: WHITE,
                    borderRadius: '10px',
                    padding: 25,
                    display: "flex",
                    flexDirection: "column",
                    gap: '16px'
                }
            }
        },
        MuiSvgIcon: {
            defaultProps: {
                style: {
                    backgroundColor: WHITE,
                    fill: PRIMARY,
                    padding: 5,
                    borderRadius: 3,
                    width: '32px',
                    height: '32px'
                }
            }
        }
    },
});