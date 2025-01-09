import React from "react";
import { Button, Container, Dropdown, DropdownItem, DropdownMenu, Menu } from "semantic-ui-react";

interface Props{
    openForm: () => void
}

export default function NavBar({openForm}: Props) {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/> Reactivities
                </Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create activity' />
                </Menu.Item>
                <Menu.Item footer>
                    <Dropdown text="abc">
                        <DropdownMenu>
                            <DropdownItem text='DELETE ALL' />
                            <DropdownItem text='abc' />
                            <DropdownItem text='abc' />
                            <DropdownItem text='abc' />
                            <DropdownItem text='abc' />
                        </DropdownMenu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
}