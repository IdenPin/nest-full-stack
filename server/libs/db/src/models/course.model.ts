import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'


@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})

export class Course {
  @ApiModelProperty({ description: '课程名称', example: '非暴力沟通' })
  @prop()
  name: string

  @ApiModelProperty({ description: '封面图', example: '封面图片 url' })
  @prop()
  cover: string

  @arrayProp({ itemsRef: 'Episode' })
  episodes: Ref<Episode>[]
}