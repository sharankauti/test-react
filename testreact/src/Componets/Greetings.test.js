import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greetings from './Greetings'


describe('Greetings Componet',()=>{
    test('render "hello stokesy"', () => {
        // here we use 3As to perform a test
    
        // Arrange
        render(<Greetings/>)
    
        // Act 
        // here there is no act actions 
    
        // Assert
        const helloText = screen.getByText('Hello stokesy!!');
        expect(helloText).toBeInTheDocument();
    
    })
    test('render "first ever greeting" text if button not clicked', ()=> { 
        render(<Greetings/>)
        const outputText = screen.getByText('first ever greeting',{exact:false});
        expect(outputText).toBeInTheDocument();
     })

     test('render "Changed!!!" text if button was clicked', ()=> { 
        render(<Greetings/>)
        
        // Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        // Assert
        const outputTextByClick = screen.getByText('Changed!!!',{exact:true});
        expect(outputTextByClick).toBeInTheDocument();
      })

      test('does not render "first ever greeting" text if button was clicked',()=>{
        render(<Greetings/>)
        
        // Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        // Assert
        const outputText = screen.queryByText('first ever greeting',{exact:true});
        expect(outputText).toBeNull();
      })
})

