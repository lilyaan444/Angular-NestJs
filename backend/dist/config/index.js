"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const yaml = require("js-yaml");
const fichierYAML = fs.readFileSync('./config/default.yml', 'utf8');
const config = yaml.load(fichierYAML);
exports.default = config;
//# sourceMappingURL=index.js.map