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
exports.signupStepTwo = void 0;
const signupStepTwo = (userRepository) => (username, email, password, location) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = { username, email, password, location };
    const user = yield userRepository.createUser(newUser);
    if (user) {
        return user;
    }
    else {
        return null;
    }
});
exports.signupStepTwo = signupStepTwo;
