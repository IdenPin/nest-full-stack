import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/models/course.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Course
})
@Controller('courses')
@ApiUseTags('课程')
export class CoursesController {
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
  ) { }

  @Get('option')
  option() {
    return {
      title: '课程管理',
      index: true,
      column: [
        {
          prop: 'name',
          label: '课程名称',
          sortable: true,
          regex: true,
          search: true
        },
        {
          prop: 'cover',
          label: '课程封面图',
          type: 'upload',
          row: true,
          width: 100,
          listType: 'picture-img',
          action: 'upload',
        },
        {
          prop: 'createdAt',
          label: '创建时间',
          type: "date",
          editDisplay: false,
          addDisplay: false,
          format: "yyyy-MM-dd hh:mm:ss",
          valueFormat: "yyyy-MM-dd hh:mm:ss"
        }
      ]
    }
  }
}
