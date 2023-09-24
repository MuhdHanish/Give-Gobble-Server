"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const userModel_1 = require("../../../../../framework/database/models/userModel");
const userRepository_1 = require("../../../../../framework/repository/userRepository");
const signupStepOne_1 = require("../../../../../app/usecases/user/userAuthentication/userSignup/signupStepOne");
const userRepository = (0, userRepository_1.userRepositoryEmpl)(userModel_1.userModel);
const stepOneController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const { email, username } = req.body;
        const { message, uId } = yield (0, signupStepOne_1.signupStepOne)(userRepository)(username, email);
        if (uId) {
            return res.status(200).json({ uId });
        }
        else {
            return res.status(409).json({ message });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.default = stepOneController;
