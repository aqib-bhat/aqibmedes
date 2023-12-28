import React from 'react';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, CardContent, Grid, Link, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const experienceInfo = [
  {
    name: 'BlackLine Systems Inc.',
    location: 'Issaquah, Washington state, USA (Remote)',
    title: 'Senior Software Engineer',
    timePeriod: 'April 4th, 2022 - October 27th, 2023',
    details: 'I worked in the Platform team building microservices and implementing the integration with Okta to enable a Single Sign-On (SSO) experience for the tenant users of the SaaS applications. I was also involved in improving operations, performance, and monitoring.'
  },
  {
    name: 'Amazon',
    location: 'Seattle, Washington state, USA',
    title: 'Software Development Engineer (SDE)',
    timePeriod: 'May 30th 2017 - April 1st 2022',
    details: 'I was part of the Amazon Publishing division and worked on various internal and external projects (examples: Amazon Original Stories and World Book Day celebrations). I did full-stack work as well as cloud migrations of existing applications. Besides new features, I remodeled existing applications to streamline the book metadata and comply with privacy regulations.'
  },
  {
    name: 'Amazon',
    location: 'Seattle, Washington state, USA',
    title: 'Software Development Engineer (SDE) Intern',
    timePeriod: 'May 17th 2016 - August 5th 2016',
    details: 'I got selected for the coveted software development summer internship at Amazon and developed a news feed for an internal website. I ended up getting a full-time job offer at the end.'
  },
  {
    name: 'Wipro Technologies',
    location: 'Pune, India and York, UK',
    title: 'Project Engineer to Senior Software Engineer',
    timePeriod: 'April 26th 2010 - May 27th 2015',
    details: 'I started work as a software engineer after graduation. I learned and practiced full-stack deployment. I worked on large projects for insurance and banking clients. I also worked in the UK while handling the offshore team in India.'
  },
];

export default function Resume() {  
    return (
      <div>
        <h2>Resume</h2>
        <main>
          <Typography variant="h6" gutterBottom>
            Curriculum Vitae (CV) with detailed work history is available on request.
            <Link href='https://www.linkedin.com/in/aqibbhat/' target="_blank" rel="noopener" underline="hover">LinkedIn profile</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Item>
                  <React.Fragment>
                    <CardContent>
                      <Typography variant="subtitle1">Software engineer with experience, skills, and a strong work ethic.</Typography>
                      <Typography variant="subtitle1">Work Authorization: Canadian 3-year Open Work Permit approved in August 2023.</Typography>
                    </CardContent>
                  </React.Fragment>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <React.Fragment>
                    <CardContent>
                      <Typography variant="subtitle1" align='left'>🌎 Greater Vancouver Area, BC, Canada 🇨🇦</Typography>
                      <Typography variant="subtitle1" align='left'>📧 Email and 📱 mobile number available on request</Typography>
                    </CardContent>
                  </React.Fragment>
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                      <Typography variant="h5">👨‍💻 Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {experienceInfo.map((item) => (
                        <React.Fragment key={item.timePeriod}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom align='left'>{item.name}</Typography>
                            <Typography variant="subtitle1" gutterBottom align='left'>🌎 {item.location}</Typography>
                            <Typography variant="subtitle1" gutterBottom align='left'>{item.title}</Typography>
                            <Typography variant="subtitle1" gutterBottom align='left'>🕰 {item.timePeriod}</Typography>
                            <Typography variant="body1" gutterBottom align='left'>{item.details}</Typography>
                          </CardContent>
                        </React.Fragment>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                      <Typography variant="h5">🛠 Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Accordion>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      >
                        <Typography variant="h5">🎓 Education</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Accordion>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      >
                        <Typography variant="h5">🥷 Certifications</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Accordion>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      >
                        <Typography variant="h5">🗣 Languages</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Accordion>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      >
                        <Typography variant="h5">👨‍🏫 Test Scores</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </main>
      </div>
    );
};
