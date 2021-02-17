import React,{useState,useCallback} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CompanyInfo from './info/company';
import HomePage from './home/homepage'
import Missions from './missions/mission';
import MissionInfo from './missioninfo/missionInfo'



interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabClass: {
    display: 'flex',
    flexDirection: 'row',
    
  }
}));

const Main = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [id, setId] = useState(42);
  const handleClick = useCallback(newId => {
    setId(newId);
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="HOME" {...a11yProps(0)} />
          <Tab label="COMPANY" {...a11yProps(1)} />
          <Tab label="MISSIONS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomePage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompanyInfo/>
      </TabPanel>
      <TabPanel  value={value} index={2}>
        <div className={classes.tabClass}>
        <Missions handleClick={handleClick}/>
        <MissionInfo myid={id}/>
        </div>
      </TabPanel>
    </div>
  );
}

export default Main;
