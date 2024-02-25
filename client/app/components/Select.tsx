'use client'
import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';

export default function IconlessRadio({ option, value, setValue}: {option: string[], value: string, setValue: (a: string) => void}) {
    const handleChange = (e: any) =>{
        setValue(e.target.value)
    }
  return (
    <Box sx={{ width: 300 }}>
      <RadioGroup
        aria-labelledby="storage-label"
        value = {value}
        onChange={handleChange}
        size="lg"
        sx={{ gap: 1.5 }}
      >
        {option?.map((value) => (
          <Sheet
            key={value}
            sx={{
              p: 2,
              borderRadius: 'md',
              boxShadow: 'sm',
            }}
          >
            <Radio
              label={`${value}`}
              overlay
              disableIcon
              value={value}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: 'lg',
                    fontSize: 'md',
                    color: checked ? 'text.primary' : 'text.secondary',
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      '--variant-borderWidth': '2px',
                      '&&': {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
}