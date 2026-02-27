import { Controller } from '@nestjs/common';
import { MastersService } from './masters.service';

@Controller('masters')
export class MastersController {
  constructor(private readonly mastersService: MastersService) {}
}
