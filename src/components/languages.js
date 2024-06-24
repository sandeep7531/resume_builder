import React, { Fragment } from 'react'
import { Box, CardContent, Grid, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import Content from '../content.json';

const Languages = () => (
    <CardContent style={{ padding: '25px' }}>
        <Grid item xs={12}>
            <Box className='iconContainer' width={'100%'} mb={2}>
                <LanguageIcon />
                <Typography color='white' fontWeight={'bold'} mb={0} variant={"h5"}>
                    LANGUAGES
                </Typography>
            </Box>
        </Grid>

        {Content.languages.map((({ name, fluency }, i) => (
            <Fragment key={i}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography color='white' variant={"h6"} fontWeight={500}>
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color='white' fontStyle={'italic'} paragraph>
                            {fluency}
                        </Typography>
                    </Grid>
                </Grid>
            </Fragment>
        )))}
    </CardContent>
)

export default Languages