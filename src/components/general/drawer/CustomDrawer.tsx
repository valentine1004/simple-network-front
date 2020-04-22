import React from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import {
    Drawer,
    AppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    ListItem
} from '@material-ui/core';
import {ListItemIcon, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/EmojiPeople';
import AccountCircle from "@material-ui/icons/AccountCircle";
import {useStyles} from "./styled";
import MyProfile from "../../profile/myProfile";
import Friends from "../../profile/friends/Friends";
import {Sections} from "../../../utils";


function CustomDrawer(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const [openPanel, setOpenPanel] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleDrawerOpen = () => {
        setOpenPanel(true);
    };

    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDrawerClose = () => {
        setOpenPanel(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        props.history.push('/login');
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openPanel,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: openPanel,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div className={classes.header}>
                        <div className={classes.titleWrapper}>
                            <Typography variant="h6">
                                {props.user ? `Hello, ${props.user.first_name}` : null}
                            </Typography>
                        </div>
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: openPanel,
                    [classes.drawerClose]: !openPanel,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: openPanel,
                        [classes.drawerClose]: !openPanel,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem
                        button
                        onClick={() => props.changeSection(Sections.MyProfile)}
                        className={props.currentSection === Sections.MyProfile ? classes.selectedTab : ''}
                    >
                        <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                        <ListItemText primary={'My profile'}/>
                    </ListItem>
                    <ListItem button onClick={() => props.changeSection(Sections.Friends)}>
                        <ListItemIcon>{<PersonIcon/>}</ListItemIcon>
                        <ListItemText primary={'Friends'}/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {
                    props.currentSection === Sections.MyProfile ?
                        <MyProfile/> :
                        props.currentSection === Sections.Friends ?
                            <Friends/> : null
                }
            </main>
        </div>
    );
}

export default CustomDrawer;