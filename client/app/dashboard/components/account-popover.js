import { Box, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useAppDispatch } from '@/lib/hooks';
import { setAuthorization } from '@/lib/features/user/userSlice';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, fullName, open, ...other } = props;
  const dispatch = useAppDispatch()

  const handleSignOut = () =>{
    dispatch(setAuthorization(false))
  }

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
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {fullName}
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
        <MenuItem onClick = {handleSignOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

