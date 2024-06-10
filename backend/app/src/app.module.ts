import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './module/User/user.module';
import { ENTITIES } from './entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationModule } from './module/Authentication/authentication.module';
import { UserCodeValidationModule } from './module/User/userCodeValidation.module';
import { ScheduleModule } from '@nestjs/schedule';

const configService = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: configService.get('SECRET_JWT'),
      signOptions: { expiresIn: '3600s' },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get('DATABASE_TYPE') as any,
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: ENTITIES,
        autoLoadEntities: true,
        synchronize: true,
      })
    }),
    UsersModule,
    AuthenticationModule,
    UserCodeValidationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
