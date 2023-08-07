import * as React from 'react';
import {
    Box, Stack, AppBar, Toolbar, IconButton, Typography,
    InputBase, Badge, MenuItem, Menu, MenuProps, Card, Grid, CardHeader, Avatar,
    CardContent
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CelebrationSharpIcon from '@mui/icons-material/CelebrationSharp';
import HomeIcon from '@mui/icons-material/Home';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LocalFloristSharpIcon from '@mui/icons-material/LocalFloristSharp';
import WRAPIFY_GIFT_IMG1 from '../../public/images/wrapify-gift.jpg';
import WRAPIFY_GIFT_IMG2 from '../../public/images/wrapify-gift2.jpg';
import './homepage.css';
const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const Body = function():JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box width={'100%'}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <div>
                    <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        className="homepage__categories_button"
                        sx={{
                            backgroundColor: 'white', color: 'black', ':hover': {
                                bgcolor: '#ECE6F1'
                            }
                        }}
                    >
                        <WorkspacesIcon />
                        Categories
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            <EditIcon />
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <FileCopyIcon />
                            Duplicate
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple>
                            <ArchiveIcon />
                            Archive
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <MoreHorizIcon />
                            More
                        </MenuItem>
                    </StyledMenu>
                </div>

            </Stack>
            <Box sx={{ backgroundColor: 'lavenderblush' }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                    sx={{ padding: "3%" }}>
                    <Typography className="homepage__heading_text">Personalized Magazines | Customised gifts and more.</Typography>
                    <Button variant="contained" color='primary' sx={{ bgcolor: 'indianred' }}>Order Now</Button>
                </Stack>

            </Box>

            <Box sx={{ marginTop: '1%', padding: '2%' }}>
                <Stack direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={2}>
                    <Card variant="outlined" sx={{ width: '25%' }} className="homepage__left_card">
                        <CardContent>
                            <Typography className='homepage__left_cardlist_items_header'>Top Categories</Typography>
                            <Divider className="homepage__left_card_divider"/>

                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                              
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <Typography className='homepage__left_cardlist_items'>Home</Typography>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MilitaryTechIcon />
                                    </ListItemIcon>
                                    <Typography className='homepage__left_cardlist_items'>Popular Products</Typography>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TrendingUpIcon />
                                    </ListItemIcon>
                                    <Typography className='homepage__left_cardlist_items'>Trending Products</Typography>
                                </ListItemButton>
                            </List>
                            <Typography className='homepage__left_cardlist_items_header'>Top Packages</Typography>
                            <Divider className="homepage__left_card_divider"/>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                              
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LocalFloristSharpIcon />
                                    </ListItemIcon>
                                    <Typography className='homepage__left_cardlist_items'>Flower</Typography>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FavoriteBorderSharpIcon />
                                    </ListItemIcon>
                                    <Typography className='homepage__left_cardlist_items'>valentine Gifts</Typography>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CardGiftcardIcon/>
                                    </ListItemIcon>
                                    <Typography className='homepage__left_cardlist_items'>Wedding Gifts</Typography>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CelebrationSharpIcon />
                                    </ListItemIcon>
                                    <Typography className='homepage__left_cardlist_items'>New Year Gifts</Typography>
                                </ListItemButton>
                            </List>
                        </CardContent>
                    </Card>
                    <Grid container spacing={2} width="70%">
                        <Grid item xs={12} md={6} lg={4}>
                            <Card >
                                <CardHeader
                                    avatar={
                                        <CardGiftcardIcon />
                                    }
                                    title={<Typography className="homepage__cards_header">Gift for all Occasions</Typography>}
                                    subheader="information about gift"
                                />
                            </Card>

                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardHeader
                                    avatar={
                                        <LocalShippingIcon />
                                    }
                                    title={<Typography className="homepage__cards_header">Delivering quality gifts</Typography>}
                                    subheader="information about gift"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardHeader
                                    avatar={
                                        <HeadsetMicIcon />
                                    }
                                    title={<Typography className="homepage__cards_header">Happy Service</Typography>}
                                    subheader="information about gift"
                                />
                            </Card>
                        </Grid>
                        </Grid>
                </Stack>
            </Box>
        </Box>
    )
}

export default Body;



