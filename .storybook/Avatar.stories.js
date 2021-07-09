import { makeStyles, useTheme } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Avatar } from "../src/General/Avatar"; 
import docs from '../src/General/Avatar/Avatar.stories.mdx'

export default {
	component: Avatar,
	title: 'General/Avatar',
	argTypes: {
		name: {
			description: 'Accepts the name of the user to convert it into its initials',
			type: {
				name: "string",
				required: true
			},
			table:{
				defaultValue: {
					summary: 'UserIcon'
				}
			},
			control: {
				type: null,
			},
		},
		src: {
			description: 'Accepts the url of an image',
			table:{
				type: {
					summary: "string"
				},
				defaultValue: {
					summary: ''
				}
			},
			control: {
				type: null,
			},
		},
		size: {
			description: 'Accepts three values for the size of the avatar component',
			table:{
				type: {
					summary: "string",
				},
				defaultValue: {
					summary: 'medium',
					detail: `Only accepts three values: large, medium or small`
				}
			},
			control: {
				type: null,
			},
		},
		className: {
			description: 'Accepts a valid className to apply custom styles on the avatar component',
			table:{
				type: {
					summary: "string",
				},
				defaultValue: {
					summary: 'null',
				}
			},
			control: {
				type: null,
			},
		},
		defaultMode: {
			description: 'If true, the color of the Avatar changes to grayscale otherwise it generates random colors',
			table:{
				type: {
					summary: "boolean",
				},
				defaultValue: {
					summary: 'false',
				}
			},
			control: {
				type: null,
			},
		},
		setImage: {
			description: 'Callback that returns the image blob after it is being cropped.',
			table:{
				type: {
					summary: "function",
					detail: "Signature: (void) => blob"
				},
				defaultValue: {
					summary: 'false',
				}
			},
			control: {
				type: null,
			},
		}
	  },
	parameters: { 
		docs: { 
			source: {
				type: "code"
			},
			description: {
				component: "Avatar is a custom component that is used to display the initials of a user if the user's profile picture is not present. To set the profile picture of the user, just click on the Avatar and select the image of the user from the native file selection popup of the browser. Once selected crop the image and hit save. Please follow the documentation below to get an idea of how this component can be used in different ways and sizes.",
			},
		} 
	  },
};

export const Basic = () => (
	<Avatar 
		name="Kilmeny Cowan" 
		size="large" 
	/>
);

export const WithImage = () => <Avatar name="Kilmeny Cowan" src="https://material-ui.com/static/images/avatar/1.jpg" size="large" />

export const Sizes = () => (
	<div style={{ display: "flex", alignItems: "center" }}>
		<Avatar name="Kilmeny Cowan" size="large" />
		<Avatar name="Kilmeny Cowan" size="medium" />
		<Avatar name="Kilmeny Cowan" size="small" />
	</div>
)

export const DefaultMode = () => <Avatar name="Kilmeny Cowan" size="large" defaultMode />

export const CustomStyles = () => {
	const createStylesheet = makeStyles((theme) => ({
		customAvatar: {
			width: "5rem",
			height: "5rem",
			backgroundColor: "teal",
			color: "white",
			fontSize: "2.5rem",
			fontWeight: "bold",
			borderRadius: "0px"
		}
	}))
	const theme = useTheme();
	const classes = createStylesheet(theme);
	return (
		<Avatar name="Kilmeny Cowan" size="large" className={classes.customAvatar} />
	)
}