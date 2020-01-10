"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const providers_service_1 = require("./providers.service");
const providers_controller_1 = require("./providers.controller");
const mongoose_1 = require("@nestjs/mongoose");
const provider_schema_1 = require("./schemas/provider.schema");
const passport_1 = require("@nestjs/passport");
let ProvidersModule = class ProvidersModule {
};
ProvidersModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Provider', schema: provider_schema_1.ProviderSchema }]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt', session: false })
        ],
        providers: [providers_service_1.ProvidersService],
        controllers: [providers_controller_1.ProvidersController],
        exports: [providers_service_1.ProvidersService]
    })
], ProvidersModule);
exports.ProvidersModule = ProvidersModule;
//# sourceMappingURL=providers.module.js.map