import React, { Fragment } from "react";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ListItem from "./ui-components/listItem";
import Content from "../content.json";

const WorkExperience = () => (
  <CardContent sx={{ padding: "25px" }}>
    <Grid item xs={12}>
      <Box className="iconContainer" width={"100%"} mb={2}>
        <WorkOutlineIcon />
        <Typography color="white" fontWeight={"bold"} mb={0} variant={"h5"}>
          WORK EXPERIENCE
        </Typography>
      </Box>
    </Grid>

    {Content.wordExperience.map(
      (
        { company, companyDescription, date, position, responsibilities },
        i
      ) => (
        <Fragment key={i}>
          {i === 2 && (
            <Fragment>
              {new Array(4).fill("").map((_, i) => (
                <br key={i} />
              ))}
            </Fragment>
          )}
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ mt: 3 }} color="white" variant={"h5"} fontWeight={"bold"}>
                {position}
              </Typography>
              <Typography color="white" variant={"h6"}>
                {company}
              </Typography>
              <Typography
                color="white"
                paragraph
                fontWeight={"bold"}
                fontStyle={"italic"}
              >
                {date.joining} - {date.leaving}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="white"
                fontWeight={600}
                fontStyle={"italic"}
                paragraph
              >
                {companyDescription}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="white"
                fontWeight={600}
                fontStyle={"italic"}
                paragraph
                mb={0}
              >
                Responsibilities
              </Typography>
              {responsibilities.map((text, i) => (
                <ListItem
                  key={i}
                  {...{
                    text,
                    typographyProps: {
                      color: "#ffffff",
                    },
                    containerProps: {
                      style: {
                        gap: "10px",
                      },
                    },
                    iconProps: {
                      style: {
                        fill: "var(--white)",
                        backgroundColor: "var(--primary-color)",
                        padding: "5px",
                      },
                    },
                  }}
                />
              ))}
            </Grid>
          </Grid>
        </Fragment>
      )
    )}
  </CardContent>
);

export default WorkExperience;
