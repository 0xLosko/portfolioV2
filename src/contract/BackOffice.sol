// SPDX-License-Identifier: MIT
// Creator: Losko
 
pragma solidity ^0.8.7;

import "./Owner.sol";

contract BackOffice is Owner {

    uint8 id;

    struct project {
        string name;
        string date;
        uint8 duration;
        bool group;
        string resp;
        string techno;
        string descr;
        string[] imgUrl;
    }

    string[] allProjects;

    mapping (uint8 => project) Projects;

    function addProject(string memory _name, string memory _date, uint8 _duration, bool _group, string memory _resp, string memory _techno, string memory _descr, string[] memory _imgUrl) external isOwner {
        Projects[id] = project(_name, _date, _duration, _group, _resp, _techno, _descr, _imgUrl);
        id++;
    }

    function removeProject(uint8 _id) external isOwner {
        delete Projects[_id];
        for(uint8 i = _id; i <= id; i++){
            Projects[i] = Projects[i + 1];
        }
    }

    function modifyProject(uint8 _id, string memory _name, string memory _date, uint8 _duration, bool _group, string memory _resp, string memory _techno, string memory _descr, string[] memory _imgUrl) external isOwner {
        Projects[_id] = project(_name, _date, _duration, _group, _resp, _techno, _descr, _imgUrl);
        id++;
    }
    function viewProject(uint8 _id) external view returns (project memory) {
        return Projects[_id];
    }

    function viewAllProjects() external view returns (project[] memory){
      project[]    memory projectR = new project[](id);
      for (uint i = 0; i < id; i++) {
          project storage aproject = Projects[uint8(i)];
          projectR[i] = aproject;
      }
      return projectR;
  }

}