pragma solidity ^0.8.7;

contract backOffice {

    uint8 public id;
    address owner;


    struct project {
        string date;
        uint8 duration;
        bool group;
        string resp;
        string techno;
        string descr;
    }

    string[] allProjects;

    mapping (uint8 => project) Projects;

    constructor() {
        owner = msg.sender;
    }

    function addProject(string memory _date, uint8 _duration, bool _group, string memory _resp, string memory _techno, string memory _descr) public {
        require(msg.sender == owner, "Not the owner");
        Projects[id] = project(_date, _duration, _group, _resp, _techno, _descr);
        id++;
    }

    function viewProject(uint8 _id) public view returns (project memory){
        return Projects[_id];
    }

    function viewAllProjects() public view returns (project[] memory){
      project[]    memory projectR = new project[](id);
      for (uint i = 0; i < id; i++) {
          project storage aproject = Projects[uint8(i)];
          projectR[i] = aproject;
      }
      return projectR;
  }

}