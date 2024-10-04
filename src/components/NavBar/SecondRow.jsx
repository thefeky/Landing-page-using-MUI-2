import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";

const SecondRow = () => {
  return (
    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        {[
          "Living",
          "Dining",
          "Bedroom",
          "Outdoor",
          "Office",
          "Lighting",
          "Rugs",
          "Accessories",
          "Brands",
          "Inspiration",
          "Gifts",
          "Sale",
        ].map((link) => (
          <Link key={link} href="#" underline="none" variant="body2" color="inherit">
            {link}
          </Link>
        ))}
      </div>

      <TextField
        variant="outlined"
        size="small"
        placeholder="Search"
        slotProps={{  
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Toolbar>
  );
};

export default SecondRow;
