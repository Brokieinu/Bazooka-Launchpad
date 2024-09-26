// project.service.ts

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectStatus, Projects } from 'src/entities/projects.entity';
import { ProjectDto } from 'src/request-dto/project.dto';
import { Not, Repository } from 'typeorm';

export type TGetProjects = {
  data: Projects[];
  meta: any;
};

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Projects)
    private readonly projectsRepository: Repository<Projects>,
  ) {}

  //
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  async createProjectService(data: ProjectDto): Promise<Projects> {
    try {
      const start_time_seconds = parseInt(data['start_time']);
      const end_time_seconds =  parseInt(data['end_time']);

      const start_time_milliseconds = start_time_seconds * 1000;
      const end_time_milliseconds = end_time_seconds * 1000;

      const start_time_date = new Date(start_time_milliseconds);
      const end_time_date = new Date(end_time_milliseconds);

      const parseStartTime = this.formatDate(start_time_date);
      const parseEndTime = this.formatDate(end_time_date);

      data['start_time'] = parseStartTime;
      data['end_time'] = parseEndTime;


      return await this.projectsRepository.save(data);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error while creating project with google form',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getProjectsService(status: ProjectStatus): Promise<TGetProjects> {
    try {
      const data = await this.projectsRepository.find({
        where: {
          is_deleted: false,
          is_approved: true,
          status: status,
        },
      });

      return {
        data: data,
        meta: null,
      };
    } catch (error) {
      throw new HttpException(
        'Error while retrieving all projects',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getProjectService(id: string): Promise<Projects> {
    try {
      const data = await this.projectsRepository.findOne({
        where: {
          uuid: id,
          is_deleted: false,
          is_approved: true,
        },
      });

      return data;
    } catch (error) {
      throw new HttpException(
        'Error while retrieving the project',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateProjectService(
    id: string,
    data: Partial<Projects>,
  ): Promise<Projects> {
    try {
      const targetProject = await this.projectsRepository.findOne({
        where: {
          uuid: id,
        },
      });
      const modifiableProject = this.projectsRepository.merge(
        targetProject,
        data,
      );
      const result = await this.projectsRepository.save(modifiableProject);
      return result;
    } catch (error) {
      throw new HttpException(
        'Error while updating the project',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
