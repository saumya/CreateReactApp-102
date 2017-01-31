//
import React, { Component } from 'react';
import { Container, Header, Segment, Divider, Sidebar, Button, Menu, Image, Icon } from 'semantic-ui-react'

import ContentWithHeader from './ContentWithHeader.react'
import LoginRegisterView from './LoginRegisterView.react'
import RegisterFormView from './RegisterFormView.react'

class AppHome extends Component {
    
    state = { visible: false, viewType:"HOME" }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    onSignUpView = () => {
        console.log("AppHome : onSignUp : ")
        console.log(this.state)
        this.setState({ viewType:"REGISTER" })
    }
    onCancelSignUpView = () => {
        console.log("AppHome : onCancelSignUpView : ")
        this.setState({ viewType:"HOME" })
    }

    render(){
        
        const { visible } = this.state
        const { viewType } = this.state

        const contentString = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.'

        var viewToShow = null;
        if(viewType==="HOME"){
            viewToShow = <LoginRegisterView onSignUp={this.onSignUpView} />
        }else{
            viewToShow = <RegisterFormView onCancelView={this.onCancelSignUpView} />
        }
        
        return (
            <div>
                
                <div>
                    <Button onClick={this.toggleVisibility}>Menu</Button>
                    <Button>Home</Button>
                    <Button>Contact</Button>
                </div>

                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
                    <Menu.Item name='home'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad' />
                        Games
                    </Menu.Item>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        
                        <Segment basic>
                            
                            <ContentWithHeader headerText='Site Title' contentText={contentString} />
                            
                            { viewToShow }
                            
                            <ContentWithHeader headerText='Introduction' contentText={contentString} />
                            <Segment>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                            <Divider section />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                            </Segment>
                            <ContentWithHeader headerText='Footer Notes' contentText={contentString} />
                            
                        </Segment>

                    </Sidebar.Pusher>
                </Sidebar.Pushable>

            </div>
            
        )
    }
}

export default AppHome