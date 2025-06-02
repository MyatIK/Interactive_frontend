import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import {fireEvent, render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Login', ()=>{
    it('renders the Login component',async()=>{
        render(
            <BrowserRouter>
                <Login/>
            </BrowserRouter>
            
        );
        const usernameInput=screen.getByLabelText(/username/i);
        const passwordInput=screen.getByLabelText(/password/i);
        const loginButton = screen.getByTestId('loginButton');

        await userEvent.type(usernameInput, 'Jack');
        await userEvent.type(passwordInput, '123456');
        
        expect(usernameInput.toBe('Jack'));
        expect(passwordInput.toBe('123456'));
       
        
    })
    it('update input values when typing', async()=>{
        const mockSubmit=vi.fn()
        
        render(
            <BrowserRouter>
                <Login onSubmit={mockSubmit}/>
            </BrowserRouter>
        );

        const usernameInput=screen.getByLabelText(/username/i);
        const passwordInput=screen.getByLabelText(/password/i);
        const loginButton = screen.getByTestId('loginButton');

        await userEvent.type(usernameInput, 'Jack');
        await userEvent.type(passwordInput, '123456');
        await userEvent.click(loginButton);
        await vi.waitFor(() => {
            expect(mockSubmit).toHaveBeenCalledTimes(1);
      
      });
    })
   it('should display appropriate error message for invalid inputs',()=>{

   })

   it('shows an error message when login credentials are not correct', ()=>{
    
   })
})

