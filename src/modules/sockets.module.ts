import { Module } from '@nestjs/common';
import { SocketsGateway } from '../sockets/sockets.gateway';

@Module({
  providers: [SocketsGateway],
})
export class SocketsModule {}
