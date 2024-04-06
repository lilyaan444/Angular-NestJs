"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
const Config = require("../config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({ logger: true }));
    await app.listen(1000);
    common_1.Logger.log(`Application served at http://localhost:3000 ${console.log(Config)}`, 'bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map