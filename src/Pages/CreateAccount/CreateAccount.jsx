import React from 'react';
import SplitPage from '../../Components/View/SpitView/SplitPage';
import Image from '../../Components/Image/Image';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import "./CreateAccount.css"


export default class CreateAccount extends React.Component {

    render() {
        return (
            <SplitPage>
                <div>
                    <Image src="https://source.unsplash.com/random/4000x4000/?book" alt="" />
                </div>
                <div className='CreateAccountForm'>
                    <Form>
                        <h1>CSP STORE</h1>
                        <Form.Group unstackable widths={16}>
                            <Form.Input label='First name' placeholder='First name' />
                            <Form.Input label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Input width={16} label='Address' placeholder='Address' />
                        <Form.Group widths={1}>
                            <Form.Input label='Username' placeholder='Username' />
                            <Form.Input type='tel' label='Phone' placeholder='123-456-7890' />
                        </Form.Group>
                        <Form.Input type='Email' width={16} label='Email' placeholder='Email' />
                        <Form.Group widths={1}>
                            <Form.Input type='Password' label='Password' placeholder='Password' />
                            <Form.Input type='Password' label='Conform password' placeholder='Conform password' />
                        </Form.Group>
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <div className='CreateAccountButtons'>
                            <Button type='submit' primary>Create Account</Button>
                            <Button type='submit' secondary>Login</Button>
                        </div>
                    </Form>

                </div>
            </SplitPage>

        );
    }
}