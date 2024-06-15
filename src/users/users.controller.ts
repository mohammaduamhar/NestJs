import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

   

    @Get()
    findByRole(@Query('role') role?: 'intern' | 'Admin'){
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id : string) {
        return {id} ;
    }

    @Post()
    create(@Body() user : {}) {   
        return user;
    }

    @Patch(':id')
    update(@Param('id') id : string, @Body() updateUser : {}) {
        return {id, ...updateUser} ;
    }

    @Delete(':id')
    remove(@Param('id') id : string) {
        return {id};
    }
}
