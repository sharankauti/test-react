import { render, screen } from "@testing-library/react"

import Posts from "./Posts"


describe("Posts Componet",()=>{
    test('render Post if request was successfull', async()=> {

        window.fetch = jest.fn().mockImplementation(() => Promise.resolve());
        window.fetch.mockResolvedValueOnce({
            json: async ()=>[{id:'p1',title:'first post'}],
        });


        render(<Posts/>)

        // Assets
        const listElement = await screen.findAllByRole('listitem');
        expect(listElement).not.toHaveLength(0)
    })
})