import React, { PureComponent } from 'react'
import { Button, Form } from 'react-bootstrap';
import './App.css'

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''

        };
    }
    handleClick = () => {
        this.setState({ 
            email: '' ,
            password: '',
            isChecked:''

        })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }
    handleCheck = (e) => {
        this.setState({isChecked:e.target.checked})
    }
    render() {
        return (
            <div className='app center'>
                <Form className='p-5 bg-secondary form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} value={this.state.email} name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleChange} value={this.state.password} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={this.handleCheck} type="checkbox" label="I have read and agree to the Privacy Policy" />
                    </Form.Group>
                    {this.state.isChecked ? <Button onClick={this.handleClick} variant="primary" type="submit">Submit</Button> : <fieldset disabled><Button type="submit">Submit</Button></fieldset>}
                    {/* <Button onClick={this.handleClick} variant="primary" type="submit">
                        Submit
                    </Button> */}
                </Form>
                {/* <button onClick={this.handleClick}>Change</button>
                <input type="text" name='email' onChange={this.handleChange} value={this.state.email} />
                {this.state.email} */}
            </div>
        )
    }
}