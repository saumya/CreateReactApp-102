//
import React, {Component} from 'react'
import { Container, Grid, Header, Segment, Button, Divider } from 'semantic-ui-react'

class LoginRegisterView extends Component {
    render(){
        return(
            <Container>
                <Header as='h1'>Login / Register</Header>
                <Segment padded>
                    <Button primary>Login</Button>
                    <Divider vertical>Or</Divider>
                    <Button secondary>Sign Up Now</Button>
                </Segment>
                
               
            </Container>
        )
    }
}

export default LoginRegisterView