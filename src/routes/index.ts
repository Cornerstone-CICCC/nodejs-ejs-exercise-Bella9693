import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("home", { title: "Home" });
});

router.get("/about", (req: Request, res: Response) => {
  res.render("about", { title: "About" });
});

router.get("/contact", (req: Request, res: Response) => {
  res.render("contact", { title: "Contact" });
});

export default router;
