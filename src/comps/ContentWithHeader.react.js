//
import React, {Component} from 'react'
import { Container, Header } from 'semantic-ui-react'

class ContentWithHeader extends Component {
    render(){
        return(
            <Container>
                <Header as='h1'>{this.props.headerText}</Header>
                <p> {this.props.contentText} </p>
            </Container>
        )
    }
}

export default ContentWithHeader