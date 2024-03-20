'use client'
import { useRef, useState } from 'react';
import {styled} from '@mui/material/styles';
import { AppBar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar'
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
          {/* {userDetail.profilePicture ?
            <Avatar
            key = {12321}
            onClick={() => setOpenAccountPopover(true)}
            ref={settingsRef}
            alt = {"User's Profile picture"}
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40,
              ml: 1
            }}
            src = {userDetail?.profilePicture }
            />: 
            <Avatar
            key = {1232132}
            onClick={() => setOpenAccountPopover(true)}
            ref={settingsRef}
            alt = {"User's Profile picture"}
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40,
              ml: 1
            }}
            src = {'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw3o1kMUvUdp2CoRGS_q-vHv&ust=1711041538653000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjo8sqsg4UDFQAAAAAdAAAAABAE'}
            />  */}
          {/* } */}
        </Toolbar>
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
      </DashboardNavbarRoot>
    </>
  );
};
