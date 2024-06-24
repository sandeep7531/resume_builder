import { Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import Content from '../content.json'

const Skills = () => (
    <Grid container>
        <Grid item xs={12} sx={{ mb: 5 }}>
            <Box className='iconContainer' mb={2}>
                <CodeIcon className="filledIcon" />
                <Typography variant={'h5'} fontWeight='bold'>
                    SKILLS
                </Typography>
            </Box>

            <Grid item xs={12}>
                {Content.skills.primary.map((text, i) => (
                    <Chip sx={{ m: '4px', borderRadius: '10px', fontWeight: 600 }} key={i} label={text} color="primary" />
                ))}
            </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mb: 5 }}>
            <Box className='iconContainer' mb={2}>
                <CodeIcon className="filledIcon" />
                <Typography variant={'h5'} fontWeight='bold'>
                    OTHER SKILLS
                </Typography>
            </Box>

            <Grid item xs={12}>
                {Content.skills.secondary.map((text, i) => (
                    <Chip sx={{ m: '4px', borderRadius: '10px', fontWeight: 600 }} key={i} label={text} color="primary" />
                ))}
            </Grid>
        </Grid>


    </Grid>
)

export default Skills