import React, { Fragment } from 'react'
import { Box, CardContent, Chip, Grid, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import Content from '../content.json';

const Interests = () => (
    <CardContent style={{ padding: '25px' }}>
        <Grid item xs={12}>
            <Box className='iconContainer' width={'100%'} mb={2}>
                <LanguageIcon />
                <Typography color='white' fontWeight={'bold'} mb={0} variant={"h5"}>
                    INTERESTS
                </Typography>
            </Box>
        </Grid>

        <Grid container spacing={2}>
            {Content.interests.map(((text, i) => (
                <Grid key={i} item>
                    <Chip sx={{ m: '2px', borderRadius: '10px', color: 'white', fontWeight: 600 }} label={text} variant='outlined' />
                </Grid>
            )))}
        </Grid>
    </CardContent>
)

export default Interests