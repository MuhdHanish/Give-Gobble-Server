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
const restaurantModel_1 = require("../../../../framework/database/models/restaurantModel");
const restaurantRepository_1 = require("../../../../framework/repository/restaurantRepository");
const forgotRestaurantPassword_1 = require("../../../../app/usecases/restaurant/restaurantAuthentication/forgotRestaurantPassword");
const restaurantRepository = (0, restaurantRepository_1.restaurantRespositoryEmpl)(restaurantModel_1.restaurantModel);
const forgotRestaurantPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const { identifier } = req.body;
        const uId = yield (0, forgotRestaurantPassword_1.forgotRestaurantPassword)(restaurantRepository)(identifier);
        if (uId) {
            return res.status(200).json({ uId });
        }
        else {
            return res.status(401).json({ message: "No active account found with the given credentials" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.default = forgotRestaurantPasswordController;
