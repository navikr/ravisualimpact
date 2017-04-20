import {Component, Directive} from '@angular/core';
import {RAAgentModule} from '../share/common.module';
import {INodeSchema} from '../share/node-shema';
@Component({
    moduleId:module.id,
    selector:'agent-comp',
    templateUrl:'./agent.component.html',
})
export class AgentComponent{
    /**
     *
     */
    nodeValue:string="";
    nodeMap:any={};
    nodeMapsDict:Array<string>;
    
    w:any;
    raNodeObj:RAAgentModule;
    constructor() {
       this.w=window;
    }
 
    createNodeMap():void{
        this.raNodeObj=new RAAgentModule(this.nodeValue);
        this.nodeMap=this.raNodeObj.createMap();
        this.nodeMapsDict=this.keys();
        //this.draw(nodeMap);
    }
    keys() : Array<string> {
    return Object.keys(this.nodeMap);
  }
    draw(nodeMap:{}):void {
  // Create the data table.
  let data = new this.w.google.visualization.DataTable();
  for(var key in nodeMap){
    console.log(key);
  }
 data.addColumn('string', 'Node');  
     data.addColumn('string', 'Parent'); 
      let i=1,j=1; 
     data.addRows([[String(i),'']]);
     for(var key in nodeMap){
         let index=String(i);
        data.addRows([  
      [nodeMap[key].nodeHost,String(index)]]);  
      j++;
     }
     
     var chart = new this.w.google.visualization.OrgChart(document.getElementById('chart_div'));  
     chart.draw(data);  
}
}