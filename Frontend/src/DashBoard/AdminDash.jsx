import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Container,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import {
  Assignment,
  Analytics,
  Notifications,
  Group,
  Task,
  Dashboard,
  Menu as MenuIcon,
} from '@mui/icons-material';

const DRAWER_WIDTH = 240;

const AdminDash = () => {
  const [notifications, setNotifications] = useState(5);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <Dashboard />,
      link: '/dashboard',
    },
    {
      title: 'Create Quiz',
      icon: <Assignment />,
      link: '/create-quiz',
    },
    {
      title: 'Manage Tasks',
      icon: <Task />,
      link: '/tasks',
    },
    {
      title: 'Student Analytics',
      icon: <Analytics />,
      link: '/student-analytics',
    },
    {
      title: 'Class Performance',
      icon: <Group />,
      link: '/class-analytics',
    },
  ];

  const drawer = (
    <Box sx={{ overflow: 'auto' }}>
      {/* Logo Area */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <Dashboard sx={{ fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          EduAdmin
        </Typography>
      </Box>

      {/* Menu Items */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: 'primary.main',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: { sm: DRAWER_WIDTH },
          flexShrink: { sm: 0 },
        }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: '1px solid rgba(0, 0, 0, 0.08)',
              backgroundColor: 'background.paper',
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: '1px solid rgba(0, 0, 0, 0.08)',
              backgroundColor: 'background.paper',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
            mt: { xs: 2, sm: 0 },
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
            Dashboard Overview
          </Typography>
          <IconButton
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
            }}
          >
            <Badge badgeContent={notifications} color="error">
              <Notifications />
            </Badge>
          </IconButton>
        </Box>

        {/* Your existing dashboard content goes here */}
        <Grid2 container spacing={3}>
          {/* ... Your existing grid items ... */}
        </Grid2>
      </Box>
    </Box>
  );
};

export default AdminDash;