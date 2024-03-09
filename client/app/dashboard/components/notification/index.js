import PropTypes from 'prop-types';
import { Box, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useSocket } from '../../../context/SocketContext';
import { useEffect, useState } from 'react';
export const Notification = (props) => {
  const { anchorEl, onClose, fullName, open, ...other } = props;
  const socket = useSocket();
  const [notify  , setNotify] = useState({message : ''})
  useEffect(() => {
    if (socket) {
      // Use socket here
      socket.on('receiveNotification', data => {
        console.log('Received notification:', data);
        setNotify({message : data})
        console.log(notify,"vdfv")
        // Handle the received notification, e.g., show a notification popup
    });
    }
  }, [socket]);
  console.log(notify,"dadvdfv")
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: '300px' }
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Notifications 
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          
          {/* {fullName} */}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          '& > *': {
            '&:first-of-type': {
              borderTopColor: 'divider',
              borderTopStyle: 'solid',
              borderTopWidth: '1px'
            },
            padding: '12px 16px'
          }
        }}
      >

      </MenuList>
    </Popover>
  );
};

Notification.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
