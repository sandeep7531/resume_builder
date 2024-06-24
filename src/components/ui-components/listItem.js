import React from 'react'
import { Box, Typography } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';
import LinkIcon from '@mui/icons-material/Link';

export default function ListItem({ icon, text, containerProps, iconProps, typographyProps, link = false }) {

    if (link) {
        return (
            <Box className='listContainer' {...containerProps}>
                {icon || (
                    <SquareIcon className='listIcon' {...iconProps} />
                )}

                <a href={link.href}>
                    <Typography paragraph mb={1} color='secondary'>
                        Click here to see: {link.text}
                    </Typography>
                </a>

                <LinkIcon />
            </Box>
        )
    }
    return (
        <Box className='listContainer' {...containerProps}>
            {icon || (
                <SquareIcon className='listIcon' {...iconProps} />
            )}

            <Typography paragraph mb={1} {...typographyProps}>
                {text}
            </Typography>
        </Box>
    )
}