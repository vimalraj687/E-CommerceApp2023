import express  from "express";
import {registerController, loginController,testController, forgotPasswordController, updateProfileController, getOrderController, getAllOrderController, orderStatusController} from '../controller/authController.js';
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js";
// router object
const router = express.Router()
 //routing
 //Register || Method POST
 router.post('/register', registerController)
 // Login || POST
 router.post('/login',loginController)

 // protected user route auth
 router.get("/user-auth", requireSignIn, (req, res)=>{
   res.status(200).send({ok:true});
});

 // protected admin route auth
 router.get("/admin-auth", requireSignIn, isAdmin , (req, res)=>{
  res.status(200).send({ok:true});
});


//forgot Password || POSt
router.post("/forget-password", forgotPasswordController)
 
// Update Profile
router.put('/profile', requireSignIn, updateProfileController)

// test routes
 router.get('/test', requireSignIn, isAdmin, testController)

// orders 
router.get('/orders', requireSignIn, getOrderController)

// orders 
router.get('/all-orders', requireSignIn,isAdmin, getAllOrderController)

// order status update
router.put('/order-status/:orderId', requireSignIn,isAdmin, orderStatusController)

 export default router
    