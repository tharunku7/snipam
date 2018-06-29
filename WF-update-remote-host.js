// try to update the remote workstation

// submit to script
var ecc = new GlideRecord("ecc_queue");  
ecc.initialize();  
ecc.agent = "mid.server.MIDSERVER1";  
ecc.topic = "Command";        
ecc.name = "powershell c:\\scripts\\update-IP-remote-host.ps1 -IPAddress " + workflow.scratchpad.freeIP + " -Remhost " + current.variables.workstation_name;
ecc.queue = "output";  
ecc.state = "ready"; 

workflow.scratchpad.ecc_sysid = ecc.insert(); 