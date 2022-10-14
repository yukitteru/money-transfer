import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 9001;
  app.enableCors({ origin: ["http://localhost:3000"], credentials: true });
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe());
  try {
    await app.listen(PORT, () => {
      console.log("#".repeat(65) + "\n");
      console.log(`RUNNING MONEY TRANSFER API ON PORT ${PORT}` + "\n"),
        console.log("#".repeat(65) + "\n");
    });
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
