import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['홈', '정보', '연락처'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          내용이 들어갈 자리를 대신하는 표본 글이에요. 글이 길 때 줄이 어떻게 나뉘고 여백이 어떻게 잡히는지 가늠하려고 넣어 뒀어요. 문단이 길어지면 읽는 흐름이 어디서 끊기는지, 그릇의 높이가 얼마나 늘어나는지도 함께 볼 수 있어요. 실제 글이 들어갈 자리이니 여기 적힌 내용 자체에는 뜻이 없어요. 화면을 보며 길이와 짜임만 살펴 주세요. 같은 길이의 글이 여러 번 되풀이될 때 화면이 어떻게 보이는지도 이 표본으로 확인할 수 있어요. 글자 크기와 줄 간격이 바뀌면 이 문단이 차지하는 자리도 함께 달라지니, 설정을 바꿔 가며 견주어 보세요. 내용이 들어갈 자리를 대신하는 표본 글이에요. 글이 길 때 줄이 어떻게 나뉘고 여백이 어떻게 잡히는지 가늠하려고 넣어 뒀어요. 문단이 길어지면 읽는 흐름이 어디서 끊기는지, 그릇의 높이가 얼마나 늘어나는지도 함께 볼 수 있어요. 실제 글이 들어갈 자리이니 여기 적힌 내용 자체에는 뜻이 없어요. 화면을 보며 길이와 짜임만 살펴 주세요. 같은 길이의 글이 여러 번 되풀이될 때 화면이 어떻게 보이는지도 이 표본으로 확인할 수 있어요. 글자 크기와 줄 간격이 바뀌면 이 문단이 차지하는 자리도 함께 달라지니, 설정을 바꿔 가며 견주어 보세요.
        </Typography>
      </Box>
    </Box>
  );
}
