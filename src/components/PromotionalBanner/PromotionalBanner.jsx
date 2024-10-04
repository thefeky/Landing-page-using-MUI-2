import { Box, Button, Typography } from "@mui/material";
import PinterestIcon from "@mui/icons-material/Pinterest";
import bedroomImage from "../../assets/bed.jpg";

const PromotionalBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${bedroomImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "16px",
          left: "16px",
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<PinterestIcon />}
          sx={{
            borderRadius: "20px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Save
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          LABOUR DAY: ENJOY 20% OFF EQ3
        </Typography>
        <Typography variant="body1">
          Save on designs with longevity in mind. Now until September 3rd.
        </Typography>
      </Box>
    </Box>
  );
};

export default PromotionalBanner;
