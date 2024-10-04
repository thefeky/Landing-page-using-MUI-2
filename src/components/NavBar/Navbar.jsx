import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", color: "#000" }}
      elevation={0}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          EQ3
        </Typography>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconButton color="inherit">
            <LocationOnIcon />
          </IconButton>
          <IconButton color="inherit">
            <HelpOutlineIcon />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<PersonOutlineIcon />}
          >
            Join/Login to EQ3
          </Button>
          <Button variant="outlined" color="inherit" startIcon={<PublicIcon />}>
            EN/CAD
          </Button>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
