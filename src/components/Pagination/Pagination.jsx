import { IoIosArrowRoundBack, IoIosMore, IoIosArrowRoundForward, } from "react-icons/io";
import {Container, List, Item, Button, CurrentPage, Dots } from "components/Pagination/Pagination.styled";


export const Pagination = () => {
    return (
        <Container>
            <List>
                <Item>
                    <Button>
                       <IoIosArrowRoundBack size={16}/> 
                    </Button>
                </Item>
            
                <Item>
                    <Button>
                        1
                    </Button>
                </Item>
            
                <Item>
                    <Dots>
                        <IoIosMore size={10}/>
                    </Dots>
                </Item>
            
                <Item>
                    <Button>
                        -2
                    </Button>
                </Item>
            
                <Item>
                    <Button>
                        -1
                    </Button>
                </Item>
        
                <Item>
                    <CurrentPage>
                        0
                    </CurrentPage>
                </Item>
            
                <Item>
                    <Button>
                        +1
                    </Button>
                </Item>
            
                <Item>
                    <Button>
                        +2
                    </Button>
                </Item>
            
                <Item>
                    <Dots>
                         <IoIosMore size={10}/>
                    </Dots>
                </Item>
            
                <Item>
                    <Button>
                        1000
                    </Button>
                </Item>
            
                <Item>
                    <Button>
                         <IoIosArrowRoundForward size={16}/>
                     </Button>
                </Item>
            </List>
        </Container>
    );    
};