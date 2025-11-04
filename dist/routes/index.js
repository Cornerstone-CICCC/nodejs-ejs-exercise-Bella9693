"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});
router.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});
router.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});
exports.default = router;
