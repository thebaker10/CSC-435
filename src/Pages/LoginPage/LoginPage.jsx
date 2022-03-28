import React from 'react';
import SplitPage from '../../Components/View/SpitView/SplitPage';
import Image from '../../Components/Image/Image';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import "./LoginPage.css"


export default class LoginPage extends React.Component {

    render() {
        return (
            <SplitPage>
                <div>
                    <Image src="https://source.unsplash.com/random/4000x4000/?book" alt="" />
                </div>
                <div className='loginPageForm'>
                    <Form>
                        <h1>CSP STORE</h1>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='Password' />
                        </Form.Field>
                        <div className='loginPageButtons'>
                            <Button type='submit' primary>Login</Button>
                            <Button type='submit' secondary>Sign Up</Button>
                        </div>
                        
                    </Form>
                </div>
            </SplitPage>

        );
    }
}