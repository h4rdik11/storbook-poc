import React, { Fragment, memo, useEffect, useMemo, useState } from "react";
import withTheme from "../../config/withTheme";
import { Avatar as MuiAvatar, Box, useTheme } from "@material-ui/core";
import { useStyles } from "./styles";
import { COLOR_ARRAY } from '../../config/constants';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Avatar = memo(withTheme(({name, size, src, className, defaultMode, setImage}) => {
    const [initials, setInitials] = useState("");
    const [colorClass, setColorClass] = useState("");
    const theme = useTheme();
    const classes = useStyles(theme);
   
    useEffect(() => {
        if(name) {
            const nameArray = name.split(" ");
            if(nameArray.length === 1) {
                setInitials(name[0].toUpperCase());
            } else {
                setInitials(`${nameArray[0][0].toUpperCase()}${nameArray[nameArray.length-1][0].toUpperCase()}`)
            }
        }
    }, [name]);

    useEffect(() => {
        const colors = COLOR_ARRAY;
        const randomColor = Math.floor(Math.random() * (COLOR_ARRAY.length - 1 + 1));
        setColorClass(colors[randomColor]);
    }, []);

    return (
        <Fragment>
            {initials && (
                <MuiAvatar className={clsx(classes.root, (classes[size] || classes.medium),{[className]: !!className, [classes[colorClass]]: !defaultMode})} src={src}>
                    {initials}
                </MuiAvatar>
            )}
            {!initials && (
                <MuiAvatar className={clsx(classes.root, (classes[size] || classes.medium),{[className]: !!className, [classes[colorClass]]: !defaultMode})} />
            )}
        </Fragment>
    )
}));

Avatar.prototype = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    className: PropTypes.string,
    defaultMode: PropTypes.bool,
    setImage: PropTypes.func
}