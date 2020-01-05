import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { Episode } from '@libs/db/models/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';


@Crud({
  model: Episode
})
@Controller('episodes')
@ApiUseTags('课时')
export class EpisodesController {
  constructor(@InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>) { }

  @Get('option')
  option() {
    return {
      title: '课时管理',
      column: [
        {
          prop: 'cover',
          label: '课时名称'
        }
      ]
    }
  }
}
