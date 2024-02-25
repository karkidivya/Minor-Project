import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Your Info and Work Description',
  'Select your Service provider',
  'Choose a Date',
];

export default function HorizontalLinearAlternativeLabelStepper({ step = 0}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step} alternativeLabel sx = {{width: '100%'}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}