import { Chip, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

const TechChip = ({ label, info }) => {
  return (
    <Tooltip
      placement="right"
      title={info}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "rgba(20, 20, 20)", // darker translucent background
            color: "#fff",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            fontSize: "0.85rem",
            padding: "8px 12px",
            borderRadius: "8px",
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.4)",
          },
          arrow: {
            sx: {
              color: "rgba(20, 20, 20,)",
              backdropFilter: "blur(10px)",
            },
          },
        },
      }}
    >
      <Chip
        label={label}
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
    </Tooltip>
  );
};

TechChip.propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
};

export default TechChip;
