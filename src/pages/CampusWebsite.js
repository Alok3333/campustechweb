import React, { useRef, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  TextField,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DeblurIcon from "@mui/icons-material/Deblur";
import DiamondIcon from "@mui/icons-material/Diamond";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InsightsIcon from "@mui/icons-material/Insights";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
// importing react-slick for carousal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "../virtuallabcss/CampusWebsite.module.css";

const categoryData = [
  {
    icon: <ConnectWithoutContactIcon sx={{ fontSize: "100px" }} />,
    title: "Design & Art",
  },
  {
    icon: <SettingsSuggestIcon sx={{ fontSize: "100px" }} />,
    title: "Web Development",
  },
  {
    icon: <DeblurIcon sx={{ fontSize: "100px" }} />,
    title: "SEO Markting",
  },
  {
    icon: <DiamondIcon sx={{ fontSize: "100px" }} />,
    title: "Video Edting",
  },
  {
    icon: <Diversity3Icon sx={{ fontSize: "100px" }} />,
    title: "Logo Design",
  },
  {
    icon: <InsightsIcon sx={{ fontSize: "100px" }} />,
    title: "Game Design",
  },
  {
    icon: <InsightsIcon sx={{ fontSize: "100px" }} />,
    title: "Game Design",
  },
  {
    icon: <InsightsIcon sx={{ fontSize: "100px" }} />,
    title: "Game Design",
  },
];

// Login Component
export const LoginPage = () => {
  return <>Login here</>;
};

export const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, phone);
  }
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={0}>
        <Grid xs={12} sm={12} md={6} xl={6}>
          <Typography
            variant="h3"
            sx={{
              my: 4,
              fontWeight: 700,
              color: "#444",
              textShadow:
                "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc;",
            }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ my: 4, color: "#aaa" }}>
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department email you'd like to contact below.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          xl={6}
          sx={{ backgroundColor: "none", color: "#aaa" }}
        >
          <>
            <form
              onSubmit={handleSubmit}
              action={<Link to="/login" />}
              style={{ marginTop: "8px", marginBottom: "8px" }}
            >
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  fullWidth
                  required
                />
              </Stack>
              <TextField
                type="email"
                variant="outlined"
                color="secondary"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
              <TextField
                type="tel"
                variant="outlined"
                color="secondary"
                label="Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                fullWidth
                sx={{ mb: 4 }}
              />
              <Button variant="outlined" color="secondary" type="submit">
                Submit
              </Button>
            </form>
            <small>
              Already have an account? <Link to="/login">Login Here</Link>
            </small>
          </>
        </Grid>
      </Grid>
    </Container>
  );
};

