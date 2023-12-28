import React from 'react';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, CardContent, Grid, Link, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { experienceInfo, education, certifications } from '../data/ResumeData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
              <Grid item xs={12}>
                <Item>
                  <React.Fragment>
                    <CardContent>
                      <Typography variant="subtitle1">Software engineer with experience, skills, and a strong work ethic.</Typography>
                      <Typography variant="subtitle1">Work Authorization: Canadian 3-year Open Work Permit approved in August 2023.</Typography>
                      <Typography variant="subtitle1">🌎 Greater Vancouver Area, BC, Canada 🇨🇦</Typography>
                      <Typography variant="subtitle1">📧 Email and 📱 mobile number available on request</Typography>
                    </CardContent>
                  </React.Fragment>
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
                      <Typography variant="h5">👨‍💻 Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {experienceInfo.map((item) => (
                        <React.Fragment key={item.startDate}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom align='left'>{item.name}</Typography>
                            <Typography variant="subtitle1" gutterBottom align='left'>🌎 {item.location}</Typography>
                            <Typography variant="subtitle1" gutterBottom align='left'>{item.title}</Typography>
                            <Typography variant="subtitle1" gutterBottom align='left'>🗓 {item.startDate} -<strong>to</strong>- {item.endDate}</Typography>
                            { item.details.map((detail) =>
                              <Typography variant="body1" gutterBottom align='left'>➡ {detail}</Typography>
                            )}
                          </CardContent>
                        </React.Fragment>
                      ))}
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
                        {education.map((item) => (
                            <React.Fragment key={item.degreeName}>
                              <CardContent>
                                <Typography variant="h6" gutterBottom align='left'>🏛 <strong>{item.institute}</strong></Typography>
                                <Typography variant="subtitle1" gutterBottom align='left'>🌎 <strong>{item.location}</strong></Typography>
                                <Typography variant="subtitle1" gutterBottom align='left'>📚 <strong>{item.degreeName} 🔍 {item.concentration}</strong></Typography>
                                <Typography variant="body1" gutterBottom align='left'>🗓 <strong>Start: </strong>{item.start} 🗓 <strong>End: </strong>{item.end}</Typography>
                                { item.details.map((detail) =>
                                  <Typography variant="body1" gutterBottom align='left'>➡ {detail}</Typography>
                                )}
                              </CardContent>
                            </React.Fragment>
                          ))}
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
                        <Typography variant="h5">🥷 Certifications</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {certifications.map((item) => (
                          <React.Fragment key={item.name}>
                            <CardContent>
                              <Typography variant="h6" gutterBottom align='left'>{item.name}</Typography>
                              <Typography variant="subtitle1" gutterBottom align='left'>🏛 <strong>Issuing Authority: </strong>{item.issuingAuthority}</Typography>
                              <Typography variant="body1" gutterBottom align='left'>🗓 <strong>Issue Date: </strong>{item.issueDate}</Typography>
                            </CardContent>
                          </React.Fragment>
                        ))}
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
              <Grid item xs={12}>
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
