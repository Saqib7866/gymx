import React from "react";


// reactstrap components
import {
    Button, PopoverBody, UncontrolledPopover,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";


class Adminpanel extends React.Component {
  render() {
    return (
      <>
    <div>
        <div className="container" style={{marginTop:"30px"}}>
            <div className="container">
                <h1 style={{textAlign:"center"}}>Admin Panel</h1>

            </div>
                    
        <h2 style={{textAlign:"center",marginRight:"740px",marginTop:"50px"}}> Adding Product</h2>
                    <Row>
                        <Col md="6" className="container">
                        
                        <Form style={{textAlign:"right",marginTop:"50px"}} >
                       
                        <Row >      
                        <Col md="3">
                        <FormGroup >
                        <Input 
                             style={{width:"150px",float:"right"}}
                            id="exampleFormControlInput1"
                            placeholder="Item Name"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                    <Col md="3">
                        <FormGroup>
                        <Input  style={{width:"150px"}} className="" placeholder="Category" type="text" />
                        </FormGroup>
                    </Col>
                
                    </Row>
                    <Row>
                    <Col md="3">
                        <FormGroup>
                       
                            <Input  style={{width:"150px",float:"right"}} placeholder="Price" type="number" />
                       
                        </FormGroup>
                    </Col>
                    <Col md="3">
                        <FormGroup>
                        
                            <Input  style={{width:"150px"}} placeholder="Contact" type="number" />
                           
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col md="3" style={{marginLeft:"-50px"}}>
                    <textarea className="form-control" style={{width:'200px'}} placeholder="description"/>
                    
                    
                    </Col>
                    <Col md="3">
                    <Button style={{marginLeft:"90px",marginTop:"10px"}} color="warning" type="button">
                        +Image
                    </Button>   
                    </Col>
                    </Row>

                    <div style={{float:"left",marginTop:"10px",marginLeft:"-49px"}}>
                    
                       <Button color="success" outline type="button">
                        Upload
                         </Button>

                         </div>
                
                         </Form>
                        </Col>
                        <Col md="6" className="container">
                            <Row>
                            <Col md="12">
                    <Button style={{height:"100px",width:"300px",marginTop:"10px" ,float:"right"  }} color="danger" outline type="button">
            <strong>Deleting Product</strong></Button>
                    </Col>
                            </Row>
                            
                            <Row >
                            <Col md="12">
                     <Button style={{height:"100px",width:"300px",marginTop:"10px",float:"right"  }} color="danger" outline type="button">
                     <strong>Deleting Nutritionist</strong></Button>
                    </Col>
                            </Row>
                            
                            <Row>
                            <Col md="12">
                    <Button style={{height:"100px",width:"300px",marginTop:"10px",float:"right"   }} color="danger" outline type="button">
                             <strong>Deleting User</strong></Button>
                    </Col>
                            </Row>
                        </Col>
                    </Row>
                   
        </div>
    </div>
   </>
   )

    }
 }

export default Adminpanel;