import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProvidersModule } from './providers/providers.module';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';
import { NeconfigModule } from 'neconfig';

@Module({
  imports: [
    UsersModule,
    ProvidersModule,
    ConfigModule,
    NeconfigModule.register({
      readers: [
        { name: 'env', file: path.resolve(process.cwd(), '.env') }
      ]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
