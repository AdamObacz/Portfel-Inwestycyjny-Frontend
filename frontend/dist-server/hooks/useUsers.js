"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUsers = void 0;
const react_query_1 = require("@tanstack/react-query");
const axios_1 = __importDefault(require("axios"));
const useUsers = () => {
    return (0, react_query_1.useQuery)({
        queryKey: ["users"],
        queryFn: async () => {
            const { data } = await axios_1.default.get("http://localhost:4000/api/users");
            return data;
        },
    });
};
exports.useUsers = useUsers;
