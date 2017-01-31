//
import React, {Component} from 'react'
import { Container, Grid, Header, Segment, Button, Divider, Input } from 'semantic-ui-react'

class RegisterFormView extends Component {
    render(){
        return(
            <Container>
                <Header as='h1'>Register</Header>
                
                <Grid columns={1} relaxed>
                    <Grid.Column>
                        <Segment padded>
                            <Input fluid placeholder='User Name' />
                                <Divider hidden />
                            <Input fluid placeholder='EMail' />
                                <Divider hidden />
                            <Input fluid placeholder='Password' />
                                <Divider hidden />
                            <Button primary fluid>Register</Button>
                                <Divider hidden />
                            <Button onClick={this.props.onCancelView}>Cancel</Button>
                        </Segment>
                    </Grid.Column>

                    
                </Grid>
               
            </Container>
        )
    }
}

export default RegisterFormView