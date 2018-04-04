import {RouterModule, Routes} from '@angular/router'
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home/home.component';

import { SkillsComponent } from './skills/skills.component';

import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
const rou:Routes=[
    {
        path: '', redirectTo: '/home', pathMatch:'full'
    },
    { path:'home',
      component:HomeComponent
    },
    {
        path:'aboutme',
        component:AboutmeComponent
    },
    {
        path:'experience',
        component:ExperienceComponent
    },
    {
        path:'skills',
        component:SkillsComponent
    
    },
    {
        path:'contact',
        component:ContactComponent
    }
]
export const example:ModuleWithProviders=RouterModule.forRoot(rou);