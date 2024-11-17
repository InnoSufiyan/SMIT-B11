import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

export default function JobCard({ jobData }) {
  const { designation, companyName, skills, applyPhone, applyEmail } = jobData;
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", width: "50%" }}>
      <Link to={`/jobDetail/${jobData._id}`}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {designation}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {companyName}
            </Typography>
            {applyEmail ? (
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                Email to: {applyEmail}
              </Typography>
            ) : (
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                Whatsapp to: {applyPhone}
              </Typography>
            )}
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              width: "100%",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            {skills?.map((skill) => (
              <Chip label={skill} />
            ))}
          </Box>
        </Box>
        <CardMedia
          style={{
            height: "100px",
          }}
          component="img"
          sx={{ width: 151 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnFtZ0QCZX4QjIknoOfHvs5mcRCinDLKkAA&s"
          alt="Live from space album cover"
        />
      </Link>
    </Card>
  );
}
