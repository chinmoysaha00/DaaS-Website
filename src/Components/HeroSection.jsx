import React from 'react'
import { Grid, Box, Button, CardMedia, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';
import Card from '@mui/joy/Card';
import Marquee from "react-fast-marquee";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CardContent from '@mui/material/CardContent';
import Img1 from '../Images/Img1.jpg'
import Img2 from '../Images/Img2.jpg'
import Img3 from '../Images/Img3.jpg'
import Img4 from '../Images/Img4.jpg'
import Img5 from '../Images/Img5.png'
import Img6 from '../Images/Img6.png'
import Img7 from '../Images/Img7.png'
import Img8 from '../Images/Img8.png'
import Img9 from '../Images/Img9.png'
import { styled } from '@mui/system';






function HeroSection() {
    const HoverCard = styled(Card)({
        transition: 'transform 0.3s ease-in-out',
        position: 'relative',
        '&:hover': {
            transform: 'scale(1.03)',
            zIndex: 10,
        },
    });


    return (
        <>
            {/* Type Animation */}
            <Box sx={{ paddingTop: { xs: '20px', md: '50px' }, textAlign: 'center' }}>
                <TypeAnimation
                    sequence={[
                        'Looking for Developers',
                        1000,
                        'Looking for Consulting',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.5em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </Box>

            {/* DAAS Full form */}
            <Box sx={{ textAlign: 'center', marginY: '20px' }}>
                <Typography sx={{ fontSize: { xs: '24px', sm: '28px', md: '35px' }, marginY: '20px' }}>
                    Developer as a Service
                </Typography>
            </Box>


            {/* Join the insider Button */}
            <Box>
                <Button sx={{
                    color: "White",
                    px: '10px',
                    fontWeight: 'bold',
                    flexGrow: 0,
                    backgroundColor: '#15222e',
                    borderRadius: '10px',
                    '&:hover': {
                        backgroundColor: '#42869b',
                    },
                    marginBottom: '10px'
                }}
                >
                    Join The Insider
                </Button>
            </Box>

            {/* Video */}
            <Box sx={{ marginY: 5 }}>

                <Grid container justifyContent="center" alignItems="center" style={{ minHeight: { md: '100vh', sm: '100vh', xs: '100vh' }, }}>
                    <Grid item xs={12} md={8}>
                        <Card sx={{
                            width: '100%',
                            height: '100%',
                            padding: '0',
                            border: 'none'
                        }}>
                            <Box>
                                <video
                                    width="100%"
                                    height="100%"
                                    autoPlay
                                    loop
                                    controls
                                >
                                    <source
                                        src="https://assets.codepen.io/6093409/river.mp4"
                                        type="video/mp4" />
                                </video>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Marquee Effect */}
            <Marquee>
                <FacebookIcon sx={{
                    fontSize: '50px',
                    paddingRight: '250px'
                }} />
                <InstagramIcon sx={{
                    fontSize: '50px',
                    paddingRight: '250px'
                }} />
                <FacebookIcon sx={{
                    fontSize: '50px',
                    paddingRight: '250px'
                }} />
                <InstagramIcon sx={{
                    fontSize: '50px',
                    paddingRight: '250px'
                }} />
            </Marquee>

            {/* Image + Four Card */}
            <Box sx={{
                backgroundColor: '#f1f1f1',
                paddingX: { xs: '20px', sm: '40px', md: '60px' },
                marginTop: '70px',
                paddingBottom: '80px'
            }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ width: '100%', height: 'auto', padding: '0', borderRadius: '30px' }}>
                            <CardMedia
                                component="img"
                                src={Img1}
                                alt="Responsive Image"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '30px'
                                }}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} container spacing={2}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{
                                    width: '100%',
                                    borderRadius: '30px',
                                    backgroundColor: '#448699',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 2,
                                    height: '150px' // Set a specific height for the cards
                                }}>
                                    <Typography sx={{
                                        fontSize: { md: '35px', xs: '27px' },
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}>
                                        Over 73000 members
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>

            {/* A full suite of tools */}
            <Grid container justifyContent="center">
                <Grid item xs={12} md={8}>
                    <Box
                        sx={{
                            backgroundColor: '#448699',
                            padding: '15px',
                            textAlign: 'center',
                            margin: 'auto',
                            width: {
                                md: '30%',
                                xs: '50%'
                            },
                            borderRadius: 4,
                            color: 'white',
                            marginTop: '20px'
                        }}
                    >
                        <Typography sx={{ fontSize: '17px' }}>
                            A FULL SUITE OF TOOLS
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* LAunching A product */}
            <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ marginTop: '20px' }}>
                <Grid item xs={12} md={8}>
                    <Typography sx={{ fontSize: { xs: '2em', md: '3em' }, fontWeight: 'semibold' }} align="center">
                        Launching A Fund Has Never Been Easier.
                    </Typography>
                </Grid>
            </Grid>

            {/* 2 Cards */}
            <Box sx={{ paddingX: { md: '60px', xs: '20px' }, marginTop: { md: '50px', xs: '30px' }, paddingBottom: '50px' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <HoverCard sx={{ borderRadius: '30px', backgroundColor: '#448699', color: 'white' }}>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    component="div"
                                    textAlign="left"
                                    sx={{
                                        fontSize: {
                                            md: '2em',
                                            xs: '1.5em',
                                        },
                                    }}
                                >
                                    Elevate Your Network, Expand Your Knowledge
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="white"
                                    sx={{
                                        textAlign: {
                                            xs: 'left',
                                            sm: 'left',
                                            md: 'left',
                                        },
                                        fontSize: {
                                            xs: '0.875rem',
                                            sm: '1rem',
                                        },
                                    }}
                                >
                                    Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="auto"
                                sx={{ borderRadius: '20px' }}
                                src={Img3}
                            />
                        </HoverCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <HoverCard sx={{ borderRadius: '30px', border: '3px solid black' }}>
                            <CardContent>
                                <Typography gutterBottom
                                    component="div"
                                    textAlign="left"
                                    sx={{
                                        fontSize: {
                                            md: '2em',
                                            xs: '1.5em',
                                        },
                                    }}>
                                    Elevate Your Network, Expand Your Knowledge
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        textAlign: 'left',
                                        fontSize: {
                                            xs: '0.875rem',
                                            sm: '1rem',
                                        },
                                    }}>
                                    Gain invaluable insights from more than 18 renowned speakers, cumulatively managing over $30 billion in assets, who will share their strategies, successes, and industry forecasts.
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="auto"
                                sx={{ borderRadius: '20px' }}
                                src={Img4}
                            />
                        </HoverCard>
                    </Grid>
                </Grid>
            </Box>

            {/* 3 Cards and 2 card */}
            <Box sx={{ backgroundColor: 'black', marginX: -1 }}>

                {/* Join top tier */}
                <Typography variant='h2' sx={{ paddingY: '30px', color: 'white' }}>
                    Join Top-Tier Emerging
                </Typography>

                {/* Join event */}
                <Button sx={{
                    padding: '13px 32px',
                    fontSize: '20px',
                    backgroundColor: '#448699',
                    color: 'white',
                    marginBottom: '30px',
                    '&:hover': {
                        backgroundColor: 'grey', // Change the background color to red on hover
                    }
                }}>
                    JOIN EVENT
                </Button>

                {/* 3 cards */}
                <Grid sx={{ flexGrow: 1 }} container spacing={2} >
                    <Grid item xs={12} >
                        <Grid container justifyContent="space-evenly">

                            <Grid item marginBottom='10px'>
                                <HoverCard sx={{ maxWidth: 345, borderRadius: '30px', marginX: 1 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" textAlign='left'>
                                            Elevate Your Network, Expand Your Knowledge
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" textAlign='left'>
                                            Experience a dynamic 3-day event alongside forward-thinking Fund Managers and Investors, all actively engaged in shaping the future of asset management.
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        sx={{ borderRadius: '20px' }}
                                        src={Img2}
                                    />
                                </HoverCard>
                            </Grid>
                            <Grid item marginBottom='10px'>
                                <HoverCard sx={{ maxWidth: 345, borderRadius: '30px', marginX: 1 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" textAlign='left'>
                                            Connect with Great Minds In Alternative Investments
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" textAlign='left'>
                                            Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        sx={{ borderRadius: '20px' }}
                                        src={Img3}
                                    />
                                </HoverCard>
                            </Grid>
                            <Grid item marginBottom='10px'>
                                <HoverCard sx={{ maxWidth: 345, borderRadius: '30px', marginX: 1 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" textAlign='left'>
                                            Learn from the Masters of the Game
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" textAlign='left'>
                                            Gain invaluable insights from more than 18 renowned speakers, cumulatively managing over $30 billion in assets, who will share their strategies, successes, and industry forecasts.
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        sx={{ borderRadius: '20px' }}
                                        src={Img4}
                                    />
                                </HoverCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* 2 yellow cards */}
                <Box sx={{ paddingX: { md: '60px', xs: '20px' }, marginTop: { md: '50px', xs: '30px' }, paddingBottom: '50px' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <HoverCard sx={{ borderRadius: '30px', backgroundColor: '#f6d43f', color: 'black', border: 'none' }}>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        component="div"
                                        textAlign="left"
                                        sx={{
                                            fontSize: {
                                                md: '2em',
                                                xs: '1.5em',
                                            },
                                        }}
                                    >
                                        Elevate Your Network, Expand Your Knowledge
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="black"
                                        sx={{
                                            textAlign: {
                                                xs: 'left',
                                                sm: 'left',
                                                md: 'left',
                                            },
                                            fontSize: {
                                                xs: '0.875rem',
                                                sm: '1rem',
                                            },
                                        }}
                                    >
                                        Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="auto"
                                    sx={{ borderRadius: '20px' }}
                                    src={Img3}
                                />
                            </HoverCard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <HoverCard sx={{ borderRadius: '30px', backgroundColor: '#f6d43f', color: 'black', border: 'none' }}>
                                <CardContent>
                                    <Typography gutterBottom
                                        component="div"
                                        textAlign="left"
                                        sx={{
                                            fontSize: {
                                                md: '2em',
                                                xs: '1.5em',
                                            },
                                        }}>
                                        Elevate Your Network, Expand Your Knowledge
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="black"
                                        sx={{
                                            textAlign: 'left',
                                            fontSize: {
                                                xs: '0.875rem',
                                                sm: '1rem',
                                            },
                                        }}>
                                        Gain invaluable insights from more than 18 renowned speakers, cumulatively managing over $30 billion in assets, who will share their strategies, successes, and industry forecasts.
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="auto"
                                    sx={{ borderRadius: '20px' }}
                                    src={Img4}
                                />
                            </HoverCard>
                        </Grid>
                    </Grid>
                </Box>

            </Box>

            {/* JUST STARTING OUT */}
            <Box
                xs={12}
                md={8}
                sx={{
                    backgroundColor: '#f6d43f',
                    padding: '15px',
                    textAlign: 'center',
                    margin: 'auto',
                    width: { md: '20%', xs: '50%' },
                    borderRadius: 4,
                    color: 'black',
                    marginTop: { md: '4em', xs: '3em' },
                }}
            >
                <Typography sx={{ fontSize: '17px', fontWeight: 'bold' }}>
                    JUST STARTING OUT
                </Typography>
            </Box>

            {/* Fund Launch section + Get Customized + Dive into */}
            <Box>
                <Grid container justifyContent="center">
                    <Grid item xs={10} md={8}>
                        <Typography gutterBottom variant="h2" component="div" textAlign='center' marginTop='40px'>
                            Fund Launch Products
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div" textAlign='center' marginTop='20px' >
                            Get Customized Help Based On Your Needs
                        </Typography>
                        <Typography variant='h6' sx={{
                            padding: '15px',
                            textAlign: 'center',
                            marginTop: '15px'
                        }}>
                            Dive into an exclusive world of finance, encompassing a pioneering conference and a dynamic membership community.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* FUND LAUNCH 2 card */}
            <Box sx={{ paddingX: { md: '60px', xs: '20px' }, marginTop: { md: '50px', xs: '30px' }, paddingBottom: '50px' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <HoverCard sx={{ borderRadius: '30px', border: '3px solid black', backgroundColor: '#171717', color: 'white' }}>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    component="div"
                                    textAlign="left"
                                    sx={{
                                        fontSize: {
                                            md: '2em',
                                            xs: '1.5em',
                                        },
                                    }}
                                >
                                    Elevate Your Network, Expand Your Knowledge
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="white"
                                    sx={{
                                        textAlign: {
                                            xs: 'left',
                                            sm: 'left',
                                            md: 'left',
                                        },
                                        fontSize: {
                                            xs: '0.875rem',
                                            sm: '1rem',
                                        },
                                    }}
                                >
                                    Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                </Typography>
                            </CardContent>
                            <Button sx={{ backgroundColor: '#448699', color: 'white', padding: '10px', fontSize: '18px', borderRadius: '10px', marginBottom: 1 }}>Learn More</Button>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="auto"
                                sx={{ borderRadius: '20px' }}
                                src={Img5}
                            />
                        </HoverCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <HoverCard sx={{ borderRadius: '30px', border: '3px solid black', backgroundColor: '#171717', color: 'white' }} >
                            <CardContent>
                                <Typography gutterBottom
                                    component="div"
                                    textAlign="left"
                                    sx={{
                                        fontSize: {
                                            md: '2em',
                                            xs: '1.5em',
                                        },
                                    }}>
                                    Elevate Your Network, Expand Your Knowledge
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="white"
                                    sx={{
                                        textAlign: 'left',
                                        fontSize: {
                                            xs: '0.875rem',
                                            sm: '1rem',
                                        },
                                    }}>
                                    Gain invaluable insights from more than 18 renowned speakers, cumulatively managing over $30 billion in assets, who will share their strategies, successes, and industry forecasts.
                                </Typography>
                            </CardContent>
                            <Button sx={{ backgroundColor: '#448699', color: 'white', padding: '10px', fontSize: '18px', borderRadius: '10px', marginBottom: 1 }}>Learn More</Button>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="auto"
                                sx={{ borderRadius: '20px' }}
                                src={Img6}
                            />
                        </HoverCard>
                    </Grid>
                </Grid>
            </Box>

            {/* EXPLOSIVE NETWORKING */}
            <Box
                xs={12}
                md={8}
                sx={{
                    backgroundColor: '#f6d43f',
                    padding: '15px',
                    textAlign: 'center',
                    margin: 'auto',
                    width: { md: '20%', xs: '50%' },
                    borderRadius: 4,
                    color: 'black',
                    marginTop: { md: '2em', xs: '1em' },
                }}
            >
                <Typography sx={{ fontSize: '17px', fontWeight: 'bold' }}>
                    EXPLOSIVE NETWORKING
                </Typography>
            </Box>
            {/* Events and networking */}
            <Box>
                <Typography gutterBottom variant="h2" component="div" textAlign='center' sx={{ marginTop: { md: '30px', xs: '20px' } }}>
                    Events & Networking
                </Typography>
                <Typography gutterBottom variant="h6" component="div" textAlign='center' marginTop='20px'>
                    Checkout all the fun things we have planned at Fund Launch.
                </Typography>
            </Box>

            {/* Events and networking 2 cards */}
            <Box sx={{
                paddingX: { xs: 2, sm: 6 },
                marginTop: 6,
                paddingBottom: { md: 10, xs: 5 }
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{ marginBottom: 4 }}>
                        <Card sx={{ borderRadius: '30px', border: '3px solid black', backgroundColor: '#171717', height: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom color='white' variant="h4" component="div" textAlign='left'>
                                    Elevate Your Network, Expand Your Knowledge
                                </Typography>
                                <Typography variant="body1" color="white" textAlign='left'>
                                    Gain invaluable insights from more than 18 renowned speakers, cumulatively managing over $30 billion in assets, who will share their strategies, successes, and industry forecasts.
                                </Typography>
                            </CardContent>
                            <Button sx={{ backgroundColor: '#f6d43f', color: 'black', fontWeight: 'bold', padding: 1, fontSize: '18px', borderRadius: 1, margin: 2 }}>
                                Learn More
                            </Button>
                            <CardMedia
                                component="img"
                                alt="Elevate Your Network"
                                sx={{ borderRadius: 2, width: '100%', height: 'auto' }}
                                src={Img7}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ marginBottom: 4 }}>
                        <Card sx={{ borderRadius: '30px', backgroundColor: '#171717', height: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom color='white' variant="h4" component="div" textAlign='left'>
                                    Connect with Great Minds In Alternative Investments
                                </Typography>
                                <Typography variant="body1" color="white" textAlign='left'>
                                    Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                </Typography>
                            </CardContent>
                            <Button sx={{ backgroundColor: '#f6d43f', color: 'black', fontWeight: 'bold', padding: 1, fontSize: '18px', borderRadius: 1, margin: 2 }}>
                                Learn More
                            </Button>
                            <CardMedia
                                component="img"
                                alt="Connect with Great Minds"
                                sx={{ borderRadius: 2, width: '100%', height: 'auto' }}
                                src={Img8}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Horizontal card */}
            <Box sx={{ paddingX: { md: '40px', xs: 2 } }}>
                <Grid item xs={12} sm={12} sx={{ marginBottom: 3 }}>
                    <Card sx={{ width: { md: '97%', xs: '90%' }, borderRadius: '30px', color: 'white', backgroundColor: '#171717', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" textAlign='left'>
                                    Connect with Great Minds In Alternative Investments
                                </Typography>
                                <Typography variant="body1" color="white" textAlign='left'>
                                    Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                </Typography>
                            </CardContent>
                            <Button sx={{ backgroundColor: '#f6d43f', color: 'black', fontWeight: 'bold', padding: '10px', fontSize: '18px', borderRadius: '10px', alignSelf: 'flex-start', margin: 2 }}>
                                Learn More
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                            <CardMedia
                                component="img"
                                sx={{ borderRadius: '20px', width: '100%', height: 'auto' }}
                                src={Img9}
                            />
                        </Grid>
                    </Card>
                </Grid>
            </Box>

            {/* ADVANCED MASTERY */}
            <Box
                xs={12}
                md={8}
                sx={{
                    backgroundColor: '#f6d43f',
                    padding: '15px',
                    textAlign: 'center',
                    margin: 'auto',
                    width: { md: '20%', xs: '50%' },
                    borderRadius: 4,
                    color: 'black',
                    marginTop: '4em',
                }}
            >
                <Typography sx={{ fontSize: '17px', fontWeight: 'bold' }}>
                    ADVANCED MASTERY
                </Typography>
            </Box>

            {/*  Services & Incubators */}
            <Box sx={{ marginTop: '20px', textAlign: 'center', }}>
                <Typography sx={{ fontSize: { md: '3em', xs: '2em' } }}>
                    Services & Incubators
                </Typography>
                <Box sx={{ marginTop: '20px', margin: 'auto', maxWidth: '700px', paddingX: { xs: '20px', sm: '40px' } }}>
                    <Typography gutterBottom variant="h6" component="div" textAlign='center'>
                        Advance your fund-launching journey with comprehensive courses and the exclusive Black Card membership for a hands-on, immersive experience.
                    </Typography>
                </Box>
            </Box >

            {/* 1 card */}
            <Box
                sx={{
                    paddingX: { md: '90px', xs: '20px' },
                    marginTop: '50px',
                    paddingBottom: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                }
                }
            >
                <Grid container spacing={2} sx={{ maxWidth: '1200px', justifyContent: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                borderRadius: '30px',
                                color: 'white',
                                backgroundColor: '#171717',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    component="div"
                                    textAlign="left"
                                    sx={{ fontSize: { md: '2em', xs: '1.5em' } }}
                                >
                                    Elevate Your Network, Expand Your Knowledge
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="white"
                                    textAlign="left"
                                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                                >
                                    Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                </Typography>
                                <Button sx={{ width: '100%', backgroundColor: '#f6d43f', color: 'black', fontWeight: 'bold', padding: '10px', fontSize: '18px', borderRadius: '10px', marginTop: 3 }}>
                                    Learn More
                                </Button>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="Elevate Your Network"
                                height="400"
                                sx={{ borderRadius: '20px', width: '100%', height: 'auto' }}
                                src={Img3}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* COMPLETELY FREE CONTENT */}
            <Box
                xs={12}
                md={8}
                sx={{
                    backgroundColor: '#f6d43f',
                    padding: '15px',
                    textAlign: 'center',
                    margin: 'auto',
                    width: { md: '20%', xs: '50%' },
                    borderRadius: 4,
                    color: 'black',
                    marginTop: { md: '2em', xs: '1em' },
                }}
            >
                <Typography sx={{ fontSize: '17px', fontWeight: 'bold' }}>
                    COMPLETELY FREE CONTENT
                </Typography>
            </Box>

            {/* Free Premium Content */}
            <Box>
                <Typography gutterBottom variant="h2" component="div" textAlign='center' marginTop='40px'>
                    Free Premium Content
                </Typography>
                <Box sx={{ marginTop: '20px', margin: 'auto', maxWidth: '700px', paddingX: { xs: '20px', sm: '40px' } }}>
                    <Typography gutterBottom variant="h6" component="div" textAlign='center' fontWeight='light '>
                        Explore the fundamentals of fund creation through engaging case studies and an accelerator program designed for aspiring fund managers.
                    </Typography>
                </Box>
            </Box>

            {/* Free Premium Content 2 cards */}
            <Box sx={{
                paddingX: { xs: 2, sm: 6 },
                marginTop: 6,
                paddingBottom: { md: 10, xs: 5 }
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{ marginBottom: 4 }}>
                        <Card sx={{ borderRadius: '30px', border: '3px solid black', backgroundColor: '#171717', height: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom color='white' variant="h4" component="div" textAlign='left'>
                                    Fund Academy
                                </Typography>
                                <Typography variant="body1" color="white" textAlign='left'>
                                    Gain invaluable insights from more than 18 renowned speakers, cumulatively managing over $30 billion in assets, who will share their strategies, successes, and industry forecasts.
                                </Typography>
                            </CardContent>
                            <Button sx={{ backgroundColor: '#f6d43f', color: 'black', fontWeight: 'bold', padding: 1, fontSize: '18px', borderRadius: 1, margin: 2 }}>
                                Learn More
                            </Button>
                            <CardMedia
                                component="img"
                                alt="Elevate Your Network"
                                sx={{ borderRadius: 2, width: '100%', height: 'auto' }}
                                src={Img7}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ marginBottom: 4 }}>
                        <Card sx={{ borderRadius: '30px', backgroundColor: '#171717', height: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom color='white' variant="h4" component="div" textAlign='left'>
                                    Fund Launch Accelerator
                                </Typography>
                                <Typography variant="body1" color="white" textAlign='left'>
                                    Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                </Typography>
                            </CardContent>
                            <Button sx={{ backgroundColor: '#f6d43f', color: 'black', fontWeight: 'bold', padding: 1, fontSize: '18px', borderRadius: 1, margin: 2 }}>
                                Learn More
                            </Button>
                            <CardMedia
                                component="img"
                                alt="Connect with Great Minds"
                                sx={{ borderRadius: 2, width: '100%', height: 'auto' }}
                                src={Img8}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Last horizontal card */}
            < Box sx={{ paddingX: { md: '40px', xs: 2 } }}>
                <Grid item xs={12} sm={12} sx={{ marginBottom: 3 }}>
                    <Card sx={{ width: { md: '97%', xs: '90%' }, borderRadius: '30px', color: 'white', backgroundColor: '#171717', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>
                            <CardMedia
                                component="img"
                                sx={{ borderRadius: '20px', width: '100%', height: 'auto' }}
                                src={Img9}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" textAlign='left'>
                                    Connect with Great Minds In Alternative Investments
                                </Typography>
                                <Typography variant="body1" color="white" textAlign='left'>
                                    Join us for an unparalleled opportunity to network with peers, learn from industry leaders, and explore new horizons in the ever-evolving world of alternative investments.
                                </Typography>
                            </CardContent>
                            <Button sx={{ backgroundColor: '#f6d43f', color: 'black', fontWeight: 'bold', padding: '10px', fontSize: '18px', borderRadius: '10px', alignSelf: 'flex-start', margin: 2 }}>
                                Learn More
                            </Button>
                        </Grid>
                    </Card>
                </Grid>
            </Box>
        </ >
    )
}

export default HeroSection
