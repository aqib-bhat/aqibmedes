import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Item } from "../components/Item";
import { machineLearning } from "../data/BookRecommendations";

export default function Bookshelf() {
  return (
    <div>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
        Bookshelf
      </Typography>
      <main>
        <Typography variant="subtitle1" gutterBottom>
          Books that I have read / reading / recommend (This page is under
          construction).
        </Typography>
        <Grid item xs={12}>
          <Item>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">🛠 Machine Learning</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {machineLearning.map((item) => (
                  <React.Fragment key={item.title}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom align="left">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        align="left"
                      >
                        🪄 {item.authors}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        align="left"
                      >
                        🪄 {item.linkToBuy}
                      </Typography>
                    </CardContent>
                  </React.Fragment>
                ))}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
      </main>
    </div>
  );
}
