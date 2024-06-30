import {AppModule} from "./app.module";
import {NestFactory} from "@nestjs/core";

declare const module: any; // new !

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) { // new !
    module.hot.accept(); // new !
    module.hot.dispose(() => app.close()); // new !
  } // new !
}
bootstrap();