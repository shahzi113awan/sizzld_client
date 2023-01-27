import { Box, Typography } from "@mui/material";

export default function Footer() {
  const casino = [
    { text: "casino home" },
    { text: "Slots" },
    { text: "Live Casino" },
    { text: "New Releases" },
    { text: "Recommended" },
    { text: "BlackJack" },
    { text: "Roulette" },
    { text: "Baccarat" },
    { sport: "sports home" },
    { sport: "Live" },
    { sport: "Rules" },
    { promo: "VIP Club" },
    { promo: "Affiliate" },
    { promo: "Promotions" },
    { promo: "Lottery" },
    { promo: "Refer a friend" },
    { support: "Gamble" },
    { support: "AwareFairness" },
    { support: "FAQ" },
    { support: "Privacy Policy" },
    { support: "Terms Of Service" },
    { support: "AML" },
    { support: "Design Resources" },
    { support: "APP" },
    { about: "Work with us" },
    { about: "Business Contacts" },
    { about: "Help Desk" },
    { about: "Verify Representative" },
  ];
  const typography = {
    color: "#ffffff",
    textTransform: "upperCase",
    fontSize: {xs:"18px",sm:'18px',md:'20px',lg:"28px"},
    fontWeight: 700,
    lineHeight: "150%",
    marginBottom: "20px",
    marginTop: "20px",
    fontFamily: "Poppins",
  };
  const subnav = {
    fontSize: {xs:'12px',sm:"12px",md:'12px',lg:"16px"},
    fontWeight: 400,
    lineHeight: "28px",
    color: "#F2F2F2",
    textTransform: "uppercase",
  };
  const About = {
    color: "#ffffff",
    textTransform: "upperCase",
    fontSize:{xs:"18px",sm:'18px',md:'20px',lg:"28px"} ,
    fontWeight: 700,
    lineHeight: "150%",
    marginRight: "22px",
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: "Poppins",
  };
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
      <Box
        sx={{
          background: "rgba(43, 45, 80, 1)",
          marginLeft: "20px",
          // marginRight:'30px',
          display: "flex",
          flexDirection: "row",
          paddingLeft: "20px",
          justifyContent: "space-between",
          paddingBottom: "20px",
          // display:{xs:'none',sm:"none",md:"none",lg:"block"}
        }}
      >
        <Box>
          <Typography sx={typography}>Casino</Typography>
          <Box>
            {casino.map((text) => {
              return <Typography sx={subnav}>{text.text}</Typography>;
            })}
          </Box>
        </Box>
        {/* second */}
        <Box>
          <Typography sx={typography}>sports</Typography>
          <Box>
            {casino.map((Sport, i) => {
              return (
                <Typography key={`${i}`} sx={subnav}>
                  {Sport.sport}
                </Typography>
              );
            })}
          </Box>
        </Box>
        {/* third */}
        <Box>
          <Typography sx={typography}>Promo</Typography>
          <Box>
            {casino.map((promo, i) => {
              return (
                <Typography key={`${i}`} sx={subnav}>
                  {promo.promo}
                </Typography>
              );
            })}
          </Box>
        </Box>
        {/* fourth */}
        <Box>
          <Typography sx={typography}>Support / Legal </Typography>
          <Box>
            {casino.map((support, i) => {
              return (
                <Typography key={`${i}`} sx={subnav}>
                  {support.support}
                </Typography>
              );
            })}
          </Box>
        </Box>
        {/* five */}
        <Box sx={{ marginRight: "20px" }}>
          <Typography sx={About}>About us</Typography>
          <Box>
            {casino.map((about, i) => {
              return (
                <Typography key={`${i}`} sx={subnav}>
                  {about.about}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: 400,
          textAlign: "center",
          mt: "15px",
          paddingBottom: "20px",
        }}
      >
        ©2021 Sizzld. All rights reserved
      </Typography>
    </Box>
  );
}
