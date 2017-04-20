import {NgModule} from '@angular/core';
import {INodeSchema} from './node-shema';

@NgModule({
})
export class RAAgentModule{
    nodeLis: string;
    constructor(message: string) {
        this.nodeLis = message;
    }
    createMap():{} {
        let nodeArray: any[];
        let nodeMap: { [id: string]: INodeSchema } = {};
        //nodeMap["node1"] = { nodeVersion: "5.5.2", nodeHost: "localhost", nodeIP: '127.0.0.1' };
        nodeArray = this.nodeLis.split('NodeInfo');
        nodeArray.forEach(function (item) {
            if (item.indexOf('nodeId') != -1 && item.length>1) {
               
                var tempstr=item.substr(item.indexOf('{')+1,item.indexOf('}')-1);
                 console.log("temmpstr: ",tempstr);
                var node = tempstr.split(',');
                console.log("Node: ",node)
                nodeMap[node[0].split('=')[1]] = { nodeHost: node[1].split('=')[1], nodeVersion: node[node.length-1].split('=')[1] };
            }
            
        });
        for (var key in nodeMap) {
            console.log(key, nodeMap[key]);
        }
        return nodeMap;
        
    }

}
