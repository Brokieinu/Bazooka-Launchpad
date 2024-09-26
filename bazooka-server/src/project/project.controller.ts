// project.controller.ts

import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { ApiTags } from '@nestjs/swagger';
import { ProjectStatus, Projects } from 'src/entities/projects.entity';
import { SetResponseCode } from 'src/infrastructure';
import { ProjectDto } from 'src/request-dto/project.dto';
import { PlatformAdminAuthGaurd } from 'src/infrastructure/guards/brokie-admin-auth.guard';

export type TProjectFromDataColumn = {
  name: string;
  type: 'string' | 'number';
};

@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(PlatformAdminAuthGaurd)
  @SetResponseCode(HttpStatus.OK)
  @Post('create')
  async createProject(@Body() body: ProjectDto) {
    const response = await this.projectService.createProjectService(body);
    return response;
  }

  @Get('all')
  async getProjects(@Query('status') status: ProjectStatus) {
    return await this.projectService.getProjectsService(status);
  }

  @Get(':id')
  async getProject(@Param('id') id: string) {
    console.log(id)
    return await this.projectService.getProjectService(id);
  }

  @Put('update/:id')
  // update project will also be used for delete project. In this case, body should be {is_deleted: true}
  async updateProject(
    @Param('id') id: string,
    @Body() body: Partial<ProjectDto>,
  ) {
    return await this.projectService.updateProjectService(id, body);
  }
}
