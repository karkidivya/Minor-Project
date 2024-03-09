import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

export const Logo = styled((props) => {
  const { variant, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (
    <Image src = "/ellipse-1@2x.png" width = {80} height = {80}/>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
