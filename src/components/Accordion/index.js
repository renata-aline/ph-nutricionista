import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  const items = [
    {
      id: "1",
      titulo: "Como funciona seu atendimento?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar",
    },
    {
      id: "2",
      titulo: "Como funciona seu atendimento?",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar",
    },
    {
      id: "3",
      titulo: "Como funciona seu atendimento?",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar",
    },
    {
      id: "4",
      titulo: "Como funciona seu atendimento?",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar",
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <Accordion
          sx={{ borderColor: "#9c5d41", bgcolor: "#000", padding: "10px 16px" }}
        >
          <AccordionSummary
            sx={{
              bgcolor: "#000",
              color: "#fff",
              border: "1px solid #9c5d41",
              borderRadius: "8px",
            }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            {item.titulo}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#000",
              color: "#9c5d41",
              border: "1px solid #9c5d41",
              borderTop: "none",
              borderRadius: "0 0 8px 8px",
            }}
          >
            {item.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
