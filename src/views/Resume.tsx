import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  experienceInfo,
  skills,
  education,
  certifications,
  languages,
  testScores,
} from "../data/ResumeData";
import { Item } from "../components/Item";

export default function Resume() {
  return (
    <div>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
        Resume
      </Typography>
      <main>
        <Typography variant="h6" gutterBottom>
          <Link
            href="https://www.linkedin.com/in/aqibbhat/"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            LinkedIn profile
          </Link>
        </Typography>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <React.Fragment>
                  <CardContent>
                    <Typography variant="subtitle1">
                      Software engineer with experience, skills, and a strong
                      work ethic
                    </Typography>
                    <Typography variant="subtitle1">
                      🛂 Work Authorization / Immigration status: I am a
                      Permanent Resident of Canada.
                    </Typography>
                    <Typography variant="subtitle1">
                      🌎 Greater Vancouver Area, BC, Canada 🇨🇦
                    </Typography>
                    <Typography variant="subtitle1">
                      📧 Email and 📱 mobile number available on request
                    </Typography>
                    <Typography variant="subtitle1" align="left">
                      <br />
                      <strong>Professional bio</strong>
                      <br />
                      I am a software engineer with over ten years of experience
                      working in multiple business domains and locations. I have
                      worked in big and small companies, hence able to thrive in
                      different environments.
                      <br />
                      I have done full-stack work but focussed more on the
                      backend, set up infrastructure, written automation and
                      integration tests, created dashboards and alarms, been
                      on-call, performed project planning, code reviews,
                      blameless investigations of incidents, and handled
                      communications. I have worked on performance optimization
                      of software applications and improving the UI/UX. I love
                      learning new technologies and getting things done
                      pragmatically.
                      <br />I have been a part of and led small and big
                      projects. I get involved in all aspects of software
                      engineering, from understanding the business domain and
                      synthesizing requirements to making the developer
                      experience better while ensuring the sound monitoring of
                      systems. I like to take ownership while building good
                      relationships. I have implemented software services and
                      handled the testing and DevOps/SRE aspects. Hence,
                      coordinating with the Product/QA/DevOps/SRE/Other teams
                      and customers is something that I do promptly and
                      respectfully. I like to ensure clarity and the application
                      of principles in a balanced way so that everyone, from a
                      newcomer to an experienced person, the on-call engineer to
                      the customer, all have a delightful experience.
                    </Typography>
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
                      <React.Fragment key={item.from}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom align="left">
                            {item.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="left"
                          >
                            🌎 {item.location}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="left"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="left"
                          >
                            🗓 {item.from} ― {item.to}
                          </Typography>
                          {item.details.map((detail) => (
                            <Typography
                              variant="body1"
                              gutterBottom
                              align="left"
                              key={detail}
                            >
                              ➡ {detail}
                            </Typography>
                          ))}
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
                    {skills.map((item) => (
                      <React.Fragment key={item.type}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom align="left">
                            {item.type}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="left"
                          >
                            🪄 {item.examples}
                          </Typography>
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
                    <Typography variant="h5">🎓 Education</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {education.map((item) => (
                      <React.Fragment key={item.degreeName}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom align="left">
                            🏛 <strong>{item.institute}</strong>
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="left"
                          >
                            🌎 <strong>{item.location}</strong>
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="left"
                          >
                            📚{" "}
                            <strong>
                              {item.degreeName} 🔍 {item.concentration}
                            </strong>
                          </Typography>
                          <Typography variant="body1" gutterBottom align="left">
                            🗓 <strong>Start: </strong>
                            {item.start} 🗓 <strong>End: </strong>
                            {item.end}
                          </Typography>
                          {item.details.map((detail) => (
                            <Typography
                              variant="body1"
                              gutterBottom
                              align="left"
                              key={detail}
                            >
                              ➡ {detail}
                            </Typography>
                          ))}
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
                          <Typography variant="h6" gutterBottom align="left">
                            {item.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="left"
                          >
                            🏛 <strong>Issuing Authority: </strong>
                            {item.issuingAuthority}
                          </Typography>
                          <Typography variant="body1" gutterBottom align="left">
                            🗓 <strong>Issue Date: </strong>
                            {item.issueDate}
                          </Typography>
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
                    {languages.map((language) => (
                      <Typography
                        variant="body1"
                        gutterBottom
                        align="left"
                        key={language}
                      >
                        🎙 {language}
                      </Typography>
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
                    <Typography variant="h5">👨‍🏫 Test Scores</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {testScores.map((item) => (
                      <React.Fragment key={item.name}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom align="left">
                            {item.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="left"
                          >
                            🏹 <strong>Result: </strong>
                            {item.result}
                          </Typography>
                        </CardContent>
                      </React.Fragment>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
