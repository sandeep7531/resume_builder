import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import Content from '../content.json';

const Education = () => (
    <Grid item xs={12} sx={{ mb: 5 }}>
        {new Array(3).fill("").map((_, i) => (
            <br key={i} />
        ))}
        <Box className='iconContainer' mb={2}>
            <SchoolIcon className="filledIcon" />
            <Typography variant={'h5'} fontWeight='bold'>
                EDUCATION
            </Typography>
        </Box>

        <Grid item xs={12}>
            {Content.education.map(({ course, date, institute, marks }, i) => (
                <Grid item xs={12} key={i}>
                    <Typography variant='h6' color='primary' mb={0} fontWeight={'bold'}>
                        {course}
                    </Typography>
                    <Typography variant='h6' mb={0}>
                        {institute}
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Typography paragraph fontStyle={'italic'} color='primary'>
                            {date.joining} - {date.leaving}
                        </Typography>
                        <Typography paragraph fontStyle={'italic'} color='primary'>
                            {marks}
                        </Typography>
                    </Box>

                </Grid>
            ))}
        </Grid>
    </Grid>
)

export default Education