import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("ایمیل موجود نیست."),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("پسورد باید بین 4 تا ۲۰ کاراکتر باشد."),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new Error("ایمیل یا پسورد موجود نیست. دوباره تلاش کنید.");
    }

    const { email, password } = req.body;
    res.send({});
  }
);

export { router as signupRouter };
