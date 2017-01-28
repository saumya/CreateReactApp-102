//
import React, {Component} from 'react'
import { Container, Grid, Header, Segment, Button, Divider } from 'semantic-ui-react'

class LoginRegisterView extends Component {
    render(){
        return(
            <Container>
                <Header as='h1'>Welcome</Header>
                
                <Grid columns={2} relaxed>
                    <Grid.Column>
                        <Segment padded>
                        <Button primary>Login</Button>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment basic>
                        <Button secondary>Sign Up Now</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
               
            </Container>
        )
    }
}

export default LoginRegisterView