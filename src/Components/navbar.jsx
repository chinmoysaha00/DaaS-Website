import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import Booking from './Booking';

const pages = ['About Us', 'Services', 'Blog'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [popup, setPopup] = React.useState(false);

    const handleClickOpen = () => {
        setPopup(true);
    };

    const handleClose = () => {
        setPopup(false);
    };


    return (
        <>
            <AppBar position="sticky" sx={{ boxShadow: 'none' }}>
                <Container maxWidth="xl"
                    sx={{
                        backgroundColor: 'white',
                    }}
                >
                    <Toolbar disableGutters>
                        <AdbIcon sx={{
                            display: {
                                xs: 'none',
                                md: 'flex',
                                color: "#445699"
                            },
                            mr: 1,

                        }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            DaaS
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'center', md: 'none' }, textAlign: 'center', color: 'red', mr: 10 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'none' },
                                // display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                                textAlign:'center'
                            }}
                        >
                            DaaS
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                        }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'black',
                                        display: 'block',
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                        px: '20px'
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>


                        <Box sx={{
                            flexGrow: 0,
                            backgroundColor: '#448699',
                            borderRadius: '10px',
                        }}>
                            <Button sx={{
                                color: "black",
                                px: '10px',
                                fontWeight: 'bold'
                            }}
                                onClick={handleClickOpen}
                            >
                                Book Event
                            </Button>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {popup && <Booking handleClose={handleClose} handleClickOpen={handleClickOpen} />}
        </>
    );
}
export default Navbar;
