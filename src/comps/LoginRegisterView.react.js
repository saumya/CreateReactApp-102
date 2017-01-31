//
import React, {Component} from 'react'
import { Container, Grid, Header, Segment, Button, Divider, Input } from 'semantic-ui-react'

class LoginRegisterView extends Component {
    render(){
        return(
            <Container>
                <Header as='h1'>Welcome</Header>
                
                <Grid columns={2} relaxed>
                    <Grid.Column>
                        <Segment padded>
                            <Input fluid placeholder='User Name' />
                                <Divider hidden />
                            <Input fluid placeholder='Password' />
                                <Divider hidden />
                            <Button primary fluid>Login</Button>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment basic>
                            <Container fluid>
                                <Header as='h3'>Not yet a menber?</Header>
                                <p>
                                    There are benifits of being a member. All that is needed is a Facebook or Google account. Well, if you wish, create an account with us.
                                </p>
                            </Container>
                            <Divider hidden />
                            <Button secondary onClick={ this.props.onSignUp }>Sign Up Now</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
               
            </Container>
        )
    }
}

export default LoginRegisterView