import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DiamondIcon from "@mui/icons-material/Diamond";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
const TabPrice = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper
      sx={{
        width: 550,
        margin: "auto",
        mt: 10,
        bgcolor: "rgb(39,37,35)",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          pt: 2,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "#fff", textAlign: "center" }}>
            قیمت خرید
          </Typography>
          <p style={{ color: "green", display: "flex", fontSize: "20px" }}>
            11.258.694
            <Typography sx={{ color: "green", pr: 1, fontSize: "20px" }}>
              ریال
            </Typography>
          </p>
        </Box>
        <DiamondIcon
          sx={{
            color: "#FFC436",
            fontSize: "50px",
          }}
        />
        <Box>
          <Typography variant="h5" sx={{ color: "#fff", textAlign: "center" }}>
            قیمت فروش
          </Typography>
          <p style={{ color: "red", display: "flex", fontSize: "20px" }}>
            11.258.694
            <Typography sx={{ color: "red", pr: 1, fontSize: "20px" }}>
              ریال
            </Typography>
          </p>
        </Box>
      </Box>
      <Box
        sx={{ width: 500, margin: "auto", px: 3, pt: 5, borderRadius: "15px" }}
      >
        <Paper
          elevation={10}
          sx={{
            height: "250px",
            bgcolor: "#3C3A36",
            borderRadius: "15px",
          }}
        >
          <AppBar position="static" sx={{ borderRadius: "10px" }}>
            <Tabs
              sx={{
                bgcolor: "#3C3A36",

                borderRadius: "10px",
                "& .MuiButtonBase-root": {
                  color: "#FFC436",
                  fontSize: "20px",
                  fontWeight: "bold",
                },
              }}
              value={value}
              onChange={handleChange}
              indicatorColor="#FFC436"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="خرید" {...a11yProps(0)} />
              <Tab label="فروش" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={themee}>
              <Paper
                sx={{
                  mt: 3,
                  bgcolor: "#272523",
                  width: "90%",
                  borderRadius: "10px",
                  mx: "auto",
                }}
              >
                <FormControl
                  sx={{
                    width: "100%",

                    input: { color: "#FFC436", direction: "rtl", pr: 2 },
                    label: { color: "#fff" },
                    "& label.Mui-focused": {
                      color: "#FFC436",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FFC436",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#272523",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fff",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FFC436",
                      },
                    },
                  }}
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    ارزش کل
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    endAdornment={
                      <InputAdornment
                        sx={{
                          "& .MuiTypography-root": {
                            color: "#fff",
                          },
                        }}
                        position="start"
                      >
                        ریال
                      </InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>
              </Paper>
              <Paper
                sx={{
                  mt: 2,
                  bgcolor: "#272523",
                  width: "90%",
                  borderRadius: "10px",
                  mx: "auto",
                }}
              >
                <FormControl
                  sx={{
                    width: "100%",

                    input: { color: "#FFC436", direction: "rtl", pr: 2 },
                    label: { color: "#fff", fontWeight: "bold" },
                    "& label.Mui-focused": {
                      color: "#FFC436",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FFC436",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#272523",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fff",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FFC436",
                      },
                    },
                  }}
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    مقدار طلا
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    endAdornment={
                      <InputAdornment
                        sx={{
                          "& .MuiTypography-root": {
                            color: "#fff",
                          },
                        }}
                        position="start"
                      >
                        گرم
                      </InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>
              </Paper>
            </ThemeProvider>
          </CacheProvider>
        </Paper>
      </Box>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            value={value}
            index={0}
            dir={theme.direction}
            sx={{
              "&:hover": {
                borderColor: "#FFC436",
              },
              my: 3,
              width: "60%",
              color: "#FFC436",
              fontSize: "20px",
              fontWeight: "bold",
              borderColor: "#FFC436",
            }}
          >
            خرید
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            value={value}
            index={1}
            dir={theme.direction}
            sx={{
              "&:hover": {
                borderColor: "#FFC436",
              },

              my: 3,
              width: "60%",
              color: "#FFC436",
              fontSize: "20px",
              fontWeight: "bold",
              borderColor: "#FFC436",
            }}
          >
            فروش
          </Button>
        </Box>
      </SwipeableViews>
    </Paper>
  );
};

export default TabPrice;
