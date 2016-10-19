# ServiceFabricDemo
Sample code to use Azure Service Fabric. Constant work in progress

This example uses the Azure Service fabric to deploy one ASP.Net Code project (which is basically just a pure html file with a javascript)
and a color api that provides a static color to the javascript in the website. 

The idea is to use this to clarify how updating the service fabric can be done while clients are connected

## AB Testing
Further down the line, this project will be connected to a VSTS account that will trigger builds based on commits here. 
The plan is to show how A/B testing can be achieved by rolling out the newest features to a different cluster, and then have
a "cluster-aware" webApi that is either on teh A / Fast-ring cluster or the B / All ring.  
