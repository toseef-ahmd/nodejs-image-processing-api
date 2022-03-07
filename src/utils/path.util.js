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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExists = exports.allFiles = exports.createThumbnail = exports.fileDirs = exports.updateFiles = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const updateFiles = (fileType) => {
    let fileArr;
    const { images, thumbnails } = (0, exports.fileDirs)();
    fileArr = fs_1.default.readdirSync(fileType === 'images' ? images : fileType === 'thumbnails' ? thumbnails : '');
    return fileArr;
};
exports.updateFiles = updateFiles;
const fileDirs = () => {
    return {
        images: path_1.default.resolve(__dirname, '../static/images'),
        thumbnails: path_1.default.resolve(__dirname, '../static/thumbnails'),
    };
};
exports.fileDirs = fileDirs;
const createThumbnail = (filename, width, height) => {
    const [file, ext] = filename.split('.');
    const thumnailPath = (`${file}_${width}_${height}.${ext}`);
    return thumnailPath;
};
exports.createThumbnail = createThumbnail;
const allFiles = (imgFiles) => {
    const newFiles = [];
    imgFiles.forEach((file) => {
        if (!file.startsWith('.')) {
            newFiles.push(file);
        }
    });
    return newFiles;
};
exports.allFiles = allFiles;
const fileExists = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fs_1.default.existsSync(filename);
    return res;
});
exports.fileExists = fileExists;
