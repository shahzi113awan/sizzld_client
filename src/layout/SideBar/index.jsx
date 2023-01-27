import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  styled,
  Typography,
} from '@mui/material';
// import SideBar from '../../layout/SideBar/SideBar'
import Card from '../../layout/SideBar/Card';
import DropDowns from '../../layout/SideBar/DropDowns';
import spinImage from '../../assets/Frame.svg';
import piggy from '../../assets/piggy.svg';
import arrowplane from '../../assets/arrowplane.svg';
import group from '../../assets/group.svg';
import gold from '../../assets/gold.svg';
import icon from '../../assets/coins.svg';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {
  firstChild,
  flex,
  font,
  secondChild,
  style,
  vip,
} from './Sidebarstyle';
import { SidebarData } from './SideBardata';
import { height } from '@mui/system';

export default function SideBar() {
  //   const styles = {
  //     sidebar: {
  //         overflow: 'auto',
  //         '&::-webkit-scrollbar': {
  //             width: '0.4em',
  //             backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //         },
  //         '&::-webkit-scrollbar-thumb': {
  //           backgroundColor: '#000000',
  //         },
  //     },
  // };
  const HiddenScroll = styled(Box)`
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  `;
  return (
    <div style={{ position: 'relative' }}>
      <HiddenScroll sx={style} className='child'>
        <Box sx={firstChild}>
          <Box>
            <Box sx={flex}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px',
                }}
              >
                <Typography sx={vip}>My VIP </Typography>
                <Typography sx={{ color: '#ffffff', marginLeft: '5px' }}>
                  Perks{' '}
                </Typography>
              </Box>
              <Typography sx={font}>view all</Typography>
            </Box>
          </Box>

          {/* <Card/> */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
              <Card
                text={'task'}
                img={spinImage}
                background={'#4DF3E2'}
                unlocked={'unlocked'}
              />
              <Card
                text={'spin'}
                img={spinImage}
                background={'#AD63F5'}
                unlocked={'unlocked'}
                marginRight={'10px'}
              />
            </Box>
            <Box sx={{ display: 'flex', mt: '10px' }}>
              <Card
                text={'RAKEBACK'}
                img={piggy}
                background={
                  'linear-gradient(282.29deg, #F8D82F 0%, rgba(20, 22, 61, 0) 100%)'
                }
                unlocked={'vip 14'}
              />
              <Card
                text={'rECHARGE'}
                img={arrowplane}
                background={'#03FB75'}
                unlocked={'vip 22'}
                marginRight={'10px'}
              />
            </Box>
            <Box sx={{ display: 'flex', mt: '10px' }}>
              <Card
                text={'bONUSCODE'}
                img={group}
                background={
                  'linear-gradient(282.29deg, #F8D82F 0%, rgba(20, 22, 61, 0) 100%)'
                }
                unlocked={'vip 22'}
              />
              <Card
                text={'bONUS'}
                img={gold}
                background={
                  'linear-gradient(282.29deg, #F8D82F 0%, rgba(20, 22, 61, 0) 100%)'
                }
                unlocked={'vip 22'}
                marginRight={'10px'}
              />
            </Box>
          </Box>
        </Box>
        {/* second div */}
        <Box sx={secondChild}>
          <img
            src={icon}
            alt=''
            style={{ maxWidth: '100%', marginLeft: '15px' }}
          />
          <Typography
            sx={{
              color: '#FBB315',
              fontWeight: 900,
              textTransform: 'capitalize',
            }}
          >
            Refer and Earn
          </Typography>
        </Box>
        {/* third child */}
        <Box
          sx={{
            background: 'rgba(95, 95, 111, 0.6)',
            height: 'auto',
            borderRadius: '0px 8px 0px 0px',
            height:'1500px'
          }}
        >
          {SidebarData.map((item, index) => {
            return (
              <>
                <DropDowns item={item} key={`index${index}`}></DropDowns>
              </>
            );
          })}
          <ButtonGroup
            sx={{ borderRadius: '8px', border: '1px solid rgba(95, 95, 111, 0.6)',mt:"30px" }}
          >
            <Button
              sx={{
                background: ' #01022F',
                borderRadius: '8px',
                width: '123px',
                height: '52px',
                color: '#ffffff',
              }}
            >
              <Avatar
                sx={{
                  background: '#ffffff',
                  marginRight: '5px',
                  width: '38%',
                  height: '35px',
                }}
              >
                <DarkModeOutlinedIcon sx={{ color: 'black' }} />{' '}
              </Avatar>{' '}
              Dark
            </Button>
            <Button
              sx={{
                // background: '#2B2D50',
                borderRadius: '8px',
                width: '123px',
                height: '52px',
                color: '#ffffff',
                border: '1px solid rgba(95, 95, 111, 0.6)',
              }}
            >
              {' '}
            <LightModeOutlinedIcon sx={{color:'#ffffff',marginRight:"10px"}}/> Light
            </Button>
          </ButtonGroup>
        </Box>
        {/* button */}
      </HiddenScroll>
    </div>
  );
}