const CarousalCard = ({ heading, subheading, image }) => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          color: "white",
          padding: "20px",
          paddingTop: "40px",
          height: "400px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Grid size={5}>
          <Typography variant="h2">{heading} </Typography>
          <Typography variant="subtitle1">{subheading}</Typography>
          <Box sx={{ mt: 2 }}>
            <a
              href="/Login"
              style={{
                backgroundColor: "#0f6fdb",
                color: "#fff",
                display: "block",
                padding: 15,
                width: 150,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              GET STARTED
            </a>
            {/* <a href='/Login' style={{ backgroundColor: '#c811ed', color: '#fff', display: 'block', padding: 15, width: 150, fontSize:16, textDecoration: 'none'}}>GET STARTED</a> */}
            {/* <Button variant="contained" color="success" sx={{ mr: 2 }}>
                            How it helps
                        </Button>
                        <Button variant="contained" color="primary">
                            Get Started
                        </Button> */}
          </Box>
        </Grid>
        <Grid size={1}></Grid>
        <Grid size={6} sx={{ position: "absolute", top: "0", right: "0" }}>
          <img
            src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-10-535-h1.png"
            alt="img"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

function SimpleSlider() {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Slider ref={sliderRef} {...settings}>
        <CarousalCard
          heading="Generative AI for LMS and Accreditation"
          subheading="Generate syllabus to course material to assignments. Validate documents."
          image="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-10-535-h1.png"
        />
        <CarousalCard
          heading="LMS with Personalize Learning"
          subheading="Generate course material to assignments to MCQ as per learning level of students."
          image="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-10-535-h1.png"
        />
        <CarousalCard
          heading="Accreditation with AI assistants"
          subheading="Collect documents, validate documents using AI, generate missing documents using AI."
          image="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-10-535-h1.png"
        />
      </Slider>

      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom: -50,
          left: 100,
          mt: 2,
        }}
      >
        <ArrowCircleLeftIcon
          onClick={() => sliderRef.current.slickPrev()}
          sx={{ fontSize: 60, color: "cyan", cursor: "pointer" }}
        />
        <ArrowCircleRightIcon
          onClick={() => sliderRef.current.slickNext()}
          sx={{ fontSize: 60, color: "cyan", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
}

const AboutPage = () => {
  const navigate2 = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 10,
        padding: 6,
        marginBlock: "80px",
      }}
    >
      <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <img
          src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-10-5255-h2.jpg"
          alt="img1"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <Box sx={{ width: "65%" }}>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", mb: 4, fontWeight: "bold" }}
        >
          Experience the power of Generative AI
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, fontSize: "20px" }}>
          Provide a personalized learning experience to every student based on
          learning level of the students. Create individual course content, MCQ,
          assignments on same topic based on learning levels of students.
        </Typography>
        <Box sx={{ mt: 2 }}>
          {/* <Button variant="contained" color="success" sx={{ mr: 2 }}>
                        About Us
                    </Button> */}
          <a
            href="/Login"
            style={{
              backgroundColor: "#c811ed",
              color: "#fff",
              display: "block",
              padding: 15,
              width: 150,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            GET STARTED
          </a>
          {/* <Button variant="contained" color="primary" onClick={navigate2('/Login')}>
                    <a href='/Login'>Get started</a>
                    </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

const AboutPage2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 10,
        padding: 6,
        marginBlock: "80px",
      }}
    >
      <Box sx={{ width: "65%" }}>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", mb: 4, fontWeight: "bold" }}
        >
          Best Experienced Freelancer Here
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, fontSize: "20px" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" sx={{ mr: 2 }}>
            About Us
          </Button>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <img
          src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-319-3784896.jpg"
          alt="img1"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

const AboutPage3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 10,
        padding: 6,
        marginBlock: "80px",
      }}
    >
      <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <img
          src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-449-lms1.jpeg"
          alt="img1"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <Box sx={{ width: "65%" }}>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", mb: 4, fontWeight: "bold" }}
        >
          Best Experienced Freelancer Here
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, fontSize: "20px" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" sx={{ mr: 2 }}>
            About Us
          </Button>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const AboutPage4 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 10,
        padding: 6,
        marginBlock: "80px",
      }}
    >
      <Box sx={{ width: "65%" }}>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", mb: 4, fontWeight: "bold" }}
        >
          Best Experienced Freelancer Here
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, fontSize: "20px" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" sx={{ mr: 2 }}>
            About Us
          </Button>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <img
          src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-612-lms3.jpeg"
          alt="img1"
          style={{ width: "70%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

const AboutPage5 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 10,
        padding: 6,
        marginBlock: "80px",
      }}
    >
      <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <img
          src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-1237-Wavy_Edu-04_Single-05.jpg"
          alt="img1"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <Box sx={{ width: "65%" }}>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", mb: 4, fontWeight: "bold" }}
        >
          Best Experienced Freelancer Here
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, fontSize: "20px" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" sx={{ mr: 2 }}>
            About Us
          </Button>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const AboutPage6 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 10,
        padding: 6,
        marginBlock: "80px",
      }}
    >
      <Box sx={{ width: "65%" }}>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", mb: 4, fontWeight: "bold" }}
        >
          Best Experienced Freelancer Here
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, fontSize: "20px" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" sx={{ mr: 2 }}>
            About Us
          </Button>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <img
          src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-1338-lms2.jpeg"
          alt="img1"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

const CategoryPage = () => {
  return (
    <Box sx={{ backgroundColor: "#1CBBB4", padding: "20px", color: "white" }}>
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          margin: "auto",
          color: "white",
          borderBottom: "2px solid ",
          display: "flex",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        {" "}
        What we provide
      </Typography>
      <Box container paddingTop="50px">
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          {categoryData.map(({ icon, title }, index) => (
            <Box
              sx={{ width: "240px", textAlign: "center", marginBlock: "20px" }}
              key={index}
            >
              {icon}
              <Typography variant="h5">{title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

// const navigate2 = useNavigate();
// const onButtonClicklogin2 = async() => {
//     navigate2('/Login');
// };

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "Login"];

function CampusWebsite(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  // State for subscribe button
  const [subscribeVal, setSubscribeVal] = useState();
  const [isSubscribe, setIsSubscribe] = useState(false);

  // Handle for subscript button
  const handleSubscribe = () => {
    if (subscribeVal) {
      alert("Thank you for subscribe!");
    } else {
      alert("Please Enter Your Email");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onButtonClicklogin = async () => {
    navigate("/Login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, px: 2, fontWeight: "700" }}>
        CAMPUS TECHNOLOGY
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))} */}
        <ListItem disablePadding component={RouterLink} to="/Login">
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: scrolled ? "#333" : "none",
          color: scrolled ? "#fff" : "#000",
          transition: "background-color 0.3s ease-in-out",
          backdropFilter: "blur(8px)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <img
              src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-2048-FullLogo_Transparent_NoBuffer.png"
              alt="ct_logo"
              width="150"
              height="60"
              style={{
                objectFit: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* {navItems.map((item) => (
                            <Button key={item} sx={{ color: "#000" }}>
                                {item}
                            </Button>
                        ))} */}
            <Button sx={{ color: "#000" }} onClick={onButtonClicklogin}>
              Login
            </Button>

            <Button
              variant="contained"
              color="secondary"
              style={{
                padding: "5px 10px",
                fontSize: "12px",
                height: "30px",
                width: "150px",
              }}
            >
              Request Demo
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "relative",
            maxWidth: "1500px",
            margin: "auto",
            marginTop: "64px",
          }}
        >
          {/* Background Box 1 (Left) */}
          <Box
            sx={{
              width: "50%",
              height: "420px",
              position: "absolute",
              top: "20",
              left: "0",
              backgroundColor: "#1A2E35",
              zIndex: 0,
            }}
          ></Box>

          <Box
            sx={{
              width: "50%",
              height: "420px",
              position: "absolute",
              top: "20",
              right: "0",
              backgroundColor: "#1CBBB4",
              zIndex: 0,
            }}
          ></Box>

          <SimpleSlider />
          <AboutPage />
          <AboutPage2 />
          <AboutPage3 />
          <AboutPage4 />
          <AboutPage5 />
          <AboutPage6 />
          <CategoryPage />

          {/* About pages container */}
          <Container>
            <Box
              component="main"
              sx={{ p: 2, backgroundColor: "#fff", color: "#0c0c0c" }}
            >
              <Box>
                <img
                  src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-10-5245-about-img.jpg"
                  alt="about_img"
                  className={styles.aboutImage}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                    mb: 2,
                    color: "#444",
                    textShadow:
                      "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc;",
                  }}
                >
                  About Spering Company
                </Typography>
                <Typography sx={{ px: 6 }}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If youThere are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If
                  you
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained" color="primary" sx={{ my: 4 }}>
                    Read more
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>

          {/* Contact page */}
          <ContactPage />
        </Box>
        {/* Footer Section*/}
        <Box sx={{ backgroundColor: "#0c0c0c", color: "#fff", p: 2 }}>
          <Container maxWidth="xl" sx={{ backgroundColor: "none", mt: 2 }}>
            {/* Grid for footer logo and social links */}
            <Grid
              container
              spacing={0}
              sx={{ backgroundColor: "none", color: "#cdcdcd" }}
            >
              <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
                <img
                  src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-2048-FullLogo_Transparent_NoBuffer.png"
                  alt="footer_ct_logo"
                  width="150"
                  height="60"
                  style={{
                    objectFit: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <Typography sx={{ color: "#1877F2" }}>
                  <FacebookIcon />
                </Typography>

                <Typography sx={{ color: "#657786" }}>
                  <XIcon />
                </Typography>

                <Typography sx={{ color: "#0072b1" }}>
                  <LinkedInIcon />
                </Typography>

                <Typography sx={{ color: "#d62976" }}>
                  <InstagramIcon />
                </Typography>

                <Typography sx={{ color: "#FF0000" }}>
                  <YouTubeIcon />
                </Typography>
              </Grid>
            </Grid>

            {/* Grid for footer info */}
            <Grid
              container
              spacing={0}
              sx={{ backgroundColor: "#0c0c0c", color: "#cdcdcd" }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={3}
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  justifyContent: "start",
                  alignItems: "start",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Useful Link
                <Typography sx={{ mt: 1 }}>
                  <Link to="/" className={styles.atag}>
                    Home
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/" className={styles.atag}>
                    Contact
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/login" className={styles.atag}>
                    Login
                  </Link>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={3}
                sx={{
                  p: 2,
                  display: "block",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Offices
                <Typography sx={{ mt: 1, textTransform: "none" }}>
                  www.Campus
                  <Typography component="span" sx={{ color: "red" }}>
                    Technology
                  </Typography>
                  .com
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={3}
                sx={{
                  p: 2,
                  display: "grid",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Information
                <Typography sx={{ mt: 0, textTransform: "none" }}>
                  Readable content of a page when looking at its layoutreadable
                  content of a page when looking at its layout.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={3}
                sx={{
                  p: 2,
                  display: "block",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Newsletter
                <Typography
                  component="div"
                  sx={{ mt: 1, textTransform: "none" }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    // label="Email"
                    placeholder="Email"
                    id="fullWidth"
                    sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
                    value={subscribeVal}
                    onChange={(e) => setSubscribeVal(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    sx={{ my: 1 }}
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </Button>
                </Typography>
              </Grid>
            </Grid>

            {/* CopyRight text */}
            {/* <Typography
              component="div"
              sx={{
                color: "#cdcdcd",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &copy; www.campustechnology.com
            </Typography> */}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

CampusWebsite.propTypes = {
  window: PropTypes.func,
};

export default CampusWebsite;
