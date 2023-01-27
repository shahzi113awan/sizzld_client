import { Box, Typography, Stack } from '@mui/material';

// import { mainBox, } from "./Cardstyle"
import { secondflex, typography, flex, unlock, mainBox } from './Sidebarstyle';

const Card = ({ text, img, background, vip14, unlocked, marginRight }) => {
  return (
    <Stack sx={{ ...mainBox, background, marginRight }}>
      <Box sx={secondflex}>
        <img src={img}></img>
        <Box>
          <Typography sx={typography}> {text}</Typography>
          <Typography sx={{ ...unlock, vip14 }}> {unlocked}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Card;
