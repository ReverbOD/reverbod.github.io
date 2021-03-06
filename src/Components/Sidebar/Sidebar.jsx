/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Github, Codepen } from '@styled-icons/boxicons-logos';
import { LinkedinSquare } from '@styled-icons/boxicons-logos';
import { FilePdf } from '@styled-icons/boxicons-solid';

const SideContainer = styled.div`
background: #1e1e1e;
	width: 40px;
	position: fixed;
	z-index: 10;
	text-align: center;
	color: white;
	@media only screen and (max-width: 800px) {
		display: none;
	}
`;
const LeftSideContainer = styled(SideContainer)`
background-color: #1e1e1e;
	bottom: 0px;
	left: 40px;
	right: auto;
`;
const RightSideContainer = styled(SideContainer)`
background-color: #1e1e1e;
	bottom: 0px;
	left: auto;
	right: 40px;
`;
const SideText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	letter-spacing: 0.1em;
	writing-mode: vertical-rl;
	margin: 10px auto;
	padding: 10px;
`;

const SideIcon = styled(motion.div)`
	padding: 0.5em 0;
	a {
		color: white;
		text-decoration: none;
	}
	svg {
		width: 22px;
		cursor: pointer;
	}
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 1px;
	height: 70px;
	margin: 0px auto;
	background-color: white;
`;

const Sidebar = ({ handleToast }) => {
	// eslint-disable-next-line
	const handleClipboardClick = () => {
		navigator.clipboard.writeText('giuseppe.gigliotti@outlook.com');
		handleToast(`Email copy to clipboard! 🥳`);
		return;
	};

	return (
		<>
			<LeftSideContainer>
				<SideIcon whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} whileTap={{ scale: 0.85 }}>
					<a
						href='/'
						target='_blank'
						rel='noopener noreferrer'>
						<FilePdf />
					</a>
				</SideIcon>
				<SideIcon whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} whileTap={{ scale: 0.85 }}>
					<a href='https://github.com/reverb6821' target='_blank' rel='noopener noreferrer'>
						<Github />
					</a>
				</SideIcon>
				<SideIcon whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} whileTap={{ scale: 0.85 }}>
					<a href='https://codepen.io/reverbod' target='_blank' rel='noopener noreferrer'>
						<Codepen />
					</a>
				</SideIcon>
				<SideIcon whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} whileTap={{ scale: 0.85 }}>
					<a href='https://www.linkedin.com/in/gigliottigiuseppe/' target='_blank' rel='noopener noreferrer'>
						<LinkedinSquare />
					</a>
				</SideIcon>
				<Line />
			</LeftSideContainer>
			<RightSideContainer>
				<SideText>giuseppe.gigliotti@outlook.com</SideText>
				<Line />
			</RightSideContainer>
		</>
	);
};

export default Sidebar;
