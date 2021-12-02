// /*!

// =========================================================
// * Argon Design System React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-design-system-react
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// // nodejs library that concatenates classes
// import classnames from "classnames";
// // reactstrap components
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Modal,
//   Row,
//   Col
// } from "reactstrap";

// function ProfileModifiy() {
//     const state = {};

//     function toggleModal(state) {
//         setState({
//             [state]: !state[state]
//           });

//     }

   


//     return (
//         <>
//               <Button
//                 block
//                 color="default"
//                 type="button"
//                 onClick={toggleModal("formModal")}
//               >
//                 내정보 수정
//               </Button>
//               <Modal
//                 className="modal-dialog-centered"
//                 size="sm"
//                 isOpen={this.state.formModal}
//                 toggle={() => this.toggleModal("formModal")}
//               >
//                 <div className="modal-body p-0">
//                   <Card className="bg-secondary shadow border-0">
//                   <CardBody className="px-lg-5 py-lg-5">
//                       <div className="text-center text-muted mb-4">
//                         <small> Our Home Training </small>
//                       </div>
//                       <Form role="form">
//                         <FormGroup className="mb-3">
//                           <InputGroup className="input-group-alternative">
//                             <InputGroupAddon addonType="prepend">
//                               <InputGroupText>
//                                 <i className="ni ni-email-83" />
//                               </InputGroupText>
//                             </InputGroupAddon>
//                             <Input placeholder="Username" type="username" onChange={onUsernameChange} />
//                           </InputGroup>
//                         </FormGroup>
//                         <FormGroup>
//                           <InputGroup className="input-group-alternative">
//                             <InputGroupAddon addonType="prepend">
//                               <InputGroupText>
//                                 <i className="ni ni-lock-circle-open" />
//                               </InputGroupText>
//                             </InputGroupAddon>
//                             <Input
//                               placeholder="Password"
//                               type="password"
//                               autoComplete="off"
//                               onChange={onPasswordChange}
//                             />
//                           </InputGroup>
//                         </FormGroup>
//                         <div className="custom-control custom-control-alternative custom-checkbox">
//                           <input
//                             className="custom-control-input"
//                             id=" customCheckLogin"
//                             type="checkbox"
//                           />
//                           <label
//                             className="custom-control-label"
//                             htmlFor=" customCheckLogin"
//                           >
//                             <span>자동저장</span>
//                           </label>
//                         </div>
//                         <div className="text-center">
//                           <Button
//                             className="my-4"
//                             color="primary"
//                             type="button"
//                             onClick = {doLogin}
//                           >
//                             Sign in
//                           </Button>
//                         </div>
//                       </Form>
//                     </CardBody>
//                   </Card>
//                 </div>
//               </Modal>
//         </>
//       );
// }



// export default ProfileModifiy;
