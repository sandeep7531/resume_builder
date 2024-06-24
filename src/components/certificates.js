import React, { Fragment } from 'react'
import { Box, CardContent, Grid, Typography } from '@mui/material'
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Content from '../content.json';

const Certificates = () => (
    <CardContent style={{ padding: '25px' }}>
        <Grid item xs={12}>
            {new Array(0).fill("").map((_, i) => (
                <br key={i} />
            ))}
            <Box className='iconContainer' width={'100%'} mb={2}>
                <CardMembershipIcon />
                <Typography color='white' fontWeight={'bold'} mb={0} variant={"h5"}>
                    CERTIFICATES
                </Typography>
            </Box>
        </Grid>

        {Content.certificates.map((({ name, description }, i) => (
            <Fragment key={i}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography color='white' variant={"h6"} fontWeight={500}>
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color='white' fontStyle={'italic'} paragraph>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </Fragment>
        )))}
    </CardContent>
)

export default Certificates