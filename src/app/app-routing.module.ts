import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AgentComponent} from '../agent/agent.component';
const routes:Routes=[
{path:'',pathMatch:'full',redirectTo:'home'},
{path:'home', component:HomeComponent},
{path:'agent',component:AgentComponent},
{path:'**',pathMatch:'full',component:HomeComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}

export const routableComponents=[
    HomeComponent,
    AgentComponent
];