import * as React from 'react'
import {Component} from 'react';
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyGroupsData} from "../../../Fixtures/DummyData";
import {connect} from "react-redux";
import ChatsListItem from '../../../Components/LaunchScreen/ChatsTab/ChatsListItem';
import {ColorScheme} from "../../../Themes/Colors";

interface GroupsScreenProps {
  isDarkMode?:boolean,
  colorScheme?:ColorScheme
}

class GroupsScreen extends Component<GroupsScreenProps> {
  constructor(props){
    super (props);
    this.renderListItems = this.renderListItems.bind(this);
  }
  render() {
    const colorScheme = this.props.colorScheme;
    return (
      <Container
        style={{backgroundColor:colorScheme.containersBackground}}
      >
        <Content>
          <FlatList
            data={dummyGroupsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => this.renderListItems(item,colorScheme)}
          />
        </Content>
      </Container>
    );
  }

  renderListItems = (item,ColorScheme) => {
    return (
      <ChatsListItem
        colorScheme={ColorScheme}
        avatar={item.avatar}
        name={item.name}
        note={item.note}
        time={item.time}
      //  onPress={()=>{this.props.navigation.navigate( 'ChatScreen' );}}
      />
    )
  }
}

const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  colorScheme: state.appSettings.colorScheme
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, /**mapDispatchToProps*/ null)(GroupsScreen);