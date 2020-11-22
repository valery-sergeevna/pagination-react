import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import './TabsInfo.css';

const TabsInfo = ({ tabsContent }) => {

    function TabPanel(props) {
        const { children, value, index } = props;
        return (
            <div>
                {value === index && (
                    <h1>{children}</h1>
                )
                }
            </div>
        )
    };
    const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const theme = useTheme();
    const tabsArray = tabsContent.map((tab =>
        <div className="tabContent">
            <img src={tab.imgUrl} alt="" />
            <h2>{tab.name}</h2>
            <p>{tab.decs}</p>
        </div>));
    return (
        <div className='tabs'>
            <AppBar position='static' color="secondary">
                <Tabs value={value} onChange={handleTabs}
                    centered variant="fullWidth"
                    aria-label="full width tabs example"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "black"
                        }
                    }}
                >
                    <Tab label="item 1" />
                    <Tab label="item 2" />
                    <Tab label="item 3" />
                    <Tab label="item 4" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>{tabsArray[0]}</TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>{tabsArray[1]}</TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>{tabsArray[2]}</TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>{tabsArray[1]}</TabPanel>
            </SwipeableViews>
            <Link className='btn' to='/'>Home</Link>
        </div>
    );
};

export default TabsInfo;