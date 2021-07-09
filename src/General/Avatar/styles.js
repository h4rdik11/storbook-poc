import { makeStyles } from "@material-ui/core";
import * as colors from '@material-ui/core/colors';
import { COLOR_ARRAY } from '../../config/constants';

function generateColors(theme) {
    const colorsObject = {};
    COLOR_ARRAY.forEach((color) => {
        colorsObject[`${color}`] = {
            color: theme.palette.getContrastText(colors[color]['500']),
            backgroundColor: colors[color]['500']
        }
    });
    return colorsObject;
}

export const useStyles = makeStyles(theme => ({
    ...generateColors(theme),
    root: {
        fontWeight: "500"
    },
    large: {
        width: "3.5rem",
        height: "3.5rem",
        fontSize: "1.5rem"
    },
    medium: {
        width: "1.8rem",
        height: "1.8rem",
        fontSize: "0.75rem"
    },
    small: {
        width: "1.2rem",
        height: "1.2rem",
        fontSize: "0.5rem"
    }
}));