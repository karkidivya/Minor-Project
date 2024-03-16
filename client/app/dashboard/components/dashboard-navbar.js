'use client'
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { AccountPopover } from './account-popover';
import { Notification } from './notification'
import { useAppSelector } from '@/lib/hooks';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen,  ...other } = props;
  const settingsRef = useRef(null);
  const notificationRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const [openNotification, setOpenNotification ] = useState(false)

  const userDetail = useAppSelector(state => state.user.userDetail)

  

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton sx={{ ml: 1 }} 
            ref = {notificationRef}
            onClick = {() => setOpenNotification(true)}
          >
            <Badge
              badgeContent={4}
              color="primary"
              variant="dot"
            >
              <BellIcon fontSize="small" />
            </Badge>
          </IconButton>
          <Avatar
            onClick={() => setOpenAccountPopover(true)}
            ref={settingsRef}
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40,
              ml: 1
            }}
            src={userDetail?.profilePicture}
            >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />
      <Notification
        anchorEl = {notificationRef.current}
        open = {openNotification}
        onClose = {() =>  setOpenNotification(false)}
      />
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
