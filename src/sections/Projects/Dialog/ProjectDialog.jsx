import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Chip,
  Stack,
  Grid,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const ProjectDialog = ({ open, onClose, data }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
        },
      }}
    >
      <DialogTitle
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{data.title}</Typography>
        <IconButton onClick={onClose} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          p: 0,
          maxHeight: "80vh",
          overflow: "hidden",
        }}
      >
        {/* <Grid container> */}
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: "100%", md: "15%" },
            borderRight: "1px solid rgba(255,255,255,0.2)",
            p: 3,
            color: "#fff",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <Typography variant="h6" gutterBottom textAlign={"center"}>
            Tech Stack
          </Typography>
          <Stack direction="column" spacing={1} flexWrap="wrap">
            {data.techStack.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  mb: 1,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
                    transform: "scale(1.05)",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "85%" },
            p: 3,
            overflowY: "auto",
            maxHeight: "80vh",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "4px",
              backdropFilter: "blur(4px)",
            },
            scrollbarColor: "rgba(255,255,255,0.3) transparent",
            scrollbarWidth: "thin",
            color: "#fff",
          }}
        >
          {data.video && (
            // <Box sx={{ position: "sticky", top: 0 }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Demo Video
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "8px",
                  mb: 2,
                }}
              >
                <iframe
                  src={data.video}
                  frameBorder="0"
                  allowFullScreen
                  title={`${data.title} demo`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                ></iframe>
              </Box>
            </Box>
          )}
          {data.image && (
            <img
              src={data.image}
              alt={data.title}
              style={{
                width: "100%",
                borderRadius: 8,
                marginBottom: 16,
              }}
            />
          )}

          <Typography variant="h6" gutterBottom>
            Achievements
          </Typography>
          <ul>
            {data.achievements.map((item, index) => (
              <li key={index}>
                <Typography>{item}</Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" gutterBottom>
            Work Done
          </Typography>
          <Typography paragraph>{data.work}</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

ProjectDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.any,
};

export default ProjectDialog;
