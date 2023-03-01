import React, {useState} from 'react';
import {View, TouchableOpacity,Text, ImageBackground} from 'react-native';
import {Agenda, AgendaEntry, DateData, AgendaSchedule} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import MenuButton from "../components/MenuButton";
const timeToString = (time : number) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule: React.FC = ({navigation} : any) => {
  interface intemap {
    [index: string]: {}[];
 }
 
  const st : intemap = {};
  const [it,setIt] = useState({})
  const  [items, setItems] = useState(st);
  const loadItems = (day : DateData) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = 2;
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Lesson ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
          
        }
      }
      
      const newItems = st ;
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
      setIt(newItems);
      
    }, 500);
  };

  const renderItem = (item : AgendaEntry) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height : 60
              }}>
              {/* <Typography>{item.name}</Typography> */}
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={{flex : 1}}>
      <MenuButton onPress={() => navigation.openDrawer()}/>
      <Agenda
        items={ it}
        calendarStyle = {{width : '100%', margin : 0}}
        style = {{ marginHorizontal : 10,elevation : 100, borderRadius : 10}}
        loadItemsForMonth={loadItems}
        selected={timeToString(Date.now())}
        renderItem={renderItem}
      />
    </ImageBackground>
  );
};

export default Schedule;