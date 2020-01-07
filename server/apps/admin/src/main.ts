import { NestFactory, NestApplication } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors()
  app.useStaticAssets('uploads', {
    prefix: '/uploads'
  })
  const options = new DocumentBuilder()
    .setTitle('Nest Full Stack - 后台管理系统 API')
    .setDescription('提供后台管理界面调用的服务端 API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3009)
  console.log(`http://www.localhost:3009/api-docs`)
}
bootstrap()
