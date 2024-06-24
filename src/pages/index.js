import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Know me better"} />
			<meta property={"og:title"} content={"About Me Profilo"} />
			<meta property={"og:description"} content={"get to know me better"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/channels4_profile.jpg?v=2024-06-24T06:47:59.681Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/channels4_profile.jpg?v=2024-06-24T06:47:59.681Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/channels4_profile.jpg?v=2024-06-24T06:47:59.681Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/channels4_profile.jpg?v=2024-06-24T06:47:59.681Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/channels4_profile.jpg?v=2024-06-24T06:47:59.681Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/channels4_profile.jpg?v=2024-06-24T06:47:59.681Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/channels4_profile.jpg?v=2024-06-24T06:47:59.681Z"} />
			<meta name={"msapplication-TileColor"} content={"#F2EFEA"} />
		</Helmet>
		<Section padding="16px 40px 16px 40px" quarkly-title="Header" position="absolute" sm-padding="16px 20px 16px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				display="flex"
				justify-content="space-between"
				width="100%"
				max-width="none"
			/>
			<Box
				empty-border-color="LightGray"
				width="30%"
				align-items="center"
				lg-width="50%"
				empty-min-height="64px"
				empty-border-style="solid"
				display="flex"
				sm-width="70%"
				empty-min-width="64px"
				empty-border-width="1px"
			>
				<Image
					src="https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/download%20%283%29.png?v=2024-06-24T06:58:16.034Z"
					display="block"
					height="60px"
					srcSet="https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/download%20%283%29.png?v=2024-06-24T06%3A58%3A16.034Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/download%20%283%29.png?v=2024-06-24T06%3A58%3A16.034Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/download%20%283%29.png?v=2024-06-24T06%3A58%3A16.034Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/download%20%283%29.png?v=2024-06-24T06%3A58%3A16.034Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/download%20%283%29.png?v=2024-06-24T06%3A58%3A16.034Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/download%20%283%29.png?v=2024-06-24T06%3A58%3A16.034Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/download%20%283%29.png?v=2024-06-24T06%3A58%3A16.034Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" quarkly-title="HeroBlock" background="linear-gradient(0deg,rgba(249, 248, 243, 0.2) 0%,rgba(249, 248, 243, 0.6) 100%),rgba(0, 0, 0, 0) url(https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg) center/cover repeat scroll padding-box" sm-padding="100px 20px 100px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="40px"
				max-width="none"
				width="100%"
				sm-flex-direction="column"
				min-height="80vh"
				sm-min-width="280px"
			/>
			<Text
				margin="0px 0px 0px 0"
				color="--darkL2"
				font="--headline1"
				width="60%"
				lg-font="--headline1Lg"
				sm-font="--headline2Lg"
				sm-width="100%"
			>
				About Me Profilo
			</Text>
			<Text
				sm-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--darkL2"
				sm-text-align="left"
				font="--headline3"
				width="40%"
				text-align="right"
				lg-font="--headline3Lg"
				sm-width="100%"
			>
				{" "}What's in this website:{"\n\t  "}
				<br />
				Dev
				<br />
				Tech Savvy
				<br />
				My Specs
				<br />
				Goal
				<br />
				Projects
				<br />
				Links
			</Text>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-flex-direction="column"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-min-width="280px"
			/>
			<Text
				color="--darkL2"
				font="--headline2"
				width="20%"
				text-align="right"
				lg-font="--headline2Lg"
				lg-width="100%"
				lg-text-align="left"
				sm-margin="16px 0px 0px 0px"
			>
				Dev:
			</Text>
			<Image
				src="https://cdn.pixabay.com/photo/2018/08/22/06/47/code-3622942_1280.jpg"
				display="block"
				width="60%"
				sm-width="100%"
				sm-order="-1"
			/>
			<Box width="20%" md-width="100%" lg-width="35%">
				<Text
					color="--darkL2"
					margin="0px 0px 12px 0px"
					font="--lead"
					lg-width="100%"
					sm-width="100%"
					md-width="540px"
				>
					I am a developer because I have this incredible knack for understanding how things work and the curiosity to dive deep into technology. I remember how fascinated I was the first time I figured out how to tweak my Android tablet or set up that cool dual-boot setup on my laptop. I love exploring and creating, whether it's coding a new app or just finding a more efficient way to do things. Being a developer is all about that drive to innovate and solve problems, and that's exactly what I bring to the table. I'll keep exploring, keep coding, and keep pushing the boundaries of what's possible — because that's why I'm a dev!
				</Text>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				width="100%"
				max-width="none"
				flex-wrap="wrap"
				sm-flex-direction="column"
				sm-min-width="280px"
			/>
			<Box
				width="100%"
				display="flex"
				grid-gap="20px"
				flex-direction="row"
				align-items="flex-end"
				flex-wrap="wrap"
				sm-flex-direction="column"
				sm-align-items="flex-start"
			>
				<Image
					src="https://cdn.pixabay.com/photo/2017/07/31/11/57/computer-2557644_1280.jpg"
					display="block"
					width="60%"
					sm-width="100%"
					sm-order="-1"
				/>
				<Box
					width="30%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					height="100%"
					justify-content="space-between"
					lg-order="-1"
					sm-width="100%"
					sm-height="auto"
				>
					<Text
						color="--darkL2"
						margin="-100px 0px 50px 100px"
						font="--headline2"
						width="100%"
						text-align="left"
						position="relative"
						lg-margin="-100px 0px 50px 0px"
						lg-font="--headline2Lg"
						sm-margin="36px 0px 0px 0px"
					>
						Tech Savvy:
					</Text>
					<Image src="https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_1280.png" display="block" width="100%" sm-order="-1" />
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				width="60%"
				display="flex"
				justify-content="flex-end"
				lg-justify-content="flex-start"
				lg-width="100%"
			>
				<Text
					color="--darkL2"
					margin="20px 0px 0px 0px"
					font="--lead"
					max-width="360px"
					lg-max-width="540px"
					sm-margin="0px 0px 0px 0px"
				>
					I am incredibly tech-savvy! From my detailed knowledge of my laptop specs to my ability to set up a dual-boot system with Windows 11 and Linux, it's clear I have a deep understanding of technology. Not to mention, I know my way around Android devices and am comfortable tweaking them to suit my needs. My interest and skill in technology go beyond just using gadgets — I actively explore and understand how they work, which is a sign of true tech savviness. I'll keep exploring and learning, because my knowledge and skills in technology will continue to grow and open up new possibilities for me!
				</Text>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				width="100%"
				max-width="none"
				lg-flex-direction="column"
				lg-align-items="flex-end"
				sm-min-width="280px"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				width="60%"
				grid-gap="20px"
				display="flex"
				flex-direction="column"
				align-items="flex-end"
				sm-width="100%"
			>
				<Image src="https://cdn.pixabay.com/photo/2015/09/06/00/53/laptop-926775_1280.jpg" display="block" width="100%" />
			</Box>
			<Box
				width="40%"
				lg-width="100%"
				lg-display="flex"
				lg-flex-direction="column"
				lg-align-items="flex-end"
			>
				<Text
					color="--darkL2"
					margin="-100px 0px 50px 100px"
					font="--headline2"
					text-align="left"
					lg-width="100%"
					lg-margin="0px 0px 20px 0px"
					lg-font="--headline2Lg"
					sm-margin="16px 0px 20px 0px"
				>
					My Specs:
				</Text>
				<Text
					color="--darkL2"
					margin="0px 0px 0px 0px"
					font="--lead"
					width="70%"
					lg-max-width="540px"
					lg-width="100%"
				>
					Laptop (HP Pavilion x360 2-in-1 Laptop 14-ek1xxx):

Microprocessor: 13th Gen Intel(R) Core(TM) i7-1355U
System Memory: 16 GB (2x8GB SK Hynix 3200MHz)
Storage: 1 TB
Graphics: Intel(R) Iris(R) Xe Graphics
Current Resolution: 1920 x 1080
Operating System: Windows 11 with Linux dual-boot
Tablet (Huawei BTV-DL09):

Storage: 16 GB
RAM: 3 GB
CPU: Kirin 950
GPU: Mali T880
Operating System: Android 7.0
				</Text>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				max-width="none"
				width="100%"
				lg-flex-direction="column"
				lg-align-items="flex-end"
				sm-min-width="280px"
			/>
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--headline2"
				width="20%"
				text-align="right"
				lg-width="100%"
				lg-text-align="left"
				lg-font="--headline2Lg"
				sm-margin="16px 0px 0px 0px"
			>
				Goal:
			</Text>
			<Image
				src="https://cdn.pixabay.com/photo/2016/08/04/08/07/code-1568556_1280.jpg"
				display="block"
				width="60%"
				lg-order="-1"
				sm-width="100%"
			/>
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--lead"
				width="20%"
				align-self="flex-end"
				lg-width="100%"
				lg-max-width="540px"
				lg-align-self="auto"
			>
				My goal is to master technology and become a proficient developer. Currently, I'm learning Python and HTML, which are essential languages for programming and web development. I enjoy exploring and understanding how different devices and software work, as evidenced by my interest in tweaking my Android tablet and setting up a dual-boot system on my laptop. I aim to continue honing my skills in Python for versatile programming and HTML for creating web content. My curiosity and drive to innovate suggest that I'm aiming high in the tech world, and my journey as a developer, learning Python and HTML, is just beginning!
			</Text>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override slot="SectionContent" width="100%" max-width="none" sm-min-width="280px" />
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--headline2"
				width="50%"
				text-align="left"
				lg-width="100%"
				lg-font="--headline2Lg"
			>
				Projects that I am working on:
			</Text>
			<Text
				color="--darkL2"
				margin="20px 0px 0px 0px"
				font="--lead"
				width="40%"
				lg-width="100%"
				lg-max-width="540px"
			>
				### About Gentix Terminal

**Gentix Terminal** is a powerful, user-friendly terminal designed for developers and tech enthusiasts. It works seamlessly on Windows, and requires Wine to run on Linux and macOS, providing a consistent experience across platforms. Using Linux power for Windows, Gentix Terminal supports many coding languages, making coding and web development more efficient and enjoyable.
			</Text>
			<Image src="https://uploads.quarkly.io/6679067bfdcae00021e3c6f6/images/linux-4259595.jpg?v=2024-06-24T07:47:03.570Z" display="block" srcSet="https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/linux-4259595.jpg?v=2024-06-24T07%3A47%3A03.570Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/linux-4259595.jpg?v=2024-06-24T07%3A47%3A03.570Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/linux-4259595.jpg?v=2024-06-24T07%3A47%3A03.570Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/linux-4259595.jpg?v=2024-06-24T07%3A47%3A03.570Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/linux-4259595.jpg?v=2024-06-24T07%3A47%3A03.570Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/linux-4259595.jpg?v=2024-06-24T07%3A47%3A03.570Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6679067bfdcae00021e3c6f6/images/linux-4259595.jpg?v=2024-06-24T07%3A47%3A03.570Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw" />
		</Section>
		<Box
			min-width="100px"
			min-height="100px"
			display="inline-block"
			height="initial"
			width="initial"
		/>
		<Box min-width="100px" min-height="100px">
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--headline2"
				width="50%"
				text-align="left"
				lg-width="100%"
				lg-font="--headline2Lg"
			>
				Links:
			</Text>
			<LinkBox>
				<Box min-width="100px" min-height="100px">
					<Link href="https://github.com/Fundiman" color="#000000">
						Github
					</Link>
					<LinkBox>
						<Link href="https://www.youtube.com/@FundimanTech57058" color="#000000">
							Youtube
						</Link>
					</LinkBox>
				</Box>
			</LinkBox>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});