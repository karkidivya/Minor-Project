'use client'
import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
interface IOption{
  label : React.ReactNode
  value : any
}

export default function Select({ value, option,setValue, flexDirection = "column"}: {option: IOption[], value: string, setValue: (a: string) => void, flexDirection: 'row' | 'column'}) {
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
        sx={{ gap: 1.5, display: 'flex', flexDirection: flexDirection}}
      >
        {option?.map((item: any, idx: number) => (
          <Sheet
            key={idx}
            sx={{
              p: 2,
              borderRadius: 'md',
              boxShadow: 'sm',
            }}
          >
            <Radio
              label={item.label}
              overlay
              disableIcon
              value={item.value}
              sx = {{display: 'flex'}}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    display: 'flex',
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